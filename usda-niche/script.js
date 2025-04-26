/**
 * USDA Loan Real Estate Project Plans
 * Script for the project plan viewing interface
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navList = document.getElementById('navList');
    const toggleNavButton = document.getElementById('toggleNav');
    
    // Toggle mobile navigation
    if (toggleNavButton) {
        toggleNavButton.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }
    
    // Create and append back-to-top button
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '&uarr;';
    document.body.appendChild(backToTopButton);
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Update active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // If we're on the index page, make project plan active by default
        if (currentPage === 'index.html' || currentPage === '') {
            if (link.getAttribute('href') === 'project-plan.html') {
                link.classList.add('active');
            }
        } else {
            // Otherwise highlight the current page in nav
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        }
    });
});
