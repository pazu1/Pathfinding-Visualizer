import React from 'react'

import SettingsBar from './SettingsBar'
import Grid from './Grid'
import { Alg, CellType, CellStyles, VizState, AlertTypes, Adjacent } from '../constvar'
import { sleep, applyStyle } from '../extfunctions'

export const WIDTH = 45
export const HEIGHT = 35

class App extends React.Component {

    constructor() {
        super()

        // Make grid
        let newGrid = []
        for (let y=0;y<HEIGHT;y++) {
            newGrid.push([])
            for (let x=0;x<WIDTH;x++) {
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
        this.start = { x: null, y: null }
        this.end = { x: null, y: null } 
        this.route = []

        this.state = {
            algorithm: Alg.ASTAR,
            item: CellType.WALL,
            activeAlert: null,
            visualizationState: VizState.INACTIVE,
        }

        this.updateDrawnCell = this.updateDrawnCell.bind(this)
        this.changeAlgorithm = this.changeAlgorithm.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onRunButtonClick = this.onRunButtonClick.bind(this)
        this.updateRoute = this.updateRoute.bind(this)
        this.clearVisualization = this.clearVisualization.bind(this)
        this.removeAlert = this.removeAlert.bind(this)

        this.algFunctions = {
            1: this.aStarPlus.bind(this),
            2: this.BFS.bind(this),
            3: this.BFS.bind(this),
            4: this.DFS.bind(this)
        }
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
                grid: this.grid, // why is this line not needed???
                start: start,
                end: end,
                visualizationState: VizState.RUNNING},
                () => this.algFunctions[this.state.algorithm](this.state.grid[start.y][start.x],
                    this.state.grid[end.y][end.x])
            )
        }
    }

    updateRoute(foundRoute) {
        this.setState((prevState) => {
            if (foundRoute) {
                let copyGrid = prevState.grid
                this.route.map( coord => {
                    return copyGrid[coord.y][coord.x].type = CellType.ROUTE
                })
                return {
                    grid: copyGrid,
                    visualizationState: VizState.RUNNING
                }
            }
            return {}
        }, () => {this.setState({visualizationState: VizState.FINISHED})})
    }

    updateDrawnCell(x, y) {
        if (this.state.item ===  CellType.START) { 
            if (this.start.x !== null && this.start.y !== null) {
                let prevX = this.start.x
                let prevY = this.start.y
                this.grid[prevY][prevX].type = CellType.NONE
            }
            this.start = {x: x, y: y}
        } else if (this.state.item ===  CellType.END) { 
            if (this.end.x !== null && this.end.y !== null) {
                let prevX = this.end.x
                let prevY = this.end.y
                this.grid[prevY][prevX].type = CellType.NONE
            }
            this.end = {x: x, y: y}
        } 

        this.grid[y][x].type = this.state.item
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
            return a.gScore >= b.gScore ? 1 : -1
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
                const multiplier = 1
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
                applyStyle(CellStyles[CellType.VISITED], currentCell.ref)
            }

            if (alg === Alg.ASTAR ) {
                queue.sort(comparator)
            }
            if (this.state.visualizationState === VizState.RUNNING) {
                await sleep(20)
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

        this.setState((prevState) => {
            let clearedGrid = prevState.grid.map((row) => {
                row = row.map((c) => {
                    if (c.x === this.start.x && c.y === this.start.y) 
                        c.type = CellType.START
                    else if (c.x === this.end.x && c.y === this.end.y) 
                        c.type = CellType.END
                    else if (resetAll ||
                    c.type !== CellType.WALL || 
                    c.type === CellType.VISITED ||
                    c.type === CellType.ROUTE) {
                        c.type = CellType.NONE
                    }
                    return c
                })
                return row
            })
            let returnVal = {
                grid: clearedGrid,
                visualizationState: VizState.INACTIVE
            }
            return returnVal
        })
        if (resetAll) {
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
                    activeAlert={this.state.activeAlert}
                    removeAlert={this.removeAlert}
                />
                <Grid
                    updateCell={this.updateDrawnCell}
                    selectedItem={this.state.item}
                    grid={this.grid}
                    disableDrawing={this.state.visualizationState !== VizState.INACTIVE}
                />
            </div>
        )
    }
}

export default App
