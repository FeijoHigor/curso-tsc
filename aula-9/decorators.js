//@Component
//@Selector
//@useState("asdasd")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Factory
/*function logger(prefix: string) {
    return (target) => {
        console.log(`${prefix} - ${target}`)
    }
}

@logger('Awesome')
class Foo {}*/
/*function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion('1.0.0')
class API {}

console.log(new API())
*/
//class decorator
//Property decorator
/*
function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val

        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
            }else {
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

class Movie {
    //Validação - se for menor que 5 - error
    @minLength(50)
    title: string

    constructor (t: string) {
        this.title = t
    }
}

const movie = new Movie("Interstellar")

console.log(movie.title)
*/
// Method decorator
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando ".concat(ms, "..."));
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    //esperar um tempo e aí vai rodar o método (ms)
    Greeter.prototype.greet = function () {
        console.log("Hello! ".concat(this.greeting));
    };
    __decorate([
        delay(1000)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
//parameter decorator
//acessor decorator
