import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const[pjDetail,setPjDetail] = useState({})


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
           if (data.name) {
            setPjDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setPjDetail({});
     }, [id]);
    //[] montaje
    //[id] update
    //()=>{} esmontaje


    return (
        <div className={styles.container} >
            <div className={styles.img} ><img src={pjDetail.image && pjDetail.image} alt={pjDetail.name} /></div>
            <div className={styles.data} >
                <h1>NAME: "{pjDetail.name && pjDetail.name}"</h1>
                <h1>STATUS: "{pjDetail.status && pjDetail.status}"</h1>
                <h1>SPECIES: "{pjDetail.species && pjDetail.species}"</h1>
                <h1>GENDER: "{pjDetail.gender && pjDetail.gender}"</h1>
                <h1>ORIGIN: "{pjDetail.origin?.name && pjDetail.origin?.name}"</h1>

                <Link to='/home'>
                    <button className={styles.btn} >Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail;