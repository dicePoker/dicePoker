import { FormControl, TextField, Avatar, Button } from '@material-ui/core';
import React from 'react';
import './Profile.scss';
import { useStyles } from '../../utils/makeStyles';
import {
  getTextFieldsData,
  TextFieldsDataEnum,
  TextFieldsDataType,
} from '../../utils/getTextFieldsData';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { phoneRegExp } from '../../utils/constants/regExp';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Введите корректный адрес электронной почты')
    .required('Введите Email'),
  password: yup
    .string()
    .min(8, 'Длина пароля должна быть не менее 8 символов')
    .required('Введите пароль'),
  login: yup
    .string()
    .min(2, 'Длина логина должна быть не менее 2 символов')
    .required('Введите логин'),
  firstName: yup
    .string()
    .min(2, 'Длина имени должна быть не менее 2 символов')
    .required('Введите имя'),
  secondName: yup
    .string()
    .min(2, 'Длина фамилии должна быть не менее 2 символов')
    .required('Введите фамилию'),

  phone: yup
    .string()
    .required('Введите номер телефона')
    .matches(phoneRegExp, 'Введите корректный номер телефона'),
});

export const Profile = (): JSX.Element => {
  const classes = useStyles();
  const textFieldsData = getTextFieldsData(TextFieldsDataEnum.profile);
  const initialValues = (textFieldsData as []).reduce(
    (acc: Record<string, string>, field: TextFieldsDataType) => {
      return { ...acc, [field.name]: field.defaultValue as string };
    },
    {} as Record<string, string>,
  );
  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <h1 className="profile__title">Профмиль</h1>
        <Avatar className={classes.large}>H</Avatar>
        <FormControl
          component="form"
          className={classes.formSignIn}
          onSubmit={formik.handleSubmit}
        >
          {textFieldsData.map((item, index) => (
            <TextField
              fullWidth
              key={`profile-text-field-${item.name}-${index}`}
              name={item.name}
              label={item.label}
              type={item.type ? item.type : 'text'}
              value={formik.values[item.name]}
              onChange={formik.handleChange}
              className={classes.input}
              error={
                formik.touched[item.name] && Boolean(formik.errors[item.name])
              }
              helperText={formik.touched[item.name] && formik.errors[item.name]}
            />
          ))}
          <Button
            variant="contained"
            size="medium"
            className={classes.buttonSignInEntrance}
            type="submit"
          >
            Регистрация
          </Button>
        </FormControl>
      </div>
    </div>
  );
};
