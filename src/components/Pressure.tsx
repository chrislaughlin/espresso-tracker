import React, {FunctionComponent} from 'react';

import Pressure from "../types/pressure";
import StyledSelectableItem from "./common/SelectableItem";
import Icon from "./common/Icon";
import PressureIcon from '../img/PRESSURE.svg';
import EntrySection from './common/EntrySection';

interface Props {
    pressure: Pressure,
    onPressureChanged: Function
}

const PressureComp: FunctionComponent<Props> = ({
    pressure,
    onPressureChanged
}) => {
    return (
        <EntrySection
            icon={
                <Icon
                    icon={PressureIcon}
                />
            }
            title="machine pressure"
        >
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
        </EntrySection>
    );
};


export default PressureComp;

