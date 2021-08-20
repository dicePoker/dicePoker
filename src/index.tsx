import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { App } from './components/App/App';

ReactDOM.render(
  <BrowserRouter basename="/">
    <App/>
  </BrowserRouter>,
  document.getElementById("root"));