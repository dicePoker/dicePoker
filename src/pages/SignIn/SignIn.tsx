import React, { useEffect, useState } from 'react';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Modal } from '@/components/Modal/Modal';
import { Pause } from '@/components/Pause/Pause';

export const SignIn = (): JSX.Element => {
  return (
    <div className="sign-in page">
      <SignInForm />
    </div>
  );
};
