/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import location_logo from './../../assets/images/location.svg';
export const StyledDesignCardContainer = styled.div`
    width: 100%;
    min-height: 23.1rem;
    height: fit-content;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 0.6rem;
    position: relative;
    transition: box-shadow ease-in 0.2s;

    .card__img--container {
        top: -2.5rem;
        left: 3.2rem;
        position: absolute;
        width: 5rem;
        height: 5rem;
        background: white;
        border: solid 0.1rem ${props => props.theme.cardShadowColor};
        box-shadow: 0.6rem 0.7rem 0 -0.1rem ${props => props.theme.cardLightShadowColor};
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
        margin: 4.9rem 8% 2rem;
        width: 84%;
        height: 15rem;
        .card__top,
        .card__company {
            display: block;
            width: 100%;
            height: 2.1rem;
            overflow: hidden;
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
        .card__link{
            height: 6.5rem;
            width: 100%;
            display: block;
            padding: 0.5rem 1rem 0;
            margin: 0.8rem 0 0.3rem -1rem;
            .card__title {
                height: 5.5rem;
                width: 100%;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 2rem;
                line-height: 2.7rem;
                color: ${(props) => props.theme.cardTitleColor};
                transition: color ease-in-out 0.2s;
            }
        }
        

        .card__link:hover {
            border-left: solid 0.2rem var(--violet-color);
            background-color: rgba(89, 100, 224, 0.1);
            border-radius: 0 0.6rem 0.6rem 0;
            margin: 0.8rem 0 0.3rem -1.2rem;
        }

        .card__locations {
            color: var(--violet-color);
            font-size: 1.4rem;
            line-height: 1.9rem;
            margin-top: 2.1rem;
        }


    }

    :hover {
        
        box-shadow:  1rem 1.2rem 0rem -0.2rem ${props => props.theme.cardShadowColor};

        .card__content{
            height: min-content;
            .card__link {
                min-height: 5.5rem;
                height: min-content;
                .card__title {
                    min-height: 6rem;
                    height: min-content;
                }

            }

            .card__top,
            .card__company {
                min-height: 2.1rem;
                height: min-content;
            }
        }
    }

`;

const JobCard = ({ data }) => {
    let { company, company_logo, type, location, created_at, title, id } = data;
    if (company_logo === null || company_logo === '')
        company_logo = location_logo;

    // console.log(created_at);
    // const daysElapsed =
    //     (Date.now() - new Date(created_at)) / (1000 * 60 * 60 * 24);
    // var elapsedString = '';
    // if (daysElapsed > 7) {
    //     elapsedString = `${Math.floor(daysElapsed / 7)}w ago`;
    // } else if (Math.floor(daysElapsed * 24) === 0) {
    //     elapsedString = `within an hour`;
    // } else if (Math.floor(daysElapsed) === 0) {
    //     elapsedString = `${Math.floor(daysElapsed * 24)}h ago`;
    // } else {
    //     elapsedString = `${Math.floor(daysElapsed)}d ago`;
    // }

    const daysElapsed = '5 days ago';
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
                    <span className="card__hour">{daysElapsed}</span>
                    <div className="card__dot" />
                    <span className="card__full">{type}</span>
                </div>

                <Link className="card__link" to={`job/${id}`}>
                    <p className="card__title">{title}</p>
                </Link>
                <p className="card__company">{company}</p>

                <p className="card__locations">{location}</p>
            </div>
        </StyledDesignCardContainer>
    );
};

export default JobCard;
