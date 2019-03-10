import React, { useContext } from 'react';

import StyledApp from './StyledAdd';

import Espresso from "../../types/espresso";
import EspressoEntry from "../../components/espressoEntry/EspressoEntry";
import Title from "../../components/title/Title";
import firebase from '../../firebase';
import UserContext from '../../context/userContext';

const Add = () => {
    const userKey = useContext(UserContext) || '';

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
        </StyledApp>
    );
};

export default Add;
