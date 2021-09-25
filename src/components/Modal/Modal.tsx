import React from 'react';
import './Modal.scss';

type propsType = {
  children: React.ReactNode;
  isShow: boolean;
};

export const Modal = (props: propsType): JSX.Element | null => {
  if (!props.isShow) return null;
  return (
    <div className="modal">
      <div className="modal__wrapper">{props.children}</div>
    </div>
  );
};
