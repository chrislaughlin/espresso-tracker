import React, {FunctionComponent} from 'react';

import NumberInput from "../common/NumberInput";
import EntrySection from '../common/EntrySection';
import Icon from "../common/Icon";
import LiquidOutIcon from "../../img/LIQUIDOUT.svg";

interface Props {
    weightOut: number,
    onWeightOutSet: Function
}

const WeightOut: FunctionComponent<Props> = ({weightOut, onWeightOutSet}) => {
    return (
        <EntrySection
            icon={
                <Icon
                    icon={LiquidOutIcon}
                />
            }
            title="weight out (g)"
        >
            <NumberInput
                value={weightOut}
                onValueChanged={onWeightOutSet}
            />
        </EntrySection>
    );
};


export default WeightOut;

