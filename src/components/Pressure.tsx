import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Pressure from "../types/pressure";
import StyledSelectableItem from "./common/SelectableItem";
import StyledEntryLabel from "./common/EntryLabel";

const StyledPressureComp = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledPressureCompSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

interface Props {
    pressure: Pressure,
    onPressureChanged: Function
}

const PressureComp: FunctionComponent<Props> = ({
    pressure,
    onPressureChanged
}) => {
    return (
        <StyledPressureComp>
            <StyledEntryLabel>
                Pressure
            </StyledEntryLabel>
            <StyledPressureCompSection>
                <StyledSelectableItem
                    width="30%"
                    selected={pressure === Pressure.LOW}
                    onClick={() => onPressureChanged(Pressure.LOW)}
                >
                    {Pressure.LOW}
                </StyledSelectableItem>
                <StyledSelectableItem
                    selected={pressure === Pressure.MEDIUM}
                    onClick={() => onPressureChanged(Pressure.MEDIUM)}
                >
                    {Pressure.MEDIUM}
                </StyledSelectableItem>
                <StyledSelectableItem
                    selected={pressure === Pressure.HIGH}
                    onClick={() => onPressureChanged(Pressure.HIGH)}
                >
                    {Pressure.HIGH}
                </StyledSelectableItem>
            </StyledPressureCompSection>
        </StyledPressureComp>
    );
};


export default PressureComp;

