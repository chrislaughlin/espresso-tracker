import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import useStopClock from './useStopClock';
import Icon from "../common/Icon";
import TimerIcon from "../../img/TIME.svg";
import EntrySection from '../common/EntrySection';
import StyledSelectableItem from "../common/SelectableItem";

interface Props {
    onTimeSet: Function
}

const StyledTime = styled.span`
  font-size: 24px;
`;

const StyledSeconds = styled.span`
  margin-bottom: 10px;
`;

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
            additionalChildStyles={
                `
                flex-direction: column;
                align-items: center;
                `
            }
        >
            <StyledTime>00:{time < 10 ? `0${time}` : time}</StyledTime>
            <StyledSeconds>seconds</StyledSeconds>
            <StyledSelectableItem
                width="22%"
                selected={isStarted}
                onClick={() => {
                    setIsStarted(!isStarted);
                    if (isStarted) {
                        onTimeSet(time);
                    }
                }}
            >
                start / stop
            </StyledSelectableItem>
        </EntrySection>
    );
};


export default ShotTime;

