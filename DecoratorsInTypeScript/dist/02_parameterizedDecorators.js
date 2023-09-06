"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component1(options) {
    return (constructor) => {
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertIntoDOM = () => {
            console.log('Inserting into DOM');
        };
    };
}
let ProfileComponent1 = class ProfileComponent1 {
};
ProfileComponent1 = __decorate([
    Component1({ selector: '#my-profile' })
], ProfileComponent1);
const profile1 = new ProfileComponent1();
profile1.uniqueId;
profile1.insertIntoDom();
