import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodosList';

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <React.Fragment>
            <h1 className="title">My Todos</h1>
            <InputField setTodos={setTodos} todos={todos} />
            <TodoList todos={todos} />
        </React.Fragment>
    );
};

export default App;
