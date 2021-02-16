import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bgColor: 'hsl(210, 22%, 96%)',
    cardColor: 'hsl(0, 0%, 100%)',
    uncheckedColor: 'hsl(210, 22%, 96%)',
    cardTitleColor: 'hsl(220, 29%, 10%)',
};
export const darkTheme = {
    bgColor: 'hsl(220, 29%, 10%)',
    cardColor: 'hsl(219, 29%, 14%)',
    uncheckedColor: 'hsl(212, 23%, 69%)',
    cardTitleColor: 'white',
};
export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --violet-color:hsl(235,69%,61%);
        --very-light-violet-color: rgba(89, 100, 224, 0.1);
        --light-violet-color:hsl(235,82%,77%);
        --card-content-color:hsl(214,17%,51%);
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
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Kumbh Sans', sans-serif;
    }
`;
