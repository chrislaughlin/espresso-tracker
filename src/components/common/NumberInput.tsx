import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import StyledEntryLabel from "./EntryLabel";

interface Props {
    label: string,
    value: number,
    onValueChanged: Function
}

const StyledNumberInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 32px;
    > div {
      display: flex;
      align-items: center;
      > span {
          margin-right: 12px;
          font-size: 24px;
          color: #9A8275;
      }
      > svg {
        margin-right: 12px;
      }
    }
`;

const NumberInput: FunctionComponent<Props> = ({
    label,
    value,
    onValueChanged
}) => {
    return (
        <StyledNumberInput>
            <StyledEntryLabel>{label}</StyledEntryLabel>
            <div>
                <span>{value}</span>
                <FaMinus
                    onClick={() => onValueChanged(value - 1)}
                    size="24px"
                    color="#9A8275"
                />
                <FaPlus
                    onClick={() => onValueChanged(value + 1)}
                    size="24px"
                    color="#9A8275"
                />
            </div>
        </StyledNumberInput>
    );
};


export default NumberInput;

