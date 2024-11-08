import React from 'react';

const DESIRED_COLOR = "#1a5fb4";

const ColorBox = () => {
    const style = {
        width: '100px',
        height: '100px',
        backgroundColor: DESIRED_COLOR,
    };

    return <div style={style}></div>;
};

export default ColorBox;
