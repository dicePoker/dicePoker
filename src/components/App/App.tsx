import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './App.scss';
import { Header } from '../Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from '../../pages/SignIn/SignIn';
import { SignUp } from '../../pages/SignUp/SignUp';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Forum } from '../../pages/Forum/Forum';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { MainPage } from '../../pages/MainPage/MainPage';

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forum" component={Forum} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={MainPage} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  </ErrorBoundary>
);
