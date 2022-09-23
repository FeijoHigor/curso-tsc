var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Assistir Dark",
    description: "Ver serie legal",
    completed: false
};
console.log(todo);
//todo.completed = true //Não quero que o objeto seja mutavel para não gerar SideEffects
//Para fazer isso coloquei o readonly
//para eu mudar o objeto vou criar uma função que crie um novo objeto
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechar jogo",
    completed: false
};
var todo4 = {
    title: "Fechar jogo",
    completed: false
};
