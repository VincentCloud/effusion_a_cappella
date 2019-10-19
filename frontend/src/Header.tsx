import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

const Header: React.FC = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/news">news & events</Link></li>
    </ul>
    <div>
      <Link to="/">
        <img id="logo" src={logo} alt="effusion a cappella" />
      </Link>
    </div>
    <ul>
      <li><Link to="/members">members</Link></li>
      <li><Link to="/media">media</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  </nav>
);

export default Header;
