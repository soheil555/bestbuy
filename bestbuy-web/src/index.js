import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import logo from './components/images/logo.png'

const element = <link rel="shortcut icon" type="image/x-icon" href={logo} />;

ReactDOM.render(
    <App />,document.getElementById('root')
);
