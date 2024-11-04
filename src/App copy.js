//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import React from 'react';
import Login from './component/login/login';
import { Outlet, Link } from "react-router-dom";
import Dashboard from './component/dashboard/dashbord';
import Formulario from './component/formulario/formulario';
import Evaluacion from './component/formulario/evaluacion';

function App() {
  return (
    <div >
      <div className="App">
        <div className="centered-div">
            <Login/>
        </div>
      </div>
      <div className="App">
        <div className="centered-div">
            <Dashboard/>
        </div>
      </div>
      <div className="App">
        <div className="centered-div">
            <Formulario/>
        </div>
      </div>
      <div className="App2">
        <div className="centered-div2">
            <Evaluacion/>
        </div>
      </div>

    </div>
  );
}

export default App;
