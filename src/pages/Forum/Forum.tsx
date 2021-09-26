import { authorization } from '@/hoc/authorization';
import React from 'react';
import './Forum.scss';

const Forum = (): JSX.Element => {
  return (
    <div className="forum">
      <h1 className="forum__title">Форум</h1>
      <div className="forum__container">
        <div className="forum__block-title">
          <span className="forum__title-column">Раздел</span>
          <span className="forum__title-column">Темы</span>
          <span className="forum__title-column">Ответы</span>
        </div>
        <ul className="forum__list">
          {[1, 2, 3].map((_, index) => (
            <li key={index} className="forum__block-topic">
              <span className="forum__title-column">Название раздела</span>
              <span className="forum__title-column">325</span>
              <span className="forum__title-column">2344</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default authorization(Forum);
