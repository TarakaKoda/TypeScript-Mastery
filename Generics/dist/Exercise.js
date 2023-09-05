"use strict";
function echo1(args) {
    return args;
}
const newString = echo1('string');
const newNumber = echo1(1223);
newString.split("").sort().join('');
newNumber;
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(Id) {
        this.Id = Id;
    }
}
