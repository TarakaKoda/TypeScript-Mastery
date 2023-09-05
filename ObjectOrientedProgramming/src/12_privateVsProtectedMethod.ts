class Person3 {
    constructor(public firstName: string, public lastName: string){
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    protected walk(): void {
        console.log('walking');
    }
}

class Student3 extends Person3 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    override get fullName(): string {
        return `Student ${super.fullName}`
    }

    takeTest(): void {
        console.log('Taking Test');
    }

    isWalking(): void {
        this.walk();
    }
}

class Teacher3 extends Person3 {
    override get fullName(): string {
        return `Professor ${super.fullName}`
    }
}

class Principal3 extends Person3 {
    override get fullName(): string {
        return `Principal ${super.fullName}`
    }
}

const newPersonsFullNames: Person3[] = [
    new Student3(1, 'Taraka', 'Koda'),
    new Teacher3('Srinivasu', 'Koda'),
    new Principal3('Naruto', 'Uzumaki')
];

for (let personFullName of newPersonsFullNames) {
    console.log(personFullName.fullName);
}

// if we use private access modifier we can access the property only in the declared class
// if we use protected we can access the property not only in the declared class but also in child/derived class
// but we cannot access outside of the classes.
