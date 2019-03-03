import React, { Fragment, FunctionComponent } from 'react';

import Grind from '../../types/grind';
import NumberInput from "../common/NumberInput";

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
            <NumberInput
                value={grindSettings.grindLevel}
                label="Grind Level"
                onValueChanged={updateGrindSetting('grindLevel')}
            />
            <NumberInput
                value={grindSettings.grindWeight}
                label="Grind Weight (g)"
                onValueChanged={updateGrindSetting('grindWeight')}
            />
        </Fragment>
    );
};


export default GrindSettings;

