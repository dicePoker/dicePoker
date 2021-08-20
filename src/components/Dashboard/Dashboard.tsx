import React from 'react';
import './Dashboard.scss';

export const Dashboard = (): JSX.Element => {
  return (
    <div className="Dashboard">
      <h1 className="Dashboard__title">Таблица лидеров</h1>
      <div className="Dashboard__sort-panel">
        <p className="Dashboard__sort-title">Сортировка: </p>
        <ul className="Dashboard__sort-items">
          <li className="Dashboard__sort-item">по id</li>
          <li className="Dashboard__sort-item">по алфавиту</li>
          <li className="Dashboard__sort-item">по рекорду</li>
          <li className="Dashboard__sort-item">по рейтингу</li>
        </ul>
      </div>
      <div className="Dashboard__main-container">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="Dashboard__user-board">
            <div className="Dashboard__board-number">1</div>
            <div className="Dashboard__board-avatar" />
            <p className="Dashboard__user-info">User</p>
            <p className="Dashboard__user-info">325</p>
            <p className="Dashboard__user-info">325</p>
          </div>
        ))}
      </div>
    </div>
  );
};
