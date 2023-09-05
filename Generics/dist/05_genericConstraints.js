"use strict";
function echo(value) {
    return value;
}
echo('stringType');
echo(111);
function newEcho(value) {
    return value;
}
newEcho('only String or number type');
newEcho(1223);
function newEchoEcho(value) {
    return value;
}
newEchoEcho({ name: 'Taraka', age: 23 });
class Person {
    constructor(name) {
        this.name = name;
    }
}
function classEcho(value) {
    return value;
}
const newConstraints = classEcho(new Person('Taraka'));
class Employee extends Person {
}
const newConstraints1 = classEcho(new Employee('Srinivas'));
function interfaceEcho(value) {
    return value;
}
interfaceEcho({ name: 'Taraka Satya srinivasu', age: 32 });
