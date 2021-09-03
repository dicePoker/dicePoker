import React from 'react';
import './Table.scss';

const players = [
  {
    name: 'Игрок 1',
    combinations: [12, 123, 55, 76, 89, 5, 0, 0, 0],
    total: 30,
  },
  {
    name: 'Игрок 2',
    combinations: [12, 123, 55, 76, 89, 5, 0, 0, 0],
    total: 30,
  },
];
const combinations = [
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

export const Table = (): JSX.Element => {
  return (
    <div className="table">
      <div className="table__left">
        <div className="table__title">Комбинации</div>
        <ul className="table__list">
          {combinations.map((val, index) => {
            return (
              <li key={`table-item-${val}-${index}`} className="table__item">
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
                {item.combinations.map((val, index) => {
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
                {item.combinations.reduce((a, b) => a + b, 0)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
