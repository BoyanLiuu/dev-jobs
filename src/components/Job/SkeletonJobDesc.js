import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { MainDescWrapper, JobDescWrapper, JobTopSec} from './JobDesc';


const SkeletonMainDescWrapper = styled(MainDescWrapper)`
    height: fit-content;

    .text {
        margin: 0 0 1rem 0;
        display: block;
    }

    .job-apply {
        width: 100%;
        height: 25rem;
        background-color: var(--violet-color);
        .narrower-text {
            margin: 0 0 1rem 5%;
        }

        .narrower-text-title {
            margin: 4rem 0 3rem 5%;
        }
    }
`;
const SkeletonJobDescWrapper = styled(JobDescWrapper)`
    padding: 3rem 2rem 2rem;
`;
const SkeletonJobTopSec = styled(JobTopSec)`

   

`;

const SkeletonJobDesc = () => {
    return <SkeletonMainDescWrapper>
        <SkeletonJobDescWrapper>
            <SkeletonJobTopSec>
                <div className="top-section-texts">
                    <SkeletonTheme color="#b6c0d1" highlightColor="#cad2e0" height="100%">
                        <Skeleton className="text job-creation-time-and-type" width={`15rem`} duration={2} />
                        <Skeleton className="text job-title" width={`20rem`} duration={2} />
                        <Skeleton className="text job-location" width={`18rem`} duration={2} />
                    </SkeletonTheme>
                </div>

                <SkeletonTheme color="#8e95e8" highlightColor="rgba(89, 100, 224, 0.4)" height="rgba(89, 100, 224, 0.4)">
                    <Skeleton className="apply-btn" duration={2} />
                </SkeletonTheme>
            </SkeletonJobTopSec>
            
            <div className="job-mid-sec">
                <SkeletonTheme color="#b6c0d1" highlightColor="#cad2e0" height="100%">
                    <Skeleton className="text" width={`100%`} duration={2} count={15} />
                </SkeletonTheme>
            </div>
        </SkeletonJobDescWrapper>
        <div className="job-apply" >
            <SkeletonTheme color="#b6c0d1" highlightColor="#cad2e0" height="100%">
                <Skeleton className="narrower-text-title" height="2rem" width={`40%`} duration={2} />
                <Skeleton className="narrower-text" width={`90%`} duration={2} count={5} />
            </SkeletonTheme>
        </div>
    </SkeletonMainDescWrapper>
};

export default SkeletonJobDesc;