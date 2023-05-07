import React from 'react';

function ArticleDestaque() {
  return (
    <article>
        <div class="em-destaque-titulo">
            <div class="item1">
                <h1>Em destaque</h1>
            </div>
            <div class="item2">
                <select value="Selecionar categoria" name="item2" id="item2">
                    <option value="audi">Todos</option>
                    <option value="volvo">Aventura</option>
                    <option value="saab">Romance</option>
                    <option value="mercedes">Comédia</option>
                </select>
            </div>
        </div>
        <div class="em-destaque">
            <img src="img/desq1.jpg" alt="Filme em destaque" />
            <img src="img/desq2.jpg" alt="Filme em destaque" />
            <img src="img/desq3.jpg" alt="Filme em destaque" />
            <img src="img/desq4.jpg" alt="Filme em destaque" />
        </div>
        <button class="botao-maior">+ Carregar mais filmes</button>
    </article>
  );
}

export default ArticleDestaque;