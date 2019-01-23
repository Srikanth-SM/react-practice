import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Time, ActionLink, Toggle, LoginControl, Greeting } from './App';
import * as serviceWorker from './serviceWorker';
// import { ActionLink } from './App';

ReactDOM.render(
    <div>
        <App />
        <Time />
        <Time />
        <Time />
        <Time />
        <Time />
        <Time />
        <ActionLink />
        <Toggle />
        <LoginControl isLoggedIn={true} />
        {/* <Greeting isLoggedIn={true} /> */}

    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
