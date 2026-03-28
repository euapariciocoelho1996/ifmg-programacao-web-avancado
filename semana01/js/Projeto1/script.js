class Livro {
  constructor(livro, autor, ano) {
    this.livro = livro;
    this.autor = autor;
    this.ano = ano;
  }
}

const LivrosCadastrados = [
  new Livro("JavaScript Avançado", "Ana Silva", 2020),
  new Livro("HTML Essencial", "Carlos Souza", 2018),
  new Livro("CSS Moderno", "Ana Silva", 2021),
  new Livro("Node.js na Prática", "Marcos Lima", 2022),
  new Livro("React do Zero", "Fernanda Alves", 2023),
  new Livro("Banco de Dados", "Carlos Souza", 2019),
  new Livro("Algoritmos", "João Pereira", 2017),
  new Livro("Estruturas de Dados", "João Pereira", 2021),
  new Livro("APIs REST", "Marcos Lima", 2020),
  new Livro("TypeScript", "Ana Silva", 2022),
  new Livro("Docker Básico", "Fernanda Alves", 2021),
  new Livro("Redes de Computadores", "Carlos Souza", 2016),
  new Livro("Machine Learning", "Juliana Rocha", 2023),
  new Livro("Python para Web", "Juliana Rocha", 2022),
];

const inputLivro = document.querySelector(".livro");
const inputAutor = document.querySelector(".autor");
const inputAno = document.querySelector(".ano");
const inputFiltro = document.querySelector(".filtro");
const selectBusca = document.querySelector(".busca");
const botao = document.querySelector(".btn");
const botaoBuscar = document.querySelector(".btnBuscar");
const btnTodos = document.querySelector(".btnMostrarTodos");
const quadroLivros = document.querySelector(".livrosCadastrados");
const contador = document.getElementById("contador");
const feedback = document.getElementById("feedback");
const emptyMsg = document.getElementById("empty-msg");

function Exibir(lista = LivrosCadastrados) {
  quadroLivros.innerHTML = "";

  if (lista.length === 0) {
    emptyMsg.classList.add("visible");
    contador.textContent = "0";
    return;
  }

  emptyMsg.classList.remove("visible");
  contador.textContent = lista.length;

  lista.forEach((book, i) => {
    const li = document.createElement("li");
    li.style.animationDelay = `${i * 0.04}s`;
    li.innerHTML = `
      <span class="li-titulo">${book.livro}</span>
      <span class="li-autor">— ${book.autor}</span>
      <span class="li-ano">${book.ano}</span>
    `;
    quadroLivros.appendChild(li);
  });
}

function mostrarFeedback(msg, cor = "var(--brown-md)") {
  feedback.style.color = cor;
  feedback.textContent = msg;
  setTimeout(() => {
    feedback.textContent = "";
  }, 3000);
}

botaoBuscar.addEventListener("click", () => {
  const valorBusca = inputFiltro.value.trim().toLowerCase();
  const tipoFiltro = selectBusca.value; // "livro" | "autor" | "ano"

  if (!valorBusca) {
    Exibir();
    return;
  }

  const resultado = LivrosCadastrados.filter((e) =>
    e[tipoFiltro].toString().toLowerCase().includes(valorBusca),
  );

  Exibir(resultado);
});

/* Busca ao pressionar Enter no campo filtro */
inputFiltro.addEventListener("keydown", (e) => {
  if (e.key === "Enter") botaoBuscar.click();
});

/* Mostrar todos */
btnTodos.addEventListener("click", () => {
  inputFiltro.value = "";
  Exibir();
});

botao.addEventListener("click", () => {
  const tLivro = inputLivro.value.trim();
  const tAutor = inputAutor.value.trim();
  const tAno = inputAno.value.trim();

  if (!tLivro || !tAutor || !tAno) {
    mostrarFeedback("⚠ Preencha todos os campos.", "#a03030");
    return;
  }

  const anoNum = Number(tAno);
  if (isNaN(anoNum) || anoNum < 1 || anoNum > new Date().getFullYear() + 1) {
    mostrarFeedback("⚠ Ano inválido.", "#a03030");
    return;
  }

  const novo = new Livro(tLivro, tAutor, anoNum);
  LivrosCadastrados.push(novo);
  Exibir();

  inputLivro.value = "";
  inputAutor.value = "";
  inputAno.value = "";
  mostrarFeedback(`✓ "${tLivro}" cadastrado com sucesso.`, "var(--brown-md)");
  inputLivro.focus();
});

/* Cadastra ao pressionar Enter em qualquer campo do formulário */
[inputLivro, inputAutor, inputAno].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") botao.click();
  });
});

Exibir();
