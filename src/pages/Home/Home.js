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
        <h2>Ultimas novidades.</h2>
        <hr></hr>
        <h2>Novo Clipe - Rising Sun</h2>
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
        <hr></hr>
        <h2>Novo EP - Unity</h2>
        <div className={styles.spotifyEmbed}>
        <iframe src="https://open.spotify.com/embed/album/0ZSvvN8BkgwGzSl1wjy3jI?utm_source=generator"
        width="100%"
        height="352"
        FrameBorder="0" 
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"
        ></iframe>
        
        </div>
        <hr></hr>
      </div>
      <Footer />
    </div>
  );
};

export default Home;