import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import leadImage from '../assets/green-sand-beach.jpg';

const useStyles = makeStyles(() => ({
  leadImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 500,
    width: '100vw',
    backgroundImage: `url(${leadImage})`,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.leadImage}>
      This is things
    </Paper>
  );
};

export default Home;
