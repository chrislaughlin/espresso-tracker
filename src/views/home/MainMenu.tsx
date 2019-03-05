import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

const StyledMainMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMenuItem = styled(Link)`
    border: 2px solid #9A8275;
    background-color: #F6EFE5;
    border-radius: 15px;
    width: 30%;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #9A8275;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
`;


const MainMenu: FunctionComponent = () => {
    return (
        <StyledMainMenu>
            <StyledMenuItem
                to="/add"
            >
                Enter Espresso
            </StyledMenuItem>
            <StyledMenuItem
                to="/search"
            >
                Search Espresso
            </StyledMenuItem>
        </StyledMainMenu>
    );
};


export default MainMenu;

