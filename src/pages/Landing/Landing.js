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
        <h1>Bem Vindo ao Landing page</h1>
        <button onClick={handleContinue}> Continuar para o site</button>
        </div>
    );
};


export default Landing;