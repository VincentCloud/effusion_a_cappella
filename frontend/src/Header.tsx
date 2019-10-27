import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.position = !menuOpen ? 'fixed' : '';
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.position = '';
  };

  return (
    <nav className="nav">
      <input
        type="checkbox"
        id="nav-check"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <div className="nav-header">
        <Link to="/">
          <img id="logo" src={logo} alt="effusion a cappella" />
        </Link>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span /><span /><span />
        </label>
      </div>
      <div className="nav-links">
        <Link onClick={closeMenu} to="/about">about</Link>
        <Link onClick={closeMenu} to="/news">news &amp; events</Link>
        <Link onClick={closeMenu} to="/members">members</Link>
        <Link onClick={closeMenu} to="/media">media</Link>
        <Link onClick={closeMenu} to="/contact">contact</Link>
      </div>
    </nav>
  );
};

const DesktopHeader: React.FC = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/news">news &amp; events</Link></li>
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

export default () => <><DesktopHeader /><MobileHeader /></>;
