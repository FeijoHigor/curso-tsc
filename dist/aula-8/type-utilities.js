"use strict";
const todo = {
    title: "Assistir Dark",
    description: "Ver serie legal",
    completed: false
};
console.log(todo);
//todo.completed = true //Não quero que o objeto seja mutavel para não gerar SideEffects
//Para fazer isso coloquei o readonly
//para eu mudar o objeto vou criar uma função que crie um novo objeto
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Fechar jogo",
    completed: false
};
const todo4 = {
    title: "Fechar jogo",
    completed: false
};
