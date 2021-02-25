import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import logo from './../assets/images/desktop/logo.svg';
import bgMobilePattern from './../assets/images/mobile/bg-pattern-header.svg';
import bgTabletPattern from './../assets/images/tablet/bg-pattern-header.svg';
import bgDesktopPattern from './../assets/images/desktop/bg-pattern-header.svg';
import sunLogo from './../assets/images/desktop/icon-sun.svg';
import moonLogo from './../assets/images/desktop/icon-moon.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.header`
    width: 100%;
    height: 13.6rem;
    background: url(${bgMobilePattern}), ${(props) => props.theme.bgColor};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color ease-in-out 0.3s;

    nav {
        width: 90%;
        display: flex;
        margin-bottom: 3rem;
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
                &:hover::before {
                    background-color: var(--light-violet-color);
                }

                &:checked::before {
                    left: 3rem;
                }
            }
        }
    }

    @media (min-width: 768px) {
        height: 16rem;
        background: url(${bgTabletPattern}), ${(props) => props.theme.bgColor};
        background-repeat: no-repeat;
        background-size: 100% 100%;

    }
    @media (min-width: 1440px) {
        
        height: 16.2rem;
        background: url(${bgDesktopPattern}), ${(props) => props.theme.bgColor};
        background-repeat: no-repeat;
        background-size: 100% 100%;

        nav {
            width: 75%;   
        }
    }
`;

const Header = ({ themeToggler }) => {
    return (
        <HeaderDiv>
            <nav>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div className="dark-mode-container">
                    <img src={sunLogo} alt="sun" className="dark-mode-logo" />
                    <input
                        aria-label="dark mode toggle"
                        type="checkbox"
                        className="dark-mode-checkbox"
                        id="checkbox"
                        onClick={themeToggler}
                    />
                    <img src={moonLogo} alt="moon" className="dark-mode-logo" />
                </div>
            </nav>
        </HeaderDiv>
    );
};

export default Header;
