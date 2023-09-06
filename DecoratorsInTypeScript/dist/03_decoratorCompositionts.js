"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component2(options) {
    return (constructor) => {
        console.log('Component Decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertIntoDOM = () => {
            console.log('Inserting into DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe Running');
    constructor.prototype.pipe = true;
}
let ComponentOptions1 = class ComponentOptions1 {
};
ComponentOptions1 = __decorate([
    Component2({ selector: '#my-profile' }),
    Pipe
], ComponentOptions1);
