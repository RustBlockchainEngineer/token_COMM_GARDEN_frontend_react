import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Input, Button } from '@material-ui/core';
// import { mainListItems, secondaryListItems } from './listItems';


import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { FiDatabase } from 'react-icons/fi';
import { AiFillDollarCircle, AiFillLock, AiOutlineFieldTime } from 'react-icons/ai'
const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    width: 250,
    height: 100,
    borderRadius: "10px",
    padding: '1rem',
    backgroundColor: "#1A1C23",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    }
  },
  logoImg: {
    width: 50,
    height: 50
  },
  Mainheading: {
    fontSize: "3rem",
    paddingBottom: ".5rem",
    fontWeight: "bolder",
    color: "white",
    fontFamily: "Teko, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    }
  },
  addressContainer: {
    padding: "1rem 0rem",
  },
  addressbar: {
    padding: "1rem 1rem",
    display: "flex",
    justifyContent: "space-between"
  },
  addressIcons: {
    position: "relative", top: ".3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      top: ".1rem",
    }
  },
  textHeader: {
    fontSize: "1rem",
    color: "#ffff",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    }

  },
  databox: {

    width: 30,
    height: 60,
    borderRadius: "10px ",
    color: "white",
    position: "relative",
    position: "relative",
    top: "0rem"
  },
  dataIcon: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  textboxone: {
    fontSize: ".8rem",
    fontWeight: 400,
    color: "#809C9E",
    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    }
  },
  textboxtwo: {
    fontSize: "1.1rem",
    lineHeight: "300%",
    fontWeight: 900,
    color: "#ffff",
    [theme.breakpoints.down("md")]: {
      fontSize: ".98rem",
    }
  },
  btnproce: {
    color: "white",
    fontSize: "1rem",
    backgroundColor: "#6F8C30",
    "&:hover": {
      backgroundColor: "#6F8C30",
    }
  },
  bnbLogo: {
    width: "10rem",
    height: "10rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      width: "8rem",
      height: "8rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "6rem",
      height: "6rem",
    },
    // textAlign: "center",

  },
  bnbtext: {
    fontSize: "3rem",
    fontFamily: "Teko, sans-serif",
    color: "white",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },

  },
  bnbtextTotal: {
    fontSize: "4rem",
    fontFamily: "Teko, sans-serif",
    color: "#31C48D",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  moneyText: {
    fontSize: "2rem",
    fontFamily: "Teko, sans-serif",
    color: "white",
    fontWeight: 800,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  valuesbnb: {
    fontSize: "1.5rem",
    textAlign: "center",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
  perday: {
    fontSize: "1.2rem",
    color: "#9E9E9E",
    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },
  dynamictext: {
    color: "#9E9E9E",
    fontWeight: "bolder",
    fontSize: "1rem",
    textAlign: "center",
    padding: "1rem 2rem",
    // paddingBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "2rem",
      fontSize: ".9rem",
      padding: ".7rem 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1rem",
      fontSize: ".8rem",
    },
  },
  content: {
    marginTop: "5rem"
  }
}));
const Index = ({ dark }) => {
  console.log(dark, "dark====>")
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid>
            <Typography className={classes.Mainheading} style={{ color: dark == "true" ? "white" : "black" }}>COMM GARDEN Earnings Manager</Typography>
          </Grid>
          <Grid item xs={12} className={classes.addressContainer} >
            <Paper className={classes.addressbar} style={{ backgroundColor: dark == "true" ? "#2fbe39" : "#ffff", }}>
              <Typography className={classes.textHeader} style={{ color: dark == "true" ? "white" : "black" }} ><ImportContactsIcon className={classes.addressIcons} /> please Enter your address above</Typography>
              <Typography className={classes.textHeader} style={{ color: dark == "true" ? "white" : "black" }}><a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6aa4dac3ea058fa9e8269cc210edac819cf8a7e5" target="_blank" style={{ color: "white", textDecoration: "none" }}> Buy COMM GARDEN<ArrowForwardIcon className={classes.addressIcons} /></a></Typography>
            </Paper>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} sm={12} lg={3}>
              <Paper className={classes.fixedHeight} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff", color: dark == true ? "white" : "black" }} >
                <Grid container spacing={2} className={classes.TextboxContainer}>
                  <Grid item>
                    <Box className={classes.databox} style={{ backgroundColor: "#ff2800" }}>
                      <FiDatabase className={classes.dataIcon} fontSize="large" />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.textboxone} style={{ color: dark == "true" ? "white" : "black" }}>Your COMM GARDEN <br />Holdings</Typography>
                    <Typography className={classes.textboxtwo} style={{ color: dark == "true" ? "white" : "#A19CAB" }}>0 COMM GARDEN </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sm={12} lg={3}>
              <Paper className={classes.fixedHeight} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff", }}>
                <Grid container spacing={2} className={classes.TextboxContainer}>
                  <Grid item>
                    <Box className={classes.databox} style={{ backgroundColor: "#2fbe39 ", }}>
                      <AiFillDollarCircle className={classes.dataIcon} fontSize="large" />
                    </Box>
                  </Grid>
                  <Grid item style={{ position: "relative", top: ".5rem" }}>
                    <Typography className={classes.textboxone}>Total BNB Paid</Typography>
                    <Typography className={classes.textboxtwo} style={{ color: "#FACA15" }}>0.0000 BNB</Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={3}>
              <Paper className={classes.fixedHeight} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
                <Grid container spacing={2} className={classes.TextboxContainer}>
                  <Grid item>
                    <Box className={classes.databox} style={{ backgroundColor: "#87ceeb", }}>
                      <AiFillLock className={classes.dataIcon} fontSize="large" />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.textboxone}>Last Payout Time <br /></Typography>
                    <Typography className={classes.textboxtwo} style={{ color: dark === "true" ? "white" : "#A19CAB" }}>Never</Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={3}>
              <Paper className={classes.fixedHeight} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff", }}>
                <Grid container spacing={2} className={classes.TextboxContainer}>
                  <Grid item>
                    <Box className={classes.databox} style={{ backgroundColor: "#A66B49", }}>
                      <AiOutlineFieldTime className={classes.dataIcon} fontSize="large" />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.textboxone}>Next Payout Loading</Typography>
                    <Typography className={classes.textboxtwo}><span style={{ color: "#FACA15" }} >Processing</span> | 0%</Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>

          </Grid>
          <Grid item xs={12} className={classes.addressContainer} >
            <Paper className={classes.addressbar} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff", width: "100%" }}>
              <Button fullwidth variant="outlined" style={{ backgroundColor: dark == "true" ? "#2fbe39" : "#ffff", width: "100%", color: dark == "true" ? "black" : "black" }} className={classes.btnproce}>Payout is Processing</Button>
            </Paper>
          </Grid>

          <Grid>
            <Paper style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
              <Box style={{ textAlign: 'center' }}>
                <img src="/assets/bnb.png" className={classes.bnbLogo} />
              </Box >
              <Box style={{ textAlign: 'center' }}>
                <Typography className={classes.bnbtextTotal} style={{ color: dark == "true" ? "#2fbe39" : "black" }}  >Total BNB Paid To COMM GARDEN  Holders</Typography>
                <Typography className={classes.bnbtextTotal} style={{ color: dark == "true" ? "#2fbe39" : "black" }}>16,846 <span style={{ color: "#FACA15" }}>BNB</span>= $4,962,878</Typography>

              </Box>
            </Paper>
          </Grid>

          <Grid container spacing={1} style={{ marginTop: ".5rem" }}>

            <Grid item xs={12} md={6} sm={12} lg={6}>
              <Paper style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>

                <Box style={{ textAlign: 'center' }}>
                  <img src="/assets/money.png" className={classes.bnbLogo} />
                </Box >
                <Box>
                  <Typography className={classes.moneyText} style={{ color: dark == "true" ? "#2fbe39" : "black" }} >Total BNB Paid To COMM GARDEN Holders</Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0.00 BNB<span style={{ color: dark == "true" ? "#2fbe39" : "black" }}  >($0.00)</span></span> <span className={classes.perday}>Per Day</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0.00 BNB<span style={{ color: dark == "true" ? "#2fbe39" : "black" }}  >($0.00)</span></span> <span className={classes.perday}>Per Week</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0.00 BNB<span style={{ color: dark == "true" ? "#2fbe39" : "black" }}  >($0.00)</span></span> <span className={classes.perday}>Per Month</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0.00 BNB<span style={{ color: dark == "true" ? "#2fbe39" : "black" }}  >($0.00)</span></span> <span className={classes.perday}>Per Year</span></Typography>
                  <Typography className={classes.dynamictext} style={{ paddingBottom: "4rem" }}>Dynamic estimations based on 24h of trading volume ($1,370,078)</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <Paper style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
                <Box style={{ textAlign: 'center' }}>
                  <img src="/assets/money.png" className={classes.bnbLogo} />
                </Box >
                <Box>
                  <Typography className={classes.moneyText} style={{ color: dark == "true" ? "#2fbe39" : "black" }} >By Reinvesting Dividends Every Day, Your 0 COMM GARDEN Becomes:</Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0 COMM GARDEN <span style={{ color: dark == "true" ? "#2fbe39" : "black" }} >(0x Earnings
                  </span></span> <span className={classes.perday}>In a day</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0 COMM GARDEN <span style={{ color: dark == "true" ? "#2fbe39" : "black" }} >(0x Earnings
                  </span></span> <span className={classes.perday}>In a Week</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0 COMM GARDEN <span style={{ color: dark == "true" ? "#2fbe39" : "black" }} >(0x Earnings
                  </span></span> <span className={classes.perday}>In a Month</span></Typography>
                  <Typography className={classes.valuesbnb}><span style={{ color: "#FACA15" }}>0 COMM GARDEN <span style={{ color: dark == "true" ? "#2fbe39" : "black" }} >(0x Earnings
                  </span></span> <span className={classes.perday}>In a Year</span></Typography>
                  <Typography className={classes.dynamictext}>Estimations are based on current $COMM GARDEN price ($0.0131)</Typography>
                </Box>

              </Paper>
            </Grid>

          </Grid>

        </Container>
      </main>
    </div>
  )
}

export default Index
