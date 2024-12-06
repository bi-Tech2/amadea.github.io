'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// Initialize loader count
let count = 0;
const loaderCount = document.getElementById('loader-count');

// Simulate a loader increment
const interval = setInterval(() => {
  if (count < 100) {
    count++;
    loaderCount.textContent = count;
  } else {
    clearInterval(interval);
    // After loading, hide the loader and show the main content
    document.querySelector('.loader-screen').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling if needed
  }
}, 30); // Adjust speed as needed
