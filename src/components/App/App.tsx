import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './App.scss';
import { SignIn } from '../../pages/SignIn/SignIn';
import { SignUp } from '../../pages/SignUp/SignUp';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Forum } from '../../pages/Forum/Forum';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <div className="App">
      <Switch>
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/forum/" component={Forum} />
        <Route path="/profile/" component={ProfilePage} />
        <Redirect to={'/signin'} />
      </Switch>
    </div>
  </ErrorBoundary>
);
