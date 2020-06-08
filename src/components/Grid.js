import React from 'react';

import GridButton from './gridButton'

class Grid extends React.Component {
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
            grid: newGrid
        }
    }

    componentDidMount() {
        // Check size and decrease x and y or smth
    }

    render() {

        const wall = {
            background: '#000'
        }

        let y = -1
        let tableContent = this.state.grid.map(row => { 
            let x = -1
            y++
            let rowContent = row.map(cell => {
                x++
                return(
                    <td key={x}>
                        <GridButton 
                            style={this.state.grid[y][x].wall ? wall : null}
                            x={x}
                            y={y}
                        />
                    </td>
                )
            })
            return (
                <tr key={y}>
                    {rowContent}
                </tr>
            )
        })

        return (
            <table className='gridBase'>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }
}

export default Grid
