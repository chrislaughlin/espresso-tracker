import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Pressure from "../types/pressure";

const StyledPressureComp = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

interface StyledPressureOptionProps {
    selected:boolean
}

const StyledPressureOption = styled.div`
    width: 30%;
    height: 20px;
    border: 1px solid ${(props: StyledPressureOptionProps) => props.selected ? 'blue' : 'black'};
    padding: 10px;
    text-align: center;
    border-radius: 10px;
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
            <StyledPressureOption
                selected={pressure === Pressure.LOW}
                onClick={() => onPressureChanged(Pressure.LOW)}
            >
                {Pressure.LOW}
            </StyledPressureOption>
            <StyledPressureOption
                selected={pressure === Pressure.MEDIUM}
                onClick={() => onPressureChanged(Pressure.MEDIUM)}
            >
                {Pressure.MEDIUM}
            </StyledPressureOption>
            <StyledPressureOption
                selected={pressure === Pressure.HIGH}
                onClick={() => onPressureChanged(Pressure.HIGH)}
            >
                {Pressure.HIGH}
            </StyledPressureOption>
        </StyledPressureComp>
    );
};


export default PressureComp;

