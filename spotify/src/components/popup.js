import React from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io';
function Popup(props) {
    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner">
                <button className="close_btn" onClick={() => props.setTrigger(false)}><div className="icon_nav"><IoIosCloseCircleOutline /></div></button>
                {props.children}
            </div>
        </div>
    ): "";
}
export default Popup