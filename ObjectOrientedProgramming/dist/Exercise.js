"use strict";
class Logger {
    constructor(name) {
        this.name = name;
    }
    writingMessage(message) {
        console.log(message);
    }
}
class Person12 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person12 {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: 'John Smith',
    salary: 50000,
    address: {
        street: 'Flinders st',
        city: 'Melbourne',
        zipCode: 3144,
    },
};
