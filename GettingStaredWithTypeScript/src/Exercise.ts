// for each of these values, what type the typescript complier infer?
let a: number = 100;
let b: string = 'coffee';
let c: boolean[] = [true, false, false];
let d: {
    age: any
}= {age: 20};
let e: number[]= [3];
let f: any;
let g:any[] = [];


// function numbers1(a:number, b: number): number {

// }
// rewrite the code and convert it into a clean code.


function numbers1(a: number, b: number): number {
    return a + b;
}
