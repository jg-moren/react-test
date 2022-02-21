import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
<Router>
        <Routes>
          <Route path="/" exact component={<Home></Home>}/>
          <Route component={<Home></Home>}/>


          <Link to="/"/>
        </Routes>
    </Router>
     */
