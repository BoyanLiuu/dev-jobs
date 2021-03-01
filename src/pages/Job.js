/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CompanyCard, JobDesc } from '../components/index';
import { Footer } from '../components/index';
import SkeletonCompanyCard from '../components/Job/SkeletonCompanyCard';
import SkeletonJobDesc from '../components/Job/SkeletonJobDesc';
import SkeletonJobFooter from '../components/SkeletonJobFooter';

const JobDiv = styled.div`
    /* height: 10vh; */
    margin: -1.5rem 5% 5rem;

    @media only screen and (min-width: 48rem) {
        margin: -4rem 5% 5rem;
    }

    @media only screen and (min-width: 62.5rem) {
        margin: -4rem 20% 5rem;
    }
`;

function Job(props) {
    let passed_state = props.location.state;
    console.log(passed_state);

    const [ready, setReady] = useState(false);

    const companyData = {
        "company": passed_state.data.company,
        "company_url": passed_state.data.company_url,
        "company_logo": passed_state.data.company_logo
    };

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 2000);
    }, []);

    return (
        <JobDiv>
            { ready ? <CompanyCard Data={companyData}/> : <SkeletonCompanyCard /> }
            { ready ?  <JobDesc Data={passed_state.data} /> : <SkeletonJobDesc /> }
            { ready ?  <Footer page='job' data={passed_state.data}/> : <SkeletonJobFooter page='job'/>}
        </JobDiv>
    );
}

export default Job;
