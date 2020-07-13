import React, { useState } from 'react';

import ItemBarBtn from './ItemBarBtn'
import { CellType } from '../constvar'

function ItemBar(props) {
    const [expanded, setExpanded] = useState(true) 

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
                        height: '20vh', 
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
                    disabled={ props.selectedItem !== CellType.START }
                    onClick={() => {props.changeSelectedItem(CellType.START)}}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'End node'}
                    color={'#fcba03'}
                    disabled={ props.selectedItem !== CellType.END }
                    onClick={() => {props.changeSelectedItem(CellType.END)}}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'Wall'}
                    color={'#000'}
                    disabled={ props.selectedItem !== CellType.WALL }
                    onClick={() => props.changeSelectedItem(CellType.WALL)}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'Eraser'}
                    color={'#fff'}
                    disabled={ props.selectedItem !== CellType.NONE }
                    onClick={() => props.changeSelectedItem(CellType.NONE)}

                />
            </div>
        </div>
    )
}

export default ItemBar
