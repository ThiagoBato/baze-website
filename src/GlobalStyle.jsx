import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
h2 {
  font-size: 2rem;
  font-weight: 900;
}
@media (max-width: 840px) {
  h2 {
    font-size: 1rem;
  }
}

`;
