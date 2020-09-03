import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const e = React.createElement;
const rootElement = document.getElementById('root');

ReactDOM.render(
    e(App,rootElement.dataset),rootElement
);
