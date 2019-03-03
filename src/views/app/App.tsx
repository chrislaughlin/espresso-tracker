import React, { useState } from 'react';

import StyledApp from './StyledApp';

import EspressoEntry from '../../components/espressoEntry/EspressoEntry';

const App = () => {

    const [items, setItems] = useState([]);

    return (
        <StyledApp>
            <header className="App-header">
                ESPRESSO TRACKER
            </header>
            <section>
                <EspressoEntry/>
            </section>
        </StyledApp>
    );
};

export default App;
