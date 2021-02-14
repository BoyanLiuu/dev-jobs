/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { Header, Footer, JobCard, SearchBar } from './../components/index';
import styled from 'styled-components';

const HomeDiv = styled.div``;
function Home() {
    return (
        <HomeDiv>
            <GlobalStyle />
            <Header />
        </HomeDiv>
    );
}

export default Home;
