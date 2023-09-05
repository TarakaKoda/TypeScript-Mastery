"use strict";
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(1111));
function newWarpInArray(value) {
    return [value];
}
newWarpInArray(12223);
newWarpInArray('new string');
class ArrayUtils {
    static warpInArray(value) {
        return [value];
    }
}
console.log(ArrayUtils.warpInArray('Apple'));
console.log(ArrayUtils.warpInArray(11));
