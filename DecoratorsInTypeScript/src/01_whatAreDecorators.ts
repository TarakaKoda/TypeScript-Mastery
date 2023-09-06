// a decorator is just a function that gets called by the javascript runtime 
// the decorators can be used to add additional functionalities to the existing function


// class decorator
function Component(constructor: Function) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
        console.log('INserting the component in the DOM');
    }
}

@Component
class ProfileComponent {

}
