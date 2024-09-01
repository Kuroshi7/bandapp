import React from 'react';
import Navbar from '../../componentes/Navbar';
import styles from './Banda.module.css';
import Footer from '../../componentes/Footer';
import Carousel from '../../componentes/Carousel';

const Banda = () => {
  return (
    <div className={styles.bandaContainer}>
        <Navbar/>
    <div className={styles.contentBox}>
      <h1>Banda</h1>
      <p>Informações sobre a banda.</p>
      <Carousel />
    </div>
    <Footer/>
    </div>
  );
};

export default Banda;