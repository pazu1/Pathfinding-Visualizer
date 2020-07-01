import React, { useState, useEffect, useRef } from 'react'
import { CellStyles } from '../constvar'
import { sleep } from '../extfunctions'

function GridButton (props) { 

    const [, setState] = useState()

    const updateAnyway = () => {
        setState({})
    }

    const compRef = useRef()
    props.cell.ref = compRef
    let text ='‎'  

    useEffect(() => { 
        let isVisited = props.cell.type === 4 
        if (!isVisited) {
            let cStyle = CellStyles[props.cell.type]
            compRef.current.style.background = cStyle.background
            compRef.current.style.color = cStyle.color
            compRef.current.style.transform = cStyle.transform
        }

        //if (isVisited) {
        //sleep(400).then(() => {
        //    compRef.current.style.transform = 'scale(1.0)' 
        //})}
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
                    updateAnyway()
                }
            }}
        >
            {text}
        </button>
    )
}

export default GridButton
