const BOOKING_LIST = document.getElementById('booking-list');

if (BOOKING_LIST) {
    function Room(name, price, occupied=false) {
        this.name = name;
        this.price = price;
        this.description = '';
        this.occupied = occupied;
    }

    Room.prototype = {
        displayInfo: function() {
            return `${this.name} - $${this.price} per night - ${this.occupied ? 'Occupied' : 'Available'}` 
        }
    }
    // initialize ROOMS array
    const ROOMS = [];
    const ROOM_DESCRIPTIONS = {};
    
    function setRoomDescription(roomName, description) {
        ROOM_DESCRIPTIONS[roomName] = description;
    }
    
    function initRooms() {
        createRoom(30, 'Garden View', 499); // 30 GARDEN VIEW rooms
        createRoom(25, 'Sea View', 599); // 25 SEA VIEW rooms
        createRoom(25, 'Executive Room', 799); // 25 EXECUTIVE rooms
        createRoom(10, 'Imperial Suite', 999); // 10 IMPERIAL SUITE rooms
        createRoom(5, 'Deluxe Suite', 1499); // 5 DELUXE SUITE rooms
        createRoom(3, 'Presidential Suite', 1999); // 3 PRESIDENTIAL SUITE rooms
        
        // Set descriptions after rooms are created
        setRoomDescription('Garden View', 
        'Enjoy beautiful views of our landscaped gardens from your private balcony.');
        setRoomDescription('Sea View', 
        'Wake up to stunning ocean views and the sound of waves. Perfect for a relaxing stay.');
        setRoomDescription('Executive Room', 
        'Spacious room with premium amenities and a work area, ideal for business travelers.');
        setRoomDescription('Imperial Suite', 
        'Luxurious suite with separate living area and premium services. The best of comfort.');
        setRoomDescription('Deluxe Suite', 
        'Elegant suite featuring a master bedroom, living room, and dining area.');
        setRoomDescription('Presidential Suite', 
        'The ultimate luxury experience with panoramic views and personal butler service.');
    }
    function createRoom(amount, name, price) {
        for (let i = 0; i < amount; i++) { ROOMS.push(new Room(name, price)); }
        const li = BOOKING_LIST.appendChild(document.createElement('li'));
        const button = document.createElement('button');
        button.className = 'room-btn';
        button.textContent = `${name} x ${amount}`;
        button.dataset.name = name;
        button.dataset.price = price;
        button.dataset.occupied = false;
        button.addEventListener('click', () => {
            const description = ROOM_DESCRIPTIONS[name] || '';
            window.location.href = `room-info.html?name=${encodeURIComponent(name)}&price=${price}&occupied=false&description=${encodeURIComponent(description)}`;
        });
        li.appendChild(button);
    }
    initRooms();
}
