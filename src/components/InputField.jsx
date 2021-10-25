import React, { Component } from 'react';
import InputComponent from './InputComponent';

class InputField extends Component {
    state = {};
    render() {
        const card = {
            backgroundColor: 'hsl(0, 0%, 24%)',
            borderRadius: '0.625rem',
            width: '100%',
            padding: '2rem',
        };
        return (
            <div style={card}>
                <InputComponent name="Name" id="inputName" />
                <InputComponent name="Description" id="inputDesc" />
            </div>
        );
    }
}

export default InputField;
