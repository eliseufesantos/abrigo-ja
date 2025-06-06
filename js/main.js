// Elementos do DOM - Busca (mantidos fora do DOMContentLoaded se usados na index.html)
const botaoBuscar = document.getElementById('buscarAbrigos');
const inputLocalizacao = document.getElementById('localizacao');

// Função para redirecionar para a página de resultados (mantida fora do DOMContentLoaded)
function redirecionarParaResultados() {
    const localizacao = inputLocalizacao.value.trim();
    const parametros = new URLSearchParams();
    
    if (localizacao) {
        parametros.append('localizacao', localizacao);
    }
    
    window.location.href = `resultados.html?${parametros.toString()}`;
}

// Event Listeners - Busca (mantidos fora do DOMContentLoaded)
// Verificar se os elementos existem antes de adicionar listeners na index.html
if (botaoBuscar && inputLocalizacao) {
  botaoBuscar.addEventListener('click', redirecionarParaResultados);

  inputLocalizacao.addEventListener('keypress', (evento) => {
      if (evento.key === 'Enter') {
          redirecionarParaResultados();
      }
  });
}

// Código do Menu Hamburguer - Executar após o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM - Menu Hamburguer
    const menuHamburguer = document.getElementById('menuHamburguer');
    const menuNavegacao = document.getElementById('menuNavegacao');

    // Verificar se os elementos do menu existem nesta página
    if (menuHamburguer && menuNavegacao) {
        // Event Listeners - Menu Hamburguer
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
    }
}); 