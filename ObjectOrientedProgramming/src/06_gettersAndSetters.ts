class Account5 {
    nickname?: string;

    constructor(public readonly id: number, public readonly owner: string, private _balance: number){
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }

    private calculateTax(): number | void {
        if (this._balance <= 0) 
            throw new Error('Insufficient Balance');
        else if (this._balance <= 2000000) 
            return this._balance * 0.9;
        return this._balance * 0.7;
    }

    get balance(): number | void { // getter
        return this.calculateTax();
    }

    set balance(value: number) {
        if (value <= 0) 
            throw new Error('Please provide the valid balance value')
        this._balance = value
    }
}

const newCustomer2 = new Account5(1, 'Taraka', 100000);

newCustomer2.balance;

// getter and setter are used to get the property and set the value of the private property

