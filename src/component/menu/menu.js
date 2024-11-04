import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
  return (
    <nav style={{backgroundColor : '#727cf5', color: 'white'}}>
      <ul >
     
        <li >
          <Link to="/dashboard" style={{ color: 'white'}}>Dashboard</Link>
        </li>
        <li>
          <Link to="/evaluacion" >Evaluacion</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;