import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, completed, name, description, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== id));
    };
    const checkHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === id) {
                    return { ...el, completed: !el.completed };
                }
                return el;
            })
        );
    };

    return (
        <div className="todos__card">
            <h1 className="todos__card-name">
                <span className={completed ? 'strike' : null}>{name}</span>
                <span>
                    <button className="trash" onClick={deleteHandler}>
                        <FontAwesomeIcon icon={faTrashAlt} size="xs" />
                    </button>
                    <button className="check" onClick={checkHandler}>
                        <FontAwesomeIcon icon={faCheck} size="xs" />
                    </button>
                </span>
            </h1>
            <p className={`todos__card-description${completed ? ' strike' : ''}`}>{description}</p>
        </div>
    );
};

export default Todo;
