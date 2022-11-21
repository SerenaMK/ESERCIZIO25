// SON ACCOUNT
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
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    // Deposita quantità
    SonAccount.prototype.deposit = function (num) {
        this.balanceInit = this.balanceInit + num;
        return num;
    };
    // Deposita 100
    SonAccount.prototype.depositFixed = function () {
        this.deposit(100);
        return 100;
    };
    // Ritira quantità
    SonAccount.prototype.withdraw = function (num) {
        this.balanceInit = this.balanceInit - num;
        return num;
    };
    // Ritira 100
    SonAccount.prototype.withdrawFixed = function () {
        this.withdraw(100);
        return 100;
    };
    return SonAccount;
}());
// CONSOLE LOGS
var son = new SonAccount(0);
console.log("---SON ACCOUNT MOVEMENTS---");
console.log("Balance: " + son.balanceInit + " €");
console.log("> Depositing: " + son.deposit(50) + " €");
console.log("Balance: " + son.balanceInit + " €");
console.log("> Depositing: " + son.depositFixed() + " €");
console.log("Balance: " + son.balanceInit + " €");
console.log("> Withdrawing: " + son.withdrawFixed() + " €");
console.log("Balance: " + son.balanceInit + " €");
console.log("> Withdrawing: " + son.withdraw(20) + " €");
console.log("Balance: " + son.balanceInit + " €");
console.log("---------------------------");
//////////////////////////////////////////////////
// MOTHER ACCOUNT
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit) {
        return _super.call(this, _balanceInit) || this;
    }
    // Deposita quantità    
    MotherAccount.prototype.deposit = function (num) {
        this.balanceInit = this.balanceInit + this.getInterest(num);
        return this.getInterest(num);
    };
    // Deposita 100
    MotherAccount.prototype.depositFixed = function () {
        this.deposit(100);
        return this.getInterest(100);
    };
    // Interesse del 10% di number
    MotherAccount.prototype.interest = function (number) {
        return (10 / 100) * number;
    };
    MotherAccount.prototype.getInterest = function (num) {
        return num - this.interest(num);
    };
    return MotherAccount;
}(SonAccount));
// CONSOLE LOGS
var mother = new MotherAccount(0);
console.log("");
console.log("---MOTHER ACCOUNT MOVEMENTS---");
console.log("Balance: " + mother.balanceInit + " €");
console.log("> Depositing: " + mother.deposit(50) + " €");
console.log("Balance: " + mother.balanceInit + " €");
console.log("> Depositing: " + mother.depositFixed() + " €");
console.log("Balance: " + mother.balanceInit + " €");
console.log("> Withdrawing: " + mother.withdrawFixed() + " €");
console.log("Balance: " + mother.balanceInit + " €");
console.log("> Withdrawing: " + mother.withdraw(20) + " €");
console.log("Balance: " + mother.balanceInit + " €");
console.log("---------------------------");
