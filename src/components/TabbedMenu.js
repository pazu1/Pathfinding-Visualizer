import React, { useState } from 'react'

function TabbedMenu(props) {
    const normalStyle= {
        flexGrow: 1
    }
    const selectedStyle = {
        flexGrow: 1.5
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const { titles } = props
    const tabs = titles.map( (title, index) => {
        return ( 
            <button 
                className={ index === currentIndex ? 'tabButton-selected' : 'tabButton' }
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
                { props.pages[currentIndex] }
            </div>
        </div> 
    )
}

export default TabbedMenu
