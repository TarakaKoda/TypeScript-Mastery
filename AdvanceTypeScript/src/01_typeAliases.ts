// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id:1,
//     name: 'Taraka',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

// this is more complex to read this code or if we want to create a new employee object we need to repeat this shape and structure
// we will end up duplicate ourself

// we can use type aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
 } 

const employee: Employee = {
    id:1,
    name: 'Taraka',
    retire: (date: Date) => {
        return console.log(date);
    }
}

