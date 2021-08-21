import React from 'react';
import './Dashboard.scss';
import sortList from './sortList.json'

export const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Таблица лидеров</h1>
      <div className="dashboard__sort-panel">
        <p className="dashboard__sort-title">Сортировка: </p>
        <ul className="dashboard__sort-items">
          {sortList.map(({name}, index) => (<li key={index} className="dashboard__sort-item">{name}</li>))}
        </ul>
      </div>
      <div className="dashboard__main-container">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="dashboard__user-board">
            <div className="dashboard__board-number">1</div>
            <div className="dashboard__board-avatar"/>
            <p className="dashboard__user-info">User</p>
            <p className="dashboard__user-info">325</p>
            <p className="dashboard__user-info">325</p>
          </div>
        ))}
      </div>
    </div>
  );
};
