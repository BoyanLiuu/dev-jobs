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
    width: 90%;

    .title-container {
        width: 100%;
        padding: 0 2rem 0 0;
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
        width: 100%;
        border: none;
        outline: none;
        height: 2.1rem;
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-family: 'Kumbh Sans', sans-serif;
        text-overflow: ellipsis; 
        color: ${(props) => props.theme.fullTimeColor};
        background-color: ${(props) => props.theme.cardColor};
        &::placeholder {
            color: ${(props) => props.theme.fullTimeColor};
            transition: color ease-in-out 0.2s;
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
        width: 90%;
        padding-bottom: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.6rem;
        background-color: ${props => props.theme.cardColor};
        .fullTime-container,
        .location-container {
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
        transition: background-color ease-in 0.05s;

        &:checked {
            background: url(${checkerIcon}) var(--violet-color);
            background-repeat: no-repeat;
            background-position: 50%;
        }
        &:hover {
            background-color: var(--half-light-violet-color);
        }
    }

    .fullTime {
        margin-left: 1.5rem;
        align-self: flex-end;
        height: 2.1rem;
        color: ${(props) => props.theme.fullTimeColor};
        transition: color ease-in-out 0.2s;
        font-size: 1.6rem;
        line-height: 2.1rem;
    }

    .search-btn {
        margin: 1rem 5%;
        width: 90%;
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
            width: calc((100% - 15rem) * 0.45);
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
            width: calc((100% - 15rem) * 0.4);
            height: 100%;
            display: flex;
            align-items: center;

            border-right: 1px solid var(--dark-grey-opacity-color);
            input {
                margin-left: 1.6rem;
                width: 100%;
            }
            .search-icon {
                display: inline-block;
                & path {
                    fill: var(--violet-color);
                }
            }
        }

        .fullTime-container {
            width: 15rem;
        }

        .searchBar--modal {
            display: none;
        }

        .search-btn {
            width: 10rem;
            margin: 0 0 0 2rem;
        }

    }

    @media (min-width: 1440px) {
        width: 75%;
        .title-container {
            width: calc((100% - 15rem) * 0.5);
            input {
                width: 100%;
            }
        }
        .location-container--tablet {
            width: calc((100% - 15rem) * 0.35);
        }
    }
`;

const SearchBar = ({ setFilter }) => {
    const [show, setShow] = useState(false);
    const [filterField, setFilterField] = useState({
        description: '',
        location: '',
        fullTime: false,
    });

    const handleSearch = () => {
        console.log(filterField);
        setFilter(filterField);
        //reset
        setFilterField({
            description: '',
            location: '',
            fullTime: false,
        });
    };
    const modelClasses = show ? 'modal show-modal' : 'modal';
    return (
        <StyledDesignBannerContainer>
            <div className="title-container">
                <SearchIcon className="search-icon" />
                <input
                    placeholder="Filter by title, company, expertise..."
                    aria-label="Enter company, title, or expertise here"
                    value={filterField.description}
                    onChange={(e) => {
                        setFilterField({
                            ...filterField,
                            description: e.target.value,
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
                    id="address-input"
                    onChange={(e) => {
                        setFilterField({
                            ...filterField,
                            location: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="fullTime-container fullTime-container--tablet">
                <input type="checkbox" id="fullTime" name="fullTime"
                    onClick={(e) => {
                        setFilterField({
                            ...filterField,
                            fullTime: e.target.checked,
                        });
                    }}
                />
                <label className="fullTime">Full Time</label>
            </div>
            <button
                onClick={handleSearch}
                className="search-btn search-btn--tablet">
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
                    <button
                        type="submit"
                        className="search-btn"
                        onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </StyledDesignBannerContainer>
    );
};

export default SearchBar;
