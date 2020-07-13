import React, { useState } from 'react';

function ItemBarBtn(props) {
    
    let style = { display: 'table-row'}
    if (props.parentHidden) {
        style.display = 'none'
    }
    if (props.disabled) {
        style.background = '#fff'
    }


    return (
        <button
            className='itemBarBtn'
            style={ style }
            onClick={ props.onClick }
        >
            <span 
                style={
                    props.color ? { color: props.color } : {color: '#f00'}
                }
            >
                { props.symbol ? props.symbol : '■ ' }
            </span>
            { props.text ? props.text : 'item' }
        </button>
    )
}

export default ItemBarBtn
