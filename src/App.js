
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Evaluacion from './component/formulario/evaluacion';
import Dashboard from './component/dashboard/dashbord';
import Login from './component/login/login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/evaluacion">Evaluacion</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/evaluacion" element={<Evaluacion/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

