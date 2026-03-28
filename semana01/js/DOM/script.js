/* =============================================
   SELEÇÃO DE ELEMENTOS DO DOM
   Captura as referências dos elementos HTML
   que serão manipulados ao longo do script.
   ============================================= */
const btn        = document.querySelector(".btn");           // Botão "Adicionar"
const input      = document.querySelector(".meuInput");      // Campo de texto
const lista      = document.querySelector(".lista-pacientes"); // Lista <ul>
const estadoVazio = document.getElementById("estadoVazio");  // Mensagem de lista vazia
const separador  = document.getElementById("separador");     // Separador com contador

/* =============================================
   ATUALIZAR ESTADO VAZIO E CONTADOR
   Verifica se a lista está vazia para exibir
   ou ocultar a mensagem de "nenhum paciente".
   Também atualiza o texto do separador com a
   quantidade atual de pacientes cadastrados.
   ============================================= */
function atualizarEstado() {
  const total = lista.querySelectorAll(".paciente-item").length;

  // Exibe ou oculta a mensagem de estado vazio
  estadoVazio.style.display = total === 0 ? "block" : "none";

  // Atualiza o texto do separador com o total de pacientes
  separador.textContent = total === 0
    ? "Pacientes"
    : `${total} paciente${total > 1 ? "s" : ""}`;
}

/* =============================================
   CRIAR ITEM DE PACIENTE
   Monta o elemento <li> completo com o nome
   do paciente e os botões de Editar e Excluir,
   já com seus respectivos event listeners.
   Retorna o <li> pronto para ser inserido.
   ============================================= */
function criarPaciente(nome) {
  // Cria o elemento de lista
  const li = document.createElement("li");
  li.classList.add("paciente-item");

  // Define o HTML interno do item
  li.innerHTML = `
    <span class="nome">${nome}</span>
    <div class="acoes">
      <button class="btn-editar">✏️ Editar</button>
      <button class="btn-excluir">🗑️ Excluir</button>
    </div>
  `;

  /* ---------- BOTÃO EDITAR ----------
     Abre um modal (SweetAlert2) com um campo de texto
     pré-preenchido com o nome atual do paciente.
     Se o usuário confirmar com um nome válido,
     o texto do span é atualizado. */
  li.querySelector(".btn-editar").addEventListener("click", async () => {
    const { value: novoNome } = await Swal.fire({
      title: "Editar paciente",
      input: "text",
      inputValue: li.querySelector(".nome").innerText, // Valor atual como padrão
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#1a6b5a",
    });

    // Só atualiza se o usuário digitou algo diferente de vazio
    if (novoNome && novoNome.trim() !== "") {
      li.querySelector(".nome").innerText = novoNome.trim();
      toastr.info("Paciente atualizado!");
    }
  });

  /* ---------- BOTÃO EXCLUIR ----------
     Exibe um modal de confirmação antes de remover.
     Se confirmado, o <li> é removido do DOM e o
     estado da lista é atualizado. */
  li.querySelector(".btn-excluir").addEventListener("click", async () => {
    const confirmacao = await Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#c0392b",
    });

    if (confirmacao.isConfirmed) {
      li.remove();              // Remove o item do DOM
      atualizarEstado();        // Atualiza contador e estado vazio
      toastr.error("Paciente removido!");
    }
  });

  return li; // Retorna o elemento montado
}

/* =============================================
   ADICIONAR PACIENTE
   Lê o valor do input, valida se não está vazio,
   cria o item e o insere na lista.
   Ao final, limpa e foca o campo para nova entrada.
   ============================================= */
function adicionarPaciente() {
  const valor = input.value.trim(); // Remove espaços das extremidades

  // Validação: campo não pode estar vazio
  if (valor === "") {
    toastr.warning("Digite um nome!");
    input.focus();
    return; // Interrompe a execução
  }

  const li = criarPaciente(valor); // Cria o elemento <li>
  lista.appendChild(li);           // Insere no final da lista

  input.value = "";   // Limpa o campo
  input.focus();      // Retorna o foco ao input

  atualizarEstado();  // Atualiza o contador e oculta o estado vazio

  toastr.success("Paciente adicionado!");
}

/* =============================================
   EVENT LISTENERS GLOBAIS
   ============================================= */

// Aciona ao clicar no botão "Adicionar"
btn.addEventListener("click", adicionarPaciente);

// Aciona ao pressionar Enter dentro do input
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarPaciente();
  }
});

/* =============================================
   INICIALIZAÇÃO
   Chama atualizarEstado() ao carregar a página
   para garantir que o estado vazio seja exibido
   corretamente no início (lista vazia).
   ============================================= */
atualizarEstado();
