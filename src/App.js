import axios from "axios"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import backgroundVideo from "./assets/imagenes/videolargo.mp4";

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";


function App() {
   const [characters, setCharacters] = useState([]);


//agrega personajes
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         // console.log("Llegue ok", data);
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
//elimina personajes 
   const onClose = (id) => {
    
      setCharacters( characters.filter(pj => {
         return pj.id !== id
      }))
   }

   return (
      <div className='App'>
         <video autoPlay loop muted id='video'>
            <source src={backgroundVideo} type='video/mp4' />
         </video>

         <NavBar onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            {/* <Route path='' element={} /> */}
            
         </Routes>
       

      </div>
   );
}

export default App;
