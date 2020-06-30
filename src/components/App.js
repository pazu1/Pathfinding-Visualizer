import React from 'react'

import SettingsBar from './SettingsBar'
import Grid from './Grid'

export const Alg = {
    ASTAR: 1,
    DIJKSTRA: 2,
    BFS: 3,
    DFS: 4
}

export const CellType = {
    NONE: 0,
    WALL: 1,
    START: 2,
    END: 3,
    VISITED: 4,
    ROUTE: 5
}

const Adjacent = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
]

export const VizState = {
    INACTIVE: 0,
    RUNNING: 1,
    FINISHED: 2
}

export const AlertTypes = {
    NOSTART: 'Please add a start node.',
    NOEND: 'Please add an end node.',
    NOROUTE: 'Route was not found'
}


export const WIDTH = 45
export const HEIGHT = 35

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
                    startPoint: false,
                    endPoint: false,
                    x: x,
                    y: y
                })
            }
        }

        // These variables are updated to state when Run-button is clicked
        this.drawnGrid = newGrid 
        this.drawnStart = { x: null, y: null }
        this.drawnEnd = { x: null, y: null }
                                 

        this.route = []

        this.state = {
            algorithm: Alg.ASTAR,
            item: CellType.WALL,
            grid: newGrid,
            activeAlert: null,
            visualizationState: VizState.INACTIVE,
            start: { x: null, y: null },
            end: { x: null, y: null }
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
        let start = this.drawnStart
        let end = this.drawnEnd
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
                grid: this.drawnGrid, // why is this line not needed???
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
            if (this.drawnStart.x !== null && this.drawnStart.y !== null) {
                console.log('Prev start')
                let prevX = this.drawnStart.x
                let prevY = this.drawnStart.y
                this.drawnGrid[prevY][prevX].type = CellType.NONE
            }
            this.drawnStart = {x: x, y: y}
        } else if (this.state.item ===  CellType.END) { 
            if (this.drawnEnd.x !== null && this.drawnEnd.y !== null) {
                let prevX = this.drawnEnd.x
                let prevY = this.drawnEnd.y
                this.drawnGrid[prevY][prevX].type = CellType.NONE
            }
            this.drawnEnd = {x: x, y: y}
        } 

        this.drawnGrid[y][x].type = this.state.item
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
        let prevGrid = this.state.grid

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
                if (!prevGrid[y]) return
                if (!prevGrid[y][x]) return
                let next = prevGrid[y][x]
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
            prevGrid[current.y][current.x].type = CellType.VISITED // Mark current as visited
            if (alg === Alg.ASTAR ) {
                queue.sort(comparator)
            }
            if (this.state.visualizationState === VizState.RUNNING) {
                await sleep(10)
                this.setState({grid: prevGrid})
            }
        }

        // draw results
        if (foundRoute) {
            this.setRoute(adjacencyListD,end) 
        }
        if (this.state.visualizationState === VizState.RUNNING) {
            await sleep(200)
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
                    if (resetAll ||
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
            if (resetAll) {
                returnVal.start = {x: null, y: null}
                returnVal.end = {x: null, y: null}
            }
            return returnVal
        })
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
                    grid={this.state.grid}
                    drawnGrid={this.drawnGrid}
                    disableDrawing={this.state.visualizationState !== VizState.INACTIVE}
                />
            </div>
        )
    }
}

export default App
