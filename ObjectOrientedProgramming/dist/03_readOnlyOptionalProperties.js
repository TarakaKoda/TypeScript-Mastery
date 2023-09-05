"use strict";
class Account2 {
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
const newCustomer = new Account2(1, 'Taraka', 10000);
newCustomer.balance = 0;
newCustomer.deposit(100000);
console.log(newCustomer);
