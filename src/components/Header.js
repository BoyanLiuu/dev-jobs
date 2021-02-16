import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import logo from './../assets/images/desktop/logo.svg';
import bgMobilePattern from './../assets/images/mobile/bg-pattern-header.svg';
import bgTabletPattern from './../assets/images/tablet/bg-pattern-header.svg';
import bgDesktopPattern from './../assets/images/desktop/bg-pattern-header.svg';
import sunLogo from './../assets/images/desktop/icon-sun.svg';
import moonLogo from './../assets/images/desktop/icon-moon.svg';
import React from 'react';
const HeaderDiv = styled.header`
    width: 100%;
    height: 13.6rem;
    background: url(${bgMobilePattern});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    transition: all ease-in-out 0.1s;

    nav {
        width: 100%;
        height: 3.2rem;
        padding: 0 3.2rem;
        display: flex;
        justify-content: space-between;
        .dark-mode-container {
            width: 11.2rem;
            height: 2.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .dark-mode-logo:first-of-type {
                width: 2rem;
                height: 1.86rem;
            }
            .dark-mode-logo:last-of-type {
                width: 1.2rem;
                height: 1.2rem;
            }

            .dark-mode-checkbox {
                width: 4.8rem;
                height: 2.4rem;
                background: white;
                position: relative;
                border-radius: 1.2rem;
                appearance: none;
                cursor: pointer;
                outline: none;

                &::before {
                    content: '';
                    position: absolute;
                    width: 1.4rem;
                    height: 1.4rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: absolute;
                    background: var(--violet-color);
                    top: 50%;
                    left: 0.5rem;
                    transform: translateY(-50%);
                }

                &:checked::before {
                    left: 3rem;
                }
            }
        }
    }

    @media (min-width: 768px) {
        height: 16rem;
        background: url(${bgTabletPattern});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    @media (min-width: 1440px) {
        height: 16.2rem;
        background: url(${bgDesktopPattern});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <nav>
                <img src={logo} alt="logo" className="logo" />
                <div className="dark-mode-container">
                    <img src={sunLogo} alt="sun" className="dark-mode-logo" />
                    <input
                        aria-label="dark mode toggle"
                        type="checkbox"
                        className="dark-mode-checkbox"
                        id="checkbox"
                    />
                    <img src={moonLogo} alt="moon" className="dark-mode-logo" />
                </div>
            </nav>
        </HeaderDiv>
    );
};

export default Header;
