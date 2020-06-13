import React from 'react';

import SettingsBar from './SettingsBar'
import Grid from './Grid'

const Alg = {
    ASTAR: 1,
    DIJKSTRA: 2,
    BFS: 3
}

const CellType = {
    NONE: 0,
    WALL: 1,
    START: 2,
    END: 3,
    VISITED: 4,
    ROUTE: 5
}

const WIDTH = 80
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
        this.runAlgorithm = this.runAlgorithm.bind(this)
        this.updateStateGrid = this.updateStateGrid.bind(this)
        this.updateStart = this.updateStart.bind(this)
        this.updateEnd = this.updateEnd.bind(this)
        this.updateRoute = this.updateRoute.bind(this)

        this.BFS = this.BFS.bind(this)
    }

    changeItem(event) {
        this.setState({item: parseInt(event.target.value)})
    }

    changeAlgorithm(event) {
        this.setState({algorithm: event.target.value})
    }

    runAlgorithm() {
        this.BFS(this.state.grid[this.state.start.y][this.state.start.x],
            this.state.grid[this.state.end.y][this.state.end.x])
    }

    updateStateGrid() {
        this.setState({grid: this.drawnGrid})
    }

    updateRoute() {
        this.setState((prevState) => {
            let copyGrid = prevState.grid
            console.log(copyGrid)
            this.route.map( coord => {
                copyGrid[coord.y][coord.x].type = CellType.ROUTE
            })
            return {grid: copyGrid}
        })
    }

    updateDrawnCell(x, y){
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
        
    async BFS(start, end) {
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
            adjacent.forEach((direction, index) => {
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
                    queue.push(next)
                }
            })
            current.type = CellType.VISITED
            await sleep(60);
            this.setState({grid: prevGrid})
        }
        this.setRoute(adjacencyList,end) 
        this.updateRoute()
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
            
        console.log(this.route)
        console.log(adjacencyList[index])
    }

    render() {
        return (
            <div>
                <SettingsBar
                    changeSelectedAlgorithm={this.changeAlgorithm}
                    changeSelectedItem={this.changeItem}
                    onClick={this.runAlgorithm}
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
