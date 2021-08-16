import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, Button, TextField, Link} from "@material-ui/core";
import './signUpForm.scss'

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing(6),
    textAlign: 'center'
  },
  button: {
    margin: 'auto',
    marginTop: theme.spacing(6),
    width: '144px'
  }


}));

export default function signUpForm() {
  const classes = useStyles();
  return (
    <div className="sign-up-form">
      <h1 className="sign-up-form__title">Регистрация</h1>
      <FormControl component="form">
        <TextField  type="text"  label="Имя"/>
        <TextField  type="text"  label="Фамилия"/>
        <TextField  type="email"  label="E-mail"/>
        <TextField  type="tel"  label="Телефон"/>
        <TextField  type="text"  label="Логин"/>
        <TextField  type="password"  label="Пароль"/>
        <Button variant="contained" size="medium" color="primary" className={classes.button} >Регистрация</Button>
      </FormControl>
      <Link href="#" className={classes.link} onClick={(e)=> e.preventDefault()}>
        Уже есть аккаунт?
      </Link>
    </div>
  )
}
