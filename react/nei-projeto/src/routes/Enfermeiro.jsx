import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Enfermeiro() {
  return (
    <div>
      <button><Link to="/">Voltar</Link></button>
      <Navbar/>
    </div>
  );
}

export default Enfermeiro;