"use strict";
class GenericKeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const newKeyValue = new GenericKeyValue(1, 'one');
console.log(newKeyValue.value.split(''));
const newKeyValue1 = new GenericKeyValue('1', 'one');
