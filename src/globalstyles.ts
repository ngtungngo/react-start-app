import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Porsche Next", sans-serif;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.background};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  #app {
    margin-top: 4rem;
    height: calc(100vh - 64px);
    width: 100vw;
    overflow-y: scroll;
  }
`;

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: 25px;
`;
