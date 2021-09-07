import React from 'react';
import './SignUpForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormControl, Button, TextField, Link } from '@material-ui/core';
import { useStyles } from '../../utils/makeStyles';
import {
  getTextFieldsData,
  TextFieldsDataEnum,
  TextFieldsDataType,
} from '../../utils/getTextFieldsData';
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

export const SignUpForm = (): JSX.Element => {
  const classes = useStyles();
  const textFieldsData = getTextFieldsData(TextFieldsDataEnum.signUp);
  const initialValues = (textFieldsData as []).reduce(
    (acc: Record<string, string>, field: TextFieldsDataType) => {
      return { ...acc, [field.name]: '' };
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
    <div className="sign-up-form">
      <h1 className="sign-up-form__title">Регистрация</h1>
      <div className="sign-up-form__wrapper">
        <FormControl
          component="form"
          className={classes.formSignIn}
          onSubmit={formik.handleSubmit}
        >
          {textFieldsData.map((item, index) => {
            return (
              <TextField
                fullWidth
                key={`sign-up-text-field-${item.name}-${index}`}
                name={item.name}
                label={item.label}
                type={item.type ? item.type : 'text'}
                defaultValue={item.defaultValue}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                error={
                  formik.touched[item.name] && Boolean(formik.errors[item.name])
                }
                helperText={
                  formik.touched[item.name] && formik.errors[item.name]
                }
              />
            );
          })}
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.buttonSignUpForm}
            type="submit"
          >
            Регистрация
          </Button>
        </FormControl>
        <Link
          href="#"
          className={classes.link}
          onClick={e => e.preventDefault()}
        >
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  );
};
