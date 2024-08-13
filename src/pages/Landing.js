import React from 'react';
import {useNavigate} from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/home');
    };



    return(
        <div className='landing'>
        <h1>Bem Vindo ao Landing page</h1>
        <button onClick={handleContinue}> Continuar para o site</button>
        </div>
    );
};


export default Landing;