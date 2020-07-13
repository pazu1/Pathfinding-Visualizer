import React from 'react';
import Popup from "reactjs-popup"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import ItemBar from './ItemBar'
import { Alg, CellType, VizState, AlertTypes } from '../constvar'

class Settings extends React.Component { 

    render() {
        let runButtonText = 'Run! '
        let runButtonIcon = 'play-outline'

        if (this.props.visualizationState === VizState.RUNNING) { 
            runButtonText = 'Skip visualization'
            runButtonIcon = 'play-forward-outline'
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonText = 'Clear route'
            runButtonIcon = 'refresh-outline'
        }

        return (
            <div className='stngsUiWrapper'>

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
                                 <option value={CellType.START}>Start node</option>
                                 <option value={CellType.END}>End node</option>
                                 <option value={CellType.NONE}>Erase</option>
                            </select>
                        </div>
                    }
                    position='bottom center'
                    closeOnDocumentClick
                    open={this.props.activeAlert === AlertTypes.NOSTART ||
                    this.props.activeAlert === AlertTypes.NOEND}
                    on='none'
                    onClose={this.props.removeAlert}
                >
                    {this.props.activeAlert} 
                </Popup>

                <br/>

                <div className='sliderContainer'>
                    <label>Visualization speed:</label>
                    <RangeSlider
                        min={10}
                        max={100}
                        value={this.props.visualizationSpeed}
                        onChange={(e) => this.props.changeVisSpeed(e.target.value)}
                    />
                </div>

                <button 
                    type='button' 
                    className='settingsButton'
                    disabled={this.props.visualizationState === VizState.RUNNING }
                    onClick={() => this.props.onMazeClick()}
                >
                    Generate maze 
                </button>

                <button 
                    type='button' 
                    className='settingsButton'
                    disabled={this.props.visualizationState === VizState.RUNNING }
                    onClick={() => this.props.onResetClick(true)}
                >
                    <ion-icon name='trash-outline'></ion-icon>
                    Reset grid
                </button>

                <button 
                    style={this.props.visualizationState !== VizState.INACTIVE ? { background: '#eee' } : null}
                    type='button' 
                    className='settingsButton'
                    onClick={this.props.onClick}
                >
                    <ion-icon name={ runButtonIcon }
                    ></ion-icon>
                    {runButtonText}
                </button>

            </div>

                <ItemBar/>
            </div>
        )
    }
}

export default Settings
