/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer } from '../components/index';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

import { JobCard, SearchBar } from './../components/index';
import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .job-lists {
        margin-top: 3.2rem;
        display: grid;
        row-gap: 4.9rem;
        transition: all 0.3s ease;
    }
    @media (min-width: 768px) {
        .job-lists {
            width: 68.9rem;
            /* row-gap: 4.9rem; */
            grid-template-columns: 1fr 1fr;
            gap: 6.5rem 1rem;
        }
    }

    @media (min-width: 1440px) {
        .job-lists {
            width: 110rem;
            grid-template-columns: repeat(3, 1fr);
            gap: 6.5rem 3rem;
        }
    }
`;
function Home() {
    const tmp = {
        jobType: 'Full Time',
        time: '5h ago',
        title: 'Senior Software Engineer',
        company: 'So Digital Inc.',
        keyword: 'Remote,Seoul, Tokyo, Mountain View, San Fransisco',
    };
    const renderItems = () => {
        let output = [];
        for (let i = 0; i < 10; i++) {
            output.push(<JobCard data={tmp} key={i} />);
        }
        return output;
    };
    return (
        <HomeDiv>
            <SearchBar />

            <div className="job-lists">{renderItems()}</div>
            <Footer page="Home"/>
        </HomeDiv>
    );
}

export default Home;
