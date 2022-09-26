"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        //vai rodar uma função mas só vai retornar um valor
        //então eu posso fazer por exemplo uma verificação aqui dentro para retornar um valor especifico
        console.log('-----------GET------------');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}
//const higor = new UserAccount('Higor', 18)
//higor.logDetails()
const ray = new CharAccount("Raissa", 18, "anne", 80);
ray.logCharDetails();
//console.log(ray.nickname) vai dar erro porque esse elemento está privado
console.log(ray.level); //vai fazer o console mas é impossível de editar fora da classe porquê está com readonly
console.log(ray.getLevel); //não vai chamar como uma função e sim como um elemento da classe)
ray.setLevel = 20;
