import React, {FunctionComponent} from 'react';

import useStopClock from './useStopClock';

interface Props {
    onTimeSet: Function
}

const ShotTime: FunctionComponent<Props> = ({onTimeSet}) => {
    const { time, setIsStarted, isStarted } = useStopClock();
    return (
        <div>
            <span>TIME: {time}</span>
            <button
                onClick={() => {
                    setIsStarted(!isStarted);
                    if (isStarted) {
                        onTimeSet(time);
                    }
                }}
            >
                {isStarted ? 'STOP' : 'START'}
            </button>
        </div>
    );
};


export default ShotTime;

