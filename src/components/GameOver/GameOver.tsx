import React from 'react';
import './GameOver.scss';

import ChestImage from 'src/static/assets/img/chest.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hooray from 'src/static/assets/audio/hooray.wav';
import { useSelector } from 'react-redux';
import { StateTypes } from '@/redux/types';
import { useHistory } from 'react-router-dom';

type GameOverType = {
  title: string;
  // handlerClick(): void;
};

export const GameOver = (props: GameOverType): JSX.Element => {
  const audioHooray = new Audio(hooray);
  const history = useHistory();

  const gameResult = useSelector((state: StateTypes) => state.gameResult);
  const name = () => {
    const firstWinner =
      gameResult.firstPlayer.points > gameResult.secondPlayer.points;
    if (firstWinner) {
      return gameResult.firstPlayer.name;
    } else {
      return gameResult.secondPlayer.name;
    }
  };

  setTimeout(() => history.push('/dashboard'), 5000);

  return (
    <div className="game-over">
      <h2 className="game-over__title">Победил !</h2>
      <h3 className="game-over__name">{name()}</h3>
      <div className="game-over__wrapper">
        <img
          src={ChestImage}
          className="game-over__img"
          alt="Сундук с золотом"
        />
      </div>
      <button
        className="game-over__button"
        onClick={() => {
          console.log('NEW GAME');
        }}
      >
        Новый вызов !
      </button>
    </div>
  );
};
