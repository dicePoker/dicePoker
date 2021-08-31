import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MaterialDemo from '../MaterialDemo/MaterialDemo';
import './App.scss';
import { SignIn } from '../../pages/SignIn/SignIn';
import { SignUp } from '../../pages/SignUp/SignUp';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Forum } from '../../pages/Forum/Forum';
import Loader from '../Loader';
import { StateTypes } from '../../redux/types';
import { useSelector } from 'react-redux';

export const App = (): JSX.Element => {
  const loading = useSelector((state: StateTypes) => state.loading);

  return (
    <ErrorBoundary>
      <Loader className={loading > 0 ? 'loader_is-opened' : ''} />
      <div className="App">
        <MaterialDemo />
        <Switch>
          <Route path="/signin/" component={SignIn} />
          <Route path="/signup/" component={SignUp} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/forum/" component={Forum} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    </ErrorBoundary>
  );
};
