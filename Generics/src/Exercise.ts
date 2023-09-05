 // convert this function into a generic function

 function echo1<T> (args: T): T {
    return args
 }

 const newString = echo1('string');
 const newNumber = echo1(1223);
 newString.split("").sort().join('') // we can use all the string methods
 newNumber // we can use all the methods of a number type

// When compiling the following piece of code, we get an error saying ‘Property name 
// does not exist on type T’. How can we solve this problem?

function printName<T extends {name: string} > (obj: T): void {
    console.log(obj.name)
}
 
// An Entity should have a unique identifier. The type of identifier, however, is dependent 
// on the use case. In some cases, the ID might be a number, in other cases, it might be a 
// string, GUID, etc. Represent the entity using a generic class.

class Entity <T> {
    constructor(public Id: T) {}
}

// Given the following interface, what does keyof User return?
interface User {
    userName: string;
    userId: number;
}

// the keyof User will return the union of userName | userId