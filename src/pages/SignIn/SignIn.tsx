import React, { useEffect, useState } from 'react';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { Modal } from '@/components/Modal/Modal';
import { Pause } from '@/components/Pause/Pause';

export const SignIn = (): JSX.Element => {
  const [isShowModal, setShowModal] = useState(true);
  const showModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const blurHandler = () => {
    showModal();
  };
  useEffect(() => {
    return () => {
      window.removeEventListener('blur', blurHandler);
    };
  });
  window.addEventListener('blur', blurHandler);

  return (
    <div className="sign-in page">
      <SignInForm />
      <Modal isShow={isShowModal}>
        <Pause clickHandler={closeModal} />
      </Modal>
    </div>
  );
};
