import React from 'react'
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles';


import { createMuiTheme } from '@material-ui/core/styles';

const strongBlue = "#212353";
const btnBackColor = "#24262D";
const addressbarcolor = "#6F8C30"

const Main = () => {

  const [dark, setDark] = React.useState(true)
  const [darkMood, setDarkMood] = React.useState()

  const ChangeDarkMood = () => {
    setDark(!dark)
  }
  let theme = createMuiTheme({

    palette: {
      background: {
        default: dark === true ? "#121317" : "#ffff"
      },
      common: {

        blue: `${strongBlue}`,
        btnbg: `${btnBackColor}`,
        addressbar: `${addressbarcolor}`,
        // addressbar: `${addressbarcolor},

      },
      primary: {
        main: `${btnBackColor}`
      },
      secondary: {
        main: `${strongBlue}`
      }
    },


  });

  var darmood
  React.useEffect(() => {
    localStorage.setItem("mood", dark);
    darmood = localStorage.getItem("mood")
    setDarkMood(darmood)
    // console.log(darmood, dark, "sdfasdfadf")
  }, [dark])


  var darkmoods = darkMood == null ? darmood : darkMood
  console.log(darkmoods)

  return (
    <ThemeProvider theme={theme}>
      <App dark={darkmoods} ChangeDarkMood={ChangeDarkMood} />
    </ThemeProvider>

  )
}

export default Main
