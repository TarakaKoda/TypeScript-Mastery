"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('walking');
    }
}
class Student2 extends Person2 {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return `Student ${super.fullName}`;
    }
    takeTest() {
        console.log('taking test');
    }
}
class Teacher2 extends Person2 {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal extends Person2 {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
const personFullName = [
    new Student2(1, 'Taraka', 'Koda'),
    new Teacher2('Srinivas', 'Koda'),
    new Principal('Naruto', 'Uzumaki')
];
for (let personFname of personFullName) {
    console.log(personFname.fullName);
}
