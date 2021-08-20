import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/signin/">
        <Button variant="contained">Signin</Button>
      </Link>
      <Link to="/signup/">
        <Button variant="contained" color="primary">
          SignUp
        </Button>
      </Link>
      <Link to="/dashboard/">
        <Button variant="contained" color="secondary">
          Dashboard
        </Button>
      </Link>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
