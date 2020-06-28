import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import WiderTopBar from './WiderTopBar';
import NarrowerTopBar from './NarrowerTopBar';

const TopBar = () => {
  const wideScreen = useMediaQuery('(min-width:725px)');

  return (
    <AppBar position="sticky" role="banner" color="transparent">
      {wideScreen && <WiderTopBar />}
      {!wideScreen && <NarrowerTopBar />}
    </AppBar>
  );
};

export default TopBar;
