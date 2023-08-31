 // using the unknown type instead of any type will give us more type checking while we write the code 
 // because we need to narrow down the types of that object in order to avoid the error

 function render(document: unknown) {
    if (typeof document === 'string') {
        console.log(document) // if we use the dot operator we can get all the string methods
    }
    else if (typeof document === 'number') {
        console.log(document) // this will give us all the number method as we narrow down the type of that string
    }
    // document.move(); this will called as an error because we annotate the document with unknown
 }

 // by using the unknown type the compiler make us narrow down the type of the parameter
 


 