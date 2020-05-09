import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import md5 from 'md5';
import ThemeToggle from '../theme/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const gravatar = () => `https://www.gravatar.com/avatar/${md5('jennifer.wystup@gmail.com')}`;

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" role="banner" color="transparent">
      <Toolbar>
        <Avatar alt="Jen Gettings" src={gravatar()} className={classes.menuButton} />
        <Typography variant="h2" component="h1" className={classes.title} color="primary">
          Jen Gettings
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
