"use strict";
class Store1 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => {
            obj[property] === value;
        });
    }
}
const newProduct = new Store1();
newProduct.add({ name: 'srinu', price: 2222 });
newProduct.find('name', 'srinu');
