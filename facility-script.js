const CARDS_CONTAINER = document.getElementById('cards-container');
const TAB_BUTTONS = document.querySelectorAll('.tab-btn');

if (CARDS_CONTAINER) {
    const FACILITIES_DATA = {
        facilities: [
            {
                name: 'Fitness Center',
                hours: 'Open 24/7',
                location: 'Ground Floor',
                description: 'State-of-the-art gym equipment with personal trainers available. Features cardio machines, free weights, and exercise classes.'
            },
            {
                name: 'Swimming Pool',
                hours: '6:00 AM - 10:00 PM',
                location: 'Rooftop',
                description: 'Olympic-sized heated pool with stunning city views. Pool bar and lounging area available.'
            },
            {
                name: 'Spa & Wellness',
                hours: '9:00 AM - 9:00 PM',
                location: '2nd Floor',
                description: 'Full-service spa offering massages, facials, body treatments, and wellness therapies.'
            },
            {
                name: 'Business Center',
                hours: 'Open 24/7',
                location: 'Lobby Level',
                description: 'Complete business services including printing, copying, conference rooms, and high-speed internet.'
            }
        ],
        services: [
            {
                name: 'Concierge Service',
                hours: 'Open 24/7',
                location: 'Main Lobby',
                description: 'Professional concierge team to assist with reservations, tickets, transportation, and local recommendations.'
            },
            {
                name: 'Room Service',
                hours: 'Open 24/7',
                location: 'In-Room',
                description: 'Extensive menu available around the clock. Order from the comfort of your room.'
            },
            {
                name: 'Valet Parking',
                hours: 'Open 24/7',
                location: 'Main Entrance',
                description: 'Professional valet service for all guests. Secure covered parking available.'
            },
            {
                name: 'Laundry & Dry Cleaning',
                hours: '7:00 AM - 9:00 PM',
                location: 'Available via Room Service',
                description: 'Same-day laundry and dry cleaning services. Express service available.'
            }
        ],
        dining: [
            {
                name: 'Imperial Restaurant',
                hours: '6:30 AM - 11:00 PM',
                location: 'Ground Floor',
                description: 'Fine dining experience featuring international cuisine and local specialties. Breakfast buffet daily.'
            },
            {
                name: 'Sky Lounge Bar',
                hours: '5:00 PM - 2:00 AM',
                location: 'Rooftop',
                description: 'Signature cocktails and premium spirits with panoramic views. Live music on weekends.'
            },
            {
                name: 'Café Imperial',
                hours: '7:00 AM - 6:00 PM',
                location: 'Lobby Level',
                description: 'Casual dining and coffee shop. Fresh pastries, sandwiches, and specialty coffees.'
            }
        ],
        recreation: [
            {
                name: 'Tennis Courts',
                hours: '7:00 AM - 8:00 PM',
                location: 'Recreation Area',
                description: 'Two professional tennis courts. Equipment rental and lessons available.'
            },
            {
                name: 'Golf Simulator',
                hours: '8:00 AM - 10:00 PM',
                location: 'Recreation Area',
                description: 'Virtual golf experience with courses from around the world. Professional instruction available.'
            },
            {
                name: 'Kids Club',
                hours: '9:00 AM - 7:00 PM',
                location: '1st Floor',
                description: 'Supervised activities and entertainment for children ages 4-12. Games, crafts, and more.'
            }
        ]
    };

    function createCard(facility) {
        const card = document.createElement('div');
        card.className = 'facility-card';
        
        card.innerHTML = `
            <h3 class="card-title">${facility.name}</h3>
            <p class="card-hours">${facility.hours}</p>
            <p class="card-location">${facility.location}</p>
            <p class="card-preview">${facility.description.substring(0, 80)}...</p>
            <button class="card-more-btn">more >></button>
        `;
        
        const moreBtn = card.querySelector('.card-more-btn');
        moreBtn.addEventListener('click', () => {
            window.location.href = `facility-info.html?name=${encodeURIComponent(facility.name)}&hours=${encodeURIComponent(facility.hours)}&location=${encodeURIComponent(facility.location)}&description=${encodeURIComponent(facility.description)}`;
        });
        
        return card;
    }

    function displayCards(category) {
        CARDS_CONTAINER.innerHTML = '';
        const facilities = FACILITIES_DATA[category];
        
        facilities.forEach((facility, index) => {
            const card = createCard(facility);
            card.style.animationDelay = `${index * 0.1}s`;
            CARDS_CONTAINER.appendChild(card);
        });
    }

    TAB_BUTTONS.forEach(btn => {
        btn.addEventListener('click', () => {
            TAB_BUTTONS.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayCards(btn.dataset.tab);
        });
    });

    displayCards('facilities');
}
