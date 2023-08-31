// while working with null and undefined value we need to fall back to default value 

let speed: null | number = null;

let raid = {
    // falsy value (null, undefined,'', 0) 
    // nullish coalescing operator
    speed: speed ?? 20
}
 // we use the nullish coalescing operator is used for creating checking if the value is null or not if not the number will be assigned
 // we can have the combination with any type.

console.log(raid.speed)