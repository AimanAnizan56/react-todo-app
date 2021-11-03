import React, { useState } from 'react';
import InputComponent from './InputComponent';

const InputField = ({ setTodos, todos }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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
        <div className="inputField__card">
            <InputComponent name="Name" id="inputName" setInputText={setName} />
            <InputComponent name="Description" id="inputDesc" setInputText={setDescription} />
            <button onClick={buttonHandler}>Add Todo</button>
        </div>
    );
};

export default InputField;
