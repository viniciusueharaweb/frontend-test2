import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;

    &.locked, .locked{
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
  }

  h1,h2,h3,h4,h5,h6{
    // font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

::placeholder {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  opacity: 0.65;
}
  button, input {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
  }

  button{
    cursor: pointer;
    border: none;
  }

  a:focus, button:focus {
    outline: 2px dashed black;
  }
`
