import React from 'react';
import Todo from './Todos';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        name={todo.name}
                        description={todo.description}
                        setTodos={setTodos}
                        todos={todos}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
