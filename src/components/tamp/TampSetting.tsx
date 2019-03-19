import React, {FunctionComponent} from 'react';

import Tamp from "../../types/tamp";
import StyledSelectableItem from "../common/SelectableItem";
import TampIcon from "../../img/TAMP.svg";
import Icon from "../common/Icon";
import EntrySection from '../common/EntrySection';

interface Props {
    tamp: Tamp,
    onTampUpdated:Function
}

const TampSetting:FunctionComponent<Props> = ({
    tamp,
    onTampUpdated
}) => {
    return (
        <EntrySection
            icon={
                <Icon
                    icon={TampIcon}
                />
            }
            title="tamp style"
        >
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
        </EntrySection>
    );
};


export default TampSetting;

