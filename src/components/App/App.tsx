import React from 'react';
import './App.scss';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';

export const App = (): JSX.Element => (
  <div className="App">
    <h1>Test App</h1>
    <ProfilePage />
  </div>
);
