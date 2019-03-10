import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

const StyledTitle = styled(Link)`
    text-align: center;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    h1 {
        color: #FFFFFF;
        margin: 0;
        font-size: 42px;
        font-weight: 500;
    }
    h2 {
        color: #9A8275;
        margin: 0;
        font-weight: 300;
        font-size: 34px;
        letter-spacing: 10px;
        padding-left: 8px;
    }
    
`;

const Title: FunctionComponent = () => {
    return (
        <StyledTitle
            to="/"
        >
            <h1>espresso</h1>
            <h2>tracker</h2>
        </StyledTitle>
    );
};


export default Title;

