function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person('Tarak', 23);
console.log(p.name);

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const newP = new Person1('Tarka', 34);
console.log(newP.name, newP.age);

const newP2 = new Person1('Srinivas', 23);
console.log(newP2);

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


class Shape1 {
    constructor(color) {
        this.color = color;
    }
}
class Circle1 extends Shape1 {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * (this.radius * this.radius);
    }
}
const circle1 = new Circle1(3, 'red');
console.log(circle1.area());

const input = 'aabbbccccaaabbccc';
let currentChar = input[0]
let result = ''
let countAlphabet = 1

for (let i= 1; i<input.length; i++) {
    if (input[i] === currentChar){
        countAlphabet += 1;
    }
    else {
        result += currentChar + String(countAlphabet);
        currentChar = input[i];
        countAlphabet = 1;
    }
}
result += currentChar + String(countAlphabet);


console.log(result);

const input1 = 'this is my first program'
let result1 = '';

for (let i=0; i< input1.length; i++) {
    if (input1[i] === ' ') {
        result1 = " " + result1;
    }

    else {
        result1 += input1[i];
    }
}
console.log(result1);

let list  = ['bat', 'rat', 'xyz', 'tar', 'tab']

anagramString = {}

list.forEach(string => {
    sorted_sting = string.split('').sort().join('')

    if (! anagramString[sorted_sting]) {
        anagramString[sorted_sting] = [string];
    }
    else {
        anagramString[sorted_sting].push(string);
    }
})

console.log(Object.values(anagramString))


