// method overriding is a concept of overriding the parent method in the child method

class Person1 {
    constructor(public firstName: string, public lastName: string){
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    walk() {
        console.log('walking');
    }
}

class Student1 extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking Test');
    }
}

class Teacher extends Person {
    constructor(public teacherId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    override get fullName() {
        return `Professor ${super.firstName}`
    }
}

// overriding is know as changing the implementation of the method
