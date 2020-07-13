import React from 'react'

import Settings from './Settings'
import Grid from './Grid'
import { Alg, CellType, CellStyles, VizState, AlertTypes, Adjacent } from '../constvar'
import { sleep, applyStyle } from '../extfunctions'

const CELLSIZE = 20

class App extends React.Component {

    constructor() {
        super()

        this.grid = []
        this.start = null
        this.end = null
        this.route = []

        this.state = {
            algorithm: Alg.ASTAR,
            item: CellType.WALL,
            activeAlert: null,
            visualizationState: VizState.INACTIVE,
            visualizationSpeed: 90
        }

        this.drawOnGrid = this.drawOnGrid.bind(this)
        this.changeAlgorithm = this.changeAlgorithm.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onRunButtonClick = this.onRunButtonClick.bind(this)
        this.updateRoute = this.updateRoute.bind(this)
        this.clearVisualization = this.clearVisualization.bind(this)
        this.removeAlert = this.removeAlert.bind(this)
        this.changeVisSpeed = this.changeVisSpeed.bind(this)
        this.createGrid = this.createGrid.bind(this)
        this.generateMaze = this.generateMaze.bind(this)

        this.algFunctions = {
            1: this.aStarPlus.bind(this),
            2: this.BFS.bind(this),
            3: this.BFS.bind(this),
            4: this.DFS.bind(this)
        }
    }

    componentDidMount() {
        this.createGrid()
    }

    createGrid() {
        let rows = Math.floor((window.innerHeight*0.7) / CELLSIZE)
        let cols = Math.floor((window.innerWidth*0.8) / CELLSIZE)
        let newGrid = []
        for (let y=0;y<rows;y++) {
            newGrid.push([])
            for (let x=0;x<cols;x++) {
                newGrid[y].push({
                    type: CellType.NONE,
                    weight: 0, // TODO
                    x: x,
                    y: y,
                    ref: null
                })
            }
        }
        this.grid = newGrid
        this.setState({})
    }

    changeItem(event) {
        this.setState({item: parseInt(event.target.value)})
    }

    changeAlgorithm(event) {
        this.setState({algorithm: parseInt(event.target.value)})
    }

    removeAlert() {
        this.setState({activeAlert: null})
    }

    changeVisSpeed(value) {
        this.setState({ visualizationSpeed: value })
    }

    onRunButtonClick() { // Or skip animation if clicked and was already running
        let start = this.start
        let end = this.end
        if (start === null) {
            this.setState({activeAlert: AlertTypes.NOSTART})
            return
        } else if (end === null) {
            this.setState({activeAlert: AlertTypes.NOEND})
            return
        }

        if (this.state.visualizationState === VizState.RUNNING) {
            this.setState({
                visualizationState: VizState.FINISHED
            })
        } else if (this.state.visualizationState === VizState.FINISHED) {
            this.clearVisualization()
        } else {
            this.setState({
                start: start,
                end: end,
                visualizationState: VizState.RUNNING},
                () => this.algFunctions[this.state.algorithm](this.grid[start.y][start.x],
                    this.grid[end.y][end.x])
            )
        }
    }

    updateRoute(foundRoute) {
        this.setState(() => {
            if (foundRoute) {
                this.route.map( coord => {
                    applyStyle(CellStyles[CellType.ROUTE], this.grid[coord.y][coord.x].ref)
                    return this.grid[coord.y][coord.x].type = CellType.ROUTE
                })
                return {
                    visualizationState: VizState.RUNNING
                }
            }
            return {}
        }, () => {this.setState({visualizationState: VizState.FINISHED})})
    }

    drawOnGrid(x, y, itemType = this.state.item) { 

        const replaceCell = (startOrEnd) => {
                let prevX = startOrEnd.x
                let prevY = startOrEnd.y
                this.grid[prevY][prevX].type = CellType.NONE
                applyStyle(CellStyles[CellType.NONE], this.grid[prevY][prevX].ref)
                this.grid[prevY][prevX].ref.current.textContent = '‎'  
        }

        // Delete end / start nodes if they were drawn on
        if (this.end && this.end.x === x && this.end.y === y ) {
            replaceCell(this.end)
            this.end = null 
        } else if (this.start && this.start.x === x && this.start.y === y ) {
            replaceCell(this.start)
            this.start = null
        }
        
        // Special case: drawing end or start nodes
        if (itemType ===  CellType.START) { 
            if (this.start) {
                replaceCell(this.start)
            }
            this.start = {x: x, y: y}
        } else if (itemType ===  CellType.END) { 
            if (this.end) {
                replaceCell(this.end)
            }
            this.end = {x: x, y: y}
        } 

        this.grid[y][x].type = itemType
        applyStyle(CellStyles[itemType], this.grid[y][x].ref)
    }

    generateMaze() { // Prim's Algorithm
        this.grid.forEach(row => {
            row.forEach(cell => {
                cell.type = CellType.WALL
            })
        })

        let wallList = [this.grid[1][1]]

        const canBeOpened = (cell) => {
            let psgCount = 0
            if (!cell) return false
            Adjacent.forEach(direction => {
                let x = cell.x+direction[0]
                let y = cell.y+direction[1]
                if (!this.grid[y] || !this.grid[y][x]) return
                if (this.grid[y][x].type === CellType.NONE) psgCount += 1
            })
            return ( psgCount <= 1 )
        }

        while (wallList.length) {
            let index = Math.floor(Math.random() * wallList.length)
            let wall =  wallList[index]
            if (canBeOpened(wall)) {
                wall.type = CellType.NONE
                Adjacent.forEach((direction) => {
                    let x = wall.x+direction[0]
                    let y = wall.y+direction[1]
                    if (!this.grid[y] || !this.grid[y][x]) return
                    wallList.push(this.grid[y][x])
                })
            }
            wallList.splice(index,1)
        }
        
        // draw results
        this.grid.forEach(row => {
            row.forEach(cell => {
                this.drawOnGrid(cell.x, cell.y, cell.type)
            })
        })

    }

    async aStarPlus(start, end, alg = Alg.ASTAR) { 

        // initialize
        let foundRoute = false
        class Node {
          constructor(x, y, dist, gScore) {
            this.x = x
            this.y = y
            this.distance = dist
            this.gScore = gScore
          }
        }
        const comparator = (a,b) => { 
            return a.gScore > b.gScore ? 1 : -1
        }

        let queue = [] 
        queue.push(new Node(start.x,start.y,0,0))
        let adjacencyListD = { 
            [start.x+':'+start.y]: null
        }
        let algGrid = this.grid

        // perform search
        while (queue.length) {
            let current = queue.shift()

            if (current.x === end.x && current.y === end.y) { // found
                foundRoute = true
                break
            }

            Adjacent.forEach((direction) => {
                let x = current.x+direction[0]
                let y = current.y+direction[1]
                if (!algGrid[y]) return
                if (!algGrid[y][x]) return
                let next = algGrid[y][x]
                if (next.type === CellType.WALL ||
                   (next.x === start.x && next.y === start.y)) return

                if (!adjacencyListD[x+':'+y]) { // Not yet discovered
                    adjacencyListD[x+':'+y] = {
                        x: current.x, 
                        y: current.y,
                        d: 9999
                    }
                }

                let distance = current.distance+1  
                const multiplier = 1.0
                let gScore = distance + multiplier*(Math.abs(end.x - x) + Math.abs(end.y - y))

                if (distance < adjacencyListD[x+':'+y].d) { // Found a shorter path
                    adjacencyListD[x+':'+y] = {
                        x: current.x, 
                        y: current.y,
                        d: distance
                    }
                    if (alg !== Alg.DFS) {
                        queue.push(new Node(x, y, distance,gScore))
                    }
                    else {
                        queue.unshift(new Node(x, y, distance,gScore))
                    }
                }
            })
            let currentCell = algGrid[current.y][current.x]

            if (currentCell.type !== CellType.START && currentCell.type !== CellType.VISITED) { // Mark current as visited
                currentCell.type = CellType.VISITED 
                if ( this.state.visualizationState === VizState.RUNNING ) { // Running -> run animation
                    await sleep(Math.abs(this.state.visualizationSpeed-110)) 
                    applyStyle(CellStyles[CellType.VISITED], currentCell.ref, (ref) => {
                        sleep(400).then(() => {
                            ref.current.style.transform = 'scale(1.0)'
                        })
                    })
                } else {
                    applyStyle(CellStyles[6], currentCell.ref) 
                }
            }

            if (alg === Alg.ASTAR ) {
                queue.sort(comparator)
            }
        }

        // draw results
        if (foundRoute) {
            this.setRoute(adjacencyListD,end) 
        }
        if (this.state.visualizationState === VizState.RUNNING) {
            await sleep(100)
        }
        this.updateRoute(foundRoute)
    }

    async DFS(start, end) {
        this.aStarPlus(start, end, Alg.DFS)
    }
        
    async BFS(start, end) {
        this.aStarPlus(start, end, Alg.BFS)
    }

    clearVisualization(resetAll = false) {
        this.route = []

        this.setState(() => {
            this.grid.map((row) => {
                row = row.map((c) => {
                    if (this.start && c.x === this.start.x && c.y === this.start.y) 
                        c.type = CellType.START
                    else if (this.end && c.x === this.end.x && c.y === this.end.y) 
                        c.type = CellType.END
                    else if (resetAll ||
                    c.type === CellType.VISITED ||
                    c.type === CellType.ROUTE) {
                        applyStyle(CellStyles[CellType.NONE], c.ref)
                        c.type = CellType.NONE
                    }
                    return c
                })
                return row
            })
            return { visualizationState: VizState.INACTIVE }
        })
        if (resetAll) {
            if (this.start) {
                this.grid[this.start.y][this.start.x].ref.current.textContent = '‎'  
            }
            if (this.end) {
                this.grid[this.end.y][this.end.x].ref.current.textContent = '‎'  
            }
            this.start = null
            this.end = null
        }
            
    }

    setRoute(adjacencyList, end) {
        this.route.push({
            x: end.x, 
            y: end.y
        })
        
        let index = end.x+':'+end.y
        while (adjacencyList[index] !== null) {
            this.route.push(adjacencyList[index])
            index = adjacencyList[index].x+':'+adjacencyList[index].y
        }
        console.log('Route length: '+this.route.length)
        this.route.shift() // remove start
        this.route.pop() // and end
    }

    render() {
        return (
            <div>
                <Settings
                    changeSelectedAlgorithm={this.changeAlgorithm}
                    changeSelectedItem={this.changeItem}
                    onClick={this.onRunButtonClick}
                    onMazeClick={this.generateMaze}
                    onResetClick={this.clearVisualization}
                    visualizationState={this.state.visualizationState}
                    changeVisSpeed={this.changeVisSpeed}
                    visualizationSpeed={this.state.visualizationSpeed}
                    activeAlert={this.state.activeAlert}
                    removeAlert={this.removeAlert}
                />
                <Grid
                    updateCell={this.drawOnGrid}
                    selectedItem={this.state.item}
                    grid={this.grid}
                    disableDrawing={this.state.visualizationState !== VizState.INACTIVE}
                />
            </div>
        )
    }
}

export default App
