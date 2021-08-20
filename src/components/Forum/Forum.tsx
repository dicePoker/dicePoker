import React from 'react';
import './Forum.scss';

export const Forum = (): JSX.Element => {
  return (
    <div className="Forum">
      <h1 className="Forum__title">Форум</h1>
      <div className="Forum__container">
        <div className="Forum__block-title">
          <span className="Forum__title-column">Раздел</span>
          <span className="Forum__title-column">Темы</span>
          <span className="Forum__title-column">Ответы</span>
        </div>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="Forum__block-topic">
            <span className="Forum__title-column">Название раздела</span>
            <span className="Forum__title-column">325</span>
            <span className="Forum__title-column">2344</span>
          </div>
        ))}
      </div>
    </div>
  );
};
