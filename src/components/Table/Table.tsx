import React from 'react';
import './Table.scss';
import { GameController } from '../../controllers/GameController';

export type TableProps = {
  gameController: GameController;
};

export const Table = (props: TableProps): JSX.Element => {
  const combinations =
    props.gameController.phase === 1
      ? props.gameController.gameResults[0].firstPhasePoints.map(
          (val, index) => (
            <li
              key={`table-item-${val.id}-${index}`}
              className="table__item"
              onClick={props.gameController.updateResult}
              data-comb={val.id}
            >
              <button data-comb={val.id} className="table__button">
                {val.label}
              </button>
            </li>
          ),
        )
      : props.gameController.gameResults[0].secondPhasePoints.map(
          (val, index) => (
            <li
              key={`table-item-${val.id}-${index}`}
              className="table__item"
              onClick={props.gameController.updateResult}
              data-comb={val.id}
            >
              <button data-comb={val.id} className="table__button">
                {val.label}
              </button>
            </li>
          ),
        );

  const tableContent = props.gameController.gameResults.map((item, index) => {
    return (
      <div key={`table-table-${index}`} className="table__table">
        <div className="table__name">{item.playerName}</div>
        <ul className="table__list">
          {props.gameController.phase === 1
            ? item.firstPhasePoints.map((val, index) => (
                <li
                  key={`table-item-${val.id}-${index}`}
                  className="table__item"
                >
                  {val.value !== -200 ? val.value : 0}
                </li>
              ))
            : item.secondPhasePoints.map((val, index) => (
                <li
                  key={`table-item-${val.id}-${index}`}
                  className="table__item"
                >
                  {val.value !== -200 ? val.value : 0}
                </li>
              ))}
        </ul>
        <div className="table__bottom">{item.total}</div>
      </div>
    );
  });
  return (
    <div className="table">
      <div className="table__left">
        <div className="table__title">Комбинации</div>
        <ul className="table__list">{combinations}</ul>
        <div className="table__bottom">Итог:</div>
      </div>
      <div className="table__right">{tableContent}</div>
    </div>
  );
};
