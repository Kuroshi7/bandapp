import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube, faSpotify} from '@fortawesome/free-brands-svg-icons';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialButtons}>
        <a
          href="https://www.instagram.com/awayfromthesun.band/"
          className={styles.socialButton}
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC-3isFFJnTkpcS7nTXUu6_w"
          className={styles.socialButton}
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href='https://open.spotify.com/artist/2FSK1z0ic30BFk4t0sQ9Qy?si=vXI9TCaZRu6CNrJdjtSU1g'
          className={styles.socialButton}
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faSpotify}/>
        </a>
        
      </div>
      <div className={styles.contactInfo}>
        <p>awayfromthesun.band@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;