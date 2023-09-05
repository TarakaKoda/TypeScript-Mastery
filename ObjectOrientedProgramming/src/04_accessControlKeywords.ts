class Account3 {
    readonly id: number; // readonly
    readonly owner: string; // readonly
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance; 
    }

    deposit(amount: number): void {
        if (amount <= 0) 
            throw new Error('Invalid Amount');
        // record a transaction
        this._balance += amount;
    }

    private calculateTax(): number {
        if (this._balance >= 200000) {
            const tax = this._balance * 0.70;
            return tax;
        }
        return this._balance * 0.90;
    }

    getBalance(): number {
        return this.calculateTax();
    }
}

// we have three access modifiers:
// public: when we declare a property in a class be default it is public means we can use that property inside and outside of the class
// private: private property are only can be accessed within the class and by convention we prefix it with an _ underscore
// protected: we will learn in the future be patient.

const newCustomer1 = new Account3(1, 'Taraka', 10000);
console.log(newCustomer1.getBalance());

