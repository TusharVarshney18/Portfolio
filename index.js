// Select elements
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".slider-nav");

// Function to toggle navbar visibility
const toggleMenu = () => {
   menu.classList.toggle("bx-x");  // Change icon
   navbar.classList.toggle("active"); // Show/Hide navbar
};

// Open/Close menu when clicking the menu icon
menu.addEventListener("click", (e) => {
   e.stopPropagation(); // Prevents immediate closing when clicking icon
   toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
   if (!menu.contains(e.target) && !navbar.contains(e.target)) {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
   }
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
   menu.classList.remove("bx-x");
   navbar.classList.remove("active");
});

// Typing Effect (No Changes)
var typed = new Typed(".multiple-text", {
   strings: ["Front-end Developer", "Back-end Developer"],
   typeSpeed: 50,
   backSpeed: 80,
   backDelay: 1200,
   loop: true,
});
