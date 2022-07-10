// libraries
import { createGlobalStyle } from 'styled-components';
// static
import '../../../assets/css/typography.css';

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: Volte, Arial, sans-serif;
  }

  body.overlay-hidden {
    overflow: hidden;
  }

  body.overlay-hidden::before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgb(4 4 15 / 40%);
    transition: .3s;
    content: "";
  }

  body.home {
    font-family: VolteRounded, Arial, sans-serif;
  }
  /* stylelint-disable */
  body.page-template-default header {
      position: absolute;
      color: #FFF;
      
      .logo-money-word {
          fill: #fff;
          stroke: #fff;
      }
      
      &.fix-header {
          position: fixed;
          color: #4c4c4c;
          background: #FFF;

          .logo-money-word {
              fill: #9edc15;
              stroke: #9edc15;
          }
      }
  }

  body.page-template-landing header {
      position: relative;
      color: #4c4c4c;

      &.fix-header {
          position: fixed;
          top: 0;
          background: #FFF;
      }
      
      .logo-money-word {
          fill: #9edc15;
          stroke: #9edc15;
      }
  }
  /* stylelint-enable */
  
  img {
    display: block;
    max-width: 100%;
  }

  .wp-block-image {
    margin-right: 0;
    margin-left: 0;
  }
  
  a {
    color: #9edc15;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  address {
    font-style: normal;
  }
`;

export default GlobalStyles;
