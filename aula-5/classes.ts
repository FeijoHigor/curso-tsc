abstract class UserAccount { //o abstract não deixa a classe ser usada, só para extender em outras classes
    public name: string //public é quando o elemento pode ser mutavel e lido fora da classe
    protected age: number //protected é quando o elemento só pode ser lido e mudado por uma classe que está extendendo ou pela classe que está ele

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string //O private vai privar o parametro só para ser lido e editado dentro da classe
    /*readonly*/ level: number //esse elemento só pode ser lido dentro e fora da classe

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)

        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        //vai rodar uma função mas só vai retornar um valor
        //então eu posso fazer por exemplo uma verificação aqui dentro para retornar um valor especifico
        console.log('-----------GET------------')
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
}

//const higor = new UserAccount('Higor', 18)
//higor.logDetails()

const ray = new CharAccount("Raissa", 18, "anne", 80)
ray.logCharDetails()
//console.log(ray.nickname) vai dar erro porque esse elemento está privado
console.log(ray.level) //vai fazer o console mas é impossível de editar fora da classe porquê está com readonly

console.log(ray.getLevel) //não vai chamar como uma função e sim como um elemento da classe)
ray.setLevel = 20