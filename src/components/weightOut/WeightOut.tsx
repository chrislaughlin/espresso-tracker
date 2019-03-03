import React, {FunctionComponent} from 'react';
import NumberInput from "../common/NumberInput";

interface Props {
    weightOut: number,
    onWeightOutSet: Function
}

const WeightOut: FunctionComponent<Props> = ({weightOut, onWeightOutSet}) => {
    return (
        <NumberInput
            value={weightOut}
            label="Weight Out (g)"
            onValueChanged={onWeightOutSet}
        />
    );
};


export default WeightOut;

