import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const FilterDropdown = ({ toggle, setToggle, setFilteredStatus }) => {
    const toggleDropdown = () => {
        setToggle(!toggle);
    };
    const clickHandler = (e) => {
        setFilteredStatus(e.target.value);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__title" onClick={toggleDropdown}>
                <span>Filter</span>
                <span>
                    <FontAwesomeIcon icon={faFilter} />
                </span>
            </button>
            <ul className={`dropdown__item${toggle ? ' toggle' : ''}`}>
                <li>
                    <button value="all" onClick={clickHandler}>
                        All
                    </button>
                </li>
                <li>
                    <button value="completed" onClick={clickHandler}>
                        Completed
                    </button>
                </li>
                <li>
                    <button value="uncompleted" onClick={clickHandler}>
                        Uncompleted
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FilterDropdown;
