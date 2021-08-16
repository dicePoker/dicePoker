import React from 'react';
import {
  Button, FormControl, Link, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './SignInForm.scss';

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    color: '#1769AA',
  },
  button: {
    margin: 'auto',
    marginTop: theme.spacing(6),
    width: '144px',
    color: '#fff',
    backgroundColor: '#2196F3',
  },
  buttonSignUp: {
    margin: 'auto',
    marginTop: theme.spacing(1),
    width: '144px',
    backgroundColor: '#E3F2FD',
    color: '#2196F3',
  },
}));

export default function SignInForm(): JSX.Element {
  const classes = useStyles();

  return (
    <div className="sign-in-form">
      <h1 className="sign-in-form__title">Вход</h1>
      <FormControl component="form">
        <TextField name="login" type="text" label="Логин" />
        <TextField name="password" type="password" label="Пароль" />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.button}
        >
          ВОЙТИ
        </Button>
      </FormControl>
      <Button variant="contained" size="medium" className={classes.buttonSignUp} color="primary">
        Регистрация
      </Button>
      <Link className={classes.link} onClick={(e) => e.preventDefault()}>
        Уже есть аккаунт?
      </Link>
    </div>
  );
}
