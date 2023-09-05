// there are multiple ways to extend the generic class

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _object: T[] = []

    add(obj: T): void {
        this._object.push(obj);
    }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {
    }
}

// let store = new CompressibleStore<Product>();
// // store.add()
// store.compress();

// Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string) {
        return this._object.find(obj => {
            obj.name === name;
        })
    }
}

// 

class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        if (!category) return [] // this is just a false implementation
        else {
            return []
        }
    }
}