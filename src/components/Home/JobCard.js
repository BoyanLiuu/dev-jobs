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

        transition: border ease 0.2s, box-shadow ease 0.2s;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .card__img {
            width: 3rem;
            height: 3rem;
            object-fit: contain;
        }
    }

    .card__img--container:hover {
        border: solid 0.1rem var(--light-violet-color);
        box-shadow: 0.6rem 0.7rem 0 -0.1rem var(--half-light-violet-color);
    }
    
    .card__content {
        margin: 4.9rem 8% 2rem;
        width: 84%;
        min-height: 15rem;
        max-height: 15rem;
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
            width: 2.1rem;
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
        }
        .card__link{
            min-height: 6.5rem;
            max-height: 6.5rem;
            width: 100%;
            display: block;
            padding: 0.5rem 1rem 0;
            margin: 0.8rem 0 0.3rem -1rem;
            transition: max-height ease-in-out 0.2s;

            .card__title {
                min-height: 5.5rem;
                max-height: 5.5rem;
                width: 100%;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 2rem;
                line-height: 2.7rem;
                color: ${(props) => props.theme.cardTitleColor};
                transition: color ease-in-out 0.2s, max-height ease-in-out 0.2s;
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
            margin: 2.1rem 0 0;
            max-height: 1.9rem;
            overflow: hidden;
        }


    }

    @keyframes sub-text-expand {
        0% {
            max-height: 1.9rem;
            opacity:1;
        }
        50% {
            max-height: 3rem;
            opacity: 0;
        }
        100% {
            max-height: 4rem;
            opacity: 1;
        }
    }


    @keyframes text-expand {
        0% {
            max-height: 5.5rem;
            opacity: 1;
        }
        50% {
            max-height: 6.6rem;
            opacity: 0;
        }
        100% {
            max-height: 8rem;
            opacity: 1;
        }
    }

    @keyframes container-expand {
        0% {
            max-height: 15rem;
        }
        40% {
            max-height: 15rem;
        }
        50% {
            max-height: fit-content;
        }
        100% {
            max-height: fit-content;
        }
    }


    :hover {
        transform: translate(0rem, -0.5rem);
        box-shadow:  1rem 1.2rem 0rem -0.2rem ${props => props.theme.cardShadowColor};
        transition: transform ease-in 0.2s;

        .card__content{
            max-height: fit-content;
            animation: container-expand 0.7s ease-out;
            .card__link {
                animation: text-expand 0.8s ease-out;
                max-height: max-content;
                
                .card__title {
                    animation: text-expand 0.8s ease-out;
                    max-height: fit-content;
                }
            }

            

            .card__top{
                animation: text-expand 0.7s ease;
            }

            .card__company {
                animation: text-expand 0.9s ease-out;
            }

            .card__locations {
                animation:  sub-text-expand 1s ease-out;
            }

            .card__top,
            .card__company,
            .card__locations {
                max-height: max-content;
            }

        }
    }

`;

const JobCard = ({ data }) => {
    let { company, company_logo, type, location, created_at, title, id } = data;
    if (company_logo === null || company_logo === '')
        company_logo = location_logo;

    const daysElapsed =
        (Date.now() - new Date(created_at)) / (1000 * 60 * 60 * 24);

    var elapsedString = '';
    if (daysElapsed > 7) {
        elapsedString = `${Math.floor(daysElapsed / 7)}w ago`;
    } else if (Math.floor(daysElapsed * 24) === 0) {
        elapsedString = `within an hour`;
    } else if (Math.floor(daysElapsed) === 0) {
        elapsedString = `${Math.floor(daysElapsed * 24)}h ago`;
    } else {
        elapsedString = `${Math.floor(daysElapsed)}d ago`;
    }

    return (
        <StyledDesignCardContainer>
            <Link className="card__link" to={{
                    pathname: `job/${id}`,
                    state: {
                        data: data
                    }
                }}
                aria-label={`Link toward the job description of ${title}`}>
                
                    <div className="card__img--container">
                        <img
                            src={company_logo}
                            alt="company logo"
                            className="card__img "
                        />
                    </div>
            </Link>
                
            <div className="card__content">
                <div className="card__top">
                    <span className="card__hour">{elapsedString}</span>
                    <p className="card__dot">·</p>
                    <span className="card__full">{type}</span>
                </div>

                <Link className="card__link" to={{
                    pathname: `job/${id}`,
                    state: {
                        data: data
                    }
                }}>
                    <p className="card__title">{title}</p>
                </Link>
                <p className="card__company">{company}</p>

                <p className="card__locations">{location}</p>
            </div>
        </StyledDesignCardContainer>
    );
};

export default JobCard;
