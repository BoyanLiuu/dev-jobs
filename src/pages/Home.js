/* eslint-disable jsx-a11y/anchor-is-valid */

// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

import { Header, Footer, JobCard, SearchBar } from './../components/index';
import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    /* .searchBar {
        padding: 0 2.4rem;
    } */
`;
function Home() {
    return (
        <HomeDiv>
            <SearchBar />
        </HomeDiv>
    );
}

export default Home;
