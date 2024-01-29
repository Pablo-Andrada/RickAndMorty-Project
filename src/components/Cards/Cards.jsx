import React from 'react';
import styles from "./Cards.module.css";
import Card from '../Card/Card';

const Cards = (props) => {
   return (
      <div className={styles.div}>
         {props.characters.map((pj) => {
            return ( //onClose,name,status,species,gender,origin,image
               <Card
                  key={pj.id}
                  id={pj.id}
                  onClose={props.onClose}
                  image={pj.image}
                  name={pj.name}
                  status={pj.status}
                  species={pj.species}
                  gender={pj.gender}
                  origin={pj.origin.name}
               />
            )
         })}
      </div>
   )
}

export default Cards;