import React from "react";
import { useState, useEffect } from "react";
import validation from "./validation";
import "./Form.css";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password:""
    })
    const [errors, setErrors] = useState({
        
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    useEffect(() => {
        if (userData.email !== "" || userData.password !== "") {
                    setErrors(validation(userData))
        };
    },[userData])

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                name="email"
                placeholder="Escribe tu email"
                value={userData.email}
                onChange={handleChange}
            />
            {
                errors.email !== "" ? <p style={{ color: "red" }}>{errors.email}</p> : ""
            }
            
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                placeholder="Escribe tu password"
                value={userData.password}
                onChange={handleChange}
            />
            {
                errors.password !== "" ? <p style={{ color: "red" }}>{errors.password}</p> : ""
            }
            <button type="submit">SUBMIT</button>

        </form>
    );
}

export default Form;