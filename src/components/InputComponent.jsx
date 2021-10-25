import React, { Component } from 'react';

class InputComponent extends Component {
    render() {
        return (
            <div
                style={{
                    width: '18.75rem',
                    display: 'inline-block',
                }}
            >
                <label
                    htmlFor={'#' + this.props.id}
                    style={{ display: 'block', marginBottom: '1rem' }}
                >
                    {this.props.name}
                </label>
                <input
                    type="text"
                    name={this.props.id}
                    id={this.props.id}
                    style={{ padding: '0.5rem' }}
                />
            </div>
        );
    }
}

export default InputComponent;
