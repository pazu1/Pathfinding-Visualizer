import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'
import MdFastForward from 'react-ionicons/lib/MdFastforward'
import MdRefresh from 'react-ionicons/lib/MdRefresh'
import MdPlay from 'react-ionicons/lib/MdPlay'

import MobileContext from './MobileContext'
import TopBar from './TopBar'
import { Alg, VizState } from '../constvar'

const MOBILE_WIDTH = 800

class Settings extends React.Component { 

    static contextType = MobileContext

    constructor(props) {
        super(props)
        this.state = {
            expanded: true
        }
        this.onResize = this.onResize.bind(this)
    }

    onResize() {
        window.requestAnimationFrame(() => {
            this.setState(() => {
                let width = window.innerWidth
                let mobile =  (width < MOBILE_WIDTH)

                this.context.setMobile(mobile)
                return { 
                    width: width,
                }
            })
        })
    }

    componentWillMount() {
        this.setState({
            width: window.innerWidth,
        })
        this.context.setMobile(window.innerWidth < MOBILE_WIDTH)
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
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
        if (!this.props.expanded) {
            dropDownIcon = <MdArrowDropdown fontSize='25px' className='ionDropdown'/>
        }

        return (
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
                    expanded={this.state.expanded}
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
                    className='mobileAlgSelect'
                    style={ !mobile ? { display: 'none' } : null }
                >
                    <label>Algorithm: </label>
                    <select 
                        name='algorithms' 
                        id='algorithms'
                        onChange={this.props.changeSelectedAlgorithm}
                        disabled={this.props.visualizationState !== VizState.INACTIVE}
                    >
                         <option value={Alg.ASTAR}>A*</option>
                         <option value={Alg.BFS}>BFS</option>
                         <option value={Alg.DFS}>DFS</option>
                    </select>
                </div>
                <button 
                    className='mobileRunButton'
                    style={ !mobile ? { display: 'none' } : null }
                    type='button' 
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
