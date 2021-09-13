import React from 'react';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import './SignIn.scss';

export const SignIn = (): JSX.Element => {
  return (
    <div className="sign-in page">
      <SignInForm />
    </div>
  );
};
