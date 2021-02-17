/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { CompanyCard, JobDesc } from '../components/index';

const JobDiv = styled.div`
    /* height: 10vh; */
    margin: -1.5rem 5%;
    transition: all ease-in-out 0.1s;

    @media only screen and (min-width: 48rem) {
        margin: -4rem 5%;
    }

    @media only screen and (min-width: 62.5rem) {
        margin: -4rem 20%;
    }
`;

function Job() {
    const dummyData = {
        "id": "79da435a-598c-43e6-a012-bfab1c841065",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/79da435a-598c-43e6-a012-bfab1c841065",
        "created_at": "Sat Jan 23 01:15:01 UTC 2021",
        "company": "Pixelberry Studios",
        "company_url": "http://www.pixelberrystudios.com/careers",
        "location": "Mountain View, CA",
        "title": "Engineering Manager",
        "description": "<p>We are looking for a talented Software Engineering Manager to lead development at Pixelberry for our hit mobile game Choices: Stories You Play. You'll work with the best interactive fiction game team in the industry, with the many on the team working together for over 15 years.</p>\n<p>You would be responsible for the development team delivering performant, well built, stable features to players across the world. You would lead projects by overseeing the architecture, scope, implementation and their final delivery. Projects will span the full stack - from front-end client work in TypeScript and C++ to back-end AWS services in Python and Java. In addition to the technology, you would manage and mentor developers and be responsible for developing an exceptional team.</p>\n<p>You would be working with a highly seasoned team, one that believes in delivering category-leading product that touches millions. We’ve leveraged the success of our game to teach millions of teens about serious topics, like cyberbullying. We believe that innovative game design, commercial success, and making a difference all go hand in hand.</p>\n<p>We are based in Mountain View, CA. This position is a, full-time, on-site position. (When Covid restrictions are lifted)</p>\n<p>RESPONSIBILITIES</p>\n<ul>\n<li>Lead several software engineers working on our flagship app, Choices: Stories You Play</li>\n<li>Collaborate with the product, testing, and analytics teams to build a roadmap that delivers delight to our users</li>\n<li>Partner with the recruiting team on creating a world-class development team</li>\n<li>Mentor and build the careers of your direct reports</li>\n<li>Expect to write code 50% of the time</li>\n<li>Help your teams succeed by unblocking team leads</li>\n<li>Implement development best practices across the board.</li>\n</ul>\n<p>REQUIREMENTS</p>\n<ul>\n<li>7 years+ of software engineering experience</li>\n<li>2 years+ of experience in the games industry</li>\n<li>2 years+ of software engineering management experience</li>\n<li>A passion to work on games</li>\n<li>Firm grasp of modern best practices for software development</li>\n<li>Expert level understanding of OOP Language such as Java or C#</li>\n</ul>\n<p>BENEFITS</p>\n<ul>\n<li>Competitive salary</li>\n<li>High level of autonomy and freedom</li>\n<li>Work from home every Tuesday and Thursday. (Every Day during Covid restrictions)</li>\n<li>Full benefits package (PTO, 401k, Medical, Dental, Vision)</li>\n</ul>\n<p>We believe that the unique contributions of all our team is the driver of our success. To make sure that our products and culture continue to incorporate everyone’s perspectives and experience we never discriminate on the basis of race, religion, national origin, gender identity or expression, sexual orientation, age, or marital, veteran, or disability status. All your information will be kept confidential according to EEO guidelines. Pixelberry is an Equal Opportunity Employer.</p>\n",
        "how_to_apply": "<p>Follow the link below to apply for this position: <a href=\"https://careers.jobscore.com/apply_flow/standard_applications/apply?job_id=dVj2aqmDCr66tHaKkMnw5Y\">https://careers.jobscore.com/apply_flow/standard_applications/apply?job_id=dVj2aqmDCr66tHaKkMnw5Y</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3FXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cd6884e81ca6cf0597d6b19e230846ad2ae4408b/PB_logo_berry.png"
        };

    const companyData = {
        "company": dummyData.company,
        "company_url": dummyData.company_url,
        "company_logo": dummyData.company_logo
    };

    const jobDescData = {
        "title": dummyData.title,
        "type": dummyData.type,
        "url": dummyData.url,
        "created_at": dummyData.created_at,
        "location": dummyData.location,
        "description": dummyData.description,
        "how_to_apply": dummyData.how_to_apply
    };

    return (
        <JobDiv>
            <CompanyCard Data={companyData} />
            <JobDesc Data={jobDescData} />
        </JobDiv>
    );
}

export default Job;
