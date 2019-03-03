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
            <b>Grind Settings</b>
            <div>
                <NumberInput
                    value={grindSettings.grindLevel}
                    label="Grind Level"
                    onValueChanged={updateGrindSetting('grindLevel')}
                />
                <NumberInput
                    value={grindSettings.grindWeight}
                    label="Grind Weight"
                    onValueChanged={updateGrindSetting('grindWeight')}
                />
            </div>
        </Fragment>
    );
};


export default GrindSettings;

