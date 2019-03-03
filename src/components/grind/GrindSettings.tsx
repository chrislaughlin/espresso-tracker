import React, { Fragment, FunctionComponent } from 'react';

import Grind from '../../types/grind';

interface Props {
    onGrindSettingChanged: Function,
    grindSettings: Grind
}

const GrindSettings:FunctionComponent<Props> = ({grindSettings, onGrindSettingChanged}) => {

    const updateGrindSetting = (name:string):Function => (value:number) => {
        onGrindSettingChanged({
            ...grindSettings,
            [name]: value
        })
    };

    return (
        <Fragment>
            <span>Grind Settings</span>
            <div>
                <b>Grind Level</b>
                <span>
                    {grindSettings.grindLevel}
                </span>
                <button
                    onClick={() => updateGrindSetting('grindLevel')(grindSettings.grindLevel - 1)}
                >
                    -
                </button>
                <button
                    onClick={() => updateGrindSetting('grindLevel')(grindSettings.grindLevel + 1)}
                >
                    +
                </button>
            </div>
            <div>
                <b>Grind Weight</b>
                <input
                    value={grindSettings.grindWeight}
                    onChange={evt => updateGrindSetting('grindWeight')(evt.target.value)}
                    type="number"
                />
            </div>
        </Fragment>
    );
};


export default GrindSettings;

