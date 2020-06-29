import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List } from '@material-ui/core';
import ListItem from './ListItem';

const useStyles = makeStyles(() => ({
  leadImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 500,
    width: '100vw',
    backgroundImage: (props) => `url(${props.leadImage})`,
    position: 'relative',
  },
  list: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
}));

const PageMenu = ({ leadImage, children }) => {
  const classes = useStyles({ leadImage });

  return (
    <Paper className={classes.leadImage}>
      <List component="nav" aria-label="areas of interest" className={classes.list}>
        {children}
      </List>
    </Paper>
  );
};

PageMenu.propTypes = {
  leadImage: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(ListItem).isRequired,
};

export default PageMenu;
