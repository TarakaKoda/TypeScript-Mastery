"use strict";
class Store {
    constructor() {
        this._object = [];
    }
    add(obj) {
        this._object.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() {
    }
}
class SearchableStore extends Store {
    find(name) {
        return this._object.find(obj => {
            obj.name === name;
        });
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (!category)
            return [];
        else {
            return [];
        }
    }
}
