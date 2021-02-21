import styled from 'styled-components';
import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
const JobFooterContainer = styled.footer`
   
    .footer {
        width: 100vw;
        position: fixed;
        margin: 0 0 0 -5vw;
        padding: 2rem 5vw 1rem;
        border-top: solid 0.3rem ${ props=> props.theme.bgColor};
        background-color: ${ props => props.theme.cardColor};

        .job-footer {
        
            .job-footer-text-section {
                display: none;

                .job-footer-job-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${props => props.theme.cardTitleColor};
                    transition: color ease-in-out 0.2s;
                    padding: 0 0 0.8rem;
                }

                .job-footer-company-name {
                    font-size: 1.6rem;
                    color: var(--card-content-color);
                }
            }

            .job-footer-apply-now-button {
                outline: none;
                border: none;
                border-radius: 0.5rem;
                background-color: var(--violet-color);
                transition: background-color ease-in-out 0.2s;
                color: white;
                width: 100%;
                padding: 2rem 0;
                font-size: 1.6rem;
                font-weight: 700;
                cursor: pointer;
            }
            
            .job-footer-apply-now-button:hover {
                background-color: var(--light-violet-color);
            }
        }

        hr {
            border: none;
            height: 0.2rem;
            background-color: ${props => props.theme.bgColor};
            transition: background-color ease-in-out 0.2s;
            margin: 2rem 0 1rem;
        }

        .attribution {
            font-size: 1rem;
            margin: 0.5rem 0;
            text-align: center;
            color: rgb(142, 140, 163);

            .attribution-link {
                color: var(--violet-color);
                font-weight: 700;
            }

            .attribution-link:hover {
                color: rgb(151, 59, 237);
            }
        }

        @media only screen and (min-width: 43.75rem) {
            .job-footer {
                display: flex; 
                justify-content: space-between;

                .job-footer-text-section {
                    display: initial;

                    .job-footer-job-title {
                        padding: 0.5rem 0 1.6rem 0;
                    }
                }

                .job-footer-apply-now-button {
                    width: 14.1rem;
                }
            }  
        }


        @media only screen and (min-width: 62.5rem) {
            margin: 0 0 0 -20vw;
            padding: 2.5rem 20vw 1rem;
        }
    }

    .footer-displayed {
        bottom: 0;
        transition: bottom ease-in-out 0.3s;
    }

    .footer-hidden {
        transition: bottom ease-in-out 0.3s;
        bottom: -15rem;
    }
    
`;
const HomeFooterContainer = styled.footer`
    margin: 4rem 0 2rem;
    .attribution {
        font-size: 1rem;
        margin: 0.5rem 0;
        text-align: center;
        color: rgb(142, 140, 163);

        .attribution-link {
            color: var(--violet-color);
            font-weight: 700;
        }

        .attribution-link:hover {
            color: rgb(151, 59, 237);
        }
    }
`;

const Footer = ({page, data}) => {

    const [prevScrollpos, setScrollPos] = useState(window.pageYOffset);
    const [visibility, setVisibility] = useState(true);
    
    var handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        setScrollPos(currentScrollPos);
        setVisibility(visible);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    return (
        (page.localeCompare('job') === 0) ?
        <JobFooterContainer>
            <div className={visibility ? "footer footer-displayed": "footer footer-hidden"}>
                <div className="job-footer">
                    <div className="job-footer-text-section">
                        <p className="job-footer-job-title"> {data.title}</p>
                        <p className="job-footer-company-name"> {data.company} </p>
                    </div>
                    <a href="#apply-now" aria-label="jump to apply now section">
                        <button className="job-footer-apply-now-button"> Apply Now </button>
                    </a>
                </div>
                <hr/>
                <div className="attribution">
                    Challenge by <a className="attribution-link" rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank" aria-label="frontend mentor homepage">Frontend Mentor</a>. 
                    Coded by <a className="attribution-link" rel="noreferrer" href="https://minhui-xie.vercel.app/" target="_blank" aria-label="Minhui's portfolio" >Minhui Xie </a>
                    &amp; <a className="attribution-link" rel="noreferrer" href="https://boyan-liuu.vercel.app/" target="_blank" aria-label="Boyan's portfolio">Boyan Liu</a>.
                </div>
            </div>
        </JobFooterContainer>
        :
        <HomeFooterContainer> 
            <div className="attribution">
                Challenge by <a className="attribution-link" rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank" aria-label="frontend mentor homepage">Frontend Mentor</a>. 
                Coded by <a className="attribution-link" rel="noreferrer" href="https://minhui-xie.vercel.app/" target="_blank" aria-label="Minhui's portfolio" >Minhui Xie </a>
                &amp; <a className="attribution-link" rel="noreferrer" href="https://boyan-liuu.vercel.app/" target="_blank" aria-label="Boyan's portfolio">Boyan Liu</a>.
            </div>
        </HomeFooterContainer>
        
    );
};

export default Footer;
