import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const Hello = ({ name }) => {
    return (
        <h2>Hello, {name}</h2>
    ); 
};

export default Hello;