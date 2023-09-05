"use strict";
class Account5 {
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
        if (this._balance <= 0)
            throw new Error('Insufficient Balance');
        else if (this._balance <= 2000000)
            return this._balance * 0.9;
        return this._balance * 0.7;
    }
    get balance() {
        return this.calculateTax();
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Please provide the valid balance value');
        this._balance = value;
    }
}
const newCustomer2 = new Account5(1, 'Taraka', 100000);
newCustomer2.balance;
