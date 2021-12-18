import React from "react";
import Option from './Option'

let Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}
        {props.options.map((opt, i) => (
            <Option key={opt} count={i + 1} option={opt} handleDeleteOption={props.handleDeleteOption}/>
        ))}
    </div>
);

export default Options