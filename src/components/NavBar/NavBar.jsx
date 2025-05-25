// import React from "react";
// import styles from "./NavBar.module.css";
// import SearchBar from "./SearchBar/SearchBar";
// import { Link } from "react-router-dom";

// const NavBar = (props) => {
//     return (
//         <div className={styles.nav}>
//             <Link to="/home" >
//             <button className={styles.btn}>HOME</button>
//             </Link>
//             <SearchBar onSearch={props.onSearch} />
//             <Link to="/about" >
//             <button className={styles.btn} >ABOUT</button>
//             </Link>
//             <Link to="/" >
//             <button className={styles.btn} >UNLOG</button>
//             </Link>

//         </div>
//     )
// }

// export default NavBar;

import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <Link to="/home" className={styles.navLink}>
                    <button className={styles.navButton}>HOME</button>
                </Link>
                <SearchBar onSearch={props.onSearch} />
                <Link to="/about" className={styles.navLink}>
                    <button className={styles.navButton}>ABOUT</button>
                </Link>
                <Link to="/" className={styles.navLink}>
                    <button className={styles.navButton}>LOGOUT</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;