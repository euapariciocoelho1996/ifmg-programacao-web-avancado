// Constructor exposto
class Livro {
  constructor(nome, autor) {
    this.nome = nome;
    this.autor = autor;
  }

  descrever() {
    console.log(this.nome, this.autor);
  }
}

//const novoObj = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");

//novoObj.descrever();

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
Livro.prototype.ler = function () {
  console.log("Lendo o livro...");
};

meuLivro.ler(); // Lendo o livro...
meuLivro.descrever(); // O Senhor dos Anéis J.R.R. Tolkien

// Constructor oculto

class ContaBancaria {
  saldo = 0;

  depositar(valor) {
    this.saldo += valor;
  }

  Mostrarsaldo() {
    console.log(this.saldo);
  }
}

minhaConta = new ContaBancaria();

minhaConta.depositar(100);
minhaConta.Mostrarsaldo();

const guerreiroBase = {
  vida: 100,
  atacar() {
    console.log("O guerreiro atacou com a espada!");
  },
};

const meuPersonagem = Object.create(guerreiroBase);

// isso cria -> meuPersonagem = {}

/* meuPersonagem = {
  nome: "Arthur",        // propriedade própria
  __proto__: guerreiroBase // __proto__ é um link (ponte) que um objeto tem para outro objeto.
}

guerreiroBase = {
  vida: 100,
  atacar: function() {...},
  __proto__: Object.prototype
}

*/

// adicionando propriedade própria
meuPersonagem.nome = "Arthur";

// usando
meuPersonagem.atacar(); // vem do prototype
console.log(meuPersonagem.vida); // vem do prototype
console.log(meuPersonagem.nome); // próprio objeto
