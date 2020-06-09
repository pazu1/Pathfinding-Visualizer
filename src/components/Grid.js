import React from 'react';

import GridButton from './GridButton'

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
            grid: newGrid,
            drawing: false
        }

        this.updateCell = this.updateCell.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }

    updateCell(x, y) { // call this with GridButton onClicked
        //console.log('clicked at '+x+':'+y)
                
        this.setState(prevState => {
            let copyGrid  =prevState.grid
            copyGrid[y][x].wall = true

            return {
                grid: copyGrid
            }
        })

    }

    handleMouse(event, pressed) {
        this.setState({ drawing: pressed })
    }

    render() {

        let y = -1
        let tableContent = this.state.grid.map(row => { 
            let x = -1
            y++
            let rowContent = row.map(cell => {
                x++
                return(
                    <td key={x}>
                        <GridButton 
                            cell={this.state.grid[y][x]}
                            x={x}
                            y={y}
                            clickFunction = {this.updateCell}
                            drawing = {this.state.drawing}
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
            <table className='gridBase' 
                onMouseDown={(e) => this.handleMouse(e, true)}
                onMouseLeave={(e) => this.handleMouse(e, false)}
                onMouseUp={(e) => this.handleMouse(e, false)}>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }
}

export default Grid
