/* ==========================================================================
   ICT251 Activity 3 - Interactive Portfolio Script
   Author: Dalitso Phiri
   Purpose: Implements form validation, theme switching, mobile menu toggle,
            and expandable project cards.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // FEATURE 1 (Compulsory): Contact Form Validation & Local Preview
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const formPreview = document.getElementById('form-preview');
    const previewName = document.getElementById('preview-name');
    const previewEmail = document.getElementById('preview-email');
    const previewMessage = document.getElementById('preview-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent actual form submission to keep demonstration local
            event.preventDefault();

            let isValid = true;

            // Clear previous error messages
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            // Trim whitespace from user inputs
            const trimmedName = nameInput.value.trim();
            const trimmedEmail = emailInput.value.trim();
            const trimmedMessage = messageInput.value.trim();

            // Validate Full Name (reject blank or whitespace-only strings)
            if (trimmedName === '') {
                nameError.textContent = 'Please enter a valid name (cannot be blank).';
                isValid = false;
            }

            // Validate Email with regex pattern
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(trimmedEmail)) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Message Box (reject blank or whitespace-only strings)
            if (trimmedMessage === '') {
                messageError.textContent = 'Please enter a message (cannot be blank).';
                isValid = false;
            }

            // If all fields pass validation, display local preview summary using textContent
            if (isValid) {
                previewName.textContent = trimmedName;
                previewEmail.textContent = trimmedEmail;
                previewMessage.textContent = trimmedMessage;

                formPreview.classList.remove('hidden');

                // Clear input fields after successful local validation
                contactForm.reset();
            } else {
                formPreview.classList.add('hidden');
            }
        });
    }

    // ----------------------------------------------------------------------
    // FEATURE 2: Dark / Light Theme Switcher
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Toggle light-theme class on body element
            document.body.classList.toggle('light-theme');

            if (document.body.classList.contains('light-theme')) {
                themeToggleBtn.textContent = 'Switch to Dark Mode';
            } else {
                themeToggleBtn.textContent = 'Switch to Light Mode';
            }
        });
    }

    // ----------------------------------------------------------------------
    // FEATURE 3: Mobile Navigation Toggle (Hamburger Menu)
    // ----------------------------------------------------------------------
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggleBtn && navLinks) {
        menuToggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                menuToggleBtn.textContent = '✕ Close Menu';
            } else {
                menuToggleBtn.textContent = '☰ Menu';
            }
        });
    }

    // ----------------------------------------------------------------------
    // FEATURE 4: Expandable Content (Show / Hide Project Details)
    // ----------------------------------------------------------------------
    const toggleButtons = document.querySelectorAll('.toggle-details-btn');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Find parent project card and associated details div
            const projectCard = button.closest('.project-card');
            const detailsDiv = projectCard.querySelector('.project-details');

            detailsDiv.classList.toggle('hidden');

            // Update button label depending on state
            if (detailsDiv.classList.contains('hidden')) {
                button.textContent = 'Show Details';
            } else {
                button.textContent = 'Hide Details';
            }
        });
    });

});
