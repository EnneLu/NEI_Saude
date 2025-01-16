import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./Professor.css";


function Professor() {
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
          <a href="#notificacoes"onClick={() => setActiveContent("notificacoes")}><img id="notificacao" src="/notificacao.svg" alt="" /></a>

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
                <img src="/professora.png" alt="Maria Jenner" className="profile-picture" />
                <h2>PROFESSORA</h2>
              </div>
              <h3>Amanda Falcão</h3>
              <p>professora@gmail.com</p>
              <hr className="divider" />
            </div>

            <nav className="menu">
              <a href="#home" className="menu-item" onClick={() => setActiveContent("home")}>
                <img className="iconSidebar" id="homeicon" src="/Home.svg" alt="" /> <p className='menu-item-palavras'>Home</p>
              </a>
              <a href="#atendimentos" className="menu-item" onClick={() => setActiveContent("atendimentos")}>
                <img className="iconSidebar" src="/Atendimentos.svg" alt="" /> <p className='menu-item-palavras'>Atendimentos</p>
              </a>
              <a href="#notificar" className="menu-item" onClick={() => setActiveContent("notificar")}>
                <img className="iconSidebar" src="/NotificarResponsaveis.svg" alt="" /> <p className='menu-item-palavras'>Notificar responsáveis</p>
              </a>
              
            </nav>
           <div className="settings">
              <hr className="divider-config" />
              <a href="#">
                <img id="iconConfig" src="/Configuracoes.svg" alt="" />
                <p className='config-palavra'>Configurações</p>
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
                    </div>
                    <div>
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
                  </div>

                  <div className="solicitacoes">
                    <div className="iniciar">
                      <h2>Solicitar Atendimento Médico</h2>
                    </div>
                    <div>
                      <ul>
                        <li className="list-item">
                          <span className="name-with-photo">
                            <img className="foto-criancas" src="/enzo.jpg" alt="Enzo Gomes" /> Enzo Gomes
                          </span>
                          <button className="visualizar">Solicitar Atendimento</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="iniciar">
                    <h2>Turmas</h2>
                  </div>
                  <div className="turmas">
                    <ul>
                      <li>
                        <span>3º Ano A</span>
                        <span>Professor: Amanda Falcão</span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                      <li>
                        <span>3º Ano B</span>
                        <span>Professor: Amanda Falcão</span>
                        <button className="visualizar">Visualizar</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeContent === "atendimentos" && (
              <>
                <div className="pagina">
                  <img id="home-pagina" className="iconSidebar" src="/Home.svg" alt="" />
                  <span id="homes"> &gt; Buscar Atendimento </span>
                </div>            
                <div className="prontuario-container">
                  <div>
                    <h1 className="prontuario-title">Atendimentos</h1>
                  </div> 
                </div>            
                <div className="prontuario-section">
                  <h3>Tipo de Atendimento</h3>
                  <select className="select-tipo-atendimento">
                  <option value="emergencia"></option>
                    <option value="consulta">Consulta Médica</option>
                    <option value="emergencia">Consulta Psicológica</option>
                    <option value="emergencia">Emergência</option>
                  </select>
                  <h3>Data e Hora</h3>
                  <input
                    type="datetime-local"
                    className="input-data-hora"
                  />
                  <div className="prontuario-buttons">
                      <button className="btn-cancelar">Cancelar</button>
                      <button className="btn-concluir">Buscar</button>
                   </div>                 
                </div>
              </>
            )}

            {activeContent === "notificar" && (
              <>
                <div className="pagina">
                  <img id="home-pagina" className="iconSidebar" src="/Home.svg" alt="" />
                  <span id="homes"> &gt; Notificar Renponsáveis </span>
                </div>
                <div className="prontuario-container">
                  <div>
                    <h1 className="prontuario-title">Notificar Renponsáveis</h1>
                  </div> 
                </div>            
                <div className="prontuario-section">
                  <h3>Selecione a Turma</h3>
                  <select className="select-responsavel">
                    <option value="francisca"></option>
                    <option value="francisca">3 ano A</option>
                    <option value="maria">3 ano B</option>
                    <option value="carlos">4 ano A</option>
                    <option value="antonio">4 ano B</option>
                  </select>
                  <h3>Selecione o Aluno</h3>
                  <select className="select-responsavel">
                    <option value="francisca"></option>
                    <option value="francisca">Francisca Fernandes Campos</option>
                    <option value="maria">Maria Antonieta</option>
                    <option value="carlos">Carlos Silva</option>
                    <option value="antonio">Antonio Pereira</option>
                  </select>                  
                  <h3>Selecione o Responsável</h3>
                  <select className="select-responsavel">
                    <option value="francisca"></option>
                    <option value="francisca">João Fernandes Campos</option>
                    <option value="maria">Maria Antonieta</option>
                  </select>
                  <h3>Mensagem</h3>
                  <textarea
                    placeholder="Digite sua mensagem aqui..."
                    className="notificacao-input"
                  ></textarea>
            
                  <div className="prontuario-buttons">
                      <button className="btn-cancelar">Cancelar</button>
                      <button className="btn-concluir">Concluir</button>
                  </div> 
              </div>
            </>
            )}
             {activeContent === "notificacoes" && (
              <>
                <div className="pagina">
                    <img id="home-pagina" className="iconSidebar" src="/Home.svg" alt="" />
                    <span id="homes"> &gt; Notificações </span>
                </div>
                <div className="prontuario-container">
                    <div>
                    <h1 className="prontuario-title">Notificações</h1>
                    </div> 
                </div>  
                <div className="notificacao-container">
                  <ul className="notificacao-list">
                    <li className="notificacao-item">
                      <span>Novo atendimento registrado por Maria Jenner.</span>
                      <button className="visualizar">Visualizar</button>
                    </li>
                    <li className="notificacao-item">
                      <span>Atualização no prontuário de Lara Silva.</span>
                      <button className="visualizar">Visualizar</button>
                    </li>
                    <li className="notificacao-item">
                      <span>Nova mensagem de Carlos Silva.</span>
                      <button className="visualizar">Visualizar</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

        </section>
        
      </body>
    </>
  );
}

export default Professor;