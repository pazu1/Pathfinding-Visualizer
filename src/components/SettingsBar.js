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
                    >
                         <option value='wall'>Wall</option>
                         <option value='startPoint'>Start Point</option>
                         <option value='endPoint'>End Point</option>
                    </select>
                </div>

                <br/>

                <button type='button' className='settingsButton'>Run!  ▷</button>
            </div>
        )
    }
}

export default SettingsBar
