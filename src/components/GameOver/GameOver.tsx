import React from 'react';
import './GameOver.scss';

import ChestImage from 'src/static/assets/img/chest.png';

type GameOverType = {
  title: string;
  handlerClick(): void;
};

export const GameOver = (props: GameOverType): JSX.Element => {
  return (
    <div className="game-over">
      <h2 className="game-over__title">Победил !</h2>
      <h3 className="game-over__name">{props.title}</h3>
      <div className="game-over__wrapper">
        <img
          src={ChestImage}
          className="game-over__img"
          alt="Сундук с золотом"
        />
      </div>
      <button className="game-over__button" onClick={props.handlerClick}>
        Новый вызов !
      </button>
    </div>
  );
};
