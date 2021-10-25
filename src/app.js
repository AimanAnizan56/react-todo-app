import React, { Component } from 'react';
import InputField from './components/InputField';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title">My Todos</h1>
                <InputField />
            </React.Fragment>
        );
    }
}

export default App;
