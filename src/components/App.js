import React from 'react'

import SettingsBar from './SettingsBar'
import Grid from './Grid'
import { Alg, CellType, CellStyles, VizState, AlertTypes, Adjacent } from '../constvar'
import { sleep, applyStyle } from '../extfunctions'

export const WIDTH = 45
export const HEIGHT = 35
const CELLSIZE = 20

class App extends React.Component {

    constructor() {
        super()

        // Make grid
        this.grid = []
        this.start = { x: null, y: null }
        this.end = { x: null, y: null } 
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
        let rows = Math.floor((window.innerHeight*0.8) / CELLSIZE)
        let cols = Math.floor((window.innerWidth*0.8) / CELLSIZE)
        console.log(rows, cols)
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
        if (start.x === null) {
            this.setState({activeAlert: AlertTypes.NOSTART})
            return
        } else if (end.x === null) {
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

        if (itemType ===  CellType.START) { 
            if (this.start.x !== null && this.start.y !== null) {
                replaceCell(this.start)
            }
            this.start = {x: x, y: y}
        } else if (itemType ===  CellType.END) { 
            if (this.end.x !== null && this.end.y !== null) {
                replaceCell(this.end)
            }
            this.end = {x: x, y: y}
        } else if (itemType ===  CellType.NONE || itemType === CellType.WALL) { 
            if (this.end.x === x && this.end.y === y ) {
                replaceCell(this.end)
                this.end = {x: null, y: null}
            }
            if (this.start.x === x && this.start.y === y ) {
                replaceCell(this.start)
                this.start = {x: null, y: null}
            }
        }

        this.grid[y][x].type = itemType
        applyStyle(CellStyles[itemType], this.grid[y][x].ref)
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
            if (currentCell.type !== CellType.START) { // Mark current as visited 
                currentCell.type = CellType.VISITED 
                applyStyle(CellStyles[CellType.VISITED], currentCell.ref, (ref) => {
                    sleep(400).then(() => {
                        ref.current.style.transform = 'scale(1.0)'
                    })
                })
            }

            if (alg === Alg.ASTAR ) {
                queue.sort(comparator)
            }
            if (this.state.visualizationState === VizState.RUNNING) {
                await sleep(Math.abs(this.state.visualizationSpeed-110))
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
                    if (c.x === this.start.x && c.y === this.start.y) 
                        c.type = CellType.START
                    else if (c.x === this.end.x && c.y === this.end.y) 
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
            this.grid[this.start.y][this.start.x].ref.current.textContent = '‎'  
            this.grid[this.end.y][this.end.x].ref.current.textContent = '‎'  
            this.start = {x: null, y: null }
            this.end = {x: null, y: null }
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
                <SettingsBar
                    changeSelectedAlgorithm={this.changeAlgorithm}
                    changeSelectedItem={this.changeItem}
                    onClick={this.onRunButtonClick}
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
