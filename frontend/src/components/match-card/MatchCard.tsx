import React from 'react';
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

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    height: 500
  },
  media: {
    height: 300
  },
  like: {
    color: theme.palette.primary.light
  },
  dislike: {
    color: theme.palette.primary.main
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

export function MatchCard() {
  const classes = useStyles();

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