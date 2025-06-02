// Gerenciamento de Tema
const alternarTema = document.getElementById('alternarTema');
const corpo = document.body;

// Carregar preferência de tema salva
const temaSalvo = localStorage.getItem('tema') || 'claro';
corpo.setAttribute('data-tema', temaSalvo);
atualizarIconeTema(temaSalvo);

// Funcionalidade de alternar tema
alternarTema.addEventListener('click', () => {
    const temaAtual = corpo.getAttribute('data-tema');
    const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
    
    corpo.setAttribute('data-tema', novoTema);
    localStorage.setItem('tema', novoTema);
    atualizarIconeTema(novoTema);
});

function atualizarIconeTema(tema) {
    alternarTema.innerHTML = tema === 'claro' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
}

// Gerenciamento de Idioma
const seletorIdioma = document.getElementById('selecionarIdioma');
const idiomaAtual = localStorage.getItem('idioma') || 'pt-br';

// Carregar preferência de idioma salva
seletorIdioma.value = idiomaAtual;
atualizarIdioma(idiomaAtual);

// Manipulador de mudança de idioma
seletorIdioma.addEventListener('change', (e) => {
    const novoIdioma = e.target.value;
    localStorage.setItem('idioma', novoIdioma);
    atualizarIdioma(novoIdioma);
});

function atualizarIdioma(idioma) {
    // Aqui você normalmente carregaria conteúdo específico do idioma
    // Por enquanto, apenas atualizamos o idioma do documento
    document.documentElement.lang = idioma;
}

// Gerenciamento de Autenticação
const modalLogin = document.getElementById('modalLogin');
const modalCadastro = document.getElementById('modalCadastro');
const botaoEntrar = document.getElementById('botaoEntrar');
const botaoCadastrar = document.getElementById('botaoCadastrar');
const botoesFechar = document.querySelectorAll('.fechar-modal');

// Mostrar modais
botaoEntrar.addEventListener('click', () => {
    modalLogin.style.display = 'block';
});

botaoCadastrar.addEventListener('click', () => {
    modalCadastro.style.display = 'block';
});

// Fechar modais
botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
        modalLogin.style.display = 'none';
        modalCadastro.style.display = 'none';
    });
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
    if (e.target === modalCadastro) {
        modalCadastro.style.display = 'none';
    }
});

// Envios de formulário
const formularioLogin = document.getElementById('formularioLogin');
const formularioCadastro = document.getElementById('formularioCadastro');

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formularioLogin.querySelector('[name="email"]').value;
    const senha = formularioLogin.querySelector('[name="senha"]').value;
    
    // Aqui você normalmente faria uma chamada de API para autenticar
    console.log('Tentativa de login:', { email, senha });
    
    // Para fins de demonstração, apenas fechamos o modal
    modalLogin.style.display = 'none';
});

formularioCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = formularioCadastro.querySelector('[name="nome"]').value;
    const email = formularioCadastro.querySelector('[name="email"]').value;
    const senha = formularioCadastro.querySelector('[name="senha"]').value;
    
    // Aqui você normalmente faria uma chamada de API para registrar
    console.log('Tentativa de cadastro:', { nome, email, senha });
    
    // Para fins de demonstração, apenas fechamos o modal
    modalCadastro.style.display = 'none';
}); 