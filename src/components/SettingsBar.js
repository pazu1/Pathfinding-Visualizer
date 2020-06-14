import React from 'react';

import { Alg, CellType } from './App.js'

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
                         <option value={Alg.ASTAR}>A*</option>
                         <option value={Alg.DIJKSTRA}>Dijkstra</option>
                         <option value={Alg.BFS}>BFS</option>
                         <option value={Alg.DFS}>DFS</option>
                    </select>
                </div>

                <div>
                    <label>Place item: </label>
                    <select 
                        name='mapItems' 
                        id='mapItems'
                        onChange={this.props.changeSelectedItem}
                    >
                         <option value={CellType.WALL}>Wall</option>
                         <option value={CellType.START}>Start Point</option>
                         <option value={CellType.END}>End Point</option>
                    </select>
                </div>

                <br/>

                <button 
                    type='button' 
                    className='settingsButton'
                    onClick={this.props.onClick}
                >
                    {!this.props.visualizationRunning ? 'Run! ▷'
                    : 'Skip animation ▷▷'} 
                </button>
            </div>
        )
    }
}

export default SettingsBar
