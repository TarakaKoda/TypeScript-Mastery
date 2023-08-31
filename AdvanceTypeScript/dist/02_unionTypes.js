"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return 2.2 * weight;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
