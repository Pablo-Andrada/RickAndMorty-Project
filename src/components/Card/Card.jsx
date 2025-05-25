import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, image, onClose}) {
   return (
      <div className={styles.cardContainer}>
         <button 
            onClick={() => onClose(id)} 
            className={styles.closeButton}
         >
            ×
         </button>
         
         <Link to={`/detail/${id}`} className={styles.cardLink}>
            <img src={image} alt={name} className={styles.cardImage} />
            <div className={styles.cardContent}>
               <h3 className={styles.cardTitle}>{name}</h3>
               <div className={styles.cardInfo}>
                  <p className={styles.cardStatus}>{status}</p>
                  <p className={styles.cardSpecies}>{species}</p>
               </div>
            </div>
         </Link>
      </div>
   );
}