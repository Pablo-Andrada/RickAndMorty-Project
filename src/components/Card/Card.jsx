import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";


export default function Card({id,name, status, species, image, onClose}) {
   return (
      <div className={styles.div}>
         <button onClick={()=> onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
         <img src={image} alt='' className={styles.image} />
         <h2 className={styles.name}>{name}</h2>
         <div className={styles.data}>
            <h2>{species}</h2>
            <h2>{status}</h2>         
         </div>

      </Link>
      </div>
   );
}
