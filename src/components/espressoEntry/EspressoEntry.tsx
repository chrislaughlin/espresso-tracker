import React, { FunctionComponent, useReducer } from 'react';
import styled from 'styled-components';

import {NEW_ESPRESSO} from '../../types/espresso';
import GrindSettings from "../grind/GrindSettings";
import Grind from "../../types/grind";
import TampSetting from "../tamp/TampSetting";
import Tamp from "../../types/tamp";
import PressureComp from "../Pressure";
import Pressure from "../../types/pressure";
import ShotTime from "../shotTime/ShotTime";
import WeightOut from "../weightOut/WeightOut";
import AddEntry from "../add/addEntry";
import Notes from "../notes/Notes";
import espressoReducer, { ACTIONS } from './espressoReducer';

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
    const [state, dispatch] = useReducer(espressoReducer, NEW_ESPRESSO);

    return (
        <StyledEntry>
            <GrindSettings
                grindSettings={state.grind}
                onGrindSettingChanged={(grindSettings:Grind) => {
                    dispatch({type: ACTIONS.GRIND, payload:grindSettings})
                }}
            />
            <TampSetting
                tamp={state.tamp}
                onTampUpdated={(tamp:Tamp) => {
                    dispatch({type: ACTIONS.TAMP, payload:tamp})
                }}
            />
            <PressureComp
                pressure={state.pressure}
                onPressureChanged={(pressure:Pressure) => {
                    dispatch({type: ACTIONS.PRESSURE, payload:pressure})
                }}
            />
            <ShotTime
                onTimeSet={(shotTime:number) => {
                    dispatch({type: ACTIONS.SHOT_TIME, payload:shotTime})
                }}
            />
            <WeightOut
                weightOut={state.weightOut}
                onWeightOutSet={(weightOut:number) => {
                    dispatch({type: ACTIONS.WEIGHT_OUT, payload:weightOut})
                }}
            />
            <Notes
                tags={state.notes}
                onTagsChanged={(tags:Array<string>) => {
                    dispatch({type: ACTIONS.NOTES, payload:tags})
                }}
            />
            <AddEntry
                addNewEntry={() => addNewEntry(state)}
            />
        </StyledEntry>
    );
};


export default EspressoEntry;

