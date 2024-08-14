import React from 'react';
import Navbar from '../../componentes/Navbar';
import Footer from '../../componentes/Footer';
import styles from '../Home/Home.module.css'

const Home = () => {
    return (
      <div className={styles.container}>
        <Navbar />
  
        <div className={styles.contentBox}>
          <h1>Bem-vindo à Home Page!</h1>
          <p>Este é o conteúdo principal da página.</p>
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default Home;