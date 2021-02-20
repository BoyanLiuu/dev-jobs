import styled from 'styled-components';
// import { Link } from 'react-router-dom';
const JobFooterContainer = styled.footer`
    width: 100vw;
    /* height: 10rem; */
    position: sticky;
    margin: 0 0 0 -5vw;
    background-color: ${ props => props.theme.cardColor};

    .job-footer {
        padding: 2rem 5vw;
        /* display: flex; */
        /* justify-content: space-between; */
        

        .job-footer-text-section {
            display: none;

            .job-footer-job-title {
                font-size: 2rem;
                font-weight: 700;
                color: ${props => props.theme.cardTitleColor};
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
            color: white;
            width: 100%;
            padding: 2rem 0;
            font-size: 1.6rem;
            font-weight: 700;
        }

        @media only screen and (min-width: 43.75rem) {
            .job-footer {
                display: flex; 
                justify-content: space-between;

                .job-footer-text-section {
                    display: initial;
                }
            }

            .job-footer-apply-now-button {
                width: 14.1rem;
            }
        }
            
    }
    
`;
const HomeFooterContainer = styled.footer``;

const Footer = ({page, data}) => {
    return (
        (page.localeCompare('job') === 0) ?
        <JobFooterContainer>
            <div className="job-footer">
                <div className="job-footer-text-section">
                    <p className="job-footer-job-title"> {data.title}</p>
                    <p className="job-footer-company-name"> {data.company} </p>
                </div>
                <a href="#apply-now">
                    <button className="job-footer-apply-now-button"> Apply Now </button>
                </a>
            </div>

        </JobFooterContainer>
        :
        <HomeFooterContainer> 

        </HomeFooterContainer>
        
    );
};

export default Footer;
