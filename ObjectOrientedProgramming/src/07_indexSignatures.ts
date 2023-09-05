class SeatAssignment {
    [seatNumber: string]: number;
}

const seat = new SeatAssignment();
seat.A1 = 24;
seat.A2 = 25;

// we can use the index signature to add properties dynamically into an object in typescript
// just like the classic javascript

