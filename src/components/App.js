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
                    visited: false,
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
            visualizationRunning: false,
            visualizationDone: false,
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
        if (this.state.visualizationRunning) {
            this.setState({
                visualizationRunning: false, 
                visualizationDone: true
            })
        } else if (this.state.visualizationDone) {
            this.clearVisualization()
        } else {
            this.setState({visualizationRunning: true},
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
                visualizationRunning: false
            }
        }, () => {this.setState({visualizationDone: true})})
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
        class Node {
          constructor(x, y, dist, gScore) {
            this.x = x
            this.y = y
            this.distance = dist
            this.gScore = gScore
          }
        }
        
        let pq = [] // Sort this with sort and custom comparator
        const comparator = (a,b) => {
            return a.gScore > b.gScore ? 1 : -1
        }
        pq.push(new Node(start.x,start.y,0,0))

        let adjacencyList = { 
            [start.x+':'+start.y]: null
        }

        let prevGrid = this.state.grid

        const adjacent = [
            [-1,0],
            [1,0],
            [0,1],
            [0,-1]
        ]
        console.log(pq)
        
        let current = pq.shift()
        while (!(current.x === end.x && current.y === end.y)) {
            adjacent.forEach((direction) => {
                let x = current.x+direction[0]
                let y = current.y+direction[1]
                let nextY = prevGrid[y]
                let next = null
                if (nextY !== undefined)
                    next = nextY[x] 
                if (next && !next.visited && next.type !== CellType.WALL) {
                    adjacencyList[next.x+':'+next.y] = {
                        x: current.x, 
                        y: current.y
                    }
                    let distance = current.distance+1 
                    let a = end.x - x
                    let b = end.y - y
                    let gScore = distance + Math.sqrt(a*a + b*b)
                    pq.push(new Node(x, y, distance,gScore))
                    next.visited = true
                }
            })
            prevGrid[current.y][current.x].type = CellType.VISITED // Mark current as visited
            pq.sort(comparator)
            console.log(pq)
            current = pq.shift()
            if (this.state.visualizationRunning) {
                await sleep(60)
                this.setState({grid: prevGrid})
            }
        }

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
        start.visited = true
        let prevGrid = this.state.grid
        queue.push(current)
        const adjacent = [
            [-1,0],
            [1,0],
            [0,1],
            [0,-1]
        ]

        while (queue.length && current !== end) {
            current = queue.shift()
            adjacent.forEach((direction) => {
                let x = current.x+direction[0]
                let y = current.y+direction[1]
                let nextY = prevGrid[y]
                let next = null
                if (nextY !== undefined)
                    next = nextY[x] 
                if (next && !next.visited && next.type !== CellType.WALL) {
                    next.visited = true    
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
            if (this.state.visualizationRunning) {
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
                    c.visited = false
                    c.end = false
                    c.start = false
                    return c
                })
                return row
            })

            return {
                grid: clearedGrid,
                start: {
                    x: null,
                    y: null
                },
                end: {
                    x: null,
                    y: null
                },
                visualizationDone: false,
                visualizationRunning: false
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
            
    }

    render() {
        return (
            <div>
                <SettingsBar
                    changeSelectedAlgorithm={this.changeAlgorithm}
                    changeSelectedItem={this.changeItem}
                    onClick={this.onRunButtonClick}
                    visualizationRunning={this.state.visualizationRunning}
                    visualizationDone={this.state.visualizationDone}
                    settingsDisabled={this.state.visualizationRunning || this.state.visualizationDone}
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
