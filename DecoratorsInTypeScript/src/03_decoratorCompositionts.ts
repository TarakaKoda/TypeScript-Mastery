
interface ComponentOptions1 {
    selector: string;
}

interface ProfileComponent2 {
    uniqueId: number;
    options: ComponentOptions1;
    insertIntoDOM: () => void;
}

function Component2(options: ComponentOptions1) {
    return (constructor: Function) => {
        console.log('Component Decorator called')
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertIntoDOM = () => {
            console.log('Inserting into DOM');
        }
    }
}

function Pipe(constructor: Function) {
        console.log('Pipe Running')
        constructor.prototype.pipe = true;
}

// we can also apply multiple decorator to the class or a functions
@Component2({ selector: '#my-profile'})
@Pipe
class ComponentOptions1 {

}

// this will follow the a mathematical principal f(g(x))
// similarly first the inner decorator function will be called then the outer decorator function will be called

// the output will be the the Pipe Running and then Component Decorator called

