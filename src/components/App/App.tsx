import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MaterialDemo from '../MaterialDemo/MaterialDemo';
import './App.scss';
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { Dashboard } from '../Dashboard/Dashboard';
import { Forum } from '../Forum/Forum';

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <div className="App">
      <MaterialDemo />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div style={{ maxWidth: 800 }}>СТАРТОВАЯ СТРАНИЦА</div>}
        />
        <Route path="/signin/" component={SignInForm} />
        <Route path="/signup/" component={SignUpForm} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/forum/" component={Forum} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  </ErrorBoundary>
);
