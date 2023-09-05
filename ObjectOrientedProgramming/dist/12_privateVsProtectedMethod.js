"use strict";
class Person3 {
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
class Student3 extends Person3 {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return `Student ${super.fullName}`;
    }
    takeTest() {
        console.log('Taking Test');
    }
    isWalking() {
        this.walk();
    }
}
class Teacher3 extends Person3 {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal3 extends Person3 {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
const newPersonsFullNames = [
    new Student3(1, 'Taraka', 'Koda'),
    new Teacher3('Srinivasu', 'Koda'),
    new Principal3('Naruto', 'Uzumaki')
];
for (let personFullName of newPersonsFullNames) {
    console.log(personFullName.fullName);
}
