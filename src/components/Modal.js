import React from 'react'

import {useTransition, animated} from 'react-spring'

function Modal(props) {

    const { children } = props
    const transitions = useTransition(props.display, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return (
        transitions.map(({item, key, props}) => item &&
            <animated.div 
                className='modalBg'
                key={key}
                style={props}
            >
                {children}
            </animated.div>
        )
    )
}

export default Modal
