"use strict";
//boolean (true / false)
let isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
//number (int, float, hex, binary)
let total;
total = 0xff0;
//array (type[] Array[type])
let items;
items = ['foo', "bar"];
let values;
values = [1, 2, 3];
// tuple 
let title;
title = [1, 'test', 'test', 1];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL
let coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
// object 
let cart;
cart = {
    key: 'hi'
};
//type Inference
let message2 = 'string definida';
message2 = 'se eu colocar outro tipo da erro';
window.addEventListener('click', (e) => {
    console.log(e.target);
});
