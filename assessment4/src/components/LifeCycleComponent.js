import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleIncrement = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }

    render() {
        console.log('Render');
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default LifeCycleComponent;
