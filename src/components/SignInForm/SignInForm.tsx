import React, { useEffect } from 'react';
import { Button, FormControl, Link, TextField } from '@material-ui/core';
import './SignInForm.scss';
import { useStyles } from '../../utils/makeStyles';
import {
  getTextFieldsData,
  TextFieldsDataEnum,
  TextFieldsDataType,
} from '../../utils/getTextFieldsData';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '@/redux/types';
import { useHistory } from 'react-router-dom';
import { authorization } from '@/redux/actions/actions';

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Длина пароля должна быть не менее 8 символов')
    .required('Введите пароль'),
  login: yup
    .string()
    .min(2, 'Длина логина должна быть не менее 2 символов')
    .required('Введите логин'),
});

export const SignInForm = (): JSX.Element => {
  const classes = useStyles();
  const textFieldsData = getTextFieldsData(TextFieldsDataEnum.signIn);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: StateTypes) => state.isAuth);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push('/profile/');
    }
  }, [isAuth]);

  const initialValues = textFieldsData.reduce(
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
      dispatch(authorization(values as { login: string; password: string }));
    },
  });

  return (
    <div className="sign-in-form">
      <div className="sign-in-form__wrapper">
        <h1 className="sign-in-form__title">Вход</h1>
        <FormControl
          component="form"
          className={classes.formSignIn}
          onSubmit={formik.handleSubmit}
        >
          {textFieldsData.map((item, index) => (
            <TextField
              fullWidth
              key={`sign-in-text-field-${item.name}-${index}`}
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
            войти
          </Button>
        </FormControl>
        <Button
          variant="contained"
          size="medium"
          className={classes.buttonSignInCreate}
          color="primary"
          href="/signup"
        >
          Регистрация
        </Button>
        <Link className={classes.link} onClick={e => e.preventDefault()}>
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  );
};
