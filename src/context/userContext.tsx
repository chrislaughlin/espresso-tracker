import React, { createContext } from 'react';
import {USER_KEY} from "../consts/localStorageKeys";

const UserContext = createContext(window.localStorage.getItem(USER_KEY));

export default UserContext;

