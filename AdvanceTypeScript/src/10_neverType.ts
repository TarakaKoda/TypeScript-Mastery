// never type is used to defined that never return/ occur

function infiniteLoop(): never {
    while (true) {}
}

infiniteLoop();
// console.log('this code cannot be reached');
// this above cade cannot be reached

// lets see another example

// function checkMessage(message: string): never {
//     throw new Error('this message is cannot be display')
// }

// checkMessage('hello');
// console.log('this code also cannot be reached');

// this function always through error so next line will never be executed