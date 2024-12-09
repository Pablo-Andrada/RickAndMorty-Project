import React from "react";
import Cards from "../Cards/Cards";


const Home = (props) => {
    return (
        <div>
            <Cards characters={props.characters} onClose={props.onClose} />
            <h3>Para poder buscar personajes: </h3>
            <p>Puedes buscar personajes simplemente buscandolos por sus números de ID, puedes intentar
                escribiendo por ejemplo el número 1, el 2, etc. Mientras lo haces el personaje respectivo ira apareciendo y tendrás la posibilidad de ver su información y también de quitarlo en caso que ya no lo quieras con "close"
            </p>
        </div>
    )
}

export default Home;