// Inheritance is one of the 4 principals of object oriented programming
// this will alow us to inherit properties from one class to another 

class Person {
    constructor(public firstName: string, public lastName: string){
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    walk() {
        console.log('walking');
    }

    talk() {
        console.log('talking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string){
    super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking test');
    }
}


const student = new Student(1, 'Pavani', 'Bora');
student.fullName;
student.takeTest();
student.walk();
student.talk();
 