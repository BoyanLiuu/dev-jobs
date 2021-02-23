import styled from 'styled-components';
import parse from 'html-react-parser';
import mobileFooterImg from '../../assets/images/mobile/bg-pattern-detail-footer.svg';
import desktopFooterImg from '../../assets/images/desktop/bg-pattern-detail-footer.svg';

export const MainDescWrapper = styled.div`
    .job-apply {
        position: relative;
        margin: 2rem 0 3rem;
        border-radius: 0.6rem;
        width: 100%;

        .mobile-footer-img {
            width: 100%;
        }
        .desktop-footer-img {
            display: none;
        }

        .apply-info-wrapper {
            position: absolute;
            width: 90%;
            height: 80%;
            top: 10%;
            right: 5%;

            color: white;
            font-size: 1.6rem;
            line-height: 2.6rem;

            .apply-title {
                font-weight: 700;
                font-size: 2rem;
                padding: 0 0 2rem;
            }

            .parsed-apply-info {
                overflow: auto;
                width: 100%;
                height: calc(100% - 5rem);

                p {
                    width: 100%;
                    padding: 0 0 1rem 0;
                }

                a {
                    color: white;
                    word-wrap: break-word;
                    font-weight: 700;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-size: 2rem;
                }

                p {
                    padding: 0 0 2.5rem 0;
                }

                ul {
                    margin: 0 0 2.5rem 3rem;
                    list-style-type: none;

                    li:before {
                        content: '·';
                        counter-increment: item;
                        margin: 0 0 0 -3.5rem;
                        padding: 0 2.5rem 0 0;
                        font-weight: 700;
                        font-size: 2.5rem;
                        color: ${(props) => props.theme.cardColor};
                        transition: color ease-in-out 0.2s;
                    }
                }

                ol {
                    margin: 0 0 2rem 2.5rem;
                    counter-reset: item;
                    list-style-type: none;

                    li:before {
                        content: counter(item) ' ';
                        counter-increment: item;
                        margin: 0 0 0 -2.7rem;
                        padding: 0 1.4rem 0 0;
                        font-weight: 700;
                        color: ${(props) => props.theme.cardColor};
                        transition: color ease-in-out 0.2s;
                    }
                }

                li {
                    display: block;
                    margin: 0 0 0.5rem 0.5rem;
                }
            }
        }
    }

    @media only screen and (min-width: 31.25rem) {
        .job-apply {
            .mobile-footer-img {
                display: none;
            }
            .desktop-footer-img {
                display: initial;
                width: 100%;
            }

            .apply-info-wrapper {
                width: 90%;
                height: 75%;
                top: 20%;
                right: 5%;
            }
        }
    }
`;

export const JobDescWrapper = styled.div`
    margin: 2rem 0 0 0;
    padding: 3rem 2rem 0rem;
    width: 100%;
    background-color: ${(props) => props.theme.cardColor};
    transition: background-color ease-in-out 0.2s;
    border-radius: 0.6rem;

    .job-mid-sec {
        color: var(--card-content-color);
        font-size: 1.6rem;
        line-height: 2.6rem;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: var(--violet-color);
            font-size: 2rem;
        }

        a {
            color: var(--violet-color);
            cursor: pointer;
            font-weight: 700;
        }

        a:hover {
            color: var(--light-violet-color);
        }

        p {
            padding: 0 0 2.5rem 0;
        }

        ul {
            margin: 0 0 2.5rem 3rem;
            list-style-type: none;

            li:before {
                content: '·';
                counter-increment: item;
                margin: 0 0 0 -3.5rem;
                padding: 0 2.5rem 0 0;
                font-weight: 700;
                font-size: 2.5rem;
                color: var(--violet-color);
            }
        }

        ol {
            margin: 0 0 2rem 2.5rem;
            counter-reset: item;
            list-style-type: none;

            li:before {
                content: counter(item) ' ';
                counter-increment: item;
                margin: 0 0 0 -2.7rem;
                padding: 0 1.4rem 0 0;
                font-weight: 700;
                color: var(--violet-color);
            }
        }

        li {
            display: block;
            margin: 0 0 0.5rem 0.5rem;
        }
    }

    @media only screen and (min-width: 37.5rem) {
        padding: 5rem 4rem 0;
    }
`;

export const JobTopSec = styled.div`
    display: flex;
    flex-direction: column;

    .job-creation-time-and-type {
        font-size: 1.6rem;
        color: var(--card-content-color);
        .indentation {
            font-size: 1.9rem;
            font-weight: 700;
            padding: 0 0.5rem;
        }
    }

    .job-title {
        font-size: 2rem;
        color: ${(props) => props.theme.cardTitleColor};
        transition: color ease-in-out 0.2s;
        font-weight: 700;
        padding: 1rem 0;
    }

    .job-location {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--violet-color);
    }

    .apply-btn {
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 0.5rem;
        margin: 4rem 0;
        padding: 1.5rem 0;
        width: 100%;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${(props) => props.theme.cardColor};
        transition: color ease-in-out 0.2s;
        background-color: var(--violet-color);
        transition: background-color ease-in-out 0.2s;
    }

    .apply-btn:hover {
        background-color: var(--light-violet-color);
    }

    @media only screen and (min-width: 37.5rem) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 4rem 0;

        .top-section-texts {
            width: calc(100% - 14.1rem);

            .job-title {
                font-size: 2.8rem;
                color: ${(props) => props.theme.cardTitleColor};
                transition: color ease-in-out 0.2s;
                font-weight: 700;
                padding: 1rem 0;
            }
        }

        .apply-btn {
            height: 4.8rem;
            width: 14.1rem;
            margin: 0;
        }
    }
`;

const JobDesc = ({ Data }) => {
    // calculate the time elapsed since job creation
    const daysElapsed =
        (Date.now() - new Date(Data.created_at)) / (1000 * 60 * 60 * 24);
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
        <MainDescWrapper>
            <JobDescWrapper>
                <JobTopSec>
                    <div className="top-section-texts">
                        <p className="job-creation-time-and-type">
                            {' '}
                            {elapsedString}{' '}
                            <span className="indentation">·</span> {Data.type}{' '}
                        </p>
                        <p className="job-title">{Data.title}</p>
                        <p className="job-location"> {Data.location} </p>
                    </div>

                    <a href="#apply-now">
                        <button className="apply-btn"> Apply Now</button>
                    </a>
                </JobTopSec>

                <div className="job-mid-sec">{parse(Data.description)}</div>
            </JobDescWrapper>

            <div className="job-apply" id="apply-now">
                <img
                    className="mobile-footer-img"
                    src={mobileFooterImg}
                    alt="mobile footer logo"
                />
                <img
                    className="desktop-footer-img"
                    src={desktopFooterImg}
                    alt="desktop footer logo"
                />
                <div className="apply-info-wrapper">
                    <p className="apply-title"> How To Apply </p>

                    <div className="parsed-apply-info">
                        {parse(Data.how_to_apply)}
                    </div>
                </div>
            </div>
        </MainDescWrapper>
    );
};

export default JobDesc;
