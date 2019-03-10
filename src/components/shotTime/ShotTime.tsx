import React, {FunctionComponent} from 'react';

import useStopClock from './useStopClock';
import Icon from "../common/Icon";
import TimerIcon from "../../img/TIME.svg";
import EntrySection from '../common/EntrySection';

interface Props {
    onTimeSet: Function
}

const ShotTime: FunctionComponent<Props> = ({onTimeSet}) => {
    const { time, setIsStarted, isStarted } = useStopClock();
    return (
        <EntrySection
            icon={
                <Icon
                    icon={TimerIcon}
                />
            }
            title="timer"
        >
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
        </EntrySection>
    );
};


export default ShotTime;

