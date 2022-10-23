import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Fragment} from "react";
import Navbar from "./component/Navbar"
import {Button} from "@mui/material";
import Attendance from "./Attendance";
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import * as PropTypes from "prop-types";




function App() {
  return (
      <Fragment>
        <Navbar/>
        <div className="App">
          <header className="App-header">
            <h1>Attendance Face Recognition</h1>
            <p>
              Click on the button below to record your attendance
            </p>

              <Router>
                  <Link to ="/attendance">Take Attendance</Link>
                  <Routes>

                      <Route exact path='/attendance' element ={<Attendance/>}></Route>

                  </Routes>
              </Router>
          </header>
        </div>
      </Fragment>
  );
}

export default App;
