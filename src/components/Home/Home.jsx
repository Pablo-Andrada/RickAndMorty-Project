import React from "react";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.instructions}>
                <h2>Búsqueda de personajes</h2>
                <p>Ingresa un ID numérico (ej: 1, 2, 3...) para mostrar personajes. Cada tarjeta puede cerrarse individualmente.</p>
            </div>
            <Cards characters={props.characters} onClose={props.onClose} />
        </div>
    )
}

export default Home;