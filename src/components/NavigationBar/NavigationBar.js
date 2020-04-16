import React, { useContext } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import deepPurple from '@material-ui/core/colors/deepPurple';

import { AppContext } from '../../App';

import { DRAWER_WIDTH } from '../../constants/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  appBar: {
    height: '6rem',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavigationBar(props) {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);

  const toggleMobileDrawer = () => {
    dispatch({ type: 'TOGGLE_MOBILE_DRAWER' });
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMobileDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <IconButton aria-label="back">
          <ArrowBackIosRoundedIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          APR 2020
        </Typography>
        <IconButton aria-label="forward">
          <ArrowForwardIosRoundedIcon />
        </IconButton>
        <span style={{ backgroundColor: '#4caf50', padding: '.5rem', borderRadius: '.5rem' }}>
          <Typography variant="subtitle1" noWrap>
            $1,000
          </Typography>
          <Typography variant="subtitle2" align="center" noWrap>
            To be budgeted
          </Typography>
        </span>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
