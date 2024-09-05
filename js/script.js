function pesquisar() {
  // Seleciona o elemento HTML com o ID "novel" onde os resultados serão exibidos.
  let novel = document.getElementById('novel');

  // Inicializa uma string vazia para armazenar o HTML dos resultados.
  let result = "";

  // Itera sobre cada novela no array de dados.
  for (let dado of dados) {
    // Cria uma div para cada novela, com as informações relevantes.
    result += `<div class="item-resultado">
                <div class="bloco-esq">
                  <h2>${dado.titulo}</h2> <div class="descricao-meta">
                    ${dado.descricao} </div>
                  <ul>
                    <li><span>Autor:</span> ${dado.autor}</li> <li><span>Capítulos:</span> ${dado.capitulo}</li> <li><span>Status:</span> ${dado.status}</li> </ul>
                  <div class="item-mais">
                    <a href="${dado.link}" target="_blank">Mais Informações</a> </div>
                </div>
                <div class="bloco-dir">
                  <img src="${dado.img}"> </div>
              </div>`;
  }

  // Atribui o HTML gerado ao elemento "novel", substituindo o conteúdo anterior.
  novel.innerHTML = result;
}