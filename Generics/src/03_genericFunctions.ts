// similarly we can use generic function 

function wrapInArray(value: number) {
    return [value];
}

console.log(wrapInArray(1111))
// console.log(wrapInArray('array'))
// we cannot pass the string value for the following code 
// we can only pass the a number type

// to solve this error we can a generic function and make it reusable

function newWarpInArray <T> (value: T) {
    return [value]
}

newWarpInArray(12223);
newWarpInArray('new string');


//  we can so the same thing inside of a class method
class ArrayUtils {
    static warpInArray <T> (value: T) {
        return [value];
    }
}

// or we can just make it a static function to make it access more easily

console.log(ArrayUtils.warpInArray('Apple'));
console.log(ArrayUtils.warpInArray(11));

// now we can reuse this functions 
