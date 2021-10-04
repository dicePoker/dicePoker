import React from 'react';
import './Modal.scss';

type propsType = {
  children: React.ReactNode;
  isShow: boolean;
  closeHandle: () => void;
};

export const Modal = (props: propsType): JSX.Element | null => {
  if (!props.isShow) return null;
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button className="modal__close" onClick={props.closeHandle}>
          close
        </button>
        {props.children}
      </div>
    </div>
  );
};
