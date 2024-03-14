// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to toggle active class on navbar links when clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Add event listener to hide the navbar when scrolling down and show it when scrolling up
    let lastScrollTop = 0;
    const navbar = document.querySelector('header');
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.style.top = "-70px"; // Hide navbar
        } else {
            // Scroll up
            navbar.style.top = "0"; // Show navbar
        }
        lastScrollTop = scrollTop;
    });

    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchorLink => {
        anchorLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
