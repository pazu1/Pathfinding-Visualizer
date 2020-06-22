import React, { useState } from 'react';

const CellStyles = [
    {
        background: '#FFF',
        color: '#000'
    },
    {
        background: '#000',
        color: '#000'
    },
    {
        background: '#d2ff4a',
    },
    {
        background: '#fcba03'
    },
    {
        background: '#38ffc7',
    },
    {
        background: '#f05e54'
    }
]

function GridButton (props) {

    const [, setState] = useState()
    const updateAnyway = () => {
        setState({})
    }
        
    let style = CellStyles[0]
    let text ='‎'  
    let isStart = props.start.x === props.x && props.start.y === props.y
    let isEnd = props.end.x === props.x && props.end.y === props.y

    if (!isStart && !isEnd){
        style = CellStyles[props.cell.type]
    } else if (isStart) {
        style = CellStyles[2]
        text = 'S'
    } else if (isEnd) {
        style = CellStyles[3]
        text = 'E'
    }

    return(
        <button 
            type='button' 
            className='gridButton'
            style={style}

            onMouseDown = {() => {
                props.clickFunction(props.x, props.y)
                updateAnyway()
                
            }}
            onMouseOver = {() => {
                if (props.drawing) {
                    props.clickFunction(props.x, props.y)
                    updateAnyway()
                }
            }}
        >
            {text}
        </button>
    )
}

export default GridButton
