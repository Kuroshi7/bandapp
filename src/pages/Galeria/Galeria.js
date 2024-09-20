import React from "react";
import Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer";
import styles from './Galeria.module.css';
import Modal from "../../componentes/Modal";

const Galeria = () => {
    return(
        <div className={styles.galeriaContainer}>
            <Navbar/>
            <div className={styles.contentBox}>
                <h1>Galeria</h1>
                <p>Galeria de obras</p>
                <Modal/>
            </div>
            <Footer/>
        </div>
    );
};


export default Galeria