import React, { FunctionComponent, useState } from 'react';

import Espresso, {NEW_ESPRESSO} from '../../types/espresso';
import GrindSettings from "../grind/GrindSettings";
import Grind from "../../types/grind";
import TampSetting from "../tamp/TampSetting";
import Tamp from "../../types/tamp";
import PressureComp from "../Pressure";
import Pressure from "../../types/pressure";
import ShotTime from "../shotTime/ShotTime";
import WeightOut from "../weightOut/WeightOut";

interface Props {
    addNewEntry: Function
}

const EspressoEntry:FunctionComponent<Props> = ({
    addNewEntry
}) => {
    const [data, setData] = useState<Espresso>(NEW_ESPRESSO);

    return (
        <div>
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
            {/*<ShotTime*/}
                {/*onTimeSet={(shotTime:number) => setData({...data, shotTime})}*/}
            {/*/>*/}
            {/*<WeightOut*/}
                {/*weightOut={data.weightOut}*/}
                {/*onWeightOutSet={(weightOut:number) => setData({...data, weightOut})}*/}
            {/*/>*/}
            {/*<button*/}
                {/*onClick={() => addNewEntry(data)}*/}
            {/*>*/}
                {/*ADD*/}
            {/*</button>*/}
            {/*<code>*/}
                {/*{JSON.stringify(data)}*/}
            {/*</code>*/}
        </div>
    );
};


export default EspressoEntry;

