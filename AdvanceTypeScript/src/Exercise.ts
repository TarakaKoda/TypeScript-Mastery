// Given the data below, define a type alias for representing user


let user: User[] = [
    {
        name: 'Taraka',
        age: 30, 
        occupation: 'Software engineer'
    },
    {
        name: 'Srinu',
        age: 21
    }
]

type User = {
    name: string,
    age: number,
    occupation?: string
};

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}


type Pet = Fish | Bird;

let animal: Pet = {
    fly: () => {},
    swim: () => {}
}

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DaysOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

// simplify this code
 
// let user = getUser();
// console.log(user && user.address ? user.address.stree : undefined);

// console.log(user?.address?.street)

// what is the problem in this piece of code

// function message(value: unknown) {
//     console.log(value.toLocaleLowerCase())
// }   

function message(value: unknown) {
    if (typeof value === 'string') {
        console.log(value);
    }
}