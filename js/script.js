console.log(dados[1]);

let novel = document.getElementById('novel');

for (let i = 0; i < dados.length; i++) {
	novel.innerHTML += `<div class="item-resultado">
			<div class="bloco-esq">
				<h2>${dados[i].titulo}</h2>
				<div class="descricao-meta">
					${dados[i].descricao}
				</div>
				<ul>
					<li><span>Autor:</span> ${dados[i].autor}</li>
					<li><span>Capítulos:</span> ${dados[i].capitulo}</li>
					<li><span>Status:</span> ${dados[i].status}</li>
				</ul>
				<div class="item-mais">
					<a href="${dados[i].link}" target="_blank">Mais Informações</a>
				</div>
			</div>
			<div class="bloco-dir">
				<img src="${dados[i].img}">
			</div>
		</div>`;
}