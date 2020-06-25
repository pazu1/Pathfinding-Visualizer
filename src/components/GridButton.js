import React, { useState, useEffect, useRef } from 'react'

const CellStyles = [
    {
        background: '#eee',
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
        transform: 'scale(0.1)' // TODO: set a different style for beginning of visited to animate it 
    },
    {
        background: '#f05e54'
    }
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function GridButton (props) { 

    const [, setState] = useState()

    const updateAnyway = () => {
        setState({})
    }

    const compRef = useRef()
        
    let style = CellStyles[props.cell.type]
    let text ='‎'  
    let isStart = props.start.x === props.x && props.start.y === props.y
    let isEnd = props.end.x === props.x && props.end.y === props.y

    if (isStart) {
        style = CellStyles[2]
        text = 'S'
    } else if (isEnd) {
        style = CellStyles[3]
        text = 'E'
    }

    let isVisited = props.cell.type === 4 
    useEffect(() => { // Animate visiting nodes
        if (isVisited) {
        sleep(400).then(() => {
            compRef.current.style.transform = 'scale(1.0)' 
        })}
    }, [isVisited])

    return(
        <button 
            ref = {compRef}
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
