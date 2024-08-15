import React from 'react';
import Navbar from '../../componentes/Navbar';
import styles from './Banda.module.css';
import Footer from '../../componentes/Footer';

const Banda = () => {
  return (
    <div className={styles.bandaContainer}>
        <Navbar/>
    <div className={styles.contentBox}>
      <h1>Banda</h1>
      <p>Informações sobre a banda.</p>
    </div>
    <Footer/>
    </div>
  );
};

export default Banda;