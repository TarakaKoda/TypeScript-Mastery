// Define a class called Logger that takes the name of a file in its constructor and provides 
// a method for writing messages to that file. Don’t worry about the actual file I/O 
// operations. Just define the class with the right members. 

class Logger {
    constructor(public name: string) {
    }
 
    writingMessage(message: string): void {
        console.log(message);
    }
}

//  Given the Person class below, create a getter for getting the full name of a person.

class Person12 {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

// Create a new class called Employee that extends Person and adds a new property 
// called salary.

class Employee extends Person12 {
    constructor(public salary: number, firstName: string, lastName:string) {
        super(firstName, lastName);
    }
}

// What is the difference between private and protected members?

// this two are know as the access specifiers (public, private, protected)

// private: private methods and attribute are only can be accessed within the same class

// protected: protected methods ans attribute are not only in the same class and inherited class


// Given the data below, define an interface for representing employees: 

interface Employee1 {
    name: string;
    salary: number;
    address: {
        street: string;
        city: string;
        zipCode: number;
    }
}

let employee: Employee1 = {
    name: 'John Smith',
    salary: 50_000,
    address: {
    street: 'Flinders st',
    city: 'Melbourne',
    zipCode: 3144,
    },
}
