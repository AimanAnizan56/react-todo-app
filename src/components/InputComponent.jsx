import React from 'react';

const InputComponent = (props) => {
    const setInput = (e) => {
        props.setInputText(e.target.value);
    };
    return (
        <div
            style={{
                width: '18.75rem',
                display: 'inline-block',
            }}
        >
            <label htmlFor={props.id} style={{ display: 'block', marginBottom: '1rem' }}>
                {props.name}
            </label>
            <input
                type="text"
                name={props.id}
                id={props.id}
                style={{ padding: '0.5rem' }}
                onChange={setInput}
            />
        </div>
    );
};

export default InputComponent;
