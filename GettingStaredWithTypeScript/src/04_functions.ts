// let see how typescript helps us to prevent common problem in the functions

function calculateTax(income: number, taxYear=2022): number {
    if (taxYear < 2022) {
        return income * 1.1;
    }
    return income * 1.2;
}

console.log(calculateTax(200000));

// as a best practice always annotate your functions and parameters and return types
// and enable these three compiler options: 
// noUnusedLocals: if there exist any variables that are declared and unused this will raise an error
// noUnusedParameters: if there exists any parameters that are unused then this will raise an error
// NoImplicitReturns: if we forget to return any value this will raise an error.