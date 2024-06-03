const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const images = document.querySelectorAll('.gallery img');

// Add event listeners to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    overlayImage.src = image.src;
    overlay.style.display = 'flex';
  });
});

// Add event listener to close the overlay when clicked outside the image
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
