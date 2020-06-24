import React from 'react';
import Popup from "reactjs-popup"

import { Alg, CellType, VizState, AlertTypes } from './App.js'

class SettingsBar extends React.Component { // TODO: add reset button and disable settings when algorithm is running

    render() {

        let runButtonStyle = {
            background: '#32e0c4'
        }

        let runButtonText = 'Run! '

        if (this.props.visualizationState === VizState.RUNNING) { 
            runButtonStyle.background = '#eee'
            runButtonText = 'Skip visualization'
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonStyle.background = '#eee'
            runButtonText = 'Clear route'
        }

        return (
            <div className='topBar'>
                <div>
                    <label>Algorithm: </label>
                    <select 
                        name='algorithms' 
                        id='algorithms'
                        onChange={this.props.changeSelectedAlgorithm}
                        disabled={this.props.visualizationState !== VizState.INACTIVE}
                    >
                         <option value={Alg.ASTAR}>A*</option>
                         <option value={Alg.DIJKSTRA}>Dijkstra</option>
                         <option value={Alg.BFS}>BFS</option>
                         <option value={Alg.DFS}>DFS</option>
                    </select>
                </div>


                <Popup
                    trigger={
                        <div>
                            <label>Place item: </label>
                            <select 
                                name='mapItems' 
                                id='mapItems'
                                onChange={this.props.changeSelectedItem}
                                disabled={this.props.visualizationState !== VizState.INACTIVE}
                            >
                                 <option value={CellType.WALL}>Wall</option>
                                 <option value={CellType.START}>Start Point</option>
                                 <option value={CellType.END}>End Point</option>
                            </select>
                        </div>
                    }
                    position='bottom center'
                    open={this.props.activeAlert === AlertTypes.NOSTART ||
                    this.props.activeAlert === AlertTypes.NOEND}
                    on='none'
                    onClose={this.props.removeAlert}
                >
                    {this.props.activeAlert} 
                </Popup>


                <br/>

                <button 
                    type='button' 
                    className='settingsButton'
                    style={{display: this.props.visualizationState !== VizState.RUNNING ? null : 'none' }}
                    onClick={() => this.props.onResetClick(true)}
                >
                    Reset grid
                </button>

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
