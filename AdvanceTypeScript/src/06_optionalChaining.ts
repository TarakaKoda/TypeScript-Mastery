type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() }
}

let customer =  getCustomer(0);

// optional property access operator
console.log(customer?.birthday?.getFullYear)

// optional element access operator
// if (customer[0] !== null && customer[0] !== undefined)
// we can get the same implementation by doing this.
// customer?.[0]

// optional call
let log: any = null;

log?.('a');

 
