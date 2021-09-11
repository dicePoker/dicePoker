import React from 'react';
import './Table.scss';
import { GameController } from '../../controllers/GameController';

export type TableProps = {
  gameController: GameController;
};

const players = [
  {
    name: 'Игрок 1',
    firstPhasePoints: [12, 123, 55, 76, 89, 5],
    secondPhasePoints: [12, 123, 55, 76, 89, 5, 0, 0, 0],
    total: 30,
  },
  {
    name: 'Игрок 2',
    firstPhasePoints: [12, 123, 55, 76, 89, 5],
    secondPhasePoints: [12, 123, 55, 76, 89, 5, 0, 0, 0],
    total: 30,
  },
];

const firstPhaseCombinations = ['1', '2', '3', '4', '5', '6'];
const secondPhaseCombinations = [
  'Пара',
  'Две пары',
  '3 одинаковых',
  '4 одинаковых',
  'Покер',
  'Сумма',
  '3+2',
  'Малый стрит',
  'Большой стрит',
];

export const Table = (props: TableProps): JSX.Element => {
  return (
    <div className="table">
      <div className="table__left">
        <div className="table__title">Комбинации</div>
        <ul className="table__list">
          {props.gameController.phase === 1
            ? firstPhaseCombinations.map((val, index) => {
                return (
                  <li
                    key={`table-item-${val}-${index}`}
                    className="table__item"
                    onClick={props.gameController.updateResult}
                    data-index={index}
                  >
                    <button className="table__button">{val}</button>
                  </li>
                );
              })
            : secondPhaseCombinations.map((val, index) => {
                return (
                  <li
                    key={`table-item-${val}-${index}`}
                    className="table__item"
                    onClick={props.gameController.updateResult}
                    data-index={index}
                  >
                    <button className="table__button">{val}</button>
                  </li>
                );
              })}
        </ul>
        <div className="table__bottom">Итог:</div>
      </div>
      <div className="table__right">
        {players.map((item, index) => {
          return (
            <div key={`table-table-${index}`} className="table__table">
              <div className="table__name">{item.name}</div>
              <ul className="table__list">
                {props.gameController.phase === 1
                  ? item.firstPhasePoints.map((val, index) => {
                      return (
                        <li
                          key={`table-item-${val}-${index}`}
                          className="table__item"
                        >
                          {val}
                        </li>
                      );
                    })
                  : item.secondPhasePoints.map((val, index) => {
                      return (
                        <li
                          key={`table-item-${val}-${index}`}
                          className="table__item"
                        >
                          {val}
                        </li>
                      );
                    })}
              </ul>
              <div className="table__bottom">
                {props.gameController.phase === 1
                  ? item.firstPhasePoints.reduce((a, b) => a + b, 0)
                  : item.total +
                    item.secondPhasePoints.reduce((a, b) => a + b, 0)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
