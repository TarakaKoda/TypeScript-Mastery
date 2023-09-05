interface Product {
    name: string;
    price: number;
}

class Store1<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);   
    }
    // T is Product
    // keyof T => name | price
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => {
            obj[property] === value;
        })
    }
}


const newProduct = new Store1<Product>();
newProduct.add({name: 'srinu', price: 2222})
newProduct.find('name', 'srinu');
// newProduct.find('nonExistingProperty', 1);
// if we try to access the non existing property we will get an error
