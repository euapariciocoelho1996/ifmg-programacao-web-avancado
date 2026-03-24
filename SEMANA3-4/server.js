const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// criando servidor express
const app = express();
// habilitando CORS e parsing de JSON
app.use(cors()); // cors é um middleware que permite que o servidor aceite requisições de outros domínios, ou seja, ele habilita o CORS (Cross-Origin Resource Sharing) para permitir que o frontend, que pode estar rodando em um domínio diferente, faça requisições para este backend.
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "339896",
  database: "todo_app",
});

db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar:", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

app.post("/tasks", (req, res) => {
  const { title, category } = req.body;

  const sql = "INSERT INTO tasks (title, category) VALUES (?, ?)";

  db.query(sql, [title, category], (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send("Tarefa adicionada");
  });
});

app.get("/tasks", (req, res) => {
  const category = req.query.category;

  let sql = "SELECT * FROM tasks";

  if (category) {
    sql += " WHERE category = ?";
    db.query(sql, [category], (err, results) => {
      res.json(results);
    });
  } else {
    db.query(sql, (err, results) => {
      res.json(results);
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
