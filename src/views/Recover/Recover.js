import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  Garden: {
    marginTop: "8rem",
    fontSize: "2rem",
    // textAlign: "center",
    paddingLeft: "1rem",
    color: "white",
    fontFamily: "Teko, sans-serif"
  },
  paperpage: {
    padding: "3rem  2rem",
    marginTop: "2rem",
    borderRadius: "5px",
    backgroundColor: "#1A1C23",
    [theme.breakpoints.down("md")]: {
      padding: "2rem  1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem  1rem",
    }
  },
  claimbleBalance: {
    fontSize: "2.5rem",
    color: "white",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    }
  },
  currentlyPage: {
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    }
  },
  connectwallet: {
    fontSize: "1.8rem",
    padding: "2rem 0rem",
    color: "#FACA15",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    }
  },
  paddingbalance: {
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    }
  }
}))
const Recover = ({ dark }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.Garden} style={{ color: dark == "true" ? " #ffff " : "black" }}>COMM GARDEN Recovery Program</Typography>
      <Grid container spacing={1}>

        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff", color: dark == "true" ? "white" : "black" }}>
            <Typography className={classes.claimbleBalance} style={{ color: dark == "true" ? "white" : "black" }}>Claimable Balance:</Typography>
            <Typography className={classes.currentlyPage} style={{ color: dark == "true" ? "white" : "black" }}>Your currently claimable BNB balance from the recovery protocol is:</Typography>
            <Typography className={classes.connectwallet}>CONNECT YOUR WALLET</Typography>
            <Typography className={classes.paddingbalance} style={{ color: dark == "true" ? "white" : "black" }}>Click HERE to claim your pending balance.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: "#7E3AF2" }}>
            <Typography className={classes.claimbleBalance}>Remaining Balance:</Typography>
            <Typography className={classes.currentlyPage}>You have claimed <span style={{ fontWeight: "bolder", color: "#FACA15" }}>CONNECT YOUR WALLET</span>  from the recovery protocol. Your total amount to be paid from the recovery protocol is  <span style={{ fontWeight: "bolder", color: "#FACA15" }}>CONNECT YOUR WALLET.</span> Please continue to check here as the claimable balance grows to meet your full loss.</Typography>

          </Paper>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Recover
