import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import MdTrash from 'react-ionicons/lib/MdTrash'
import MdPlay from 'react-ionicons/lib/MdPlay'
import MdFastForward from 'react-ionicons/lib/MdFastforward'
import MdRefresh from 'react-ionicons/lib/MdRefresh'

import { Alg, VizState } from '../constvar'

class Settings extends React.Component { 

    render() {
        let runButtonText = 'Run! '
        let runButtonIcon = <MdPlay fontSize='17px' className='ionIcon'/>

        if (this.props.visualizationState === VizState.RUNNING) { 
            runButtonText = 'Skip visualization'
            runButtonIcon = <MdFastForward fontSize='17px' className='ionIcon'/>
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonText = 'Clear route'
            runButtonIcon = <MdRefresh fontSize='17px' className='ionIcon'/>
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
                    <MdTrash fontSize='17px' className='ionIcon'/>
                    Reset grid
                </button>

                <button 
                    style={this.props.visualizationState !== VizState.INACTIVE ? { background: '#eee' } : null}
                    type='button' 
                    className='settingsButton'
                    onClick={this.props.onClick}
                >
                    {runButtonIcon}
                    {runButtonText}
                </button>

            </div>
        )
    }
}

export default Settings
