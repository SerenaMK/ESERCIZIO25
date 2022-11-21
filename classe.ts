// SON ACCOUNT

class SonAccount {
    // Con quanti soldi parto
    balanceInit: number;

    constructor(_balanceInit: number) {
        this.balanceInit = _balanceInit;
    }

    // Deposita quantità
    deposit(num: number): number {
        this.balanceInit = this.balanceInit + num;
        return num;
    }
    // Deposita 100
    depositFixed(): number {
        this.deposit(100);
        return 100;
    }

    // Ritira quantità
    withdraw(num: number): number {
        this.balanceInit = this.balanceInit - num;
        return num;
    }
    // Ritira 100
    withdrawFixed(): number {
        this.withdraw(100);
        return 100;
    }
}

// CONSOLE LOGS
let son = new SonAccount(0);

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
class MotherAccount extends SonAccount {
    constructor(_balanceInit: number) {
        super(_balanceInit);
    }

    // Deposita quantità    
    deposit(num: number): number {
        this.balanceInit = this.balanceInit + this.getInterest(num);
        return this.getInterest(num);
    }
    // Deposita 100
    depositFixed(): number {
        this.deposit(100);
        return this.getInterest(100);
    }

    // Interesse del 10% di number
    interest(number: number): number {
        return (10 / 100) * number;
    }
    getInterest(num: number): number {
        return num - this.interest(num);
    }
}

// CONSOLE LOGS
let mother = new MotherAccount(0);

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