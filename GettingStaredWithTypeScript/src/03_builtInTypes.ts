let sales = 12_35_56_066;
let course = 'TypeScript';
let is_published = true; 

// as the typescript complier can automatically detect the type of the variable 
// when we initialize it we don't need to annotate it 
// if we don't assign any value to a variable it will assign it 'any' type
 
// any
let level;
level = 1;
level = 'a'
// if we use any type then we can assign any type to that variable 
// which is against the core concept of using typescript 
// so we need to try to avoid use any type as much as possible

// let see another example.
function check(document: any) {
    console.log(document)
}

// if we remove the annotation there then it will give warring that this can be any type
// if we want to solve the problem we can do a simple annotate like the above code
// or we can do a bombshell ie., ww have remove the strict: true to false in the tsconfig file.
// this is not the best practice to do.

// arrays

let numbers: number[] = [1, 2, 3];
// let numbers: number[] = [1, 2, '3']  // this will give an error
// this array is of (string | number)[] type
// what if theres a function the accepts an array of numbers only
// then this will break our code 

function numbersList(array: number[]) {
    console.log(array.forEach((n, i) => { console.log(n, i)}))
}
   
numbersList(numbers); // now see how we can catch the error while writing the code
// this is why type script is best

// tuple
// a tuple is a fixed length of array that can hold a fixed length of values

let user: [number, string] = [1, 'Taraka'];
// fir the best practice we can use tuples only for a holding a small length of values
// this can become more complex if we hold more then two types in a single tuple
// for example:
let user1: [number, string, boolean, number] = [1, 'Taraka', true, 9]
// this is confusing that what value represents what
// so the take is that we need to use tuples to hold list of less values only not more then 2

// enums
// enums is a list of related constants that we can store in a single variable

// const small = 1;
// const medium = 2;
// const large = 3;
// instead of declaring all these constants in different variables we can declare them in a single enum

const enum Size {Small = 1, Medium, Large};
const mySize: Size = Size.Small;
console.log(mySize);

// if we declare an enum without any const we get a complex code in the js (transpiled file) file
// if we use the const in-front of enum we get a simpler version of that code

