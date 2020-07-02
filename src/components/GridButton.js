import React, { useState, useRef } from 'react'

function GridButton (props) { 

    const [, setState] = useState()

    const updateAnyway = () => {
        setState({})
    }

    const compRef = useRef()
    props.cell.ref = compRef

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
        >‎
        </button>
    )
}

export default GridButton
