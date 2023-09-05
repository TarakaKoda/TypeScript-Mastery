class Person2 {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    walk() {
        console.log('walking');
    }
}

class Student2 extends Person2 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    override get fullName() {
        return `Student ${super.fullName}`;
    }

    takeTest() {
        console.log('taking test');
    }
}

class Teacher2 extends Person2 {
    override get fullName() {
        return `Professor ${super.fullName}`
    }
}

class Principal extends Person2 {
    override get fullName() {
        return `Principal ${super.fullName}`
    }
}

const personFullName: Person2[] = [
    new Student2(1, 'Taraka', 'Koda'),
    new Teacher2('Srinivas', 'Koda'),
    new Principal('Naruto', 'Uzumaki')
]

for (let personFname of personFullName) {
    console.log(personFname.fullName)
}