import React, { useState } from 'react';
import { generate } from 'shortid';
import InputComponent from './InputComponent';

const InputField = ({ setTodos, todos }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const buttonHandler = (e) => {
        e.preventDefault();
        if (!(name === '' || description === '')) {
            setTodos([
                ...todos,
                {
                    id: generate(),
                    name: name,
                    description: description,
                    completed: false,
                },
            ]);
            setName('');
            setDescription('');
        }
    };

    return (
        <form className="inputField__card">
            <InputComponent name="Name" id="inputName" setInputText={setName} inputText={name} />
            <InputComponent
                name="Description"
                id="inputDesc"
                setInputText={setDescription}
                inputText={description}
            />
            <button type="submit" onClick={buttonHandler}>
                Add Todo
            </button>
        </form>
    );
};

export default InputField;
