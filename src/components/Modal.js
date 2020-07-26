import React from 'react'

import {useTransition, animated} from 'react-spring'

function Modal(props) {

    function handleModalClick(event) {
        event.preventDefault()
        if (event.target === event.currentTarget) {
            props.onClickOutside()
        }
    }

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
                onClick={handleModalClick}
            >
                {children}
            </animated.div>
        )
    )
}

export default Modal
