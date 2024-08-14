import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link to="/home" className={styles.link}>Home</Link></li>
        <li><Link to="/banda" className={styles.link}>Banda</Link></li>
        <li><Link to="/galeria" className={styles.link}>Galeria</Link></li>
        <li><Link to="/membros" className={styles.link}>Membros</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;