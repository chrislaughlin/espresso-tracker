import React from 'react';
import styled from 'styled-components';

import Title from "../../components/title/Title";
import MainMenu from "./MainMenu";
import Logo from './logo.png';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLogo = styled.img.attrs({
    src: Logo,
    alt: 'Espresso Tracker Logo'
})`
    height: 180px;
    width: 185px;
    margin: 0 auto;
`;

const Home = () => {
    return (
        <StyledHome>
            <StyledLogo/>
            <Title/>
            <MainMenu/>
        </StyledHome>
    );
};


export default Home;

