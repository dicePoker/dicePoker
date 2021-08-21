import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function ContainedButtons(): JSX.Element {

  return (
    <div>
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
      <Link to="/forum/">
        <Button variant="contained" color="primary">
          Forum
        </Button>
      </Link>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  );
}
