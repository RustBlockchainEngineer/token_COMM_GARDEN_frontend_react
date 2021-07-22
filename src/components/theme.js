
import { createMuiTheme } from '@material-ui/core/styles';
const halfgray = "#4B5D68";
const strongBlue = "#212353";
const purple = "#9C69E2";
const lightpink = "#F063B8";
const btnBackColor = "#24262D";
const wColor = "#ffff";
const timerHalfColr = "#C4C4C4";
const bColor = "#000000";
const btnBackground = "#5D5FEF";
// const btn
let theme = createMuiTheme({

  palette: {
    background: {
      default: "#121317"
    },
    common: {
      gray: `${halfgray}`,
      blue: `${strongBlue}`,
      textLengthColor: `${halfgray}`,
      lightPinkColor: `${lightpink}`,
      purple: `${purple}`,
      btnbg: `${btnBackColor}`,
      white: `${wColor}`,
      timerColr: `${timerHalfColr}`,
      blackColor: `${bColor}`,
      ClaimbtnBg: `${btnBackground}`
    },
    primary: {
      main: `${btnBackColor}`
    },
    secondary: {
      main: `${strongBlue}`
    }
  },


});
export default theme;


