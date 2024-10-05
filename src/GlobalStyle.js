import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", sans-serif;
        background: ${({ theme }) => theme.colors.background};
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;