// import React from "react";
// import { useState, useEffect } from "react";
// import validation from "./validation";
// import "./Form.css";

// const Form = ({login}) => {
//     const [userData, setUserData] = useState({
//         email: "",
//         password:""
//     })
//     const [errors, setErrors] = useState({
        
//     })

//     const handleChange = (event) => {
//         setUserData({
//             ...userData,
//             [event.target.name] : event.target.value
//         })
        
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         login(userData);
//     }

//     useEffect(() => {
//         if (userData.email !== "" || userData.password !== "") {
//                     setErrors(validation(userData))
//         };
//     },[userData])

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email: </label>
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Escribe tu email"
//                 value={userData.email}
//                 onChange={handleChange}
//             />
//             {
//                 errors.email !== "" ? <p style={{ color: "red" }}>{errors.email}</p> : ""
//             }
            
//             <label htmlFor="password">Password: </label>
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Escribe tu password"
//                 value={userData.password}
//                 onChange={handleChange}
//             />
//             {
//                 errors.password !== "" ? <p style={{ color: "red" }}>{errors.password}</p> : ""
//             }
//             <button type="submit">SUBMIT</button>
//             <h4>Puedes probar la App con los siguientes info standar</h4>
//             <h5>Email: </h5><p>User@gmail.com</p>
//             <h5>Password: </h5><p>Password1234</p>

//         </form>
//     );
// }

// export default Form;

import React, { useState, useEffect } from "react";
import validation from "./validation";
import "./Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  useEffect(() => {
    if (userData.email || userData.password) {
      setErrors(validation(userData));
    }
  }, [userData]);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit">INGRESAR</button>

        <div className="credentials">
          <h4>Credenciales de prueba:</h4>
          <p>Email: User@gmail.com</p>
          <p>Contraseña: Password1234</p>
        </div>
      </form>
    </div>
  );
};

export default Form;