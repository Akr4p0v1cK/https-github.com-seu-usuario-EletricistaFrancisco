/**
 * Script.js - Interactive Controls for Eletricista Francisco Website
 * Features: Light/Dark Theme, Sticky Nav, Mobile Menu Toggle, Contact Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('navigation-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons(); // Refresh icons inside toggle button
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            });
        });
    }

    // 3. Dark/Light Theme Custom Control
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 4. Highlight Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Offset for sticky header
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });

    // 5. Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const feedbackMessage = document.getElementById('form-feedback-message');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm && feedbackMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable button and change state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Enviando...';
                lucide.createIcons();
            }

            // Gather inputs
            const name = document.getElementById('form-name').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            const service = document.getElementById('form-service').value;
            const message = document.getElementById('form-message').value.trim();

            // Simple client-side validation
            if (!name || !phone || !service || !message) {
                showFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
                resetButton();
                return;
            }

            // Simulate form submission (AJAX)
            setTimeout(() => {
                // Success Scenario
                showFeedback(`Obrigado, ${name}! Sua solicitação de orçamento foi enviada. Entraremos em contato no telefone ${phone} em breve.`, 'success');
                contactForm.reset();
                resetButton();
            }, 1500);
        });

        function showFeedback(msg, type) {
            feedbackMessage.textContent = msg;
            feedbackMessage.className = 'form-feedback ' + type;
            
            // Auto hide feedback after 8 seconds
            setTimeout(() => {
                feedbackMessage.style.display = 'none';
            }, 8000);
        }

        function resetButton() {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i data-lucide="send"></i> Enviar Mensagem';
                lucide.createIcons();
            }
        }
    }
});
