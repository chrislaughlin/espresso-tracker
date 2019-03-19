import React, { Fragment, FunctionComponent } from 'react';

import Grind from '../../types/grind';
import NumberInput from "../common/NumberInput";
import Icon from "../common/Icon";
import GrindIcon from '../../img/GRIND.svg';
import WeightIcon from '../../img/WEIGHT.svg'
import EntrySection from '../common/EntrySection';

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
            <EntrySection
                icon={
                    <Icon
                        icon={GrindIcon}
                    />
                }
                title="grind level"
            >
                <NumberInput
                    value={grindSettings.grindLevel}
                    onValueChanged={updateGrindSetting('grindLevel')}
                />
            </EntrySection>
            <EntrySection
                icon={
                    <Icon
                        icon={WeightIcon}
                    />
                }
                title="grind weight (g)"
            >
                <NumberInput
                    value={grindSettings.grindWeight}
                    onValueChanged={updateGrindSetting('grindWeight')}
                />
            </EntrySection>
        </Fragment>
    );
};


export default GrindSettings;

