import React from 'react';
import Todo from './Todos';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todos">
            {filteredTodos.map((todo) => {
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
