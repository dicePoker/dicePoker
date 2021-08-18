import React from 'react';
import {FormControl, Button, TextField, Link} from "@material-ui/core";
import './SignUpForm.scss'
import { useStyles } from '../../utils/makeStyles';

export const SignUpForm = (): JSX.Element =>  {
  const classes = useStyles();
  return (
    <div className="sign-up-form">
      <h1 className="sign-up-form__title">Регистрация</h1>
      <FormControl component="form">
        <TextField name="first_name" type="text"  label="Имя"/>
        <TextField name="last_name" type="text"  label="Фамилия"/>
        <TextField name="email" type="email"  label="E-mail"/>
        <TextField name="phone" type="tel"  label="Телефон"/>
        <TextField name="login" type="text"  label="Логин"/>
        <TextField name="password" type="password"  label="Пароль"/>
        <Button variant="contained" size="medium" color="primary" className={classes.buttonSignUpForm}>Регистрация</Button>
      </FormControl>
      <Link href="#" className={classes.link} onClick={(e)=> e.preventDefault()}>
        Уже есть аккаунт?
      </Link>
    </div>
  )
}
