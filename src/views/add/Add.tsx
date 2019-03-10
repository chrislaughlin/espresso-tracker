import React, { useContext, FunctionComponent } from 'react';

import StyledApp from './StyledAdd';

import Espresso from "../../types/espresso";
import EspressoEntry from "../../components/espressoEntry/EspressoEntry";
import Title from "../../components/title/Title";
import firebase from '../../firebase';
import UserContext from '../../context/userContext';

interface Props {
    history: any
}

const Add:FunctionComponent<Props> = ({history}) => {

    const userKey = useContext(UserContext) || '';

    const addNewEntry = (item: Espresso) => {
        console.log(item);
        const itemsRef = firebase.database().ref(userKey);
        itemsRef.push(item);
        history.push('/search')
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
