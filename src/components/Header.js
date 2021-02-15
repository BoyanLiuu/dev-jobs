import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import logo from './../assets/images/desktop/logo.svg';
import sunLogo from './../assets/images/desktop/icon-sun.svg';
import moonLogo from './../assets/images/desktop/icon-moon.svg';
import React from 'react';
const HeaderDiv = styled.header`
    width: 100%;
    height: 13.6rem;
    background-color: var(--violet-color);
    display: flex;
    align-items: center;
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
