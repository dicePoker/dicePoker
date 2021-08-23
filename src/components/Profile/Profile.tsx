import { FormControl, Link, TextField, Grid, Avatar } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../utils/makeStyles';
import profileTextFieldsData from '../../utils/profileTextFields.json';

const getTextFieldsData = () => {
  return profileTextFieldsData;
};

export const Profile = (): JSX.Element => {
  const classes = useStyles();
  const textFieldsData = getTextFieldsData();

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
          {textFieldsData.map((item, index) => (
            <TextField
              key={`profile-text-field-${item.name}-${index}`}
              name={item.name}
              label={item.label}
              type={item.type ? item.type : 'text'}
              defaultValue={item.defaultValue}
              InputProps={{
                readOnly: true,
              }}
            />
          ))}
        </FormControl>
        <Link className={classes.link} onClick={e => e.preventDefault()}>
          Редактировать
        </Link>
      </Grid>
    </section>
  );
};
