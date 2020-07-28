import React from "react";

const MobileContext = React.createContext();

const MOBILE_WIDTH = 800;

class MobileStateProvider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mobile: false,
        };
        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        window.requestAnimationFrame(() => {
            this.setState(() => {
                let width = window.innerWidth;
                let mobile = width < MOBILE_WIDTH;

                return {
                    width: width,
                    mobile: mobile,
                };
            });
        });
    }

    componentWillMount() {
        this.setState({
            width: window.innerWidth,
            mobile: window.innerWidth < MOBILE_WIDTH,
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    setMobile = (newMobile) => {
        this.setState({ mobile: newMobile });
    };

    render() {
        const { mobile } = this.state;
        const { setMobile } = this;

        return (
            <MobileContext.Provider
                value={{
                    mobile,
                    setMobile,
                }}
            >
                {this.props.children}
            </MobileContext.Provider>
        );
    }
}

export default MobileContext;

export { MobileStateProvider };
