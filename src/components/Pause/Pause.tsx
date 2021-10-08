import React from 'react';
import './Pause.scss';

type pause = {
  clickHandler: () => void;
};

export const Pause = (props: pause): JSX.Element | null => {
  return (
    <div className="pause">
      <div className="pause__title">Пауза!</div>
      <button className="pause__button" onClick={props.clickHandler}>
        Продолжить
      </button>
    </div>
  );
};
