import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MaterialDemo from '../MaterialDemo/MaterialDemo';
import './App.scss';
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Forum } from '../../pages/Forum/Forum';

export const App = (): JSX.Element => (
  <ErrorBoundary>
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
