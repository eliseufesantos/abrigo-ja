// Elementos do DOM
const conteudoAbrigo = document.getElementById('conteudoAbrigo');
const botaoComoChegar = document.getElementById('botaoComoChegar');

// Função para obter o ID do abrigo da URL
function obterIdAbrigo() {
    const parametros = new URLSearchParams(window.location.search);
    return parseInt(parametros.get('id'));
}

// Função para encontrar o abrigo pelo ID
function encontrarAbrigo(id) {
    return listaDeAbrigos.find(abrigo => abrigo.id === id);
}

// Função para criar o HTML do mapa
function criarMapaPlaceholder() {
    return `
        <div class="mapa-container">
            <div class="mapa-placeholder">
                <i class="fas fa-map-marked-alt fa-3x"></i>
                <p>Mapa de localização do abrigo</p>
            </div>
        </div>
    `;
}

// Função para criar o HTML dos serviços
function criarListaServicos(servicos) {
    return `
        <div class="lista-servicos">
            ${servicos.map(servico => `
                <div class="servico-item">
                    <i class="fas fa-check"></i>
                    <span>${servico}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Função para exibir os detalhes do abrigo
function exibirDetalhesAbrigo(abrigo) {
    if (!abrigo) {
        conteudoAbrigo.innerHTML = `
            <div class="mensagem-erro">
                <p>Abrigo não encontrado.</p>
                <a href="resultados.html" class="botao-voltar">Voltar para a Lista</a>
            </div>
        `;
        return;
    }

    conteudoAbrigo.innerHTML = `
        <h2 class="titulo-abrigo">${abrigo.nome}</h2>
        <div class="grid-detalhes">
            <div class="bloco-info bloco-localizacao">
                <h4><i class="fas fa-map-marker-alt"></i> Localização</h4>
                <div class="localizacao-grid">
                    <div class="localizacao-endereco"><strong>Endereço:</strong> ${abrigo.enderecoCompleto}</div>
                    <div class="localizacao-mapa">${criarMapaPlaceholder()}</div>
                </div>
            </div>
            <div class="bloco-duplo">
                <div class="bloco-info bloco-pequeno">
                    <h4><i class="fas fa-bed"></i> Vagas</h4>
                    <div><strong>Disponíveis:</strong> ${abrigo.vagasDisponiveis} de ${abrigo.vagasTotais}</div>
                </div>
                <div class="bloco-info bloco-pequeno">
                    <h4><i class="fas fa-clock"></i> Horário</h4>
                    <div>${abrigo.horarioFuncionamento}</div>
                </div>
            </div>
            <div class="bloco-info">
                <h4><i class="fas fa-hands-helping"></i> Serviços</h4>
                ${criarListaServicos(abrigo.servicos)}
            </div>
            <div class="bloco-info">
                <h4><i class="fas fa-phone"></i> Contato</h4>
                <div><strong>Telefone:</strong> ${abrigo.contatoTelefone}</div>
                <div><strong>E-mail:</strong> ${abrigo.contatoEmail}</div>
            </div>
        </div>
    `;
}

// Event Listeners
botaoComoChegar.addEventListener('click', () => {
    alert('Funcionalidade de navegação será implementada em uma versão futura.');
});

// Carregar os detalhes do abrigo ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    const idAbrigo = obterIdAbrigo();
    const abrigo = encontrarAbrigo(idAbrigo);
    exibirDetalhesAbrigo(abrigo);
}); 