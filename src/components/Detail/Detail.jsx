import React from "react";
import styles from "./Detail.module.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
    const { id } = useParams();
    const [pjDetail, setPjDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                if (data.name) {
                    setPjDetail(data);
                } else {
                    alert('No hay personajes con ese ID');
                }
            } catch (error) {
                console.error("Error fetching character:", error);
            }
        };
        fetchData();
        return () => setPjDetail({});
    }, [id]);

    return (
        <div className={styles.container}>
            {/* Sección de imagen */}
            <div className={styles.img}>
                <img 
                    src={pjDetail.image} 
                    alt={pjDetail.name} 
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "ruta/alternativa.jpg";
                    }}
                />
            </div>

            {/* Sección de información */}
            <div className={styles.data}>
                <h1>NAME: "{pjDetail.name || "Unknown"}"</h1>
                <h1>STATUS: "{pjDetail.status || "Unknown"}"</h1>
                <h1>SPECIES: "{pjDetail.species || "Unknown"}"</h1>
                <h1>GENDER: "{pjDetail.gender || "Unknown"}"</h1>
                <h1>ORIGIN: "{pjDetail.origin?.name || "Unknown"}"</h1>

                {/* Botón centrado con contenedor especial */}
                <div className={styles["btn-container"]}>
                    <Link to="/home">
                        <button className={styles.btn}>BACK TO HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;