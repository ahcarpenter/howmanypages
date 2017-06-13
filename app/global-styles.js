import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 600;
    src: local('Muli SemiBold'), local('Muli-SemiBold'), url(https://fonts.gstatic.com/s/muli/v10/UfnYe1HdWn9oxI4EauRTFgLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, .btn, input, p {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded, .btn, input, p {
    font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #eceeef;
    min-height: 100%;
    min-width: 100%;
  }

  .display-3 {
    font-size: 2.5rem !important;
  }

  @media only screen and (min-width : 544px) {
    .display-3 {
      font-size: 4.5rem !important;
    }
  }

  .list-group-item.active a {
    color: white !important;
  }

  .jumbotron {
    margin-bottom: 0 !important;
  }
`;
