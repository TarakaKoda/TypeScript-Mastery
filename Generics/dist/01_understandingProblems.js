"use strict";
class KeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const numberKeyValue = new KeyValue(1, 'one');
class StringKeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const stringKeyValue = new StringKeyValue('1', 'one');
