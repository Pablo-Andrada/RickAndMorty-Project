import React from "react";
import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.div} >
            <h1>Soy PABLO ANDRADA</h1>
            <h4 className="fst-italic">Gracias por interesarte en mi página, te cuento un poco sobre mi... </h4>
            <h4>Soy egresado de HENRY, soy FullStack Developer, tengo conocimientos de React, NodeJS, JavaScript,</h4>
            <h4>Express, Sequelize, Postgress, HTML y CSS.</h4>
            <h4>Soy un programador que se interesa tanto por el front end como el back end, soy buen trabajador de equipo,</h4>
            <h4>y me adapto rápidamente a los procesos y requerimientos del mercado actual.</h4>
            <h4>Me encanta programar y puedo aportar soluciones en los stacks de tecnologias en los que me especializo.</h4>
            <hr />
            
        </div>
    )    
}

export default About;