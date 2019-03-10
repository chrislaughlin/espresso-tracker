import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import AppRouter from "./router";
import {USER_KEY} from "./consts/localStorageKeys";

import uuid from 'uuid/v1';

//Setup new user data
let useKey = window.localStorage.getItem(USER_KEY);

if (!useKey) {
    window.localStorage.setItem(USER_KEY, uuid());
    useKey = window.localStorage.getItem(USER_KEY);
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

