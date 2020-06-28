import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import SocialLinks from '../SocialLinks';
import ThemeToggle from '../../theme/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  toolBar: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  socialPaper: {
    textAlign: 'center',
    overflow: 'hidden',
  },
}));

const WiderTopBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolBar}>
        <Header />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <ThemeToggle />
      </Toolbar>

      <Toolbar className={classes.toolBar}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.socialPaper}>
              <SocialLinks />
            </Paper>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
};

export default WiderTopBar;
