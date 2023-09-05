class KeyValue {
    constructor(public key: number, public value: string) {
    }
}

const numberKeyValue = new KeyValue(1, 'one');

// if we need to have a string as key then we need any type or we need to create a new class like StringKeyValue

class StringKeyValue {
    constructor(public key: string, public value: string) {}
}

const stringKeyValue = new StringKeyValue('1', 'one');
// now this is data redundances we are rewriting the same code different places

// to solve this we achieve this using a generics

