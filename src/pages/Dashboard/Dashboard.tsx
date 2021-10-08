import React, { useEffect } from 'react';
import './Dashboard.scss';
import { sortList } from './config';
import { fetchUsers } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../redux/types';
import { authorization } from '@/hoc/authorization';

const Dashboard = (): JSX.Element => {
  // const usersData = useSelector((state: StateTypes) => state.users);
  const gameResult = useSelector((state: StateTypes) => state.gameResult);
  const dispatch = useDispatch();

  const users = [
    {
      name: gameResult.firstPlayer.name,
      rating: gameResult.firstPlayer.points,
      id: null,
      record: null,
    },
    {
      name: gameResult.secondPlayer.name,
      rating: gameResult.secondPlayer.points,
      id: null,
      record: null,
    },
  ];

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
        {users.map(({ name, id, record, rating }, index) => (
          <div key={id || index} className="dashboard__user-board">
            {id && <div className="dashboard__board-number">{id}</div>}
            <div className="dashboard__board-avatar" />
            <p className="dashboard__user-info">{name}</p>
            <p className="dashboard__user-info">{rating}</p>
            {record && <p className="dashboard__user-info">{record}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default authorization(Dashboard);
