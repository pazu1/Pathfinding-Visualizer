import React from 'react';

import SettingsBar from './SettingsBar'
import Grid from './Grid'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <SettingsBar/>
                <Grid/>
            </div>
        )
    }
}

export default App
