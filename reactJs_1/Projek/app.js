// Importing function from the counter module
const display = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let counter = 0;

// Function to update the display
const updateDisplay = () => {
  display.textContent = counter;
};

// Event listener for increment button
incrementButton.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

// Event listener for decrement button
decrementButton.addEventListener("click", () => {
  counter--;
  updateDisplay();
});
