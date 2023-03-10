import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

button {
    cursor: pointer;
}

span, h1, h2, h3, a, button {
    font-family: 'Roboto';
}
`