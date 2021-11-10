import React, { useEffect, useState } from 'react';
import FilterDropdown from './components/FilterDropdown';
import InputField from './components/InputField';
import TodoList from './components/TodosList';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteredStatus, setFilteredStatus] = useState('all');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', toggleHandler);
    }, [toggle]);

    useEffect(() => {
        filterHandler();
    }, [todos, filteredStatus]);

    const toggleHandler = () => {
        if (toggle) {
            setToggle(false);
        }
        document.body.removeEventListener('click', toggleHandler);
    };

    const filterHandler = () => {
        switch (filteredStatus) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    return (
        <React.Fragment>
            <h1 className="title">My Todos</h1>
            <InputField setTodos={setTodos} todos={todos} />
            <FilterDropdown
                toggle={toggle}
                setToggle={setToggle}
                setFilteredStatus={setFilteredStatus}
            />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        </React.Fragment>
    );
};

export default App;
