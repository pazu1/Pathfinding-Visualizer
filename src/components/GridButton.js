import React from 'react';

const styles = [
    { // none
        background: '#FFF',
        color: '#FFF'
    },
    { // wall
        background: '#000',
        color: '#FFF'
    }, 
    { // start
        background: '#000',
        color: '#FFF'
    },
    { // end
        background: '#000',
        color: '#FFF'
    },
    { // visited
        background: '#38ffc7',
        color: '#FFF'
    }
]

class GridButton extends React.Component {

    constructor() {
        super()

        this.state = {
            isWall: false
        }
        this.toggleWall = this.toggleWall.bind(this)
    }

    toggleWall(enable) {
        this.setState({isWall: enable})
    }

    render() {
        
        let style = !this.state.isWall ? styles[this.props.cell.type] : styles[1]

        return(
            <button 
                type='button' 
                className='gridButton'
                style={style
                }

                onMouseDown = {() => {
                    this.props.clickFunction(this.props.x, this.props.y)
                    this.toggleWall(true)
                }}
                onMouseOver = {() => {
                    if (this.props.drawing) {
                        this.props.clickFunction(this.props.x, this.props.y)
                        this.toggleWall(true)
                    }
                }}
            >
                {this.props.cell.type === 4 ? 'v' :'‎' }
            </button>
        )
    }
}

export default GridButton
