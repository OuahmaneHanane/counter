// Get references to the HTML elements
const plusButton = document.getElementById('plus');
const moinsButton = document.getElementById('moins');
const textElement = document.getElementById('text');

// Initialize the counter value
let counter = 0;

// Update the text display with the current counter value
function updateCounter() {
    textElement.textContent = counter;
}

// Increment the counter
function increment() {
    counter++;
    updateCounter();
}

// Decrement the counter
function decrement() {
    counter--;
    updateCounter();
}

// Add event listeners to buttons
plusButton.addEventListener('click', increment);
moinsButton.addEventListener('click', decrement);

// Initialize the display
updateCounter();
