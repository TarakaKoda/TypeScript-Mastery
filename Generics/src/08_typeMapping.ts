interface Product {
    name: string;
    price: number;
}

// read only type: we cannot change the properties of the objects
type ReadOnly<T> = {
   readonly [K in keyof T]: T[K]
}

const product: ReadOnly<Product> = {
    name: 'Cat',
    price: 12344
}

// product.name = 'BAt' // this will raise an error

// now lets see how we can create the optional properties in a objects

type Optional<T> = {
    [K in keyof T]? : T[K]
}

const newProduct1: Optional<Product> = {}
// here we can leave the same parameter because we declared the type Optional

// we can declare null also

type Null<T> = {
    [K in keyof T]: T[K] | null
}

const person2: Null<Product> = {
    name: null,
    price: null
}

// these types are pretty useful they are prebuilt in type 
// we can refer typescript utils 

