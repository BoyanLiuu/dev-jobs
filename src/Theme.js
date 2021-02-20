import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bgColor: 'hsl(210, 22%, 96%)',
    cardColor: 'hsl(0, 0%, 100%)',
    uncheckedColor: 'hsla(219, 29%, 14%,0.1)',
    fullTimeColor: 'hsl(219, 29%, 14%)',
    cardTitleColor: 'hsl(220, 29%, 10%)',
};
export const darkTheme = {
    bgColor: 'hsl(220, 29%, 10%)',
    cardColor: 'hsl(219, 29%, 14%)',
    uncheckedColor: 'hsla(0, 0%, 100%,0.1)',
    fullTimeColor: 'hsl(0, 0%, 100%)',
    cardTitleColor: 'white',
};
export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --very-dark-blue-color: hsl(219, 29%, 14%);
        --dark-grey-color: hsl(214, 17%, 51%);
        --dark-grey-opacity-color: hsla(214, 17%, 51%,0.2);
        --violet-color: hsl(235,69%,61%);
        --very-light-violet-color: rgba(89, 100, 224, 0.1);
        --half-light-violet-color: rgba(89, 100, 224, 0.4);
        --light-violet-color: hsl(235,82%,77%);
        --card-content-color: hsl(214,17%,51%);
        --scroll-bar-color: rgba(70, 70, 207, 0.6);
        --hovered-scroll-bar-color: rgba(70, 70, 207, 1);
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width:100%;
        min-width: 28rem;
        background-color: ${props => props.theme.bgColor};
        transition: all ease-in-out 0.1s;
        font-family: 'Kumbh Sans', sans-serif;
    }
    .wave {
        position: absolute;
        top: 35px;
        right: 40px;
        border-radius: 100%;
        width: 2px;
        height: 2px;
        display: block;
        z-index: -1;
        box-shadow: 0 0 0 0 ${(props) => props.theme.bgColor};
        transition: box-shadow .3s ease;
    }

    .wave.active {
        box-shadow: 0 0 0 9999px ${(props) => props.theme.bgColor};
    }

    /* width */
    ::-webkit-scrollbar {
        width: 1rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--dark-grey-opacity-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--scroll-bar-color);
        border-radius: 2rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--hovered-scroll-bar-color);
    }
`;
