import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    text-align: center;
    color: #642914;
`;

const Title: FunctionComponent = () => {
    return (
        <StyledTitle>
            ESPRESSO TRACKER
        </StyledTitle>
    );
};


export default Title;

