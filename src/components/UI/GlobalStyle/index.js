// libraries
import { createGlobalStyle } from 'styled-components';
// static
// import 'assets/css/typography.css';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Roboto Condensed', sans-serif;
    }

    body.home {
        font-family: 'Roboto Condensed', sans-serif;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
