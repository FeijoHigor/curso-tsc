type Todo = {
    title: string
    description: string
    completed: boolean
}

const todo: Readonly<Todo> = {
    title: "Assistir Dark",
    description: "Ver serie legal",
    completed: false
}

console.log(todo)

//todo.completed = true //Não quero que o objeto seja mutavel para não gerar SideEffects
//Para fazer isso coloquei o readonly

//para eu mudar o objeto vou criar uma função que crie um novo objeto
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { //esse partial todo vai fazer que os parametro vai ser do tipo todo mas não vai ser obrigatório todos os campos
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)


//Pick vai pegar algumas propriedades que você selecionar

type TodoPreview = Pick<Todo, "title" | 'completed'>

const todo3: TodoPreview = {
    title: "Fechar jogo",
    completed: false
}

// Omit vai tirar algumas propriedades que você selecionar

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar jogo",
    completed: false
}

