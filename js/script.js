function pesquisar() {
	// Seleciona o elemento HTML com o ID "novel" onde os resultados serão exibidos.
	let novel = document.getElementById('novel');

	let campoPesquisa = document.getElementById('campo-pesquisa').value;

	//Valida a pesquisa vazia
	if(!campoPesquisa){
  		novel.innerHTML = `<div class="item-resultado"><p>Dados não encontrados! Digite o nome de uma novel.</p></div>`;
  		return;
	}

	// Inicializa uma string vazia para armazenar o HTML dos resultados.
	let result = "";

	// Inicializa as variáveis para armazenamento dos dados em letras minúsculas para fins de validação da pesquisa
	campoPesquisa = campoPesquisa.toLowerCase();
	let titulo = "";
	let descricao = "";

	// Itera sobre cada novela no array de dados.
	for (let dado of dados) {
		titulo = dado.titulo.toLowerCase();
		descricao = dado.descricao.toLowerCase();
	  	if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
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
}
	if(!result){
		novel.innerHTML = `<div class="item-resultado"><p>Dados não encontrados!</p></div>`;
	}else {
		// Atribui o HTML gerado ao elemento "novel", substituindo o conteúdo anterior.
		novel.innerHTML = result;
	}
}