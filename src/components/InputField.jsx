import React, { useState } from 'react';
import InputComponent from './InputComponent';

const InputField = ({ setTodos, todos }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const card = {
        backgroundColor: 'hsl(0, 0%, 24%)',
        borderRadius: '0.625rem',
        width: '100%',
        padding: '2rem',
    };
    const btn = {
        backgroundColor: 'hsl(33, 93%, 52%)',
    };

    const buttonHandler = () => {
        if (!(name === '' || description === '')) {
            setTodos([
                ...todos,
                {
                    name: name,
                    description: description,
                },
            ]);
        }
    };

    return (
        <div style={card}>
            <InputComponent name="Name" id="inputName" setInputText={setName} />
            <InputComponent name="Description" id="inputDesc" setInputText={setDescription} />
            <button style={btn} onClick={buttonHandler}>
                Add Todo
            </button>
        </div>
    );
};

export default InputField;
