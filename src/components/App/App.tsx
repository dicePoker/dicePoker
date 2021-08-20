import React from 'react';
import {Redirect, Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MaterialDemo from '../MaterialDemo/MaterialDemo';
import './App.scss';

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <div className='App'>
      <MaterialDemo className='App__header' />
      <Switch>
        <Route exact path="/" render={() => <div>СТАРТОВАЯ СТРАНИЦА</div>}/>
        {/*<Route path="/profile/" component={Profile}/>*/}
        <Redirect to={'/'}/>
      </Switch>
    </div>
  </ErrorBoundary>
);
