import React, { useState } from 'react';

import ItemBarBtn from './ItemBarBtn'
import { CellType, AlertTypes } from '../constvar'
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'

function ItemBar(props) {
    const [expanded, setExpanded] = useState(true) 
    let hide = !expanded || props.hidden
    let dropDownIcon = <MdArrowDropup fontSize='25px' className='ionDropdown'/>
    if (hide) {
        dropDownIcon = <MdArrowDropdown fontSize='25px' className='ionDropdown'/>
    }

    return (
        <div className='itemBarContainer'>
            <button 
                className = 'itemBarToggle'
                onClick={() => {
                    if (!props.hidden) setExpanded(!expanded)
                }}>
                    Items
                    { dropDownIcon }
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
