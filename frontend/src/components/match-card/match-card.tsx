import React from 'react';
import 'fontsource-roboto';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { 
            makeStyles, 
            Card,
            CardContent, 
            Typography, 
            CardActionArea, 
            CardMedia, 
            CardActions, 
            IconButton
        } from '@material-ui/core';

const styles = makeStyles({
    root: {
        width: 500,
        height: 500
    },
    media: {
        height: 300
    },
    like: {
        color: '#6a0dad'
    },
    dislike: {
        color: '#FF0000'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    }
});

export function MatchCard() {
    const classes = styles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/assets/Darwin.png"
                />
            </ CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Darwin
                </Typography>
                <Typography color="textSecondary">
                    Me gusta comer y pasar el rato al aire libre.
                </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
                <IconButton className={classes.dislike}>
                    <CloseIcon fontSize='large' />
                </IconButton>
                <IconButton className={classes.like}>
                    <FavoriteIcon fontSize='large' />
                </IconButton>
            </CardActions>
        </ Card>
    );
}