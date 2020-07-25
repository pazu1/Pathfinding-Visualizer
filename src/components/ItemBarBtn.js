import React from 'react'
import Popup from 'reactjs-popup'

function ItemBarBtn(props) {
    
    let style = { display: 'table-row'}
    if (props.disabled) {
        style.boxShadow = 'none'
        style.border = '2px solid transparent'
    }


    return (
        <Popup clasName= 'tooltip' trigger={
            <button
                className='itemBarBtn'
                style={ style }
                onClick={ props.onClick }
            >
                <span
                    style={{ color: props.color }}
                >
                    { '■ ' }
                </span>
                { props.text ?<p id='itemBarText'>{props.text}</p> : 'item' }
            </button>
            }
            position='right center'
            closeOnDocumentClick
            open={props.showTip}
            on='none'
            onClose={props.onTipClosed}
        >
            {props.tipText}
        </Popup>
    )
}

export default ItemBarBtn
