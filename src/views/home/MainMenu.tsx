import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

const StyledMainMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMenuItem = styled.div`
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
`;


const MainMenu: FunctionComponent = () => {
    return (
        <StyledMainMenu>
            <StyledMenuItem>
                Enter Espresso
            </StyledMenuItem>
            <StyledMenuItem>
                Search Espresso
            </StyledMenuItem>
        </StyledMainMenu>
    );
};


export default MainMenu;

