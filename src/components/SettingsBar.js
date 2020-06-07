import React from 'react';

class SettingsBar extends React.Component {
    render() {
        return (
            <div className='topBar'>
                <div>
                    <label>Algorithm: </label>
                    <select name='algorithms' id='algorithms'>
                         <option value='A*'>A*</option>
                         <option value='Dijkstra'>Dijkstra</option>
                         <option value='BFS'>BFS</option>
                    </select>
                </div>
                <button type='button'>Visualize</button>
            </div>
        )
    }
}


export default SettingsBar
