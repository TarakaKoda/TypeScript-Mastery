// objects 
let employee: {
    id: number,
    name: string,
    retire: (date: Date) => void 
    } = {
    id: 1,
    name: 'Taraa',
    retire: (date:Date) => {
        console.log(date)
    }
};
// employee.name = 'Takara';
// we know that in javascript the adding a now property to an object is possible an valid
// in typescript its not valid syntax
// we need to explicit the name and type of property in the object
