import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { importFonts } from 'styled-gen';

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${importFonts};

    html,
    body {
        position: relative;
        height: 100%;
        width: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    body {
        box-sizing: border-box;
        line-height: 1.4;
        overflow-x: hidden;
        font-family: ${({theme}) => theme.fonts.families.sans};
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        * {
            box-sizing: border-box;
        }
        &.loading,
        &.no-scroll {
            overflow-y: hidden;
        }
    }

    a {
        text-decoration: none;
        outline: 0;

        &:hover,
        &:active,
        &:focus {
            outline: 0;
            text-decoration: none;
        }

        &:not(:disabled) {
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
