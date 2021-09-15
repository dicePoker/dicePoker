import { FormControl, TextField, Avatar, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import './Profile.scss';
import { useStyles } from '../../utils/makeStyles';
import {
  getTextFieldsData,
  TextFieldsDataEnum,
} from '../../utils/getTextFieldsData';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { phoneRegExp } from '../../utils/constants/regExp';
import { changeProfileData, getUser } from '@/redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes, typeSubmitUserInfo } from '@/redux/types';
import { useHistory } from 'react-router-dom';
import { authorization } from '@/hoc/authorization';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Введите корректный адрес электронной почты')
    .required('Введите Email'),
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

const Profile = (): JSX.Element => {
  const classes = useStyles();
  const userInfo = useSelector((state: StateTypes) => state.userInfo);
  const isAuth = useSelector((state: StateTypes) => state.isAuth);
  const history = useHistory();

  const textFieldsData = getTextFieldsData(TextFieldsDataEnum.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const initialValues: { [p: string]: string } = textFieldsData.reduce(
    (acc, field) => {
      return {
        ...acc,
        [field.name]: userInfo[field.name]
          ? userInfo[field.name]?.toString()
          : '',
      };
    },
    {},
  );

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('test changeProfileData');
      console.log(JSON.stringify(values, null, 2));
      dispatch(changeProfileData(values as typeSubmitUserInfo));
    },
  });

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <h1 className="profile__title">Профиль</h1>
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
            Изменить
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default authorization(Profile);
