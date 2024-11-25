import React from "react";
import Header from "./Header/Header"
import TodoList from "./TodoList/TodoList"
// import { Router } from "./routing";

//utilizar esse mockup como exemplo

const db = [
  { "id": 1, "title": "Academia", "description": "Ir para academia fazer exercicios", "completed": true },
  { "id": 2, "title": "Limpar a dispensa", "description": "Limpar a dispensa, de dentro pra fora", "completed": false },
  { "id": 3, "title": "Banho na bisteka", "description": "Levar a bisteka ao pet shop", "completed": false },
  { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
  { "id": 5, "title": "trabalhar", "description": "Chegar ao escritorio antes das 08:00", "completed": true },
  { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
  { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
  { "id": 8, "title": "Ler um livro", "description": "tirar um tempo para relaxar e ler um livro", "completed": true },
  { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
  { "id": 10, "title": "Mercado", "description": "Fazer algumas compras no mercado", "completed": true }
]

function App() {
  return (
    <div className="App" >
      {/* <Router /> */}
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
