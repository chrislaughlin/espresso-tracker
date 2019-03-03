import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Tamp from "../../types/tamp";

const StyledTampContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

interface StyledTampOptionProps {
    selected:boolean
}

const StyledTampOption = styled.div`
    width: 50%;
    height: 20px;
    border: 1px solid ${(props: StyledTampOptionProps) => props.selected ? 'blue' : 'black'};
    padding: 10px;
    text-align: center;
    border-radius: 10px;
`;

interface Props {
    tamp: Tamp,
    onTampUpdated:Function
}

const TampSetting:FunctionComponent<Props> = ({
    tamp,
    onTampUpdated
}) => {
    return (
        <StyledTampContainer>
            <StyledTampOption
                selected={tamp === Tamp.LEVEL}
                onClick={() => onTampUpdated(Tamp.LEVEL)}
            >
                {Tamp.LEVEL}
            </StyledTampOption>
            <StyledTampOption
                selected={tamp === Tamp.LEVEL_SPIN}
                onClick={() => onTampUpdated(Tamp.LEVEL_SPIN)}
            >
                {Tamp.LEVEL_SPIN}
            </StyledTampOption>
        </StyledTampContainer>
    );
};


export default TampSetting;

