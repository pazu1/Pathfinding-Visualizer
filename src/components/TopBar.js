import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import MdTrash from 'react-ionicons/lib/MdTrash'
import { useSpring, animated, config } from 'react-spring'

import { VizState, Alg } from '../constvar'

function TopBar(props) {

    const { mobile, hide } = props

    const sProps = useSpring({
        height: !hide ? 220 : 0,
        opacity: !hide ? 1 : 0,
        config: key => (key === 'height' ? config.wobbly : config.stiff)
    })
   
    const aStyle = {
        height: sProps.height,
        opacity: sProps.opacity
    }

    return (
        <animated.div 
            className = { mobile ? 'topBarMobile' : 'topBar' } 
            style = {
                mobile ? aStyle : null
            }
        >
            <div
                style={ mobile ? { display: 'none' } : null }
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
                style={ mobile ? { display: 'none' } : null }
                type='button' 
                className='settingsButton'
                onClick={props.onClick}
            >
                {props.runButtonIcon}
                {props.runButtonText}
            </button>
        </animated.div>
    )

}

export default TopBar
