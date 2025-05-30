import React from 'react';
import styles from "./Cards.module.css";
import Card from '../Card/Card';

const Cards = (props) => {
   return (
      <div className={styles.cardsGrid}>
         {props.characters.map((pj) => (
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
         ))}
      </div>
   )
}

export default Cards;