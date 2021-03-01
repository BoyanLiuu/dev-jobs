/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import default_logo from '../../assets/images/desktop/icon-default.svg';

export const StyledJobTitleDiv = styled.div`
    width: 100%;
    background-color: ${props => props.theme.cardColor};
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background-color ease-in-out 0.2s;

    .company-logo-wrapper {
        height: 5rem;
        width: 5rem;
        margin: -2.5rem 0 0 0;
        background-color: white;
        border: solid 0.1rem ${props => props.theme.cardShadowColor};
        box-shadow: 0.6rem 0.7rem 0 -0.1rem ${props => props.theme.cardLightShadowColor};
        border-radius: 1.5rem;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            height: auto;
            max-height: 100%;
            width: 100%;
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
                color: ${ props => props.theme.cardTitleColor};
                transition: color ease-in-out 0.2s;
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
            color: ${props => props.theme.companyButtonTextColor};
            background-color: ${ props => props.theme.companyButtonColor};
            transition: background-color ease-in-out 0.2s;

        }
        .company-btn:hover {
            background-color: ${ props => props.theme.companyButtonHoverColor};
        }

    }


    @media only screen and (min-width: 37.5rem) {
        flex-direction: row;
        height: 14rem;
        overflow: hidden;

        .company-logo-wrapper {
            height: 14rem;
            width: 14rem;
            margin: 0;
            border-radius: 0;
            padding: 2.5rem;
            box-shadow: 0 0 0 0 ${props => props.theme.cardLightShadowColor};
            border: none;
            border-right: solid 0.1rem ${props => props.theme.cardShadowColor};
        }

        .company-info-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 3.5rem;
            width: calc(100% - 18rem);

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
    console.log(Data)
    return (
        <StyledJobTitleDiv>
            <div className="company-logo-wrapper">
                <img className="logo" src={(Data.company_logo)? Data.company_logo : default_logo} alt="company logo" />
            </div>

            <div className="company-info-wrapper">
                <div className="company-text-wrapper">
                    <p className="company-name"> {Data.company} </p>
                    <p className="company-url"> {(Data.company_url) ? Data.company_url.replace('http://www.', '').replace('https://www.',''): ''} </p>
                </div>
                {
                    (Data.company_url) ? 
                    <a className="company-link" href={Data.company_url} target="_blank" rel="noreferrer" aria-label="link to company website">
                        <button className="company-btn"> Company Site </button>
                    </a>:
                    <button className="company-btn"> No Link Available </button>
                }
                
            </div>
           
        </StyledJobTitleDiv>
    );
};

export default JobTitle;
