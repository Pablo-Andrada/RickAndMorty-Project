import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import styles from "./Home.module.css";

const Home = ({ characters, onClose }) => {
    const [filters, setFilters] = useState({
        status: "",
        species: "",
        gender: ""
    });

    // Función para manejar cambios en los filtros
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    // Filtrar personajes
    const filteredCharacters = characters.filter(character => {
        return (
            (filters.status === "" || character.status === filters.status) &&
            (filters.species === "" || character.species === filters.species) &&
            (filters.gender === "" || character.gender === filters.gender)
        );
    });

    return (
        <div className={styles.homeContainer}>
            <h2>Filtrar Personajes</h2>
            
            <Filters 
                filters={filters}
                onFilterChange={handleFilterChange}
                characters={characters}
            />
            
            <Cards characters={filteredCharacters} onClose={onClose} />
        </div>
    );
};

export default Home;