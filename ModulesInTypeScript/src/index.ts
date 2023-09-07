// import { Circle, Square } from  "./shapes"
import * as Shapes from "./shapes"
import Store, { Format }from "./storage";

const newCircle = new Shapes.Circle(3, 'Red');
console.log(newCircle);

const newSquare = new Shapes.Square(4, 'Green');
console.log(newSquare);

const newStore =  new Store();
console.log(newStore);

const newFormat =  Format.Compress
console.log(newFormat);