import React from "react";
import Navbar from "../../componentes/Navbar";
import styles from "./Merch.module.css";
import Footer from "../../componentes/Footer";

const Merch = () => {
    return(
        <div className={styles.merchContainer}>
            <Navbar/>
            <div className={styles.contentBox}>
                <h1>Mercadorias</h1>
            </div>
        </div>
    );
};

export default Merch;