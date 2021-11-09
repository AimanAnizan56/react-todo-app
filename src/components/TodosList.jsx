import React from 'react';
import Todo from './Todos';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
            ))}
        </div>
    );
};

export default TodoList;
