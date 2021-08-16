import React, { Component } from "react";
import MaterialDemo from '../MaterialDemo/MaterialDemo';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Test App</h1>
        <MaterialDemo />
      </div>
    );
  }
}
export default App;
