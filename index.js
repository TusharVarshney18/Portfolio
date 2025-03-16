// Select elements
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Function to toggle navbar visibility
const toggleMenu = () => {
   menuToggle.querySelector('i').classList.toggle("bx-x");
   navLinks.classList.toggle("active");
};

// Open/Close menu when clicking the menu toggle
menuToggle.addEventListener("click", (e) => {
   e.stopPropagation();
   toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
   if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.querySelector('i').classList.remove("bx-x");
      navLinks.classList.remove("active");
   }
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
   menuToggle.querySelector('i').classList.remove("bx-x");
   navLinks.classList.remove("active");
});

// Typing Effect (No Changes)
var typed = new Typed(".multiple-text", {
   strings: ["Front-end Developer", "Back-end Developer"],
   typeSpeed: 50,
   backSpeed: 80,
   backDelay: 1200,
   loop: true,
});



const darkModeToggle = document.getElementById("dark-mode-toggle");

// Intersection Observer for scroll animations
const observerOptions = {
   root: null,
   rootMargin: '0px',
   threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('visible');
         // Once visible, keep it visible
         observer.unobserve(entry.target);
      }
   });
}, observerOptions);

// Observe all sections and fade-in elements
document.querySelectorAll('section, .fade-in').forEach(element => {
   // Set initial visibility
   element.style.opacity = '1';
   observer.observe(element);
});

// Enhanced scroll behavior with smoother transition
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down and not at the top
      header.style.transform = 'translateY(-100%)';
   } else {
      // Scrolling up or at the top
      header.style.transform = 'translateY(0)';
   }

   lastScrollTop = scrollTop;
});

// Ensure dark mode toggle works correctly
const body = document.body;

// Check for saved user preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
   body.classList.remove('light-mode');
} else {
   body.classList.add('light-mode');
}

darkModeToggle.addEventListener("click", () => {
   body.classList.toggle("light-mode");
   // Save user preference
   if (body.classList.contains('light-mode')) {
      localStorage.setItem('darkMode', 'disabled');
   } else {
      localStorage.setItem('darkMode', 'enabled');
   }
});
