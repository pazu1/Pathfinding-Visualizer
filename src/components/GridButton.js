import React from 'react';

class GridButton extends React.Component {
    render() {
        const wall = {
            background: '#000',
            color: '#FFF'

        }

        return(
            <button 
                type='button' 
                className='gridButton'
                style={this.props.cell.wall ? wall : null}
                onMouseDown = {() => {
                        this.props.clickFunction(this.props.x, this.props.y)
                }}
                onMouseOver = {() => {
                    if (this.props.drawing) 
                        this.props.clickFunction(this.props.x, this.props.y)
                }}
            >
                {this.props.cell.wall ? 'w' :'‎' }
            </button> // Empty character
        )
    }
}

export default GridButton
