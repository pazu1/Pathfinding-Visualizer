import React, {useEffect, useRef, useContext} from 'react'
import {useSpring, animated} from 'react-spring'
import MobileContext from './MobileContext'

const ALERTCOLOR = '#f05e54'
const DESKTOPMARGIN = 30
const MOBILEMARGIN = 90

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function Notification (props) { 

    const { mobile } = useContext(MobileContext)
    let margin = DESKTOPMARGIN
    if (mobile) margin = MOBILEMARGIN

    const sProps = useSpring({
        height: props.active ? 50 : 0,
        opacity: props.active ? 1 : 0,
        bottom: props.active ? margin : 0,
    })

    const prevWasAlert = usePrevious(props.isAlert)

    const style = {
        height: sProps.height,
        opacity: sProps.opacity,
        background: props.isAlert && prevWasAlert ? ALERTCOLOR : null,
        bottom: sProps.bottom
    }

    return (
        <animated.div 
            className='notification'
            style={style}>
            <p>{props.active ? props.text : null}</p>
        </animated.div>
    )
}

export default Notification
