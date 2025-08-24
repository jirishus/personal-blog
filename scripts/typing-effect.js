document.addEventListener('DOMContentLoaded', function() {
  const roles = ['Software Engineer', 'DevOps Specialist', 'Cloud Architect', 'Full-Stack Developer', 'Problem Solver'];
  const roleElement = document.getElementById('dynamic-role');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // ms per character
  let deleteSpeed = 50; // faster delete speed
  let delayBetweenRoles = 2000; // pause before starting next role

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Delete character
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = deleteSpeed;
    } else {
      // Type character
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // normal typing speed
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing a role, pause then start deleting
      typingSpeed = delayBetweenRoles;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typing effect after a short delay
  setTimeout(type, 1000);
});
