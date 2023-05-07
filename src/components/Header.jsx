import React from 'react';

function Header() {
  return (
    <header>
      <img src="img/logo.png" alt="Logotipo" />
      <nav className="menu">
        <ul>
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Animações</a></li>
          <li><a href="#">Musicais</a></li>
        </ul>
      </nav>
      <div className="caixa-pesquisa">
        <input type="text" className="texto-pesquisa" value="Pesquisar" />
        <button>Ok</button>
      </div>
    </header>
  );
}

export default Header;