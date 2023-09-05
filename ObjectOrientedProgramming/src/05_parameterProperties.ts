class Account4 {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public readonly owner: string, 
        private _balance: number) {
        }

    deposit(amount: number): void {
        if (amount <= 0) 
            throw new Error('Invalid Amount');
        this._balance += amount;
    }   

    private calculateTax(): number | void {
        if (this._balance <= 0) {
            throw new Error('Insufficient Balance');
        }
        else if (this._balance >= 200000) 
            return this._balance * 0.7;
        else 
            return this._balance * 0.9;
    }

    getBalance(): number |void {
        return this.calculateTax()
    }
}

// this code is more repeatable in the constructor property we can reformat this code and 
// initialize the access modifiers and readonly properties in the constructor only.
// this tells the compiler to initialize the code in one go
// the compiler will take care the underline implementation of the code

