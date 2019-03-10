import React, {FunctionComponent, useContext} from 'react';

import UserContext from "../../context/userContext";
import {useList} from "react-firebase-hooks/database";
import firebase from "../../firebase";
import Title from "../../components/title/Title";

const Search: FunctionComponent = () => {
    const userKey = useContext(UserContext) || '';
    const { error, loading, value } = useList(firebase.database().ref(userKey));

    return (
        <div>
            <Title/>
            {error && <b>ERROR: {error}</b>}
            {loading && <b>LOADING.....</b>}
            {!loading && JSON.stringify(value)}
        </div>
    );
};


export default Search;

