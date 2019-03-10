import React, { Fragment, FunctionComponent } from 'react';

import Grind from '../../types/grind';
import NumberInput from "../common/NumberInput";
import Icon from "../common/Icon";
import GrindIcon from '../../img/GRIND.svg';
import WeightIcon from '../../img/WEIGHT.svg'

interface Props {
    onGrindSettingChanged: Function,
    grindSettings: Grind
}

const GrindSettings:FunctionComponent<Props> = ({grindSettings, onGrindSettingChanged}) => {

    const updateGrindSetting = (key:string) => (value:number) => {
        onGrindSettingChanged({
            ...grindSettings,
            [key]: value
        })
    };

    return (
        <Fragment>
            <Icon
                icon={GrindIcon}
            />
            <NumberInput
                value={grindSettings.grindLevel}
                label="grind level"
                onValueChanged={updateGrindSetting('grindLevel')}
            />
            <Icon
                icon={WeightIcon}
            />
            <NumberInput
                value={grindSettings.grindWeight}
                label="grind weight (g)"
                onValueChanged={updateGrindSetting('grindWeight')}
            />
        </Fragment>
    );
};


export default GrindSettings;

