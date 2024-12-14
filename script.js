// Select the color display element
const colorDisplay = document.getElementById('colorDisplay');

// Add event listeners to all buttons
document.querySelectorAll('.color-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    // Get the color from the button's data-color attribute
    const color = button.getAttribute('data-color');
    // Change the background color and text of the display element
    colorDisplay.style.backgroundColor = color;
    colorDisplay.textContent = `You selected ${color.toUpperCase()}!`;
  });
});
