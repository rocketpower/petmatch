import React from 'react';
import ReactDOM from 'react-dom';
import { MatchCard } from './components/match-card/match-card';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 100
    },
});

function App() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <MatchCard />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));