import React from 'react';

class GridButton extends React.Component {
    render() {
        console.log(this.props.x)
        return(
            <button 
                type='button' 
                className='gridButton'
            ></button>
        )
    }
}

export default GridButton
