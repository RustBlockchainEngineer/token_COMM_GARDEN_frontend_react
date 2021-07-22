import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './views/Header';
import { BrowserRouter as Router } from "react-router-dom";
function App({ dark, ChangeDarkMood }) {

  return (
    <Fragment>
      <Router>
        <Dashboard dark={dark} ChangeDarkMood={ChangeDarkMood} />
      </Router>
    </Fragment>
  );
}

export default App;
