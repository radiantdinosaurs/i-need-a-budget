import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './navigationDrawer.styles';

function NavigationDrawer({ isMobileDrawerOpen, toggleMobileDrawer }) {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="My Budget" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="budget">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={isMobileDrawerOpen}
          onClose={toggleMobileDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavigationDrawer;
