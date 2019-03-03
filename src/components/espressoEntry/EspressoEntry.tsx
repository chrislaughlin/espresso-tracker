import React, { FunctionComponent, useState } from 'react';
import {set, lensPath, view, Lens} from 'ramda';

import Espresso, {NEW_ESPRESSO} from '../../types/espresso';

//Lens
const grindSettingLens = lensPath(['grind', 'grindSetting']);

const EspressoEntry:FunctionComponent = () => {
    const [data, setData] = useState<Espresso>(NEW_ESPRESSO);

    const onInputValueChange = (name:Lens) => {
        return (evt: React.FormEvent<HTMLInputElement>): void => {
            const newData:Espresso = set(name, evt.currentTarget.value, data);
            setData(newData);
        };
    };

    return (
        <div>
            <p>Enter espresso details</p>
            <label>Grind:</label>
            <input
                type="number"
                placeholder="Grind Setting"
                value={view(grindSettingLens, data)}
                onChange={onInputValueChange(grindSettingLens)}
            />
        </div>
    );
};


export default EspressoEntry;

