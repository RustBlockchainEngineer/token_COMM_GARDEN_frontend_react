import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  Garden: {
    marginTop: "6rem",
    fontSize: "2rem",
    textAlign: "center",
    paddingLeft: "1rem",
    color: "white",
    fontFamily: "Teko, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    }
  },
  paperpage: {
    padding: "3rem  2rem",
    borderRadius: "2rem",
    marginTop: "2rem",
    backgroundColor: "#1A1C23",
    [theme.breakpoints.down("md")]: {
      padding: "2rem  1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem  1rem",
    }
  },
  claimbleBalance: {
    fontSize: "2rem",
    color: "#9E9E9E",

    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    }
  },
  weareExplaind: {
    fontSize: "1rem",
    color: "white",
    fontWeight: "bold",
    color: "#9E9E9E",
    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
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
  },
  imgBox: {
    padding: "2rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: ".9rem",
    }
  },
  socialImages: {
    width: "4rem",
    height: "4rem",
    position: "relative",
    top: "3rem",
    [theme.breakpoints.down("md")]: {
      width: "3rem",
      height: "3rem",
      top: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "2.5rem",
      height: "2.5rem",
      top: "1rem",
    }
  }
}))

const Investment = ({ dark }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.Garden} style={{ color: dark == "true" ? " #ffff " : "black" }}>Tasks to boost your income
        The tasks outlined below can significantly impact the (future) value of your investment.
        As such, investors are highly encouraged to perform these tasks as often as possible.</Typography>
      <Grid container spacing={1}>

        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/coinmarket.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>CoinMarketCap</Typography>
                <Typography className={classes.weareExplaind}>We are listed on CMC! To help get more exposure and enhance market value:</Typography>
                <Typography className={classes.weareExplaind}>✅Use keeprefreshing.com and set timer to 10 seconds. Open as many tabs as you can</Typography>
                <Typography className={classes.weareExplaind}>✅Add COMM GARDEN Token to watchlist, and tell your friends to do the same.</Typography>
                <Typography className={classes.weareExplaind}>✅Vote 'Good' at the bottom of the page.</Typography>
                <a href="https://coinmarketcap.com/currencies/Comm%20Garden-token/" target="_blank"><Typography className={classes.weareExplaind} >COMM GARDEN on CoinMarketCap</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex", paddingBottom: "8.8rem" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/coingoco.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>CoinGecko</Typography>
                <Typography className={classes.weareExplaind}>Go to COMM GARDEN's CoinGecko</Typography>
                <Typography className={classes.weareExplaind}>page and click on the STAR to LIKE</Typography>
                <Typography className={classes.weareExplaind}>COMM GARDEN!</Typography>
                {/* <Typography className={classes.weareExplaind}>✅Vote 'Good' at the bottom of the page.</Typography> */}
                <a href="https://www.coingecko.com/en/coins/Comm%20Garden-token" target="_blank"><Typography className={classes.weareExplaind} >COMM GARDEN on CoinGecko</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/google.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>Google  </Typography>
                <Typography className={classes.weareExplaind}>Searching for these terms on Google increases their ranking, causing more people to get them as suggestions</Typography>

                <Typography className={classes.weareExplaind}>Of course, feel free to do any amount of additional searches for even more effect!</Typography>
                <a href="https://www.google.com/" target="_blank"><Typography className={classes.weareExplaind} >Search Google for "COMM GARDEN Token"</Typography></a>
                <a href="https://www.google.com/" target="_blank"><Typography className={classes.weareExplaind} >Search Google for "COMM GARDEN free bnb"</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex", paddingBottom: "1.9rem" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/youtube.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>YouTube</Typography>
                <Typography className={classes.weareExplaind}>Searching for these terms on YouTube increases their ranking, causing more people to get them as suggested videos or search suggestions.</Typography>
                <Typography className={classes.weareExplaind}>Search YouTube for "COMM GARDEN Token"</Typography>
                <a href="https://www.youtube.com/" target="_blank"><Typography className={classes.weareExplaind} >Search YouTube for "COMM GARDEN free bnb".</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/twitter.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>Twitter</Typography>
                <Typography className={classes.weareExplaind}>Using the following hashtags in your tweet(s) will increase their ranking, get them trending and attract the attention of potential new investors.</Typography>
                <Typography className={classes.weareExplaind}>#COMM GARDEN Token #COMM GARDEN 1Dollar #COMM GARDEN BNB</Typography>
                <a href="https://twitter.com/" target="_blank"><Typography className={classes.weareExplaind} >Compose a new tweet</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper className={classes.paperpage} style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }}>
            <Box className={classes.boxContainer} style={{ display: "flex", paddingBottom: "1.6rem" }}>

              <Box className={classes.imgBox}>
                <img src="/assets/insta.png" className={classes.socialImages} />
              </Box>
              <Box>
                <Typography className={classes.claimbleBalance}>Instagram</Typography>
                <Typography className={classes.weareExplaind}>Use these hashtags on your posts to increase COMM GARDEN's exposure on this platform. For example, post your stats!</Typography>
                <Typography className={classes.weareExplaind}>#COMM GARDEN  Token</Typography>
                <a href="https://www.instagram.com/" target="_blank"><Typography className={classes.weareExplaind} >Post on Instagram</Typography></a>
              </Box>
            </Box>
            <hr />
            <Typography className={classes.weareExplaind}><input type="checkbox" />Task completed for today</Typography>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Investment
