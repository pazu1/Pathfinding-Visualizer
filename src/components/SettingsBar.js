import React from 'react';

class SettingsBar extends React.Component {
    render() {
        return (
            <div className='topBar'>
                <div>
                    <label>Algorithm: </label>
                    <select 
                        name='algorithms' 
                        id='algorithms'
                        onChange={this.props.changeSelectedAlgorithm}
                    >
                         <option value={1}>A*</option>
                         <option value={2}>Dijkstra</option>
                         <option value={3}>BFS</option>
                    </select>
                </div>

                <div>
                    <label>Place item: </label>
                    <select 
                        name='mapItems' 
                        id='mapItems'
                        onChange={this.props.changeSelectedItem}
                    >
                         <option value={1}>Wall</option>
                         <option value={2}>Start Point</option>
                         <option value={3}>End Point</option>
                    </select>
                </div>

                <br/>

                <button 
                    type='button' 
                    className='settingsButton'
                    onClick={this.props.onClick}
                >Run!  ▷</button>
            </div>
        )
    }
}

export default SettingsBar
