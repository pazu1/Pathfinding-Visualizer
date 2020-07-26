import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'
import MdFastForward from 'react-ionicons/lib/MdFastforward'
import MdRefresh from 'react-ionicons/lib/MdRefresh'
import MdPlay from 'react-ionicons/lib/MdPlay'
import MdHelp from 'react-ionicons/lib/MdHelpCircle'
import MdCode from 'react-ionicons/lib/MdCode'
import MdInfo from 'react-ionicons/lib/MdInformationCircle'

import { HelpPage, AlgorithmsPage } from './Pages'
import Modal from './Modal'
import TabbedMenu from './TabbedMenu'
import MobileContext from './MobileContext'
import TopBar from './TopBar'
import { Alg, VizState } from '../constvar'


class Controls extends React.Component { 

    static contextType = MobileContext

    constructor(props) {
        super(props)
        this.state = {
            expanded: true,
            showHelp: false

        }
    }
        
    render() {

        const { mobile } = this.context

        let runButtonText = 'Run! '
        let runButtonIcon = <MdPlay fontSize='17px' className='ionIcon'/>

        if (this.props.visualizationState === VizState.RUNNING) { 
            runButtonText = 'Skip visualization'
            runButtonIcon = <MdFastForward fontSize='17px' className='ionIcon'/>
        } else if (this.props.visualizationState === VizState.FINISHED) {
            runButtonText = 'Clear path'
            runButtonIcon = <MdRefresh fontSize='17px' className='ionIcon'/>
        } 

        let dropDownIcon = <MdArrowDropup fontSize='25px' className='ionDropdown'/>
        if (!this.state.expanded) {
            dropDownIcon = <MdArrowDropdown fontSize='25px' className='ionDropdown'/>
        }

        return ( <>

            <Modal
                display={this.state.showHelp}
                onClickOutside={() => this.setState((prevState) => {
                        return {showHelp: !prevState.showHelp}
                })}
            >
                <TabbedMenu
                    titles = {[
                        <span><MdHelp fontSize='17px' className='ionIcon'/>{'Help'}</span>, 
                        <span><MdCode fontSize='17px' className='ionIcon'/>{'Algorithms'}</span>, 
                        <span><MdInfo fontSize='17px' className='ionIcon'/>{'About'}</span>, 
                    ]}
                    pages = {[
                        <HelpPage/>,
                        <AlgorithmsPage/>
                    ]}
                />
            </Modal>
            <button 
                style={{position: 'fixed', left: 0, bottom: 0, zIndex: 12}}
                onClick={() => this.setState((prevState) => {return { showHelp: !prevState.showHelp }})}
                className='settingsButton'
                type='button' 
            >
                About
            </button>

            <div
                className = { mobile ? 'topBarContainer' : null }
            >
                <button 
                    className = 'topBarToggle' 
                    style = { !mobile ? { display: 'none' } : null }
                    onClick = {
                        () => this.setState((prevState) => {
                            return {expanded: !prevState.expanded }
                        })
                    }
                >
                    Options
                    { dropDownIcon }
                </button>

                
                <TopBar
                    hide={!this.state.expanded}
                    mobile={mobile}
                    changeSelectedAlgorithm={this.props.changeSelectedAlgorithm}
                    visualizationState={this.props.visualizationState}
                    onClick={this.props.onClick}
                    changeVisSpeed={this.props.changeVisSpeed}
                    visualizationSpeed={this.props.visualizationSpeed}
                    runButtonText={ runButtonText }
                    runButtonIcon={ runButtonIcon }
                    onMazeClick={this.props.onMazeClick}
                    onResetClick={this.props.onResetClick}
                />
                <div
                    className='mobileActionBar'
                    style={ !mobile ? { display: 'none' } : null }
                >
                    <div 
                    >
                        <label
                            style={{textShadow: '2px 2px 8px #000000'}}
                        >
                            Algorithm: 
                        </label>
                        <select 
                            name='algorithms' 
                            id='algorithms'
                            onChange={this.props.changeSelectedAlgorithm}
                            disabled={this.props.visualizationState !== VizState.INACTIVE}
                        >
                             <option value={Alg.ASTAR}>A*</option>
                             <option value={Alg.BFS}>BFS</option>
                             <option value={Alg.DFS}>DFS</option>
                             <option value={Alg.GBFS}>Greedy BFS</option>
                        </select>
                    </div>
                    <button 
                        className='settingsButton'
                        style={ !mobile ? { display: 'none' } : null }
                        type='button' 
                        onClick={this.props.onClick}
                    >
                        {runButtonIcon}
                        {runButtonText}
                    </button>
                </div>
            </div>
        </> )
    }
}

export default Controls
