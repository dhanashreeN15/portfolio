// Smooth Scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').slice(1); // Get the section ID
        const targetSection = document.getElementById(targetId); // Find the target section

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Scroll to the target section with a small offset
            behavior: 'smooth', // Smooth scrolling animation
        });
    });
});

// Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Basic validation to ensure all fields are filled out
    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting!");
        e.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for your message! I'll get back to you soon.");
        // Optionally, clear the form fields here if you want
        this.reset();
    }
});

// Adding a Scroll Effect to Highlight Active Link in Navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust offset
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
