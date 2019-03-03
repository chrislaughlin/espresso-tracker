import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Tamp from "../../types/tamp";
import StyledSelectableItem from "../common/SelectableItem";
import StyledEntryLabel from "../common/EntryLabel";

const StyledTampContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    > div {
      display: flex;
    }
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
            <StyledEntryLabel>Tamp</StyledEntryLabel>
            <div>
                <StyledSelectableItem
                    selected={tamp === Tamp.LEVEL}
                    onClick={() => onTampUpdated(Tamp.LEVEL)}
                >
                    {Tamp.LEVEL}
                </StyledSelectableItem>
                <StyledSelectableItem
                    selected={tamp === Tamp.LEVEL_SPIN}
                    onClick={() => onTampUpdated(Tamp.LEVEL_SPIN)}
                >
                    {Tamp.LEVEL_SPIN}
                </StyledSelectableItem>
            </div>
        </StyledTampContainer>
    );
};


export default TampSetting;

