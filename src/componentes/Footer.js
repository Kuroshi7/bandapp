import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialButtons}>
        {/* Adicione seus botões sociais aqui, como ícones do FontAwesome */}
        <button className={styles.socialButton}>Instagram</button>
        <button className={styles.socialButton}>YouTube</button>
        <button className={styles.socialButton}>Spotify</button>
      </div>
      <div className={styles.contactInfo}>
        <p>awayfromthesun.band@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;