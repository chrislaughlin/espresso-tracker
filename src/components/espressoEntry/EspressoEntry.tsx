import React, { FunctionComponent, useState } from 'react';

import Espresso, {NEW_ESPRESSO} from '../../types/espresso';
import GrindSettings from "../grind/GrindSettings";
import Grind from "../../types/grind";
import TampSetting from "../tamp/TampSetting";
import Tamp from "../../types/tamp";
import PressureComp from "../Pressure";
import Pressure from "../../types/pressure";

interface Props {
    addNewEntry: Function
}

const EspressoEntry:FunctionComponent<Props> = ({
    addNewEntry
}) => {
    const [data, setData] = useState<Espresso>(NEW_ESPRESSO);

    return (
        <div>
            <p>Enter espresso details</p>
            <label>Grind:</label>
            <GrindSettings
                grindSettings={data.grind}
                onGrindSettingChanged={(grindSettings:Grind) => setData({...data, grind:grindSettings})}
            />
            <TampSetting
                tamp={data.tamp}
                onTampUpdated={(tamp:Tamp) => setData({...data, tamp})}
            />
            <PressureComp
                pressure={data.pressure}
                onPressureChanged={(pressure:Pressure) => setData(({...data, pressure}))}
            />
            <button
                onClick={() => addNewEntry(data)}
            >
                ADD
            </button>
        </div>
    );
};


export default EspressoEntry;

