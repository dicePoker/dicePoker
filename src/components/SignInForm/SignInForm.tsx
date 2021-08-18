import React from "react";
import { Button, FormControl, Link, TextField } from "@material-ui/core";
import "./SignInForm.scss";
import { useStyles } from '../../utils/makeStyles';

export const SignInForm = (): JSX.Element => {
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
          войти
        </Button>
      </FormControl>
      <Button
        variant="contained"
        size="medium"
        className={classes.buttonSignUp}
        color="primary"
      >
        Регистрация
      </Button>
      <Link className={classes.link} onClick={(e) => e.preventDefault()}>
        Уже есть аккаунт?
      </Link>
    </div>
  );
};
