"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        return `Radius: ${this.radius} Color: ${this.color}`;
    }
}
class Rectangle extends Shape {
    constructor(length, breadth, color) {
        super(color);
        this.length = length;
        this.breadth = breadth;
    }
    render() {
        return `Length: ${this.length} Breadth: ${this.breadth} Color: ${this.color}`;
    }
}
const circle = new Circle(3, 'Red');
const rectangle = new Rectangle(2, 5, 'Green');
