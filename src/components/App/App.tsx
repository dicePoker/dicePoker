import React from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from '@/pages/SignIn/SignIn';
import { SignUp } from '@/pages/SignUp/SignUp';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Forum from '@/pages/Forum/Forum';
import { GameOver } from '../GameOver/GameOver';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader';
import { StateTypes } from '@/redux/types';
import { useSelector } from 'react-redux';
import MainPage from '@/pages/MainPage/MainPage';

export const App = (): JSX.Element => {
  const loading = useSelector((state: StateTypes) => state.loading);

  return (
    <ErrorBoundary>
      <Loader className={loading > 0 ? 'loader_is-opened' : ''} />
      <div className="App">
        {/*<GameOver*/}
        {/*  title={'игрок 1'}*/}
        {/*  handlerClick={() => {*/}
        {/*    console.log('click');*/}
        {/*  }}*/}
        {/*/>*/}
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forum" component={Forum} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/gameover" component={GameOver} />
          <Redirect to={'/signin'} />
        </Switch>
      </div>
    </ErrorBoundary>
  );
};
