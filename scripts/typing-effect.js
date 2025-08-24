// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the element where we'll display the typing effect
  const roleElement = document.getElementById('dynamic-role');
  
  // If the element doesn't exist, exit the function
  if (!roleElement) {
    console.warn('Element with id "dynamic-role" not found. Typing effect will not run.');
    return;
  }

  // Array of roles to cycle through
  const roles = [
    'Software Engineer',
    'DevOps Specialist',
    'Cloud Architect',
    'Full-Stack Developer',
    'Problem Solver'
  ];
  
  let roleIndex = 0;      // Current role index
  let charIndex = 0;      // Current character index
  let isDeleting = false; // Whether we're deleting
  let timeoutId = null;   // To keep track of our timeout

  // Function to handle the typing effect
  function type() {
    const currentRole = roles[roleIndex];
    
    // If we're deleting
    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } 
    // If we're typing
    else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    // If we've finished typing the current word
    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the end of the word
      timeoutId = setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000); // 2 second pause
      return;
    }
    // If we've finished deleting the current word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to the next word (or loop back to the first)
      roleIndex = (roleIndex + 1) % roles.length;
    }

    // Set the typing speed (faster for deleting)
    const typeSpeed = isDeleting ? 50 : 100;
    
    // Set the next timeout
    timeoutId = setTimeout(type, typeSpeed);
  }

  // Start the typing effect after a short delay
  setTimeout(type, 1000);

  // Clean up the timeout when the page is unloaded
  window.addEventListener('beforeunload', function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });
});
