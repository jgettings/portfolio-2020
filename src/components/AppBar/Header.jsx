import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import md5 from 'md5';

const gravatar = () => `https://www.gravatar.com/avatar/${md5('jennifer.wystup@gmail.com')}`;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Avatar aria-hidden alt="" src={gravatar()} className={classes.menuButton} />
      <Typography variant="h2" component="h1" color="primary" className={classes.title}>
        Jen Gettings
      </Typography>
    </React.Fragment>
  );
};

export default Header;
