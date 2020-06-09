import React from 'react';

import SettingsBar from './SettingsBar'
import Grid from './Grid'

const Alg = {
    ASTAR: 1,
    DIJKSTRA: 2,
    BFS: 3
}

class App extends React.Component {
    constructor() {
        super()

        // Make grid
        let newGrid = []
        for (let y=0;y<25;y++) {
            newGrid.push([])
            for (let x=0;x<40;x++) {
                newGrid[y].push({
                    wall: false,
                    startPoint: false,
                    endPoint: false,
                    x: x,
                    y: y
                })
            }
        }

        this.state = {
            algorithm: Alg.ASTAR,
            grid: newGrid
        }

        this.updateCell = this.updateCell.bind(this)
        this.changeAlgorithm = this.changeAlgorithm.bind(this)
    }

    changeAlgorithm(event) {
        this.setState({algorithm: event.target.value})
    }

    updateCell(x, y) {
        this.setState(prevState => {
            let copyGrid  =prevState.grid
            copyGrid[y][x].wall = true

            return {
                grid: copyGrid
            }
        })
    }

    render() {
        return (
            <div>
                <SettingsBar
                    changeSelectedAlgorithm={this.changeAlgorithm}
                />
                <Grid
                    updateCell={this.updateCell}
                    grid={this.state.grid}
                />
            </div>
        )
    }
}

export default App
