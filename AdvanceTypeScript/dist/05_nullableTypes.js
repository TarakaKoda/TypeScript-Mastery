"use strict";
function greetings(name) {
    if (name)
        console.log(name.toLocaleLowerCase());
    else
        console.log('Hola!');
}
console.log(greetings(null));
