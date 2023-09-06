interface ProfileComponent1 {
    uniqueId: number;
    options: number;
    insertIntoDom: () => void;
}

interface ComponentOptions {
    selector: string
}

function Component1(options: ComponentOptions) {
    return (constructor: Function) => {
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertIntoDOM = () => {
            console.log('Inserting into DOM');
        }
    }
}

@Component1({ selector: '#my-profile'})
class ProfileComponent1 {

}

const profile1 = new ProfileComponent1();
profile1.uniqueId
profile1.insertIntoDom();