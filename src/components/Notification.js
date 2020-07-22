import React, {useEffect, useRef} from 'react'
import {useSpring, animated} from 'react-spring'

const ALERTCOLOR = '#f05e54'

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
function Notification (props) { 

    const sProps = useSpring({
        height: props.active ? 50 : 0,
        opacity: props.active ? 1 : 0,
        bottom: props.active ? 60 : 0,
    })

    const prevWasAlert = usePrevious(props.isAlert)

    let style = {
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
