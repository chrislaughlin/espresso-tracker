import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
    icon: string,
    onClick?: Function
}

const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: -24px;
  margin-top: -10px;
`;

const Icon: FunctionComponent<Props> = ({icon}) => {
    return (
        <StyledIcon src={icon}/>
    );
};


export default Icon;

