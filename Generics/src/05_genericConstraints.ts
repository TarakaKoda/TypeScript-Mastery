// we can apply limit the type of values that we can pass to the generics

function echo <T> (value: T): T {
    return value;
}

// here is a generic function at takes any type of values
echo('stringType');
echo(111); 

// now we can restrict the type of the generic 

function newEcho <T extends string | number> (value: T): T {
return value;
}

newEcho('only String or number type');
newEcho(1223);
// newEcho(true) // this is not possible.

// we can also have an object type or shape of an object

function newEchoEcho <T extends {name: string, age: number}> (value: T): T {
    return value;
}

newEchoEcho({name: 'Taraka', age: 23});
// newEchoEcho({name: 'Saraka'}) // this will be result in an error

// we can use classes as a constraints for the generic type

class Person {
    constructor(public name: string) {}
}


function classEcho <T extends Person> (value: T): T {
    return value;
}

const newConstraints = classEcho(new Person('Taraka'));
// or we can use any child or derived class of that class 

class Employee extends Person {
}

const newConstraints1 = classEcho(new Employee('Srinivas'));

// we can use interfaces as a constraints for generics
interface Student {
    name: string;
    age: number;
}

function interfaceEcho <T extends Student> (value: T): T {
    return value;
}

interfaceEcho({name: 'Taraka Satya srinivasu', age: 32});


