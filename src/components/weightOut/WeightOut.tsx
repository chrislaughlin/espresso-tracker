import React, {FunctionComponent} from 'react';

interface Props {
    weightOut: number,
    onWeightOutSet: Function
}

const WeightOut: FunctionComponent<Props> = ({weightOut, onWeightOutSet}) => {
    return (
        <div>
            <b>Weight Out</b>
            <input
                value={weightOut}
                type="number"
                onChange={evt => onWeightOutSet(evt.target.value)}
            />
        </div>
    );
};


export default WeightOut;

