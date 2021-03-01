/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer } from '../components/index';
// import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';

import { JobCard, SearchBar, SkeletonJobCard } from './../components/index';
import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .job-lists {
        width: 90vw;
        margin: 3.2rem auto 0;
        display: grid;
        row-gap: 4.9rem;
        transition: all 0.08s ease;
    }
    @media (min-width: 768px) {
        .job-lists {
            grid-template-columns: 1fr 1fr;
            gap: 6.5rem 1.8rem;
        }
    }

    @media (min-width: 1440px) {
        .job-lists {
            width: 75%;
            grid-template-columns: repeat(3, 1fr);
            gap: 6.5rem 3rem;
        }
    }
`;
function Home() {
    let renderJobItems;
    // hook set up
    const [ready, setReady] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false)
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


    // fetch jobs data
    async function fetchMovies() {
        const endpoint = `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://jobs.github.com/positions.json?page=${page}&description=${filter.description}&location=${filter.location}&full_time=${filter.fullTime}`
        )}`;
        setReady(false);
        //using await to wait for finishing fetching and store it into an array
        const result = await fetch(endpoint)
            .then((res) => res.json())
            .then((data) => JSON.parse(data.contents));
        const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
        await wait(2000);

        setJobs(prev => [...prev, ...result]);
        setReady(true);
        setHasMore(result.length > 0);
    }


    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, page]);

 const observer = useRef(null);
    const lastJobElementRef = useCallback(node => {
        if (!ready) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            console.log(entries);
            if (entries[0].isIntersecting && hasMore) {
            setPage(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node);
    }, [ready, hasMore, page])

    if(ready){
        renderJobItems = jobs.map((item, index) => {
            if(jobs.length === index + 1)
                return <JobCard  ref={lastJobElementRef} data={item} key={index} last ="true" />;
            else
                return <JobCard ref={null} data={item} key={index} last ="false" />;
        });
    }



    return (
        <HomeDiv>
            <SearchBar setFilter={setFilter} />

            <div className="job-lists">
                {ready ? renderJobItems : skeletonItems}
            </div>
            <Footer page="Home" />
        </HomeDiv>
    );
}

export default Home;
