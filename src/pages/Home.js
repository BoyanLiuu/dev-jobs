/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer } from '../components/index';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { JobCard, SearchBar, SkeletonJobCard } from './../components/index';
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
    // skeleton loading
    const [ready, setReady] = useState(false);
    //store fetched data
    const [jobs, setJobs] = useState([]);
    //set page  pagination
    const [page, setPage] = useState(1);
    //store filter field
    const [filter, setFilter] = useState({
        description: '',
        location: '',
        fullTime: false,
    });
    //skeleton code
    const skeletonItems = Array(9)
        .fill()
        .map((item, index) => {
            return <SkeletonJobCard key={index} />;
        });

    const tmp = {
        jobType: 'Full Time',
        time: '5h ago',
        title: 'Senior Software Engineer',
        company: 'So Digital Inc.',
        keyword: 'Remote,Seoul, Tokyo, Mountain View, San Fransisco',
    };
    const renderJobItems = jobs.map((item, index) => {
        return <JobCard data={item} key={index} />;
    });

    //Use effect
    useEffect(() => {
        setTimeout(() => {
            // setReady(true);
        }, 1000);
        if (sessionStorage.jobs) {
            // fetch jobs data
            async function fetchMovies() {
                const endpoint = `https://api.allorigins.win/get?url=${encodeURIComponent(
                    `https://jobs.github.com/positions.json?page=${page}&description=${filter.description}&location=${filter.location}&full_time=${filter.fullTime}`
                )}`;
                //using await to wait for finishing fetching and store it into an array
                const result = await fetch(endpoint)
                    .then((res) => res.json())
                    .then((data) => JSON.parse(data.contents));
                console.log(result);
                setJobs(result);
            }
            fetchMovies();
            console.log('hello ');
        }
    }, []);

    useEffect(() => {
        //get data from sessionStorage,so when we close the page it will fetch data again
        if (sessionStorage.jobs) {
            setJobs(JSON.parse(sessionStorage.jobs));
            console.log('fetch from session storage');
        } else {
            console.log('fetch from api');
            console.log(jobs);
            sessionStorage.setItem('jobs', JSON.stringify(jobs));
        }
        setReady(true);
    }, [filter]);

    return (
        <HomeDiv>
            <SearchBar />

            <div className="job-lists">
                {ready ? renderJobItems : skeletonItems}
            </div>
            <Footer page="Home" />
        </HomeDiv>
    );
}

export default Home;
