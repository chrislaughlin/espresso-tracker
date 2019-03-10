import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Espresso, {NEW_ESPRESSO} from '../../types/espresso';
import GrindSettings from "../grind/GrindSettings";
import Grind from "../../types/grind";
import TampSetting from "../tamp/TampSetting";
import Tamp from "../../types/tamp";
import PressureComp from "../Pressure";
import Pressure from "../../types/pressure";
import ShotTime from "../shotTime/ShotTime";
import WeightOut from "../weightOut/WeightOut";
import Icon from "../common/Icon";
import AddIcon from "../../img/add.svg";

interface Props {
    addNewEntry: Function
}

const StyledEntry = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EspressoEntry:FunctionComponent<Props> = ({
    addNewEntry
}) => {
    const [data, setData] = useState<Espresso>(NEW_ESPRESSO);

    return (
        <StyledEntry>
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
            <ShotTime
                onTimeSet={(shotTime:number) => setData({...data, shotTime})}
            />
            <WeightOut
                weightOut={data.weightOut}
                onWeightOutSet={(weightOut:number) => setData({...data, weightOut})}
            />
            <Icon
                icon={AddIcon}
                onClick={() => addNewEntry(data)}
            />
        </StyledEntry>
    );
};


export default EspressoEntry;

