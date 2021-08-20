import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Link, TextField, Grid, Avatar } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  link: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    color: '#1769AA',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(4),
  },
}));

export const Profile = (): JSX.Element => {
  const classes = useStyles();

  return (
    <section className="profile">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1 className="profile__title">Профиль</h1>
        <Avatar className={classes.large}>H</Avatar>
        <FormControl component="form">
          <TextField
            name="login"
            label="Логин"
            defaultValue="User login"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            name="password"
            label="Пароль"
            defaultValue="User password"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            name="email"
            label="E-mail"
            type="email"
            defaultValue="User email"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            name="firstName"
            label="Имя"
            defaultValue="User name"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            name="secondName"
            label="Фамилия"
            defaultValue="User surname"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            name="phone"
            label="Телефон"
            type="tel"
            defaultValue="User phone"
            InputProps={{
              readOnly: true,
            }}
          />
        </FormControl>
        <Link className={classes.link} onClick={e => e.preventDefault()}>
          Редактировать
        </Link>
      </Grid>
    </section>
  );
};
