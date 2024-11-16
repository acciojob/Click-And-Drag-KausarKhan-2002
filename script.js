// Your code here.
const slider = document.querySelector('.items');

let isDown = false; // Flag to check if mouse is down
let startX; // Store the initial x position of the mouse
let scrollLeft; // Store the initial scroll position of the container

slider.addEventListener('mousedown', (e) => {
  isDown = true; // Mouse is pressed
  slider.classList.add('active'); // Add active class for visual feedback
  startX = e.pageX - slider.offsetLeft; // Get initial mouse position
  scrollLeft = slider.scrollLeft; // Save initial scroll position
});

slider.addEventListener('mouseleave', () => {
  isDown = false; // Mouse is out of bounds
  slider.classList.remove('active'); // Remove active class
});

slider.addEventListener('mouseup', () => {
  isDown = false; // Mouse is released
  slider.classList.remove('active'); // Remove active class
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only execute if mouse is pressed
  e.preventDefault(); // Prevent default drag behavior
  const x = e.pageX - slider.offsetLeft; // Get current mouse position
  const walk = (x - startX) * 2; // Calculate the distance moved (2x multiplier for speed)
  slider.scrollLeft = scrollLeft - walk; // Update the scroll position
});
