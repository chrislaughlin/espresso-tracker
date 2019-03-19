import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
    icon: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: -24px;
  margin-top: -10px;
`;

const Icon: FunctionComponent<Props> = ({icon, onClick}) => {
    return (
        <div
            onClick={onClick}
        >
            <StyledIcon
                src={icon}
            />
        </div>
    );
};


export default Icon;

