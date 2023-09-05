"use strict";
class Account4 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    calculateTax() {
        if (this._balance <= 0) {
            throw new Error('Insufficient Balance');
        }
        else if (this._balance >= 200000)
            return this._balance * 0.7;
        else
            return this._balance * 0.9;
    }
    getBalance() {
        return this.calculateTax();
    }
}
