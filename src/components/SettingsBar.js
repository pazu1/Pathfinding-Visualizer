import React from 'react';

import { Alg, CellType, VizState } from './App.js'

class SettingsBar extends React.Component { // TODO: add reset button and disable settings when algorithm is running

    render() {

        let runButtonStyle = {
            background: '#32e0c4'
        }

        let runButtonText = 'Run! '

        if (this.props.visualizationState === VizState.RUNNING) { 
            console.log(this.props.visualizationState)
            runButtonStyle.background = '#eee'
            runButtonText = 'Skip visualization'
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonStyle.background = '#eee'
            runButtonText = 'Clear visualization'
        }

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
                    style={runButtonStyle}
                    type='button' 
                    className='settingsButton'
                    onClick={this.props.onClick}
                >
                    {runButtonText}
                </button>
            </div>
        )
    }
}

export default SettingsBar
