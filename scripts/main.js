document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("header nav > div > button");
  const closeButton = document.querySelector("div[role='dialog'] button");
  const mobileMenu = document.querySelector("div[role='dialog']");

  if (menuButton && closeButton && mobileMenu) {
    // Start with the menu hidden
    mobileMenu.style.display = "none";

    menuButton.addEventListener("click", function () {
      mobileMenu.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
      mobileMenu.style.display = "none";
    });

    // Close menu if user clicks outside
    mobileMenu.addEventListener("click", function (event) {
      if (event.target === mobileMenu) {
        mobileMenu.style.display = "none";
      }
    });

    // Close menu on window resize if screen width is >= 1024px
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) {
        mobileMenu.style.display = "none";
      }
    });
  }
});
  
// ensure smooth scrolling for fixed header
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor jump

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => { // Ensure smooth scroll after any layout shifts
          const header = document.querySelector("header");
          const headerOffset = header ? header.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset - 20; // Extra padding for safety

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 50); // Small delay to allow page reflow if necessary
      }
    });
  });
});

// Update copyright year dynamically
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});