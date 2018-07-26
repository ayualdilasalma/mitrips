import { injectGlobal } from 'styled-components';

import NotoSans from 'fonts/NotoSans-Regular.ttf';
import BigNoodle from 'fonts/big_noodle_titling.ttf';
import Condition from 'fonts/Condition.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
   font-family: NotoSans;
   src: url('${NotoSans}') format('truetype');
}
@font-face {
   font-family: Condition;
   src: url('${Condition}') format('truetype');
}
@font-face {
   font-family: BigNoodle;
   src: url('${BigNoodle}') format('truetype');
}
  html,
  body {
    height: 100%;
    width: 100%;
  }
  

  body {
    font-family: BigNoodle, NotoSans, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    font-family: BigNoodle, NotoSans, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
