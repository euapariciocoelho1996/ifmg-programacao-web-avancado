![Status](https://img.shields.io/badge/status-em%20andamento-yellow)

# Semana 1 de Estudos: Fundamentos de Front-End (HTML & JavaScript)

Este repositório documenta os estudos e práticas de semanas focadas nos fundamentos do desenvolvimento web, abrangendo a estruturação de páginas com HTML5 e a introdução à lógica de programação e manipulação de interfaces utilizando JavaScript.

## 📌 Objetivos de Aprendizagem (Semana 1)

* Compreender a semântica e a estrutura de um documento HTML moderno.
* Entender o DOM (Document Object Model) e sua integração com o JavaScript.
* Dominar conceitos iniciais de orientação a objetos no ecossistema JavaScript.
* Aplicar estruturas de repetição modernas para manipulação de dados e elementos visuais.

---

## 📚 Tópicos Estudados

### 1. Estrutura Base do HTML5 e a Declaração `<!DOCTYPE html>`
A base de qualquer aplicação web. Foram estudadas as principais tags estruturais (`<html>`, `<head>`, `<body>`) e o uso de elementos semânticos. 

A instrução `<!DOCTYPE html>` é responsável por garantir que o navegador renderize a página em modo padrão (*standards mode*), evitando o *Quirks Mode*, que pode causar inconsistências de layout e comportamento entre navegadores.

### 2. DOM (Document Object Model)
O DOM é uma API fornecida pelo navegador que representa o documento HTML como uma árvore de objetos. Cada elemento da página é representado por objetos que implementam interfaces como `Node` e `HTMLElement`. 

Essa estrutura permite que o JavaScript acesse e modifique conteúdos, altere estilos e reaja a eventos. O DOM atua como a ponte entre o HTML estático e a interatividade dinâmica da aplicação.

### 3. O Conceito de Classes (CSS vs Programação)
Foi feita a distinção entre dois significados importantes do termo "classe":
* **Classes de Estilo (HTML/CSS):** Utilizadas para aplicar estilos e manipuladas via JavaScript com `classList` (`add`, `remove`, `toggle`), permitindo alteração dinâmica da interface.
* **Classes em JavaScript (`class`):** Estruturas introduzidas no ES6 que funcionam como uma abstração sintática sobre funções construtoras e protótipos, utilizadas para organizar e estruturar a criação de objetos.

### 4. Objetos em JavaScript
Objetos são a principal estrutura de dados da linguagem, organizados em pares chave-valor. Eles permitem agrupar propriedades (estado) e métodos (comportamento). No contexto do navegador, elementos do DOM são representados como objetos JavaScript, possibilitando sua manipulação por meio da API.

### 5. Classes vs Objetos (Instâncias)
A distinção entre classe e objeto é fundamental. A **classe** é a estrutura que define propriedades e métodos, servindo como base para criação de objetos. O **objeto** é a instância concreta que contém dados próprios e acesso aos métodos definidos pela classe.
<img width="873" height="543" alt="image" src="https://github.com/user-attachments/assets/752f6a97-5e34-4a55-b851-4179e25e8a4a" />
<img width="854" height="394" alt="image" src="https://github.com/user-attachments/assets/dcdefaa7-c309-49ff-bdce-8e27eb147a09" />

Em JavaScript, classes são implementadas como funções com um objeto de protótipo associado. Os métodos não são copiados para cada instância; em vez disso, são compartilhados via o protótipo. Cada objeto armazena seu próprio estado (dados) e mantém uma referência interna ao protótipo da classe. Além disso, é importante destacar que o modelo de objetos do JavaScript é baseado em protótipos, e não em classes puras como em linguagens tradicionais. A sintaxe de `class` é uma forma moderna de trabalhar com esse sistema.

### 6. Estrutura de Iteração `forEach`
O método `.forEach()` é utilizado para iterar sobre arrays e coleções como NodeLists, executando uma função de callback para cada elemento. Ele oferece uma sintaxe mais declarativa e legível em comparação com estruturas como o `for` tradicional. 

No entanto, é importante observar que o `forEach` não permite interrupção com `break` ou `continue` e não substitui completamente outras estruturas de repetição em todos os cenários.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* JavaScript (ES6+)

---

## 🚀 Considerações Finais

Este estudo consolidou os fundamentos essenciais do desenvolvimento front-end, com foco na estruturação de páginas, manipulação do DOM e compreensão inicial do modelo de objetos do JavaScript, criando uma base sólida para evolução em frameworks e arquiteturas mais avançadas.
