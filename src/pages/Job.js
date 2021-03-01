/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CompanyCard, JobDesc } from '../components/index';
import { Footer } from '../components/index';
import SkeletonCompanyCard from '../components/Job/SkeletonCompanyCard';
import SkeletonJobDesc from '../components/Job/SkeletonJobDesc';
import SkeletonJobFooter from '../components/SkeletonJobFooter';

const JobDiv = styled.div`
    /* height: 10vh; */
    margin: -1.5rem 5% 5rem;

    @media only screen and (min-width: 48rem) {
        margin: -4rem 5% 5rem;
    }

    @media only screen and (min-width: 62.5rem) {
        margin: -4rem 20% 5rem;
    }
`;

function Job(props) {
    let passed_state = props.location.state;
    console.log(passed_state);

    // let dummyData = {
    //     "id": "e5606bd6-5540-4a58-b22a-68231943ab6d",
    //     "type": "Full Time",
    //     "url": "https://jobs.github.com/positions/e5606bd6-5540-4a58-b22a-68231943ab6d",
    //     "created_at": "Mon Mar 01 19:01:49 UTC 2021",
    //     "company": "Boston Red Sox ",
    //     "company_url": null,
    //     "location": "Boston",
    //     "title": "Developer, Baseball Systems ",
    //     "description": "<p>POSITION OVERVIEW:</p>\n<p>The Developer, Baseball Systems position will be a member of the baseball operations software development team, and is responsible for the design, development, and support, of all baseball systems. This individual will work closely with members of Baseball Operations to understand business requirements that drive the analysis, design, and development of quality baseball systems and solutions. This developer will collaborate with the Director of Baseball Systems, Baseball Operations personnel, vendors, and consultants, in support of baseball’s technical infrastructure, key systems and platforms, and analytics and visualization tools.</p>\n<p>Responsibilities:\nCreate leading-edge baseball solutions together with the software development team and others on new and improved baseball systems\nContribute to the design and implementation of the software architecture and embrace a software engineering mindset\nParticipate in key phases of the software development process of critical baseball applications, including requirements gathering, analysis, effort estimation, technical investigation, software design and implementation, testing, and bug fixing\nResponsible for the design and development of databases, web services, graphical user interfaces, and other aspects of web applications\nActively participate with other software developers in design reviews, code reviews, and other best practices\nWork closely at times with baseball analysts to design and implement solutions to their data needs\nRespond to and resolve technical problems and issues in a timely manner\nIdentify and implement creative solutions for technical challenges</p>\n<p>Technical Skills:\nBachelor’s degree in Computer Science, Software Engineering, Computer Engineering, or a related field\n0-2 years of development experience using some combination of C#, Java, Python, Ruby, JavaScript, Typescript, T-SQL, ServiceStack, Angular, React, Vue, Knockout, or other frameworks, with a focus on responsive &amp; progressive web applications. Candidates just out of school should have applicable project work that exhibits experience with modern full-stack technologies\nStrong database design and development experience, especially with MS SQL Server\nExperience with cloud technologies from AWS and GCP are a plus\nExperience integrating systems and data using third-party APIs and services are a plus\nExperience with R is a plus\nDesign experience with Zeplin, Photoshop, or similar applications, are a plus\nExperience with source control tools such as Git, TFS, or similar</p>\n<p>General Skills:\nAbility to work autonomously and as a team in a fast paced environment\nHigh level of attention to detail with the ability to multi-task effectively\nComfortable working remotely using Zoom, Teams, Slack, Trello, and other tools to communicate with all team members\nHigh degree of professionalism and ability to maintain confidential information\nExcellent organizational and time management skills\nAn understanding of baseball, common terms, and analytic measures, are a plus\nProspective employees will receive consideration without discrimination based on race, religious creed, color, sex, age, national origin, handicap, disability, military/veteran status, ancestry, sexual orientation, gender identity/expression or protected genetic information.</p>\n",
    //     "how_to_apply": "<p><a href=\"https://jobs.lever.co/redsox/9824b8b4-5f7c-445a-be7d-da0d0bb14218\">https://jobs.lever.co/redsox/9824b8b4-5f7c-445a-be7d-da0d0bb14218</a></p>\n",
    //     "company_logo": null
    //     };

    const [ready, setReady] = useState(false);

    const companyData = {
        "company": passed_state.data.company,
        "company_url": passed_state.data.company_url,
        "company_logo": passed_state.data.company_logo
    };

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 2000);
    }, []);

    return (
        <JobDiv>
            { ready ? <CompanyCard Data={companyData}/> : <SkeletonCompanyCard /> }
            { ready ?  <JobDesc Data={passed_state.data} /> : <SkeletonJobDesc /> }
            { ready ?  <Footer page='job' data={passed_state.data}/> : <SkeletonJobFooter page='job'/>}
        </JobDiv>
    );
}

export default Job;
