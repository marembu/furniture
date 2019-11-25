import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  #spotlight{
    &.show{
      left:0;
    }    
    .header{
      top:auto;
      bottom:0;
      transform: translateY(200vh);
    }
    .icon{
      padding-right: 20px;
      padding-left:20px;
      margin:0 10px;
      background-position: center center !important;
    }
  }
  .spotHidden, .icon.close{
    display:none !important;
  }
  #spotlight.show .scene img{
    padding: 2% 0;
  }
  #spotlight .link_externo {
    background-image: url(https://i.ibb.co/tYfj9NN/enlace.png);
    background-size: auto auto;
    padding: 0 40px !important;
  }
  body {
    /* background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;  */
  }

  /* #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  } */
`;
