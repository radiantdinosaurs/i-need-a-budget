/** ****************************
 * Dependencies
 ***************************** */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

/** ****************************
 * Components
 ***************************** */
import NavigationDrawer from './components/NavigationDrawer';

/** ****************************
 * Styles
 ***************************** */
import useStyles from './navigationBar.styles';

function NavigationBar(props) {
  const classes = useStyles();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen((previousState) => ({
      ...previousState,
      isMobileDrawerOpen: !isMobileDrawerOpen,
    }));
  };

  return (
    <>
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
            <Typography variant="caption" align="center" noWrap>
              <em>To be budgeted</em>
            </Typography>
            <Typography variant="subtitle1" align="center" noWrap>
              $1,000
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
      <NavigationDrawer isMobileDrawerOpen={isMobileDrawerOpen} toggleMobileDrawer={toggleMobileDrawer} />
    </>
  );
}

export default NavigationBar;
