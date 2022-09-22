var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player ".concat(this.name, " is ").concat(this.age, " years old."));
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            //vai rodar uma função mas só vai retornar um valor
            //então eu posso fazer por exemplo uma verificação aqui dentro para retornar um valor especifico
            console.log('-----------GET------------');
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player ".concat(this.name, " has the char ").concat(this.nickname, " at level ").concat(this.level));
    };
    return CharAccount;
}(UserAccount));
//const higor = new UserAccount('Higor', 18)
//higor.logDetails()
var ray = new CharAccount("Raissa", 18, "anne", 80);
ray.logCharDetails();
//console.log(ray.nickname) vai dar erro porque esse elemento está privado
console.log(ray.level); //vai fazer o console mas é impossível de editar fora da classe porquê está com readonly
console.log(ray.getLevel); //não vai chamar como uma função e sim como um elemento da classe)
ray.setLevel = 20;
