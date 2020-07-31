import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { MatchCard } from './components/match-card/MatchCard';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import theme from './theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <MatchCard />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));