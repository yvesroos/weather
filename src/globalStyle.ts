import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export type DefaultTheme = Theme;
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Helvetica', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) => props.theme.bgColor};
  background-size: auto;
}
#root {
  max-width: 960px;
  width: 100%;
  margin: auto 0;
  padding: 0 1rem;
}
`;
