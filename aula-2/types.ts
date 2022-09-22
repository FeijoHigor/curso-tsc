//boolean (true / false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string 
message = `foo ${isOpen}`

//number (int, float, hex, binary)
let total: number
total = 0xff0

//array (type[] Array[type])
let items: string[]
items = ['foo', "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple 
let title: [number, string, string, number]
title = [1, 'test', 'test', 1]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL
let coisa: any
coisa = [1]

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null / undefined
type Bla = string | undefined

//never
function error(): never {
    throw new Error("error")
}

// object 
let cart: object

cart = {
    key: 'hi'
}


//type Inference
let message2 = 'string definida'
message2 = 'se eu colocar outro tipo da erro'

window.addEventListener('click', (e) => {
    console.log(e.target)
})

