import { createGlobalStyle, css } from 'styled-components';

// Workaround for formatting bug
// https://github.com/styled-components/vscode-styled-components/issues/175
export default createGlobalStyle`${css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 100%/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`}`;
