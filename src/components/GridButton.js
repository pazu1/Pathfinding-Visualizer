import React from 'react';

import { CellType } from './App'

const defaultStyle = {
    background: '#FFF',
    color: '#000'
}
const wallStyle = {
    background: '#000',
    color: '#000'
}
const startNodeStyle = {
    background: '#d2ff4a'
}
const endNodeStyle = {
    background: '#fcba03'
}
const visitedNodeStyle = {
    background: '#38ffc7',
}
const routeNodeStyle = {
    background: '#ffb65c'
}

class GridButton extends React.Component {

    constructor() {
        super()

        this.state = {
            styleType: defaultStyle
        }
        this.toggleWall = this.toggleWall.bind(this)
    }

    toggleWall(type) { 
        this.setState({styleType: wallStyle})
    }

    render() {
        
        let style = defaultStyle 
        let isStart = this.props.start.x === this.props.x && this.props.start.y === this.props.y
        let isEnd = this.props.end.x === this.props.x && this.props.end.y === this.props.y
        let text ='‎'  

        if (this.props.cell.type === 4){
            style = visitedNodeStyle 
        }
        else if (this.props.cell.type === 5){
            style = routeNodeStyle
        }
        else if (this.props.cell.type === 1) {
            style = wallStyle
        }
        else if (isStart) {
            style = startNodeStyle
            text = 'S'
        } else if (isEnd) {
            style = endNodeStyle
            text = 'E'
        }

        return(
            <button 
                type='button' 
                className='gridButton'
                style={style}

                onMouseDown = {() => {
                    this.props.clickFunction(this.props.x, this.props.y)
                    this.toggleWall(this.props.selectedItem)
                }}
                onMouseOver = {() => {
                    if (this.props.drawing) {
                        this.props.clickFunction(this.props.x, this.props.y)
                        this.toggleWall(this.props.selectedItem)
                    }
                }}
            >
                {//this.props.cell.type === 4 ? 'v' :'‎' }
                }
                {text}
            </button>
        )
    }
}

export default GridButton
