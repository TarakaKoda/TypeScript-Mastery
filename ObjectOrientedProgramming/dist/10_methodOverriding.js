"use strict";
class Person1 {
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
class Student1 extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking Test');
    }
}
class Teacher extends Person {
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    get fullName() {
        return `Professor ${super.firstName}`;
    }
}
