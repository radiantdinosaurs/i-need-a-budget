import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const THEME = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blueGrey,
  },
});

export const DRAWER_WIDTH = 200;
