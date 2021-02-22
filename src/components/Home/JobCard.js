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
        display: flex;
        justify-content: center;
        align-items: center;
        .card__img {
            width: 4rem;
            height: 4rem;
            object-fit: contain;
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

const JobCard = ({ data }) => {
    let { company, company_logo, type, location, created_at, title } = data;
    return (
        <StyledDesignCardContainer>
            <div className="card__img--container">
                <img
                    src={company_logo}
                    alt="company logo"
                    className="card__img "
                />
            </div>
            <div className="card__content">
                <div className="card__top">
                    <span className="card__hour"> 5h ago</span>
                    <div className="card__dot" />
                    <span className="card__full">{type}</span>
                </div>

                <p className="card__title">{title}</p>
                <p className="card__company">{company}</p>

                <p className="card__locations">{location}</p>
            </div>
        </StyledDesignCardContainer>
    );
};

export default JobCard;
