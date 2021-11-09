import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos }) => {
    const deleteHandler = (e) => {
        console.log(e.target);
    };
    const checkHandler = () => {
        console.log('checkHandler');
    };

    return (
        <div className="todos" key={todos.id}>
            {todos.map((todo) => (
                <div className="todos__card">
                    <h1 className="todos__card-name">
                        <span>{todo.name}</span>
                        <span>
                            <button className="trash" onClick={deleteHandler}>
                                <FontAwesomeIcon icon={faTrashAlt} size="xs" />
                            </button>
                            <button className="check" onClick={checkHandler}>
                                <FontAwesomeIcon icon={faCheck} size="xs" />
                            </button>
                        </span>
                    </h1>
                    <p className="todos__card-description">{todo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
