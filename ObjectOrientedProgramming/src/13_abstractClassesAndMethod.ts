// abstract classes and abstract method are used to defined a blueprint for other classes

abstract class Shape {   
    constructor(public color: string) {}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string){
        super(color)
    }

    override render(): string {
        return `Radius: ${this.radius} Color: ${this.color}`;
    }
}


class Rectangle extends Shape {
    constructor(public length: number, public breadth: number, color: string) {
        super(color)
    }

    override render(): string {
        return `Length: ${this.length} Breadth: ${this.breadth} Color: ${this.color}`
    }
}

const circle = new Circle(3, 'Red');
const rectangle = new Rectangle(2, 5, 'Green');

// const shape = new Shape('pink'); as we made the Shape class abstract we cannot create a new instance of that class

