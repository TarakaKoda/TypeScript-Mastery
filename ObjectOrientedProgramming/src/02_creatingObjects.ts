class Account1{
    id: number;
    owner: string;
    balance: number;

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

let account = new Account1(1, 'Tarka', 5000000);
account.balance = 0;
account.deposit(10000);

console.log(account.balance);

// remember we use type of operator for checking the type of the object
// if (typeof someObj === number) {}

// what if we check the typeof of the account object what we will get

console.log(typeof account); // we get Object
console.log(account instanceof Account) // true

// if we want to narrow down the object we need to use the instanceof keyword
// instead of typeof because if we use typeof object we always get Object as output
// this wont check the underline instance of an object
// if we use instanceof keyword we will get a boolean result.
