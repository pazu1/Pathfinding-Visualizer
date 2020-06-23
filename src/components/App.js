import React from 'react';

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

const WIDTH = 45
const HEIGHT = 35

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
                    inList: false,
                    x: x,
                    y: y
                })
            }
        }

        this.drawnGrid = newGrid // grid drawn by the user is stored here
                                 // and only copied to state when Run is clicked
        this.route = []

        this.state = {
            algorithm: Alg.ASTAR,
            item: CellType.WALL,
            grid: newGrid,
            visualizationState: VizState.INACTIVE,
            start: {
                x: null,
                y: null
            },
            end: {
                x: null,
                y: null
            }
        }

        this.updateDrawnCell = this.updateDrawnCell.bind(this)
        this.changeAlgorithm = this.changeAlgorithm.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onRunButtonClick = this.onRunButtonClick.bind(this)
        this.updateStateGrid = this.updateStateGrid.bind(this)
        this.updateStart = this.updateStart.bind(this)
        this.updateEnd = this.updateEnd.bind(this)
        this.updateRoute = this.updateRoute.bind(this)
        this.clearVisualization = this.clearVisualization.bind(this)

        this.algFunctions = {
            1: this.aStar.bind(this),
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

    onRunButtonClick() { // Or skip animation if clicked and was already running
        if (this.state.visualizationState === VizState.RUNNING) {
            this.setState({
                visualizationState: VizState.FINISHED
            })
        } else if (this.state.visualizationState === VizState.FINISHED) {
            this.clearVisualization()
        } else {
            this.setState({visualizationState: VizState.RUNNING},
                () => this.algFunctions[this.state.algorithm](this.state.grid[this.state.start.y][this.state.start.x],
                    this.state.grid[this.state.end.y][this.state.end.x])
            )
        }
    }

    updateStateGrid() {
        this.setState({grid: this.drawnGrid})
    }

    updateRoute() {
        this.setState((prevState) => {
            let copyGrid = prevState.grid
            this.route.map( coord => {
                return copyGrid[coord.y][coord.x].type = CellType.ROUTE
            })
            return {
                grid: copyGrid,
                visualizationState: VizState.RUNNING
            }
        }, () => {this.setState({visualizationState: VizState.FINISHED})})
    }

    updateDrawnCell(x, y) {
        if (this.state.item ===  CellType.START) { 
            if (this.state.start.x !== null && this.state.start.y !== null) {
                let prevX = this.state.start.x
                let prevY = this.state.start.y
                this.drawnGrid[prevY][prevX].type = CellType.None
            }
            this.updateStart(x,y)
        } else if (this.state.item ===  CellType.END) { 
            if (this.state.end.x !== null && this.state.end.y !== null) {
                let prevX = this.state.end.x
                let prevY = this.state.end.y
                this.drawnGrid[prevY][prevX].type = CellType.None
            }
            this.updateEnd(x,y)
        } 

        this.drawnGrid[y][x].type = this.state.item
    }

    updateEnd(x, y) {
        let newEnd = {
            x: x,
            y: y
        }
        this.setState({end: newEnd})
    }
        
    updateStart(x, y) {
        let newStart = {
            x: x,
            y: y
        }
        this.setState({start: newStart})
    }

    async aStar(start, end) { 

        // initialize
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

        let queue = [] // Sorted each iteration, works as priority queue
        queue.push(new Node(start.x,start.y,0,0))
        let adjacencyListD = { 
            [start.x+':'+start.y]: null
        }
        let prevGrid = this.state.grid
        start.inList = true

        // perform search
        while (queue.length) {
            let current = queue.shift()

            if (current.x === end.x && current.y === end.y) { // found
                break
            }

            Adjacent.forEach((direction) => {
                let x = current.x+direction[0]
                let y = current.y+direction[1]
                let nextY = prevGrid[y]
                if (nextY !== undefined) {
                    let next = nextY[x]
                    if (next) {
                        if (next.type === CellType.WALL ||
                           (next.x === start.x && next.y === start.y)) return
                    }
                    else return
                } else return

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
                    queue.push(new Node(x, y, distance,gScore))
                }
            })
            prevGrid[current.y][current.x].type = CellType.VISITED // Mark current as visited
            queue.sort(comparator)
            if (this.state.visualizationState === VizState.RUNNING) {
                await sleep(60)
                this.setState({grid: prevGrid})
            }
        }

        // draw results
        this.setState({grid: prevGrid})
        this.setRoute(adjacencyListD,end) 
        this.updateRoute()
    }

    async DFS(start, end) {
        this.BFS(start, end, true)
    }
        
    async BFS(start, end, depthFirst = false) {

        let adjacencyList = { 
            [start.x+':'+start.y]: null
        }
        let queue = [] 
        let current = start
        start.inList = true
        let prevGrid = this.state.grid
        queue.push(current)

        while (queue.length && current !== end) {
            Adjacent.forEach((direction) => {
                let x = current.x+direction[0]
                let y = current.y+direction[1]
                if (prevGrid[y] === undefined)
                    return
                let next = prevGrid[y][x]

                if (next && !adjacencyList.hasOwnProperty([x+':'+y]) && next.type !== CellType.WALL) {
                    next.inList = true    
                    adjacencyList[x+':'+y] = {
                        x: current.x, 
                        y: current.y
                    }
                    if (depthFirst) {
                        queue.unshift(next)
                    } else {
                    queue.push(next)
                    }
                }
            })
            current.type = CellType.VISITED
            current = queue.shift()
            if (this.state.visualizationState === VizState.RUNNING) {
                await sleep(60)
                this.setState({grid: prevGrid})
            }
        }
        this.setState({grid: prevGrid})
        this.setRoute(adjacencyList,end) 
        this.updateRoute()
    }

    clearVisualization() {
        this.route = []
        this.setState((prevState) => {
            let clearedGrid = prevState.grid.map((row) => {
                row = row.map((c) => {
                    if (c.type === CellType.ROUTE ||
                        c.type === CellType.VISITED ||
                        c.type === CellType.END ||
                        c.type === CellType.START) {
                    c.type = CellType.NONE
                    }
                    c.inList = false
                    c.end = false
                    c.start = false
                    return c
                })
                return row
            })

            return {
                grid: clearedGrid,
                visualizationState: VizState.INACTIVE
            }
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
                    visualizationState={this.state.visualizationState}
                />
                <Grid
                    updateCell={this.updateDrawnCell}
                    selectedItem={this.state.item}
                    grid={this.state.grid}
                    start={this.state.start}
                    end={this.state.end}
                />
            </div>
        )
    }
}

export default App
