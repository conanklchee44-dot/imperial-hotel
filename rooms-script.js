const ROOMS_CARDS_CONTAINER = document.getElementById('rooms-cards-container');

if (ROOMS_CARDS_CONTAINER) {
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
        
        createRoom(30, 'Garden View', 499); // 30 GARDEN VIEW rooms
        createRoom(25, 'Sea View', 599); // 25 SEA VIEW rooms
        createRoom(25, 'Executive Room', 799); // 25 EXECUTIVE rooms
        createRoom(10, 'Imperial Suite', 999); // 10 IMPERIAL SUITE rooms
        createRoom(5, 'Deluxe Suite', 1499); // 5 DELUXE SUITE rooms
        createRoom(3, 'Presidential Suite', 1999); // 3 PRESIDENTIAL SUITE rooms
    }
    function createRoom(amount, name, price) {
        const description = ROOM_DESCRIPTIONS[name] || '';
        
        const card = document.createElement('div');
        card.className = 'room-card';
        
        const status = `${amount} rooms available`;
        const preview = description.substring(0, 60) + '...';
        
        card.innerHTML = `
            <h3 class="card-title">${name}</h3>
            <p class="card-hours">$${price} per night</p>
            <p class="card-location">${status}</p>
            <p class="card-preview">${preview}</p>
            <button class="card-more-btn">more >></button>
        `;
        
        const moreBtn = card.querySelector('.card-more-btn');
        moreBtn.addEventListener('click', () => {
            const imageParam = ''; // add image if needed in future
            window.location.href = `facility-info.html?name=${encodeURIComponent(name)}&hours=${encodeURIComponent('$' + price + ' per night')}&location=${encodeURIComponent(status)}&description=${encodeURIComponent(description)}${imageParam}`;
        });
        
        ROOMS_CARDS_CONTAINER.appendChild(card);
    }
    initRooms();
}
