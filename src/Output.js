import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ErrorAlert from './Errors.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Output({ Input }) {
  const classes = useStyles();
  if (Input.length > 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Input.map(item => (
            <Grid item xs>
              <Paper className={classes.paper}>{item}</Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <ErrorAlert message="No anagrams found!"/>
      </div>
    );
  }
}