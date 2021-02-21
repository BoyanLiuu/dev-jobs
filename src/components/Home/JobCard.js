/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';

export const StyledDesignCardContainer = styled.div`
    width: 32.7rem;
    height: 22.8rem;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 0.6rem;
    position: relative;
    .card__img--container {
        top: -2.5rem;
        left: 3.2rem;
        position: absolute;
        width: 5rem;
        height: 5rem;
        background: pink;
        border-radius: 1.5rem;
        padding: 1rem;
        .card__img {
            width: 100%;
        }
    }
    .card__content {
        margin: 4.9rem 0 0 3.2rem;
        width: 28.6rem;
        height: 14.7rem;
        .card__top,
        .card__company {
            font-size: 1.6rem;
            line-height: 2.1rem;
            color: var(--dark-grey-color);
        }
        .card__dot {
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            background-color: var(--dark-grey-color);
            border-radius: 50%;
            margin: 0 1.2rem 0.4rem 1.4rem;
        }
        .card__title {
            margin: 1.3rem 0 1rem 0;
            font-size: 2rem;
            line-height: 2.7rem;
            color: ${(props) => props.theme.cardTitleColor};
            transition: color ease-in-out 0.2s;
        }
        .card__locations {
            color: var(--violet-color);
            font-size: 1.4rem;
            line-height: 1.9rem;
            margin-top: 2.1rem;
        }
    }
    @media (min-width: 768px) {
        width: 33.9rem;
    }

    @media (min-width: 1440px) {
        width: 35rem;
    }
`;

const JobCard = () => {
    return (
        <StyledDesignCardContainer>
            <div className="card__img--container">
                <img
                    src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3FXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cd6884e81ca6cf0597d6b19e230846ad2ae4408b/PB_logo_berry.png"
                    alt="company logo"
                    className="card__img "
                />
            </div>
            <div className="card__content">
                <div className="card__top">
                    <span className="card__hour"> 5h ago</span>
                    <div className="card__dot" />
                    <span className="card__full"> Full Time</span>
                </div>

                <p className="card__title"> Senior Software Engineer</p>
                <p className="card__company"> So Digital Inc.</p>

                <p className="card__locations">
                    Remote,Seoul, Tokyo, Mountain View, San Fransisco
                </p>
            </div>
        </StyledDesignCardContainer>
    );
};

export default JobCard;
