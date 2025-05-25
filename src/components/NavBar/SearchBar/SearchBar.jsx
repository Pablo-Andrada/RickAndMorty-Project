// import React, { useState } from "react";
// import styles from './SearchBar.module.css';


// const SearchBar = (props) => {
//    const [id, setId] = useState("");


//    const handleChange = (event) => {
//       setId(event.target.value)
//    }

//    return (
//       <div className={styles.div}>
//          <input
//             type='search'
//             placeholder="Busca un personaje..."
//             onChange={handleChange}
//             value={id}
//          />
//          <button onClick={()=>{props.onSearch(id)} } className={styles.btn}>AGREGAR</button>
//       </div>
//    );
// }

// export default SearchBar;

import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.searchContainer}>
         <input
            type='search'
            placeholder="Buscar por ID..."
            onChange={handleChange}
            value={id}
            className={styles.searchInput}
         />
         <button 
            onClick={() => props.onSearch(id)} 
            className={styles.searchButton}
         >
            BUSCAR
         </button>
      </div>
   );
}

export default SearchBar;