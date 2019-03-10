import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Tamp from "../../types/tamp";
import StyledSelectableItem from "../common/SelectableItem";
import StyledEntryLabel from "../common/EntryLabel";
import TampIcon from "../../img/TAMP.svg";
import Icon from "../common/Icon";

const StyledTampContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    > div {
      display: flex;
      width: 100%;
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
            <Icon
                icon={TampIcon}
            />
            <StyledEntryLabel>tamp style</StyledEntryLabel>
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

