import React, { useState } from 'react';

import ItemBarBtn from './ItemBarBtn'

function ItemBar(props) {
    const [expanded, setExpanded] = useState(true) 
    const [selectedItem, setSelectedItem] = useState(1) 
    
    return (
        <div style={ { height: '100%', zIndex:10} }>
            <button 
                className = 'itemBarToggle'
                onClick={() => setExpanded(!expanded)}>
                Tools
                <ion-icon 
                    name={ !expanded ? 'caret-down-outline' : 
                            'caret-up-outline' }
                    style={ { 
                        paddingLeft: 20,
                        marginBottom: -4
                    } }
                >
                </ion-icon>
            </button>
            <div 
                className = 'itemBar'
                style={ 
                    expanded ? { 
                        height: '50%', 
                        opacity: 100} 
                    : { 
                        height: '0%', 
                        opacity: 0
                }}
                    >
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'Start node'}
                    color={'#d2ff4a'}
                    disabled={ selectedItem !== 1 }
                    onClick={() => {setSelectedItem(1)}}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'End node'}
                    color={'#fcba03'}
                    disabled={ selectedItem !== 2 }
                    onClick={() => {setSelectedItem(2)}}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'Wall'}
                    color={'#000'}
                    disabled={ selectedItem !== 3 }
                    onClick={() => setSelectedItem(3)}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'Eraser'}
                    color={'#fff'}
                    disabled={ selectedItem !== 4 }
                    onClick={() => setSelectedItem(4)}

                />
            </div>
        </div>
    )
}

export default ItemBar
