//type Aliases
type Uid = number | string | undefined

function logDetails(uid: number | string, item: string) {
    console.log(`A produt with ${uid} has a title as ${item}`)
}

logDetails(123, 'sapato') // pode pq "uid" é um number e "item" é uma string

logDetails("123", 'sapato') // não pode pq "uid" é uma string

//pra poder colocar mais de um tipo no parametro precisa colocar o union "|"

//para não reescrever os mesmos tipos sempre posso usar o Aliases, funciona como uma variavel de tipos
function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`)
}

type Platform = "Windows" | "Linux" | "Mac Os" | 'ios'

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('ios') //Só posso colocar os tipos que estão no Aliases que eu criei chamado Platform
