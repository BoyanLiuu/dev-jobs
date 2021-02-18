/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from './../../assets/images/desktop/icon-search.svg';
import filterIcon from './../../assets/images/mobile/icon-filter.svg';
import locationIcon from './../../assets/images/desktop/icon-location.svg';
import checkerIcon from './../../assets/images/desktop/icon-check.svg';
const StyledDesignBannerContainer = styled.div`
    margin: -4rem 2.4rem 0 2.4rem;
    height: 8rem;
    border-radius: 0.6rem;
    background-color: ${(props) => props.theme.cardColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
    margin-bottom: 3.2rem;
    width: 87.2%;
    max-width: 110rem;

    .title-container {
        .search-icon {
            display: none;
        }
    }
    .location-container--tablet,
    .fullTime-container--tablet,
    .search-btn--tablet {
        display: none;
    }
    input {
        border: none;
        outline: none;
        height: 2.1rem;
        &::placeholder {
            color: var(--very-dark-blue-color);
            opacity: 0.5;
            font-size: 1.6rem;
            line-height: 2.1rem;
            font-family: 'Kumbh Sans', sans-serif;
        }
    }
    .searchBar--mobile {
        display: flex;
        align-items: center;

        .search-icon-wrapper {
            width: 4.8rem;
            height: 4.8rem;
            background-color: var(--violet-color);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5rem;
        }
        .filter-icon {
            margin-right: 2.4rem;
            cursor: pointer;
        }
        .search-icon {
            cursor: pointer;
        }
    }
    .modal {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        background-color: rgba(0, 0, 0, 0.5);

        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s,
            transform 0.25s;
    }
    .searchBar--modal {
        width: 32.7rem;
        height: 21.7rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.6rem;
        background-color: white;
        .fullTime-container {
            display: flex;
        }
    }

    .location-container,
    .fullTime-container {
        padding: 2.4rem 0 2.4rem 2.4rem;
    }
    .location-container {
        border-bottom: 1px solid var(--dark-grey-opacity-color);
        .location-icon {
            margin-right: 1.6rem;
        }
    }
    input[type='checkbox'] {
        appearance: none;
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${(props) => props.theme.uncheckedColor};
        border-radius: 0.3rem;
        &:checked {
            background: url(${checkerIcon}) var(--violet-color);
            background-repeat: no-repeat;
            background-position: 50%;
        }
        &:hover {
            background-color: var(--light-violet-color);
            opacity: 0.25;
        }
    }

    .fullTime {
        margin-left: 1.5rem;
        align-self: flex-end;
        height: 2.1rem;
        color: ${(props) => props.theme.fullTimeColor};
        font-size: 1.6rem;
        line-height: 2.1rem;
    }
    .search-btn {
        margin-left: 2.4rem;
        width: 27.9rem;
        height: 4.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        color: white;
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-family: 'Kumbh Sans', sans-serif;
        background-color: var(--violet-color);

        &:hover {
            background-color: var(--light-violet-color);
        }
    }

    .show-modal {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    }

    @media (min-width: 768px) {
        .searchBar--mobile {
            display: none;
        }
        .location-container--tablet {
            display: flex;
            width: 31.05%;
            border-bottom: none;
            border-right: 1px solid var(--dark-grey-opacity-color);
        }

        .fullTime-container--tablet {
            display: flex;
        }

        .search-btn--tablet {
            display: block;
            width: 11.6%;
        }
        .title-container {
            width: 32.2%;
            height: 100%;
            display: flex;
            align-items: center;

            border-right: 1px solid var(--dark-grey-opacity-color);
            input {
                margin-left: 1.6rem;
                width: 45%;
            }
            .search-icon {
                display: inline-block;
                & path {
                    fill: var(--violet-color);
                }
            }
        }
    }

    @media (min-width: 1440px) {
        .title-container {
            width: 46.3rem;
            input {
                width: 25.5rem;
            }
        }
        .location-container--tablet {
            width: 30rem;
        }
    }
`;

const SearchBar = () => {
    const handleFilter = () => {};
    const [show, setShow] = useState(false);
    const [filterField, setFilterField] = useState({
        location: '',
        fullTime: false,
        title: '',
    });
    const modelClasses = show ? 'modal show-modal' : 'modal';
    return (
        <StyledDesignBannerContainer>
            <div className="title-container">
                <SearchIcon className="search-icon" />
                <input
                    placeholder="Filter by title, company, expertise..."
                    aria-label="Enter company, title, or expertise here"
                    value={filterField.title}
                    onChange={(e) => {
                        setFilterField({
                            ...filterField,
                            title: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="location-container location-container--tablet">
                <img
                    src={locationIcon}
                    alt="location-icon"
                    className="location-icon"
                />
                <input
                    placeholder="Filter by location..."
                    aria-label="Enter location"
                    value={filterField.location}
                    onChange={(e) => {
                        setFilterField({
                            ...filterField,
                            location: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="fullTime-container fullTime-container--tablet">
                <input
                    type="checkbox"
                    id="fullTime"
                    name="fullTime"
                    onClick={(e) => {
                        setFilterField({
                            ...filterField,
                            fullTime: e.target.checked,
                        });
                    }}
                />
                <label className="fullTime">Full Time</label>
            </div>
            <button type="submit" className="search-btn search-btn--tablet">
                Search
            </button>
            <div className="searchBar--mobile">
                <img
                    src={filterIcon}
                    alt="filter-icon"
                    className="filter-icon"
                    onClick={() => setShow(true)}
                />
                <div className="search-icon-wrapper">
                    <SearchIcon className="search-icon" />
                </div>
            </div>
            <div className={modelClasses} onClick={() => setShow(false)}>
                <div
                    className="searchBar--modal"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="location-container">
                        <img
                            src={locationIcon}
                            alt="location-icon"
                            className="location-icon"
                        />
                        <input
                            placeholder="Filter by location..."
                            aria-label="Enter location"
                            value={filterField.location}
                            onChange={(e) => {
                                setFilterField({
                                    ...filterField,
                                    location: e.target.value,
                                });
                            }}
                        />
                    </div>

                    <div className="fullTime-container">
                        <input
                            type="checkbox"
                            id="fullTime"
                            name="fullTime"
                            onClick={(e) => {
                                setFilterField({
                                    ...filterField,
                                    fullTime: e.target.checked,
                                });
                            }}
                        />
                        <label className="fullTime">Full Time Only</label>
                    </div>
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </div>
            </div>
        </StyledDesignBannerContainer>
    );
};

export default SearchBar;
