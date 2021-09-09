import React, { useEffect } from 'react';
import './Dashboard.scss';
import sortList from './sortList.json';
import { fetchUsers } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../redux/types';

export const Dashboard = (): JSX.Element => {
  const usersData = useSelector((state: StateTypes) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Таблица лидеров</h1>
      <div className="dashboard__sort-panel">
        <p className="dashboard__sort-title">Сортировка: </p>
        <ul className="dashboard__sort-items">
          {sortList.map(({ name }, index) => (
            <li key={index} className="dashboard__sort-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard__main-container">
        {usersData.map(({ name, id, record, rating }) => (
            <div key={id} className="dashboard__user-board">
              <div className="dashboard__board-number">{id}</div>
              <div className="dashboard__board-avatar" />
              <p className="dashboard__user-info">{name}</p>
              <p className="dashboard__user-info">{rating}</p>
              <p className="dashboard__user-info">{record}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
