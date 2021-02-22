import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { StyledDesignCardContainer } from './JobCard';

const SkeletonDiv = styled(StyledDesignCardContainer)`
    .card__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
const SkeletonJobCard = () => {
    return (
        <SkeletonDiv>
            <SkeletonTheme color="#8e95e8" highlightColor="#a1a7f0">
                <Skeleton className="card__img--container" duration={6} />
                <div className="card__content">
                    <Skeleton height={20} width={`60%`} duration={2} />
                    <Skeleton height={15} width={`80%`} duration={2} />
                    <Skeleton height={15} width={`30%`} duration={2} />
                    <Skeleton height={15} width={`80%`} duration={2} />
                </div>
            </SkeletonTheme>
        </SkeletonDiv>
    );
};

export default SkeletonJobCard;
