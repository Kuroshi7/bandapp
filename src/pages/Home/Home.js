import React from 'react';
import Navbar from '../../componentes/Navbar';
import Footer from '../../componentes/Footer';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <div className={styles.contentBox}>
        <h1>Bem-vindo à Home Page!</h1>
        <p>Este é o conteúdo principal da página.</p>
        <div className={styles.youtubeEmbed}>
        <iframe width="100%" 
        height="500"
        src="https://www.youtube.com/embed/yI1sn4i2aEI?si=tTPCH7tTuqMZDII7" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;