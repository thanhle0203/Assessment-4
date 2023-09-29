// 2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myState: 'some state',
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Check if the state has actually changed before re-rendering
        return nextState.myState !== this.state.myState;
    }

    handleClick = () => {
        // Duplicate state
        this.setState({ myState: this.state.myState });
    };

    handleChange = () => {
        // Change state
        this.setState({ myState: 'some new state' });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Duplicate State</button>
                <button onClick={this.handleChange}>Change State</button>
                <div>Current State: {this.state.myState}</div>
            </div>
        );
    }
}

export default MyComponent;
