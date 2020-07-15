import React from 'react';

function ItemBarBtn(props) {
    
    let style = { display: 'table-row'}
    if (props.parentHidden) {
        style.display = 'none'
    }
    if (props.disabled) {
        style.boxShadow = 'none'
        style.border = '2px solid transparent'
    }


    return (
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
    )
}

export default ItemBarBtn
