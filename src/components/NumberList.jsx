import React from 'react';

const ListItem = (props) => {
    return <li>{props.value}</li>;
}

const NumberList = (props) => {
    const numbers = props.numbers;

    return (
        <ul>
            {
                numbers.map((number) =>
                    <ListItem key={number.toString()} value={number} />
                )
            }
        </ul>
    )
};

export default NumberList;