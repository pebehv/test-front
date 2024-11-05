import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import GetData from '../../service/service';


function Menu() {
  return (
    <nav style={{ backgroundColor: '#727cf5', color: 'white',  height: '50px', padding:'3%'}}>
      <ul className="menu-list">
        <li>
          <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/evaluacion" style={{ color: 'white' }}>Evaluacion</Link>
        </li>
      </ul>
      <GetData/>
    </nav>
  );
}

export default Menu;