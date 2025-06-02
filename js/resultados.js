// Elementos do DOM
const listaAbrigos = document.getElementById('listaAbrigos');
const filtroTipo = document.getElementById('filtroTipo');
const filtroVagas = document.getElementById('filtroVagas');

// Função para criar o card de um abrigo
function criarCardAbrigo(abrigo) {
    return `
        <div class="card-abrigo">
            <h3>${abrigo.nome}</h3>
            <div class="info-abrigo">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${abrigo.enderecoResumido} (${abrigo.distanciaSimulada})</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-bed"></i>
                    <span>${abrigo.vagasDisponiveis} vagas disponíveis</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-building"></i>
                    <span>Tipo: ${abrigo.tipo}</span>
                </div>
            </div>
            <a href="detalhes-abrigo.html?id=${abrigo.id}" class="botao-detalhes">
                <i class="fas fa-info-circle"></i>
                Ver Detalhes
            </a>
        </div>
    `;
}

// Função para filtrar os abrigos
function filtrarAbrigos() {
    const tipoSelecionado = filtroTipo.value;
    const vagasMinimas = parseInt(filtroVagas.value) || 0;

    const abrigosFiltrados = listaDeAbrigos.filter(abrigo => {
        const tipoCorreto = !tipoSelecionado || abrigo.tipo === tipoSelecionado;
        const vagasSuficientes = abrigo.vagasDisponiveis >= vagasMinimas;
        return tipoCorreto && vagasSuficientes;
    });

    exibirAbrigos(abrigosFiltrados);
}

// Função para exibir os abrigos na tela
function exibirAbrigos(abrigos) {
    if (abrigos.length === 0) {
        listaAbrigos.innerHTML = `
            <div class="mensagem-sem-resultados">
                <p>Nenhum abrigo encontrado com os filtros selecionados.</p>
            </div>
        `;
        return;
    }

    listaAbrigos.innerHTML = abrigos.map(abrigo => criarCardAbrigo(abrigo)).join('');
}

// Event Listeners
filtroTipo.addEventListener('change', filtrarAbrigos);
filtroVagas.addEventListener('change', filtrarAbrigos);

// Exibir todos os abrigos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    exibirAbrigos(listaDeAbrigos);
}); 