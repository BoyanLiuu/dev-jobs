import styled from 'styled-components';

const JobDescWrapper = styled.div`
    margin: 2rem 0 0 0;
    padding: 3rem 2rem;
    width: 100%;
    background-color: ${props => props.theme.cardColor};
    border-radius: 0.6rem;
`;


const JobTopSec = styled.div`
    display: flex;
    flex-direction: column;
    
    .job-creation-time-and-type {
        font-size: 1.6rem;
        color: var(--card-content-color);
    }
`;

const JobDesc = ({Data}) => {
    
    // calculate the time elapsed since job creation
    const daysElapsed = (Date.now() - new Date(Data.created_at)) / (1000 * 60 * 60 * 24);
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
    
    console.log(elapsedString);
    return (
        <JobDescWrapper>
            <JobTopSec>
                <div className="top-section-texts">
                    <p className="job-creation-time-and-type"> {elapsedString} &nbsp; · &nbsp; {Data.type} </p>
                    <p className="job-title">{Data.title}</p>
                    <p className="job-location"> {Data.location} </p>
                </div>

                <a href="#apply-now"><button> Apply Now</button></a>
            </JobTopSec>
        </JobDescWrapper>
    );
};

export default JobDesc;
