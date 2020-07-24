import React from 'react'

const MobileContext = React.createContext()

class MobileStateProvider extends React.Component {
    
    state = {
        mobile: false
    }

    setMobile = (newMobile) => {
        this.setState({ mobile: newMobile })
    }

    render() {
        const { mobile } = this.state
        const { setMobile } = this

        return ( 
            <MobileContext.Provider 
                value={{
                    mobile,
                    setMobile
                }}
            >
                {this.props.children}
            </MobileContext.Provider>
        )
    }
}

export default MobileContext

export { MobileStateProvider }
    
