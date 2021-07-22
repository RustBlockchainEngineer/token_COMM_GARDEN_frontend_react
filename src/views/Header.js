import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route, useParams, useHistory } from 'react-router-dom';
import { Input, Grid, Hidden } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { AiFillFileText } from 'react-icons/ai'
import { BsMoon } from 'react-icons/bs'
// AiFillFileText
import Home from '../views/home/index';
import Recover from './Recover/Recover';
import Investment from './Investment/Investment';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#1A1C23",
    color: "white"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,


  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: "#24262D",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    width: 300,
    height: 150,
    borderRadius: "10px",

    backgroundColor: "#1A1C23",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    }
  },
  logoImg: {
    width: 60,
    height: 60,
    [theme.breakpoints.down("md")]: {
      width: 50,
      height: 50,
    },
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: 50,
    }
  },

  logotext: {
    marginTop: "1rem",
    color: "#ffff",
    [theme.breakpoints.down("md")]: {

      fontSize: ".9rem",
      padding: ".7rem 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },
  InputField: {
    color: "white",
    border: "1px solid #9E9E9E",
    backgroundColor: "#24262D",
    marginTop: ".5rem",
    padding: ".1rem"
  },
  drawer: {
    backgroundColor: '#24262D',
    marginTop: "3.5rem",
    zIndex: "-1"
  },

}));

export default function Dashboard({ dark, ChangeDarkMood }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [colorone, setColorone] = React.useState(0)
  const [colortwo, setColorTwo] = React.useState(0)
  const [colorthree, setColorThree] = React.useState(0)
  const history = useHistory();
  const { pathname } = history.location;
  const drawer = (
    <React.Fragment >
      <SwipeableDrawer disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
        onOpen={() => { setOpenDrawer(true) }}
        classes={{ paper: classes.drawer }}

      >
        <div className={classes.toolbarMargin} />
        <List disablePadding >
          <ListItem>
            <img src='/logo.png' className={classes.logoImg} />
            <Typography component="h1" variant="h6" color="inherit" className={classes.logotext}>The COMM GARDEN</Typography>
          </ListItem>
          <ListItem button component={Link} to="/" onClick={() => setOpenDrawer(false)} >
            <ListItemIcon >
              <HomeIcon style={{ color: "#809C9E" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#809C9E" }} />
          </ListItem>
          <ListItem button component={Link} to="/recover" onClick={() => setOpenDrawer(false)} st>
            <ListItemIcon>
              <AccountBalanceWalletIcon style={{ color: "#809C9E" }} />
            </ListItemIcon>
            <ListItemText primary="Recovery" style={{ color: "#809C9E" }} />
          </ListItem>
          <ListItem button component={Link} to="/investment" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <NotificationsNoneIcon style={{ color: "#809C9E" }} />
            </ListItemIcon >
            <ListItemText style={{ color: "#809C9E" }} >Grow your <br />Investment</ListItemText>
          </ListItem>

        </List>
      </SwipeableDrawer >
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} >
        <MenuIcon className={classes.drawerIcon} style={{ color: "white" }} />
      </IconButton>
    </React.Fragment >
  )


  const colorChangeHandlerOne = (r) => {
    setColorTwo(0)
    setColorone(r)
    setColorThree(0)
  }
  const colorChangeHandlerTwo = (r) => {
    setColorTwo(r)
    setColorone(0)
    setColorThree(0)
  }
  const colorChangeHandlerThree = (r) => {
    setColorThree(r)
    setColorTwo(0)
    setColorone(0)
  }


  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar position="absolute"  >
        {/* style={{ backgroundColor: dark == "true" ? "#1A1C23" : "#ffff" }} */}
        <Toolbar className={classes.toolbar}  >

          <Grid container spacing={1}>



            <Grid container item xs={12} md={6} sm={2} xs={2} lg={4}>
              <Hidden mdUp>
                {drawer}
                {/* <TemporaryDrawer /> */}
              </Hidden>
              <Hidden mdDown>
                <img src='/logo.png' className={classes.logoImg} />
                <Typography component="h1" variant="h6" color="inherit" className={classes.logotext}>The COMM GARDEN</Typography>
              </Hidden>
            </Grid>
            <Grid item xs={12} md={6} sm={6} xs={8} lg={6}>

              <Input
                className={classes.InputField}
                placeholder="paste your address here"
                startAdornment={
                  <InputAdornment position="start">
                    <AiFillFileText />
                  </InputAdornment>
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={2} md={1} sm={1} lg={2}>
              <IconButton onClick={ChangeDarkMood}>
                {dark == "true" ? <BsMoon /> : <WbSunnyIcon style={{ color: dark == "true" ? " black " : "white" }} />}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden mdDown>  <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        style={{ paddingTop: "4rem" }}
      >
        <Divider />

        <List>
          <ListItem button component={Link} to="/" style={{ borderLeft: pathname === "/" || colorone === 1 ? "4px solid #7E3AF2" : "0px solid #7E3AF2" }} onClick={() => colorChangeHandlerOne(1)}>
            <ListItemIcon>
              <HomeIcon style={{ color: "#809C9E" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#809C9E" }} />
          </ListItem>
          <ListItem button component={Link} to="/recover" style={{ borderLeft: pathname === "/recover" || colortwo === 1 ? "4px solid #7E3AF2" : "0px solid #7E3AF2" }} onClick={() => colorChangeHandlerTwo(2)}>
            <ListItemIcon>
              <AccountBalanceWalletIcon style={{ color: "#809C9E" }} />
            </ListItemIcon>
            <ListItemText primary="Recovery" style={{ color: "#809C9E" }} />
          </ListItem>
          <ListItem button component={Link} to="/investment" style={{ borderLeft: pathname === "/investment" || colorthree === 1 ? "4px solid #7E3AF2" : "0px solid #7E3AF2" }} onClick={() => colorChangeHandlerThree(3)}>
            <ListItemIcon>
              <NotificationsNoneIcon style={{ color: "#809C9E" }} />
            </ListItemIcon >
            <ListItemText style={{ color: "#809C9E" }} >Grow your <br />Investment</ListItemText>
          </ListItem>

        </List>
      </Drawer>
      </Hidden>
      <Route exact path="/">
        <Home dark={dark} />
      </Route>
      <Route exact path="/recover">
        <Recover dark={dark} />
      </Route>
      <Route exact path="/investment">
        <Investment dark={dark} />
      </Route>

    </div>
  );
}