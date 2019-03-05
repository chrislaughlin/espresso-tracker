import React, { useState } from 'react';

import StyledApp from './StyledAdd';

import Espresso from "../../types/espresso";
import EspressoEntry from "../../components/espressoEntry/EspressoEntry";
import Title from "../../components/title/Title";

const Add = () => {

    const [items, setItems] = useState([]);

    const addNewEntry = (item: Espresso) => {
        // @ts-ignore
        return setItems([...items, item]);
    };

    return (
        <StyledApp>
            <Title>
                ESPRESSO TRACKER
            </Title>
            <section>
                <EspressoEntry
                    addNewEntry={addNewEntry}
                />
            </section>
            <section>
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                        >
                            {JSON.stringify(item)}
                        </div>
                    )
                })}
            </section>
        </StyledApp>
    );
};

export default Add;
