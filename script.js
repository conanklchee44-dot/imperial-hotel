function Room(name, price, occupied=false) {
    this.name = name;
    this.price = price;
    this.occupied = occupied;
}
// init ROOMS array
const ROOMS = [];
function initRooms() {
    for (let i = 1; i <= 30; i++) { ROOMS.push(new Room('Garden View', 499)); } // 30 GARDEN VIEW rooms
    for (let i = 1; i <= 25; i++) { ROOMS.push(new Room('Sea View', 599)); } // 25 SEA VIEW rooms
    for (let i = 1; i <= 25; i++) { ROOMS.push(new Room('Executive Room', 799)); } // 25 EXECUTIVE rooms
    for (let i = 1; i <= 10; i++) { ROOMS.push(new Room('Imperial Suite', 999)); } // 10 IMPERIAL SUITE rooms
    for (let i = 1; i <= 5; i++) { ROOMS.push(new Room('Deluxe Suite', 1499)); } // 5 DELUXE SUITE rooms
    for (let i = 1; i <= 3; i++) { ROOMS.push(new Room('Presidential Suite', 1999)); } // 3 PRESIDENTIAL SUITE rooms
}
initRooms();