import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home'>
      <section className="container">
        <img src="/public/logonei.png" alt="" />
        
        <p>Selecione um perfil</p>
          <div className="button-group">
            <Link to="/enfermeiro"><button className="btn">Enfermeiro</button></Link>
            <button className="btn">Nutricionista</button>
            <button className="btn">Psicólogo</button>
            <button className="btn">Professor</button>
          </div>              
      </section>
    </div>
  );
}

export default Home;