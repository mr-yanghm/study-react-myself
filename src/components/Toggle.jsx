import React, { Component } from 'react';
import Greeting from './Greeting';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }

    onToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        return (
            <div>
                <button onClick={this.onToggle} >Toggle~!</button>
                <p>
                    Toggle state : {this.state.toggle ? 'ON' : 'OFF'}
                </p>
            </div>
        );
    }
}

export default Toggle;