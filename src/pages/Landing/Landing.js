import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Landing.module.css';
import watermark from './watermark.png';
import aftsescrita from './aftsescrita.png';

const Landing = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };



    return(
        <div className={styles.landing}>
            <img src={watermark} alt="Watermark" className={styles.watermark} />
            <img src={aftsescrita} className={styles.aftsescrita} />
            
            <iframe className={styles.spotifyEmbed} src="https://open.spotify.com/embed/track/7cPzrJzjYOnkitbNrvFbu4?utm_source=generator" width="30%" height="300" FrameBorder="0" 
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            
        
        <button onClick={handleContinue}> Continuar para o site</button>
        </div>
    );
};


export default Landing;