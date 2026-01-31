const bookingsTitle = document.getElementById('bookings-title');
const updateDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    bookingsTitle.textContent += today.toLocaleDateString(undefined, options);
}
updateDate();