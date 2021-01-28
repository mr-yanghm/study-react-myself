import React from 'react';

const Clock = (props) => {
    const addInterval = (props) => {
        setInterval(() => {

        }, 1000);
    };

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
};

export default Clock;