import React from 'react';

const InputComponent = (props) => {
    const setInput = (e) => {
        props.setInputText(e.target.value);
    };
    return (
        <div className="inputField__component">
            <label htmlFor={props.id} className="inputField__label">
                {props.name}
            </label>
            <input type="text" name={props.id} id={props.id} onChange={setInput} />
        </div>
    );
};

export default InputComponent;
