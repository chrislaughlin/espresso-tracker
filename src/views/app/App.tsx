import React, { useState } from 'react';

import StyledApp from './StyledApp';

import Espresso from "../../types/espresso";
import EspressoEntry from "../../components/espressoEntry/EspressoEntry";

const App = () => {

    const [items, setItems] = useState([]);

    const addNewEntry = (item: Espresso) => {
        // @ts-ignore
        return setItems([...items, item]);
    };

    return (
        <StyledApp>
            <header className="App-header">
                ESPRESSO TRACKER
            </header>
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

export default App;
