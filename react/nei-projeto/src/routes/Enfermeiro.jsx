import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./Enfermeiro.css";

function Enfermeiro() {
  const [activeContent, setActiveContent] = useState("home"); // Define "home" como conteúdo padrão

  return (
    <>
      <body>
        {/* Header */}
        <header className="header-container">
          <div className="logo-container">
            <img src="/logonei.png" alt="Logo NEI" className="logo" />
          </div>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" className="search-input" />
            <button className="search-button">
              <img id="pesquisar" src="/pesquisar-16.png" alt="" />
            </button>
          </div>

          <div className="icon-container">
            <img id="notificacao" src="/notificacao.svg" alt="" />
            <Link className="links" to="/">
              <img id="logout" src="/logout.svg" alt="" />
              <span className="logout">Sair</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <section className="main-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="profile">
              <div className="fundoProfile">
                <img src="/maria.png" alt="Maria Jenner" className="profile-picture" />
                <h2>ENFERMEIRA</h2>
              </div>
              <h3>Maria Jenner</h3>
              <p>enfermeira@gmail.com</p>
              <hr className="divider" />
            </div>

            <nav className="menu">
              <a href="#home" className="menu-item" onClick={() => setActiveContent("home")}>
                <img className="iconSidebar" id="homeicon" src="/Home.svg" alt="" /> Home
              </a>
              <a href="#prontuarios" className="menu-item" onClick={() => setActiveContent("prontuarios")}>
                <img className="iconSidebar" src="/Prontuarios.svg" alt="" /> Prontuários
              </a>
              <a href="#atendimentos" className="menu-item" onClick={() => setActiveContent("atendimentos")}>
                <img className="iconSidebar" src="/Atendimentos.svg" alt="" /> Atendimentos
              </a>
              <a href="#notificar" className="menu-item" onClick={() => setActiveContent("notificar")}>
                <img className="iconSidebar" src="/NotificarResponsaveis.svg" alt="" /> Notificar responsáveis
              </a>
            </nav>

            <div className="settings">
              <hr className="divider" />
              <a href="#">
                <img id="iconConfig" src="/Configuracoes.svg" alt="" />
                Configurações
              </a>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="content">
            {activeContent === "home" && (
              <>
                <div className="pagina">
                  <img id="home-pagina" className="iconSidebar" src="/Home.svg" alt="" />
                  <span id="homes">Home</span>
                </div>
                <div className="row">
                  <div className="atendimentos">
                    <div className="iniciar">
                      <h2>Atendimentos</h2>
                      <button>Iniciar Atendimento</button>
                    </div>
                    <ul>
                      <li className="list-item">
                        <span className="name-with-photo">
                          <img className="foto-criancas" src="/lara.jpg" alt="Lara Silva" /> Lara Silva
                        </span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                      <li className="list-item">
                        <span className="name-with-photo">
                          <img className="foto-criancas" src="/nicolas.jpg" alt="Nicolas Giroud" /> Nicolas Giroud
                        </span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                      <li className="list-item">
                        <span className="name-with-photo">
                          <img className="foto-criancas" src="/julia.jpg" alt="Julia Thaina" /> Julia Thaina
                        </span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                    </ul>
                  </div>

                  <div className="solicitacoes">
                    <h2>Solicitações</h2>
                    <ul>
                      <li className="list-item">
                        <span className="name-with-photo">
                          <img className="foto-criancas" src="/enzo.jpg" alt="Enzo Gomes" /> Enzo Gomes
                        </span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="turmas">
                  <h2>Turmas</h2>
                  <ul>
                    <li>
                      <span>3º Ano A</span>
                      <span>Professor: Carlos Silva</span>
                      <button className="visualizar">Visualizar</button>
                    </li>
                    <li>
                      <span>3º Ano B</span>
                      <span>Professor: Maria Antonieta</span>
                      <button className="visualizar">Visualizar</button>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {activeContent === "prontuarios" && (
              <>
                <div className="pagina">
                  <img id="home-pagina" className="iconSidebar" src="/Home.svg" alt="" />
                  <span id="homes"> &gt; Cadastrar prontuário </span>
                </div>

                <div className="prontuario-container">
                  <h1 className="prontuario-title">Prontuário</h1>
                  <div className="prontuario-header">
                    <img
                      src="/lara80px.jpg"
                      alt="Foto do Aluno"
                      className="student-photo"
                    />
                    <div className="student-info">
                      <h2>Lara Silva Mendes</h2>
                      <p>7 ANOS (01/02/2017)</p>
                      <p>Responsáveis: Francisca Fernandes Campos</p>
                    </div>
                    <span className="student-grade">3º Ano A</span>
                  </div>

                  <div className="prontuario-section">
                    <h3>Ocorrência</h3>
                    <textarea placeholder="Digite aqui..." className="occurrence-input"></textarea>
                  </div>

                  <div className="prontuario-section">
                    <h3>Medicamento Aplicado</h3>
                    <div className="medication-options">
                      <label>
                        <input type="radio" name="medication" value="Cimegripe" />
                        Cimegripe
                      </label>
                      <label>
                        <input type="radio" name="medication" value="Paracetamol" />
                        Paracetamol
                      </label>
                      <label>
                        <input type="radio" name="medication" value="Dorflex" />
                        Dorflex
                      </label>
                      <label>
                        <input type="radio" name="medication" value="Timeolate" />
                        Timeolate
                      </label>
                      <label>
                        <input type="radio" name="medication" value="Ibuprofeno" />
                        Ibuprofeno
                      </label>
                      <label>
                        <input type="radio" name="medication" value="Nenhum" />
                        Nenhum
                      </label>
                    </div>
                  </div>

                  <div className="prontuario-section">
                    <h3>Sintomas</h3>
                    <div className="symptoms-options">
                      <label>
                        <input type="checkbox" value="Machucado Queda" />
                        Machucado Queda
                      </label>
                      <label>
                        <input type="checkbox" value="Vermelhidão" />
                        Vermelhidão
                      </label>
                      <label>
                        <input type="checkbox" value="Tosse" />
                        Tosse
                      </label>
                      <label>
                        <input type="checkbox" value="Febre" />
                        Febre
                      </label>
                      <label>
                        <input type="checkbox" value="Coriza" />
                        Coriza
                      </label>
                      <label>
                        <input type="checkbox" value="Outros" />
                        Outros
                      </label>
                    </div>
                  </div>

                  <div className="prontuario-section">
                    <h3>Observações</h3>
                    <textarea placeholder="Digite aqui..." className="occurrence-input"></textarea>
                  </div>

                  <div className='prontuario-section'>
                    <h3>Exige Acompanhamento?</h3>
                    <label>
                      <input type="radio" name="acompanhamento" value="Sim" />
                      Sim
                    </label>
                    <label>
                      <input type="radio" name="acompanhamento" value="Não" />
                      Não
                    </label>
                  </div>

                  <div className="prontuario-buttons">
                    <button className="btn-cancelar">Cancelar</button>
                    <button className="btn-concluir">Concluir</button>
                  </div>
                </div>
              </>
            )}

            {activeContent === "atendimentos" && (
              <div>
                <h2>Atendimentos</h2>
                <p>Listagem de atendimentos em andamento...</p>
              </div>
            )}

            {activeContent === "notificar" && (
              <div>
                <h2>Notificar Responsáveis</h2>
                <p>Envie notificações para os responsáveis pelos pacientes.</p>
              </div>
            )}
          </div>
        </section>
      </body>
    </>
  );
}

export default Enfermeiro;
