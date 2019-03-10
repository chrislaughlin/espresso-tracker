import React, { createContext } from 'react';
import uuid from "uuid/v1";

import {USER_KEY} from "../consts/localStorageKeys";

//Setup new user data
let useKey = window.localStorage.getItem(USER_KEY);

if (!useKey) {
    window.localStorage.setItem(USER_KEY, uuid());
    useKey = window.localStorage.getItem(USER_KEY);
}

const UserContext = createContext(useKey);

export default UserContext;

