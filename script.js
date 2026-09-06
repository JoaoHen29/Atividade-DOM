// ---------- Seleção dos elementos do DOM ----------
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const greetingMessage = document.getElementById('greeting-message');

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeLabel = document.getElementById('theme-label');

// ---------- Evento 1: clique no botão "Enviar" ----------
submitBtn.addEventListener('click', () => {
  exibirMensagem();
});

// Bônus: permite enviar também pressionando "Enter" no campo de texto
nameInput.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    exibirMensagem();
  }
});

function exibirMensagem() {
  const nome = nameInput.value.trim();

  if (nome === '') {
    greetingMessage.textContent = 'Por favor, digite seu nome antes de enviar.';
    return;
  }

  // Manipulação do DOM: alterando o conteúdo de texto do elemento
  greetingMessage.textContent = `Olá, ${nome}! Seja bem-vindo(a) à página.`;
}

// ---------- Evento 2: clique no botão de alternar tema ----------
themeToggle.addEventListener('click', () => {
  const temaAtual = document.body.getAttribute('data-theme');
  const novoTema = temaAtual === 'light' ? 'dark' : 'light';

  // Manipulação do DOM: alterando um atributo do elemento <body>
  document.body.setAttribute('data-theme', novoTema);

  if (novoTema === 'dark') {
    themeIcon.textContent = '☾';
    themeLabel.textContent = 'Modo noite';
  } else {
    themeIcon.textContent = '☀';
    themeLabel.textContent = 'Modo dia';
  }
});
