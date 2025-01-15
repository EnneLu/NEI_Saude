import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home'>
      <section className="container">
        <img src="/public/logonei.png" alt="Logo" />
        
        <p>Selecione um perfil</p>
        <div className="button-group">
          <Link className='botoes' to="/enfermeiro"><button className="btn">Enfermeiro</button></Link>
          <Link className='botoes' to="/psicologo"><button className="btn">Psicólogo</button></Link>
          <Link className='botoes' to="/professor"><button className="btn">Professor</button></Link>
        </div>              
      </section>
    </div>
  );
}

export default Home;
