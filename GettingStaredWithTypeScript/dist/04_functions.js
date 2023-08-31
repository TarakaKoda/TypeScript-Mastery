"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.1;
    }
    return income * 1.2;
}
console.log(calculateTax(200000));
//# sourceMappingURL=04_functions.js.map