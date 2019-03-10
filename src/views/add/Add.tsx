import React, { useContext } from 'react';
import { useList } from 'react-firebase-hooks/database';

import StyledApp from './StyledAdd';

import Espresso from "../../types/espresso";
import EspressoEntry from "../../components/espressoEntry/EspressoEntry";
import Title from "../../components/title/Title";
import firebase from '../../firebase';
import UserContext from '../../context/userContext';

const Add = () => {
    const userKey = useContext(UserContext) || '';
    const { error, loading, value } = useList(firebase.database().ref(userKey));

    const addNewEntry = (item: Espresso) => {
        const itemsRef = firebase.database().ref(userKey);
        itemsRef.push(item);
    };

    return (
        <StyledApp>
            <Title/>
            <section>
                <EspressoEntry
                    addNewEntry={addNewEntry}
                />
            </section>
            <p>
                {error && <b>ERROR: {error}</b>}
                {loading && <b>LOADING.....</b>}
                {!loading && JSON.stringify(value)}
            </p>
        </StyledApp>
    );
};

export default Add;
