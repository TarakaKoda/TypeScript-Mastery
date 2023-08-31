// in the last example we use union types which can have one or many types
// in the same way we have anther type called intersection type where a single object can be many types at the same type

type Draggable = {
    drag: () => void,
} 

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// we can use intersection to combine the types and create a new type

