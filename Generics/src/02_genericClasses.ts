class GenericKeyValue <T, U> {
    constructor(public key: T, public value: U) {}
}

const newKeyValue = new GenericKeyValue<number, string>(1, 'one');
console.log(newKeyValue.value.split(''))

const newKeyValue1 = new GenericKeyValue('1', 'one');
// even if we did not submit the type of generic value while create a new instance of generic class instance
// the ts complier will take care of that type of value that we pass 

