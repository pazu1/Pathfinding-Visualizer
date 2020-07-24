import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import MdTrash from 'react-ionicons/lib/MdTrash'

import { VizState, Alg } from '../constvar'

function TopBar(props) {

    return (
        <div 
            className = { props.mobile ? 'topBarMobile' : 'topBar' } 
            style = {
                props.expanded && props.mobile ? { display: 'none' } : null
            }
        >
            <div
                style={ props.mobile ? { display: 'none' } : null }
            >
                <label>Algorithm: </label>
                <select 
                    name='algorithms' 
                    id='algorithms'
                    onChange={props.changeSelectedAlgorithm}
                    disabled={props.visualizationState !== VizState.INACTIVE}
                >
                     <option value={Alg.ASTAR}>A*</option>
                     <option value={Alg.BFS}>BFS</option>
                     <option value={Alg.DFS}>DFS</option>
                </select>
            </div>
            <br/>

            <div className='sliderContainer'>
                <label>Visualization speed:</label>
                <RangeSlider
                    min={10}
                    max={100}
                    value={props.visualizationSpeed}
                    onChange={(e) => props.changeVisSpeed(e.target.value)}
                />
            </div>
            <br/>

            <button 
                type='button' 
                className='settingsButton'
                disabled={props.visualizationState === VizState.RUNNING }
                onClick={() => props.onMazeClick()}
            >
                Generate maze 
            </button>
            <br/>

            <button 
                type='button' 
                className='resetButton'
                disabled={props.visualizationState === VizState.RUNNING }
                onClick={() => props.onResetClick(true)}
            >
                <MdTrash 
                    fontSize='17px' 
                    className='ionIcon' 
                    color={props.visualizationState === VizState.RUNNING ? '#666' : null}
                />
                Reset grid
            </button>
            <br/>

            <button 
                style={ props.mobile ? { display: 'none' } : null }
                type='button' 
                className='settingsButton'
                onClick={props.onClick}
            >
                {props.runButtonIcon}
                {props.runButtonText}
            </button>
        </div>
    )

}

export default TopBar
