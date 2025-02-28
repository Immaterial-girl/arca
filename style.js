const container = document.getElementById("container");

// Helper function to get all image files in the /src directory (static for now, assuming you add images manually)
const images = [
  'src/image1.jpg',
  'src/image2.jpg',
  'src/image3.jpg' // Add more images if needed
];

// Create bouncing images
images.forEach(imageSrc => {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.left = `${Math.random() * window.innerWidth}px`;
  img.style.top = `${Math.random() * window.innerHeight}px`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  container.appendChild(img);

  // Set up bouncing movement
  let dx = Math.random() * 4 + 2; // Random horizontal speed
  let dy = Math.random() * 4 + 2; // Random vertical speed

  function moveImage() {
    const rect = img.getBoundingClientRect();
    
    // If the image hits the edge, reverse its direction
    if (rect.top + rect.height > window.innerHeight || rect.top < 0) {
      dy = -dy;
    }

    if (rect.left + rect.width > window.innerWidth || rect.left < 0) {
      dx = -dx;
    }

    img.style.top = rect.top + dy + 'px';
    img.style.left = rect.left + dx + 'px';

    requestAnimationFrame(moveImage);
  }

  moveImage(); // Start the animation
});
