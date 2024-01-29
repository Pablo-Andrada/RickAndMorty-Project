import React from 'react';

import Card from './Card';

const Cards = ({characters}) => {
   return (
      <div>
         {characters.map((pj) => {
            return ( //onClose,name,status,species,gender,origin,image
               <Card
                  key={pj.id}
                  onClose={()=> window.alert("Emulación cierre")}
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