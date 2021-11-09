import React from 'react';

const InputComponent = (props) => {
    const setInput = (e) => {
        props.setInputText(e.target.value);
    };
    return (
        <div className="inputField__component">
            <label htmlFor={props.id} className="inputField__component__label">
                {props.name}
            </label>
            <input type="text" onChange={setInput} value={props.inputText} />
        </div>
    );
};

export default InputComponent;
