// principal ferramenta para criar um servidor web
// o express é um modulo que facilita a criação de servidores web em Node.js, oferecendo uma sintaxe mais simples e recursos adicionais para lidar com rotas, requisições, respostas, etc.
// o express é orientado a rotas, ou seja, ele permite definir rotas para diferentes URLs e métodos HTTP (GET, POST, etc.) de forma fácil e intuitiva. Ele também oferece suporte a middlewares, que são funções que podem ser executadas

const express = require("express");
const app = express(); // cria uma instância do express

// função de callback é uma função que acontece quando algum evento acontece, nesse caso quando o cliente fizer uma requisição para a rota "/"
app.get("/", (req, res) => {
  res.send("Hello World!"); // envia a resposta "Hello World!" para o cliente
});

app.get("/rota1", (req, res) => {
  res.sendFile(__dirname + "/rota1.html"); // dirname é uma variável global do Node.js que guarda o caminho do diretório atual, ou seja, o caminho onde está o arquivo express.js
});

// A rota espera um identificador dinâmico chamado "id"
app.get("/usuarios/:id", (req, res) => {
  // Se a URL acessada for "meusite.com/usuarios/15"
  // O Node.js guarda o número 15 dentro de req.params.id
  // req e responsavel por guardar as informações da requisição e resposta, respectivamente
  const idDoUsuario = req.params.id;

  res.send(req.params); // ou res.send(req.params.id) para enviar apenas o id do usuário
  // res.send(`Você pediu para ver o perfil do usuário número: ${idDoUsuario}`); // ou req.send(req.params)
});

// essa funão deve ser a ultima
app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080/");
}); // inicia o servidor na porta 8080
