const bookingsTitle = document.getElementById('bookings-title');
const calendarDays = document.getElementById('calendar-days');
const calendarMonthYear = document.getElementById('calendar-month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const checkinDateEl = document.getElementById('checkin-date');
const checkoutDateEl = document.getElementById('checkout-date');
const nightsCountEl = document.getElementById('nights-count');
const confirmBookingBtn = document.getElementById('confirm-booking-btn');

if (calendarDays) {
    let currentDate = new Date();
    let selectedCheckin = null;
    let selectedCheckout = null;

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        calendarMonthYear.textContent = `${monthNames[month]} ${year}`;
        
        calendarDays.innerHTML = '';
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarDays.appendChild(emptyDay);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = day;
            
            const cellDate = new Date(year, month, day);
            cellDate.setHours(0, 0, 0, 0);
            if (cellDate < today) dayEl.classList.add('disabled');
            else dayEl.addEventListener('click', () => selectDate(cellDate, dayEl));
            
            if (selectedCheckin && cellDate.getTime() === selectedCheckin.getTime()) dayEl.classList.add('selected', 'checkin');
            if (selectedCheckout && cellDate.getTime() === selectedCheckout.getTime()) dayEl.classList.add('selected', 'checkout');
            
            if (selectedCheckin && selectedCheckout && 
                cellDate > selectedCheckin && cellDate < selectedCheckout) dayEl.classList.add('in-range');
            if (cellDate.getTime() === today.getTime()) dayEl.classList.add('today');
            
            calendarDays.appendChild(dayEl);
        }
    }

    function selectDate(date, element) {
        if (!selectedCheckin || (selectedCheckin && selectedCheckout)) {
            selectedCheckin = date;
            selectedCheckout = null;
            checkinDateEl.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            checkoutDateEl.textContent = 'Select a date';
            nightsCountEl.textContent = '0';
            confirmBookingBtn.disabled = true;
        } else if (date > selectedCheckin) {
            selectedCheckout = date;
            checkoutDateEl.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            const nights = Math.ceil((selectedCheckout - selectedCheckin) / (1000 * 60 * 60 * 24));
            nightsCountEl.textContent = nights;
            confirmBookingBtn.disabled = false;
        } else {
            // Reset if selected date is before checkin
            selectedCheckin = date;
            selectedCheckout = null;
            checkinDateEl.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            checkoutDateEl.textContent = 'Select a date';
            nightsCountEl.textContent = '0';
            confirmBookingBtn.disabled = true;
        }
        renderCalendar(currentDate);
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    confirmBookingBtn.addEventListener('click', () => {
        if (selectedCheckin && selectedCheckout) {
            alert(`Booking confirmed!\nCheck-in: ${selectedCheckin.toLocaleDateString()}\nCheck-out: ${selectedCheckout.toLocaleDateString()}`);
        }
    });

    renderCalendar(currentDate);
}