import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Main from './generalComponents/main';

function App() {
  return (
    <div>
      {/*<Header  /> */}
      <Main />
      {/*<Footer />*/}
  </div>
  );
}

export default App;
