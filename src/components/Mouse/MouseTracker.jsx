import React, { Component } from 'react';
import Mouse from './Mouse';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/public/logo192.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

export default MouseTracker;