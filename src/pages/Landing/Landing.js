import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Landing.module.css';
import watermark from './watermark.png';

const Landing = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };



    return(
        <div className={styles.landing}>
            <img src={watermark} alt="Watermark" className={styles.watermark} />
            
            <iframe styles="border-radius:12px" src="https://open.spotify.com/embed/artist/2FSK1z0ic30BFk4t0sQ9Qy?utm_source=generator" width="30%" height="300" frameborder="0" 
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            
        <h1>Bem Vindo ao Landing page</h1>
        <button onClick={handleContinue}> Continuar para o site</button>
        </div>
    );
};


export default Landing;