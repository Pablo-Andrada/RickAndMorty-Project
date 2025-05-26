import React from "react";
import styles from "./Filters.module.css";

const Filters = ({ filters, onFilterChange, characters }) => {
    // Obtener opciones únicas para los filtros
    const getUniqueOptions = (property) => {
        return [...new Set(characters.map(char => char[property]))].filter(Boolean);
    };

    return (
        <div className={styles.filtersContainer}>
            {/* Filtro por Estado */}
            <div className={styles.filterGroup}>
                <label>Estado:</label>
                <select 
                    name="status" 
                    value={filters.status}
                    onChange={onFilterChange}
                >
                    <option value="">Todos</option>
                    {getUniqueOptions("status").map((status, index) => (
                        <option key={index} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            {/* Filtro por Especie */}
            <div className={styles.filterGroup}>
                <label>Especie:</label>
                <select 
                    name="species" 
                    value={filters.species}
                    onChange={onFilterChange}
                >
                    <option value="">Todas</option>
                    {getUniqueOptions("species").map((species, index) => (
                        <option key={index} value={species}>{species}</option>
                    ))}
                </select>
            </div>

            {/* Filtro por Género */}
            <div className={styles.filterGroup}>
                <label>Género:</label>
                <select 
                    name="gender" 
                    value={filters.gender}
                    onChange={onFilterChange}
                >
                    <option value="">Todos</option>
                    {getUniqueOptions("gender").map((gender, index) => (
                        <option key={index} value={gender}>{gender}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filters;