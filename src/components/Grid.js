import React from 'react';

import GridButton from './GridButton'

class Grid extends React.Component {

    constructor() {
        super()

        this.state = {
            drawing: false,
            runningAlgorithm: false
        }
    }

    handleMouse(event, pressed) {
        this.setState({ drawing: pressed })
    }

    render() {

        let y = -1
        let tableContent = this.props.drawnGrid.map(row => { 
            let x = -1
            y++
            let rowContent = row.map(cell => {
                x++
                return(
                    <td key={x}>
                        <GridButton 
                            cell={this.props.drawnGrid[y][x]}
                            x={x}
                            y={y}
                            clickFunction={this.props.updateCell}
                            selectedItem={this.props.selectedItem}
                            drawing={this.state.drawing}
                            disableDrawing={this.props.disableDrawing}
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
            <table 
                className='gridBase' 
                onMouseDown={(e) => {this.handleMouse(e, true)}}
                onMouseLeave={(e) => this.handleMouse(e, false)}
                onMouseUp={(e) => this.handleMouse(e, false)}
            >
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }
}

export default Grid
