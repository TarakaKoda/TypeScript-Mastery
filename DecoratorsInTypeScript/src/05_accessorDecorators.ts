function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
     descriptor.get = function() {
        const result = original?.call(this);
        // if (original !== null || original !== undefined)
        return (typeof result === 'string') ? result.toUpperCase() : result;
        // if (typeof result === 'string') {
        //     return result.toUpperCase();
        // }
        // else result   
    }
}
class Person123 {
    constructor(public firstName: string, public lastName: string) {
    }
    @Capitalize
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personNew = new Person123('Taraka', 'koda');
console.log(personNew.fullName);
