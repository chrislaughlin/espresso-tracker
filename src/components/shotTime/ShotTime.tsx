import React, {FunctionComponent} from 'react';

import useStopClock from './useStopClock';
import Icon from "../common/Icon";
import TimerIcon from "../../img/TIME.svg";
import StyledEntryLabel from "../common/EntryLabel";

interface Props {
    onTimeSet: Function
}

const ShotTime: FunctionComponent<Props> = ({onTimeSet}) => {
    const { time, setIsStarted, isStarted } = useStopClock();
    return (
        <div>
            <Icon
                icon={TimerIcon}
            />
            <StyledEntryLabel>
                timer
            </StyledEntryLabel>
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

