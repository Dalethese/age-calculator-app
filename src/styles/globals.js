import { createGlobalStyle } from "styled-components";
import { color } from "./themes";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    font-size: 1.6rem;
    background-color: ${color.offWhite};
    display: grid;
    place-content: center;
  }
`;
