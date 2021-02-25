import React,{ useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { JobFooterContainer } from './Footer';

const SkeletonJobFooterContainer = styled(JobFooterContainer)`
    .job-footer-text-section {
        width: 25rem;

        .job-footer-job-title {
            height: 3rem;
            width: 80%;
            margin: 0 0 1rem 0;
        }

        .job-footer-company-name {
            width: 60%;
        }
    }
`;

const SkeletonJobFooter = () => {

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
        <SkeletonJobFooterContainer>
            <div className={visibility ? "footer footer-displayed": "footer footer-hidden"}>
                <div className="job-footer">
                    <div className="job-footer-text-section">
                        <SkeletonTheme color="#b6c0d1" highlightColor="#cad2e0" height="100%">
                            <Skeleton className="job-footer-job-title"  duration={2} />
                            <Skeleton className="job-footer-company-name" duration={2} />
                        </SkeletonTheme>
                    </div>
                    <SkeletonTheme color="#8e95e8" highlightColor="rgba(89, 100, 224, 0.4)" height="100%">
                        <Skeleton className="job-footer-apply-now-button" duration={2} />
                    </SkeletonTheme>
                </div>
                <hr/>
                <div className="attribution">
                    Challenge by <a className="attribution-link" rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank" aria-label="frontend mentor homepage">Frontend Mentor</a>. 
                    Coded by <a className="attribution-link" rel="noreferrer" href="https://minhui-xie.vercel.app/" target="_blank" aria-label="Minhui's portfolio" >Minhui Xie </a>
                    &amp; <a className="attribution-link" rel="noreferrer" href="https://boyan-liuu.vercel.app/" target="_blank" aria-label="Boyan's portfolio">Boyan Liu</a>.
                </div>
            </div>
        </SkeletonJobFooterContainer> 
    );
};

export default SkeletonJobFooter;