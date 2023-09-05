"use strict";
class Account3 {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    calculateTax() {
        if (this._balance >= 200000) {
            const tax = this._balance * 0.70;
            return tax;
        }
        return this._balance * 0.90;
    }
    getBalance() {
        return this.calculateTax();
    }
}
const newCustomer1 = new Account3(1, 'Taraka', 10000);
console.log(newCustomer1.getBalance());
