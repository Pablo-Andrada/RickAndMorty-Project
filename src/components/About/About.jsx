import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <div className={style.contentCard}>
                <h1 className={style.mainTitle}>PABLO ANDRADA</h1>
                
                <div className={style.aboutText}>
                    <p>
                        <em>Gracias por interesarte en mi página, te cuento un poco sobre mí...</em>
                    </p>
                    
                    <p>
                        Soy egresado de HENRY, FullStack Developer con conocimientos en React, NodeJS, JavaScript, 
                        Express, PostgreSQL, HTML y CSS.
                    </p>

                    <p>
                        Como programador me interesa tanto el front-end como el back-end. Destaco por ser buen 
                        compañero de equipo y adaptarme rápidamente a los procesos del mercado actual.
                    </p>

                    <h4>Tecnologías principales:</h4>
                    <div className={style.techGrid}>
                        {['React', 'Node.js', 'JavaScript', 'Express', 'PostgreSQL', 'HTML5', 'CSS3'].map((tech) => (
                            <div key={tech} className={style.techItem}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    <h4>Mis habilidades:</h4>
                    <div className={style.techGrid}>
                        <div className={style.techItem}>Desarrollo FullStack integral</div>
                        <div className={style.techItem}>Trabajo en equipo ágil</div>
                        <div className={style.techItem}>Adaptación a nuevos desafíos</div>
                        <div className={style.techItem}>Soluciones escalables</div>
                    </div>

                    <p>
                        Mi motivación principal es crear software de calidad que genere impacto real, 
                        siempre buscando mantenerme actualizado con las últimas tecnologías.
                    </p>
                </div>

                <div className={style.homeBtnContainer}>
                    <Link to="/home">
                        <button className={style.homeBtn}>VOLVER AL INICIO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About;