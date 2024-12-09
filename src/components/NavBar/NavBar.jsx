import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <Link to="/home" >
            <button className={styles.btn}>HOME</button>
            </Link>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/about" >
            <button className={styles.btn} >ABOUT</button>
            </Link>
            <Link to="/" >
            <button className={styles.btn} >UNLOG</button>
            </Link>

        </div>
    )
}

export default NavBar;