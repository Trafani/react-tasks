import React from 'react';

function ArticleEditorial() {
  return (
    <article class="secao-final">
        <section class="novidade">
            <h1>Novidades</h1>
            <div class="secao-novidade">
                <div class="novidade-imagem">
                    <img class="img" src="img/not1.jpg" />
                </div>
                <div class="box-novidade-descricao">
                    <div class="descricao">
                        <h3>The Crown interrompe gravações após morte da rainha</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                            error ipsum iste neque iure vel omnis dicta eaque ad harum
                            magnam sint, similique eveniet! Magni laudantium tempora nobis
                            minima fuga.
                        </p>
                    </div>
                    <div class="tags">
                        <p class="tag-name"> holywood </p>
                        <p class="tag-name"> oscar </p>
                        <p class="tag-name"> melhor filme </p>
                    </div>
                </div>
            </div>
            <div class="secao-novidade">
                <div class="novidade-imagem">
                    <img class="img" src="img/not2.jpg" />
                </div>
                <div class="box-novidade-descricao">
                    <div class="descricao">
                        <h3>O cangaço chega à Netflix</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                            error ipsum iste neque iure vel omnis dicta eaque ad harum
                            magnam sint, similique eveniet! Magni laudantium tempora nobis
                            minima fuga.
                        </p>
                    </div>
                    <div class="tags">
                        <p class="tag-name"> holywood </p>
                        <p class="tag-name"> oscar </p>
                        <p class="tag-name"> melhor filme </p>
                    </div>
                </div>
            </div>
            <div class="secao-novidade">
                <div class="novidade-imagem">
                    <img class="img" src="img/not3.jpg" />
                </div>
                <div class="box-novidade-descricao">
                    <div class="descricao">
                        <h3>Chegamos a última temporada de La Casa de Papel</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                            error ipsum iste neque iure vel omnis dicta eaque ad harum
                            magnam sint, similique eveniet! Magni laudantium tempora nobis
                            minima fuga.
                        </p>
                    </div>
                    <div class="tags">
                        <p class="tag-name"> holywood </p>
                        <p class="tag-name"> oscar </p>
                        <p class="tag-name"> melhor filme </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="sobre-editorial">
            <div className="sobre">
                <h4>Sobre</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                    error ipsum iste neque iure vel omnis dicta eaque ad harum
                    magnam sint, similique eveniet! Magni laudantium tempora nobis
                    minima fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                    error ipsum iste neque iure vel omnis dicta eaque ad harum
                    magnam sint, similique eveniet! Magni laudantium tempora nobis
                    minima fuga.
                </p>
            </div>
            <div className="editorial">
                <h4>Editorial</h4>
                <img src="img/pessoa.png" alt="Imagem de uma pessoa" className="imagem-editorial" /><span><strong>Redação:</strong> Nome do Redator</span><br />
                <img src="img/pessoa.png" alt="Imagem de uma pessoa" className="imagem-editorial" /><span><strong>Pesquisa:</strong> Nome do Pesquisador</span><br />
                <img src="img/pessoa.png" alt="Imagem de uma pessoa" className="imagem-editorial" /><span><strong>Gerente Geral:</strong> Nome do Editor Chefe</span><br />
            </div>
            <div className="redes-sociais">
                <h4>Redes Sociais</h4>
                <img src="img/facebook.png" alt="Ícone do Facebook" className="icone-rede-social" />
                <img src="img/twitter.png" alt="Ícone do Twitter" className="icone-rede-social" />
                <img src="img/instagram.png" alt="Ícone do Instagram" className="icone-rede-social" />
            </div>
        </section>
    </article>
  );
}

export default ArticleEditorial;