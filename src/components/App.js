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
    VISITED: 4
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

        this.BFS = this.BFS.bind(this)
    }

    changeItem(event) {
        this.setState({item: parseInt(event.target.value)})
    }

    changeAlgorithm(event) {
        this.setState({algorithm: event.target.value})
    }

    runAlgorithm() {
        this.BFS(this.state.grid[1][11],this.state.grid[34][79])
    }

    updateStateGrid() {
        this.setState({grid: this.drawnGrid})
    }

    updateDrawnCell(x, y) {
        this.drawnGrid[y][x].type = this.state.item
    }

    async BFS(start, end) {

        let queue = [] 
        let current = start
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
                    queue.push(next)
                }
            })
            current.type = CellType.VISITED
            await sleep(1);
                this.setState({grid: prevGrid})
        }
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
                    grid={this.state.grid}
                />
            </div>
        )
    }
}

export default App
