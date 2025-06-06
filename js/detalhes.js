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

// Função para obter o iframe do mapa correspondente ao ID do abrigo
function getShelterMapIframe(shelterId) {
    // Use os iframes de exemplo fornecidos anteriormente
    const iframes = {
        1: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.6612345!3d-23.5612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c123456789%3A0x123456789abcdef!2sRua%20da%20Consola%C3%A7%C3%A3o%2C%202190%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" width="100%" height="350" style="border-radius: 12px; margin: 2rem 0; border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        2: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.789012345!2d-46.6123456!3d-23.5623456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d123456789%3A0xabcdef123456789!2sRua%20Dr.%20Almeida%20Lima%2C%20900%20-%20Mooca%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" width="100%" height="350" style="border-radius: 12px; margin: 2rem 0; border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        3: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.345678901!2d-46.5923456!3d-23.5634567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e123456789%3A0xabcdefabcdef1234!2sAvenida%20Celso%20Garcia%2C%201234%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" width="100%" height="350" style="border-radius: 12px; margin: 2rem 0; border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        4: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.456789012!2d-46.6023456!3d-23.5645678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f123456789%3A0xabcdefabcdef5678!2sRua%20das%20Flores%2C%20567%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" width="100%" height="350" style="border-radius: 12px; margin: 2rem 0; border:0;" allowfullscreen="" loading="lazy"></iframe>`
    };
    // Retorna o iframe correspondente ao ID ou um padrão caso o ID não seja encontrado
    return iframes[shelterId] || iframes[1]; // Retorna o iframe do abrigo 1 como padrão
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
                    <div class="localizacao-mapa">${getShelterMapIframe(abrigo.id)}</div>
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