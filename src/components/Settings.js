import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import { Alg, VizState } from '../constvar'

class Settings extends React.Component { 

    render() {
        let runButtonText = 'Run! '
        let runButtonIcon = 'play-sharp'

        if (this.props.visualizationState === VizState.RUNNING) { 
            runButtonText = 'Skip visualization'
            runButtonIcon = 'play-forward-sharp'
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonText = 'Clear route'
            runButtonIcon = 'refresh-sharp'
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
                    className='resetButton'
                    disabled={this.props.visualizationState === VizState.RUNNING }
                    onClick={() => this.props.onResetClick(true)}
                >
                    <ion-icon name='trash-sharp'></ion-icon>
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
        )
    }
}

export default Settings
