import React, { useState } from 'react';
import InputField from './components/InputField';

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <React.Fragment>
            <h1 className="title">My Todos</h1>
            <InputField setTodos={setTodos} todos={todos} />
        </React.Fragment>
    );
};

export default App;
