// Elementos do DOM
const botaoBuscar = document.getElementById('buscarAbrigos');
const inputLocalizacao = document.getElementById('localizacao');

// Menu Hamburguer
const menuHamburguer = document.getElementById('menuHamburguer');
const menuNavegacao = document.getElementById('menuNavegacao');

// Função para redirecionar para a página de resultados
function redirecionarParaResultados() {
    const localizacao = inputLocalizacao.value.trim();
    const parametros = new URLSearchParams();
    
    if (localizacao) {
        parametros.append('localizacao', localizacao);
    }
    
    window.location.href = `resultados.html?${parametros.toString()}`;
}

// Event Listeners
botaoBuscar.addEventListener('click', redirecionarParaResultados);

inputLocalizacao.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        redirecionarParaResultados();
    }
});

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('ativo');
    menuNavegacao.classList.toggle('ativo');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!menuHamburguer.contains(e.target) && !menuNavegacao.contains(e.target)) {
        menuHamburguer.classList.remove('ativo');
        menuNavegacao.classList.remove('ativo');
    }
});

// Fechar menu ao redimensionar a tela para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuHamburguer.classList.remove('ativo');
        menuNavegacao.classList.remove('ativo');
    }
}); 