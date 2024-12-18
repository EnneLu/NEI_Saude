import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Enfermeiro from './Enfermeiro'; // Importe o componente da página de enfermeiros

import React from 'react';


function App() {
  return (
  <body>

    <div className='principal'>
      <section className="container">
        <img src="/public/logonei.png" alt="" />
        
        <p>Selecione um perfil</p>

        <BrowserRouter>
        <div className="button-group">
          <button className="btn">Enfermeiro</button>
          <button className="btn">Nutricionista</button>
          <button className="btn">Psicólogo</button>
          <button className="btn">Professor</button>
        </div>
        
      </BrowserRouter>
      
      </section>
   </div>
       
</body>
   
  );
}


export default App;