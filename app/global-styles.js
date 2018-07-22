import { injectGlobal } from 'styled-components';

import NotoSans from 'fonts/NotoSans-Regular.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
   font-family: NotoSans;
   src: url('${NotoSans}') format('truetype');
}
  html,
  body {
    height: 100%;
    width: 100%;
  }
  

  body {
    font-family: NotoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #dcdcdc;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: NotoSans, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
