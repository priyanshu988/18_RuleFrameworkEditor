import React from 'react'
import "./AdderPopup.css"
function AdderPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                <br />
                <hr/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AdderPopup