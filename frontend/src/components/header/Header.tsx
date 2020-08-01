import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: theme.palette.primary.contrastText,
    width: '100%',
    height: '64px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    boxShadow: 'none'
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'row',
    height: '64px',
    width: '50%',
    margin: '0 auto',
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.nav}>
      <Toolbar className={classes.navMenu}>
        <img src='/violet-logo32.png' alt='petmatch logo' />
      </Toolbar>
    </AppBar>
  );
}