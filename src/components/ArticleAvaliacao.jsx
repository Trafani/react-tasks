import React from 'react';

function ArticleAvaliacao() {
  return (
    <article>
        <div class="box-avaliacao">
            <div class="box-individual">
                <img class="img" src="img/pessoa1.jpg" />
                <div class="box-individual-texto">
                    <h3>Avaliação 1</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                        error ipsum iste neque iure vel omnis dicta eaque ad harum magnam
                        sint, similique eveniet! Magni laudantium tempora nobis minima
                        fuga.
                    </p>
                </div>
            </div>
            <div class="box-individual">
                <img class="img" src="img/pessoa2.jpg" />
                <div class="box-individual-texto">
                    <h3>Avaliação 2</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                        error ipsum iste neque iure vel omnis dicta eaque ad harum magnam
                        sint, similique eveniet! Magni laudantium tempora nobis minima
                        fuga.
                    </p>
                </div>
            </div>
            <div class="box-individual sumir-mobile">
                <img class="img mobile" src="img/pessoa3.jpg" />
                <div class="box-individual-texto">
                    <h3>Avaliação 3</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                        error ipsum iste neque iure vel omnis dicta eaque ad harum magnam
                        sint, similique eveniet! Magni laudantium tempora nobis minima
                        fuga.
                    </p>
                </div>
            </div>
        </div>
    </article>
  );
}

export default ArticleAvaliacao;