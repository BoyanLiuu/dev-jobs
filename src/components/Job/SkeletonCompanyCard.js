import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { StyledJobTitleDiv } from './CompanyCard';

const SkeletonCard = styled(StyledJobTitleDiv)`

    height: 23rem;
    position: relative;

    .company-info-wrapper {
        width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            margin: 0 0 2rem 2.2rem;
            width: 20rem;
            height: 2rem;
        }

        .skeleton-desc {
            margin: 0 0 1rem 4.15rem;
        }

    }
    
    .button-position{
        .skeleton-company-apply-btn {
            width: 14.8rem;
            height: 4.8rem;
            position: absolute;
            left: calc(45vw - 7.5rem);
            bottom: 3rem;
        }
    }
    


    @media only screen and (min-width: 37.5rem) {
        height: 13.4rem;

        .company-logo-wrapper {
            position: absolute;
            top: 0;
            height: 13.4rem;
            width: 13.4rem;
        }

        .company-info-wrapper {
            height: 14rem;
            padding: 4.3rem 0;
            position: absolute;
            top: 0;
            left: 18.5rem;

            span {
                margin: 0 -10rem 2.2rem 0;
            }

            .skeleton-company-name {
                width: 20rem;
                height: 2rem;
            }

            .skeleton-desc {
                margin: 0;
                
            }

        }

        .button-position{
            position: absolute;
            right: 18rem;
            bottom: 3.7rem;

            .skeleton-company-apply-btn {
                width: 14.6rem;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }

       
    }
`;

const SkeletonCompanyCard = () => {
    return (
        <SkeletonCard>
            <SkeletonTheme color="#b6c0d1" highlightColor="#cad2e0" height="100%">
                <Skeleton className="company-logo-wrapper" duration={2} />
                <div className="company-info-wrapper">
                    <Skeleton className="skeleton-company-name" height={25} width={`70%`} duration={2} />
                    <Skeleton className="skeleton-desc" height={16} width={`50%`} duration={2} />
                </div>
            </SkeletonTheme>
            <div className="button-position">
                <SkeletonTheme color="#8e95e8" highlightColor="rgba(89, 100, 224, 0.4)" height="rgba(89, 100, 224, 0.4)">
                    <Skeleton className="skeleton-company-apply-btn" duration={2} />
                </SkeletonTheme>
            </div>
           
        </SkeletonCard>
    );
};

export default SkeletonCompanyCard;