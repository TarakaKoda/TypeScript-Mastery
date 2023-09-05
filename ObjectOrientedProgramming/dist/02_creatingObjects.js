"use strict";
class Account1 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}
let account = new Account1(1, 'Tarka', 5000000);
account.balance = 0;
account.deposit(10000);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
