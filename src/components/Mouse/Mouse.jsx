import React, { Component } from 'react';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({ x: event.clientX, y: event.clientY });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/* ...하지만 <p>가 아닌 다른것을 렌더링하려면 어떻게 해야 할까요? */}
                {/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;