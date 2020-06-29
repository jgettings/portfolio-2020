import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  listItem: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.5)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
  },
  listItemIcon: {
    color: 'black',
    textAlign: 'right',
    display: 'block',
    minWidth: 35,
    marginRight: 10,
    fontSize: 25,
  },
  listItemText: {
    color: 'black',
    fontWeight: 'bold',
    flex: 'none',
  },
}));

const PageMenuListItem = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <ListItem button className={classes.listItem}>
      <ListItemText
        className={classes.listItemText}
        primary={text}
        primaryTypographyProps={{ variant: 'h4' }}
      />
      <ListItemIcon className={classes.listItemIcon}>
        {icon}
      </ListItemIcon>
    </ListItem>
  );
};

PageMenuListItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageMenuListItem;
