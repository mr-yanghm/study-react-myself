import React, { Component } from 'react';

function UserGreeting() {
    return <h1>Welcome Back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

class Greeting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }
}

export default Greeting;