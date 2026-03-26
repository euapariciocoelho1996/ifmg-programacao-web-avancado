// ============================================================
// DADOS INICIAIS
// Um array é uma lista de itens. Aqui cada item é um objeto
// com as propriedades nome, endereco e idade.
// ============================================================
const pessoas = [
  { nome: "Francisco", endereco: "Rua A, 123", idade: 25 },
  { nome: "Maria",     endereco: "Rua B, 456", idade: 30 },
  { nome: "João",      endereco: "Rua C, 789", idade: 22 },
];

// ============================================================
// SELEÇÃO DOS ELEMENTOS DO HTML
// querySelector() busca o primeiro elemento que corresponde
// ao seletor CSS passado como argumento.
// Salvamos em variáveis para não precisar buscar toda hora.
// ============================================================
const listaUsuarios   = document.querySelector(".lista-usuarios");
const btn             = document.querySelector(".btn");
const inputNome       = document.querySelector(".input-nome");
const inputEndereco   = document.querySelector(".input-endereco");
const inputIdade      = document.querySelector(".input-idade");
const contador        = document.getElementById("contador");
const mensagemVazia   = document.getElementById("mensagem-vazia");

// ============================================================
// INICIALIZAÇÃO
// Chamamos exibir() assim que a página carrega para mostrar
// as pessoas que já estão no array.
// ============================================================
exibir();

// ============================================================
// FUNÇÃO: exibir()
// Responsável por "pintar" a lista de usuários na tela.
// Sempre que o array mudar, limpamos o HTML e redesenhamos
// tudo do zero com os dados atualizados.
// ============================================================
function exibir() {
  // Limpa o conteúdo atual da lista para não duplicar
  listaUsuarios.innerHTML = "";

  // Atualiza o contador no cabeçalho (ex: "3 pessoas")
  const total = pessoas.length;
  contador.textContent = `${total} ${total === 1 ? "pessoa" : "pessoas"}`;

  // Se não há nenhuma pessoa, mostra a mensagem de lista vazia e para aqui
  if (total === 0) {
    mensagemVazia.style.display = "block";
    return; // Interrompe a função aqui
  }

  // Caso tenha pessoas, esconde a mensagem de vazia
  mensagemVazia.style.display = "none";

  // forEach percorre cada elemento do array e executa uma função
  // A variável "pessoa" representa o item atual a cada iteração
  pessoas.forEach((pessoa) => {
    // Cria um novo elemento <li> dinamicamente
    const li = document.createElement("li");
    li.classList.add("user"); // Adiciona a classe CSS para estilização

    // innerHTML define o conteúdo HTML interno do elemento
    // Usamos template literals (crase) para inserir variáveis com ${}
    li.innerHTML = `
      <div class="user-info user-nome">
        <span class="user-label">Nome</span>
        <span class="user-valor">${pessoa.nome}</span>
      </div>
      <div class="user-info">
        <span class="user-label">Endereço</span>
        <span class="user-valor">${pessoa.endereco}</span>
      </div>
      <div class="user-info">
        <span class="user-label">Idade</span>
        <span class="user-valor">${pessoa.idade} anos</span>
      </div>
    `;

    // Adiciona o <li> criado dentro da <ul> na página
    listaUsuarios.appendChild(li);
  });
}

// ============================================================
// VALIDAÇÃO
// Função auxiliar que verifica se os campos foram preenchidos
// e se os dados fazem sentido antes de adicionar ao array.
// Retorna true se tudo ok, false se houver erro.
// ============================================================
function validar(nome, endereco, idade) {
  // trim() remove espaços em branco do início e do fim da string
  if (!nome.trim() || !endereco.trim()) {
    alert("Por favor, preencha o nome e o endereço.");
    return false;
  }

  // Number() converte a string para número; isNaN verifica se NÃO é um número
  if (isNaN(Number(idade)) || Number(idade) <= 0 || Number(idade) > 120) {
    alert("Por favor, insira uma idade válida (entre 1 e 120).");
    return false;
  }

  return true; // Tudo certo!
}

// ============================================================
// EVENTO DE CLIQUE NO BOTÃO
// addEventListener "escuta" o evento e executa uma função
// toda vez que o botão for clicado.
// ============================================================
btn.addEventListener("click", () => {
  // Lê os valores digitados nos inputs
  const nome     = inputNome.value;
  const endereco = inputEndereco.value;
  const idade    = inputIdade.value;

  // Valida os dados antes de prosseguir
  // Se validar() retornar false, o código abaixo não executa
  if (!validar(nome, endereco, idade)) return;

  // Cria um novo objeto com os dados digitados
  const novaPessoa = {
    nome:     nome,
    endereco: endereco,
    idade:    Number(idade), // Converte string para número
  };

  // push() adiciona o novo objeto ao final do array
  pessoas.push(novaPessoa);

  // Limpa os campos do formulário após adicionar
  inputNome.value     = "";
  inputEndereco.value = "";
  inputIdade.value    = "";

  // Coloca o foco de volta no campo de nome para facilitar
  // o cadastro de várias pessoas seguidas
  inputNome.focus();

  // Re-renderiza a lista com a nova pessoa incluída
  exibir();
});
