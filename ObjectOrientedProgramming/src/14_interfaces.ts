// abstract class Calender {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void;

// }

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalender extends Calender {
    sync(): void;
}

class GoogleCalender implements CloudCalender {
    constructor(public name: string) {}
    sync(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}
