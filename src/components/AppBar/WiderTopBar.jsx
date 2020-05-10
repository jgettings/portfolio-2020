import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import SocialLinks from '../SocialLinks';
import ThemeToggle from '../../theme/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));


const WiderTopBar = () => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Header />

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <SocialLinks />

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <ThemeToggle />
    </Toolbar>
  );
};

export default WiderTopBar;
