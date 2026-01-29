const BOOKING_LIST = document.getElementById('booking-list');
function Room(name, price, occupied=false) {
    this.name = name;
    this.price = price;
    this.occupied = occupied;
}

Room.prototype = {
    displayInfo: () => `${this.name} - $${this.price} per night - ${this.occupied ? 'Occupied' : 'Available'}`
}
// init ROOMS array
const ROOMS = [];
function initRooms() {
    createRoom(30, 'Garden View', 499); // 30 GARDEN VIEW rooms
    createRoom(25, 'Sea View', 599); // 25 SEA VIEW rooms
    createRoom(25, 'Executive Room', 799); // 25 EXECUTIVE rooms
    createRoom(10, 'Imperial Suite', 999); // 10 IMPERIAL SUITE rooms
    createRoom(5, 'Deluxe Suite', 1499); // 5 DELUXE SUITE rooms
    createRoom(3, 'Presidential Suite', 1999); // 3 PRESIDENTIAL SUITE rooms
}
function createRoom(amount, name, price) {
    for (let i = 0; i < amount; i++) { ROOMS.push(new Room(name, price)); }
    BOOKING_LIST.appendChild(document.createElement('li')).innerText = `${name} x ${amount}`;
}
initRooms();
