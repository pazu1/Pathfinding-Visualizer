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
        transform: 'scale(0.1)' 
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
    props.cell.ref = compRef
    let text ='‎'  

    useEffect(() => { 
        let cStyle = CellStyles[props.cell.type]
        console.log("UPDATED")
        compRef.current.style.background = cStyle.background
        compRef.current.style.color = cStyle.color
        compRef.current.style.transform = cStyle.transform

        let isVisited = props.cell.type === 4 
        if (isVisited) {
        sleep(400).then(() => {
            compRef.current.style.transform = 'scale(1.0)' 
        })}
        updateAnyway() // this should fix some stuff
    }, [props.cell.type])

    return(
        <button 
            ref={compRef}
            type='button' 
            className='gridButton'

            onMouseDown = {() => {
                if (!props.disableDrawing) {
                    props.clickFunction(props.x, props.y)
                    updateAnyway()
                }
                
            }}
            onMouseOver = {() => {
                if (props.drawing && !props.disableDrawing) {
                    props.clickFunction(props.x, props.y)
                }
                    updateAnyway()
            }}
        >
            {text}
        </button>
    )
}

export default GridButton
