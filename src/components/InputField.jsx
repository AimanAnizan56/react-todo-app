import React, { useState } from 'react';
import { generate } from 'shortid';
import InputComponent from './InputComponent';

const InputField = ({ setTodos, todos }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const buttonHandler = () => {
        if (!(name === '' || description === '')) {
            setTodos([
                ...todos,
                {
                    id: generate(),
                    name: name,
                    description: description,
                },
            ]);
            setName('');
            setDescription('');
        }
    };

    return (
        <div className="inputField__card">
            <InputComponent name="Name" id="inputName" setInputText={setName} inputText={name} />
            <InputComponent
                name="Description"
                id="inputDesc"
                setInputText={setDescription}
                inputText={description}
            />
            <button onClick={buttonHandler}>Add Todo</button>
        </div>
    );
};

export default InputField;
