import React, { useState } from "react";

import ItemBarBtn from "./ItemBarBtn";
import { CellType, AlertTypes } from "../constvar";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import { useSpring, animated, config } from "react-spring";

function ItemBar(props) {
    const [expanded, setExpanded] = useState(true);
    let hide = !expanded || props.hidden;
    let dropDownIcon = (
        <MdArrowDropup fontSize="25px" className="ionDropdown" />
    );
    if (hide) {
        dropDownIcon = (
            <MdArrowDropdown fontSize="25px" className="ionDropdown" />
        );
    }

    const sProps = useSpring({
        height: !hide ? 330 : 0,
        opacity: !hide ? 1 : 0,
        config: (key) => (key === "height" ? config.wobbly : config.stiff),
    });

    const aStyle = {
        height: sProps.height,
        opacity: sProps.opacity,
    };

    return (
        <div className="itemBarContainer">
            <button
                className="itemBarToggle"
                onClick={() => {
                    if (!props.hidden) setExpanded(!expanded);
                }}
            >
                Items
                {dropDownIcon}
            </button>
            <animated.div className="itemBar" style={aStyle}>
                <ItemBarBtn
                    text={"Start node"}
                    color={"#36bf00"}
                    disabled={props.selectedItem !== CellType.START}
                    onClick={() => {
                        props.changeSelectedItem(CellType.START);
                    }}
                    showTip={props.activeAlert === AlertTypes.NOSTART}
                    tipText={props.activeAlert}
                    onTipClosed={props.removeAlert}
                />
                <ItemBarBtn
                    text={"End node"}
                    color={"#a200ff"}
                    disabled={props.selectedItem !== CellType.END}
                    onClick={() => {
                        props.changeSelectedItem(CellType.END);
                    }}
                    showTip={props.activeAlert === AlertTypes.NOEND}
                    tipText={props.activeAlert}
                    onTipClosed={props.removeAlert}
                />
                <ItemBarBtn
                    text={"Wall"}
                    color={"#000"}
                    disabled={props.selectedItem !== CellType.WALL}
                    onClick={() => props.changeSelectedItem(CellType.WALL)}
                />
                <ItemBarBtn
                    text={"Eraser"}
                    color={"#fff"}
                    disabled={props.selectedItem !== CellType.NONE}
                    onClick={() => props.changeSelectedItem(CellType.NONE)}
                />
            </animated.div>
        </div>
    );
}

export default ItemBar;
