import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin:0;
    background-color: #f0f0f0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  font-style: normal;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 4px;
  outline: none;
  cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-family: "Pacifico";
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
