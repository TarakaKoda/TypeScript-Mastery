class Ride {
    private static _activeRides = 0; // this will make this property a static property 

    start() {
        Ride._activeRides++;
    }

    stop() {
        Ride._activeRides--;
    }

    get activeRide(): number {
        return Ride._activeRides;
    }

}

let ride1 = new Ride();
ride1.start();

let Ride2 = new Ride();
Ride2.start();

console.log(ride1.activeRide);

// when we make a property a static it will belongs to the class instead of instance of the class 
// this will have a single instance in the memory.
