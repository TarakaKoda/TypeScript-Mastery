// nullable

function greetings(name: string | null | undefined) {
    if (name) 
    console.log(name.toLocaleLowerCase());
    else
    console.log('Hola!');
}

console.log(greetings(null));

// in javascript if we call this function we will not get any error
// but typescript we will be getting null will be take as an argument to a string parameter
// to solve this error we can use union type to add null to the type of parameter

