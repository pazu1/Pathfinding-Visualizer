import React, { useState } from 'react';

import ItemBarBtn from './ItemBarBtn'
import { CellType, AlertTypes } from '../constvar'

function ItemBar(props) {
    const [expanded, setExpanded] = useState(true) 
    let hide = !expanded || props.hidden

    return (
        <div style={ { height: '100%', zIndex:10} }>
            <button 
                className = 'itemBarToggle'
                onClick={() => {
                    if (!props.hidden) setExpanded(!expanded)
                }}>
                Items
                <ion-icon 
                    name={ hide ? 'caret-down-outline' : 
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
                    !hide ? { 
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
                    color={'#00ff37'}
                    disabled={ props.selectedItem !== CellType.START }
                    onClick={() => {props.changeSelectedItem(CellType.START)}}
                    showTip={props.activeAlert === AlertTypes.NOSTART}
                    tipText={props.activeAlert} 
                    onTipClosed={props.removeAlert}

                />
                <ItemBarBtn 
                    parentHidden={!expanded}
                    text={'End node'}
                    color={'#a200ff'}
                    disabled={ props.selectedItem !== CellType.END }
                    onClick={() => {props.changeSelectedItem(CellType.END)}}
                    showTip={props.activeAlert === AlertTypes.NOEND}
                    tipText={props.activeAlert} 
                    onTipClosed={props.removeAlert}

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
