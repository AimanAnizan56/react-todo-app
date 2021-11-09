import React from 'react';
import Todo from './Todos';

const TodoList = ({ todos, setTodos }) => {
    const checkHandler = () => {
        console.log('checkHandler');
    };

    return (
        <div className="todos">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
            ))}
        </div>
    );
};

export default TodoList;
