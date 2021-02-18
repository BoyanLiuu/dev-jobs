/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import React from 'react';


const StyledJobTitleDiv = styled.div`
    width: 100%;
    background-color: ${props => props.theme.cardColor};
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all ease-in-out 0.1s;

    .company-logo-wrapper {
        height: 5rem;
        width: 5rem;
        margin: -2.5rem 0 0 0;
        background-color: pink;
        border-radius: 1.5rem;
        padding: 1rem;

        .logo {
            height: 100%;
        }
    }

    .company-info-wrapper {
        margin: 2rem 2rem 3rem;
        width: calc(100% - 4rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        

        .company-text-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            .company-name {
                font-size: 2rem;
                line-height: 2rem;
                font-weight: 700;
                color: ${ props => props.theme.cardTitleColor}
            }
            
            .company-url {
                width: min-content;
                padding: 0.7rem 1rem 2rem;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 1.4rem;
                color: var(--card-content-color);
            }
        }

        
        .company-btn {
            outline: none;
            border: none;
            border-radius: 0.5rem;
            padding: 1.5rem 2rem;
            font-weight: 700;
            font-size: 1.6rem;
            cursor: pointer;
            color: var(--violet-color);
            background-color: var(--very-light-violet-color);

        }
        .company-btn:hover {
            background-color: var(--half-light-violet-color);
        }

        .company-btn {
            outline: none;
            border: none;
            border-radius: 0.5rem;
            padding: 1.5rem 2rem;
            font-weight: 700;
            font-size: 1.6rem;

            color: var(--violet-color);
            background-color: var(--very-light-violet-color);

        }
    }


    @media only screen and (min-width: 37.5rem) {
        flex-direction: row;
        height: 14rem;
        overflow: hidden;

        .company-logo-wrapper {
            height: 100%;
            width: auto;
            margin: 0;
            border-radius: 0;
            padding: 3rem;
        }

        .company-info-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 3.5rem;

            .company-text-wrapper {
                align-items: flex-start;
                width: calc(100% - 15rem);
                padding: 0 1rem 0 0;
                justify-content: space-between;  
                overflow: hidden;
                .company-url {
                    padding: 1rem 1rem 0 0;
                }
            }
        }
    }

`;

const JobTitle = ({ Data }) => {

    return (
        <StyledJobTitleDiv>
            <div className="company-logo-wrapper">
                <img className="logo" src={Data.company_logo} alt="company logo" />
            </div>

            <div className="company-info-wrapper">
                <div className="company-text-wrapper">
                    <p className="company-name"> {Data.company} </p>
                    <p className="company-url"> {Data.company_url.replace('http://www.', '').replace('https://www.','')} </p>
                </div>
                
                <a className="company-link" href={Data.company_url} target="_blank" rel="noreferrer" aria-label="link to company website">
                    <button className="company-btn"> Company Site </button>
                </a>
            </div>
           
        </StyledJobTitleDiv>
    );
};

export default JobTitle;
