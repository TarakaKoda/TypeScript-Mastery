// Create a decorator for adding a sauce to Pizza instances:

interface Pizza {
    sauce: string;
}

function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce
    }
 }

@Sauce('pesto')
class Pizza {}


const newPizza = new Pizza();
newPizza.sauce