import React, { useState } from 'react'
import { useSpring, animated} from 'react-spring'

function TabbedMenu(props) {
    const normalStyle= {
        flexGrow: 1
    }
    const selectedStyle = {
        flexGrow: 1.5
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const { titles } = props
    let tabs = titles.map( (title, index) => {
        return ( 
            <button 
                className={ index === currentIndex ? 'tabButtonSelected' : 'tabButton' }
                style={ index === currentIndex ? selectedStyle : normalStyle }
                onClick={() => setCurrentIndex(index)}
            >
                    {title}
            </button> 
        )
    }) 

    return ( 
        <div className='tabbedMenuContainer'>
            <div 
                className='tabbedTitleBar'
            >
                { tabs }
            </div>
            <div className='tabbedMenuContent'>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
                <p>Liirum laarum</p>
            </div>
        </div> 
    )

}

export default TabbedMenu
