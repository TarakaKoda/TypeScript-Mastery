class Account2 {
    readonly id: number; // readonly
    readonly owner: string; // readonly
    balance: number;
    nickname?: string; // optional

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) 
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}

const newCustomer = new Account2(1, 'Taraka', 10000);

newCustomer.balance = 0;
newCustomer.deposit(100000);
console.log(newCustomer);

// we can specify a property to be an readonly property by prefix it with readOnly keyword
// similarly we can make an property optional by suffix it with ?
