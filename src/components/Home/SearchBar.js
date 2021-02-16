/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import searchIcon from './../../assets/images/desktop/icon-search.svg';
import filterIcon from './../../assets/images/mobile/icon-filter.svg';
import locationIcon from './../../assets/images/desktop/icon-location.svg';
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
            width: 2rem;
            height: 2rem;
            cursor: pointer;
        }
    }

    .searchBar--modal {
        position: absolute;
        bottom: -30rem;

        width: 32.7rem;
        height: 21.7rem;

        border-radius: 0.6rem;
        background-color: white;
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
        }
        .fullTime-container {
            display: flex;
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
        }
    }
`;

const SearchBar = () => {
    const handleFilter = () => {};
    return (
        <StyledDesignBannerContainer className="searchBar">
            <input
                placeholder="Filter by title, expertise..."
                aria-label="Enter company, title, or expertise here"
                value=""
            />
            <div className="searchBar--mobile">
                <img
                    src={filterIcon}
                    alt="filter-icon"
                    className="filter-icon"
                />
                <div className="search-icon-wrapper">
                    <img
                        src={searchIcon}
                        alt="search-icon"
                        className="search-icon"
                    />
                </div>
            </div>

            <div className="searchBar--modal">
                <div className="location-container">
                    <img
                        src={locationIcon}
                        alt="location-icon"
                        className="location-icon"
                    />
                    <input
                        placeholder="Filter by location..."
                        aria-label="Enter location"
                        value=""
                    />
                </div>

                <div className="fullTime-container">
                    <input type="checkbox" id="fullTime" name="fullTime" />
                    <label for="fullTime" className="fullTime">
                        Full Time Only
                    </label>
                </div>
                <button type="submit" className="search-btn">
                    Search
                </button>
            </div>
        </StyledDesignBannerContainer>
    );
};

export default SearchBar;
