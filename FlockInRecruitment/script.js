// ============================================================
// Navigation
// ============================================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
}

// ============================================================
// Smooth scrolling
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({ top: target.offsetTop - navbarHeight - 20, behavior: 'smooth' });
        }
    });
});

// ============================================================
// Active nav link highlighting
// ============================================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 80;
    let current = '';

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - navbarHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================================
// Form validation
// ============================================================
function validateForm(form) {
    let isValid = true;

    form.querySelectorAll('[required]').forEach(input => {
        const empty = input.type === 'checkbox' ? !input.checked : !input.value.trim();
        if (empty) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }

        if (input.type === 'email' && input.value.trim()) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;
            }
        }

        if (input.type === 'tel' && input.value.trim()) {
            if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });

    return isValid;
}

function attachRealTimeValidation(form) {
    form.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        input.addEventListener('input', () => {
            if (input.value.trim()) input.classList.remove('error');
        });
    });
}

function showFormSuccess(form, title, body) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
        <div class="form-success-icon"><i class="fas fa-check-circle"></i></div>
        <h3>${title}</h3>
        <p>${body}</p>
    `;
    form.replaceWith(successDiv);
}

// ============================================================
// Scroll animations
// ============================================================
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// ============================================================
// Back to top button
// ============================================================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    width: 50px; height: 50px;
    background-color: #C2D400; color: #0F1D2E;
    border: none; border-radius: 50%; cursor: pointer;
    display: none; align-items: center; justify-content: center;
    z-index: 1000; transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-size: 18px;
`;
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

if (window.matchMedia('(hover: hover)').matches) {
    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.transform = 'translateY(-3px)';
        backToTopButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
    });
    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.transform = '';
        backToTopButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
}

// ============================================================
// DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Contact forms (index.html + contact.html) ---
    document.querySelectorAll('.contact-form').forEach(form => {
        attachRealTimeValidation(form);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(form)) return;

            const data = new FormData(form);
            const name    = data.get('name') || '';
            const email   = data.get('email') || '';
            const phone   = data.get('phone') || 'Not provided';
            const subject = data.get('subject') || 'General Inquiry';
            const message = data.get('message') || '';

            const mailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
            window.location.href = `mailto:contact@flockinrecruitment.com?subject=${encodeURIComponent('Website Enquiry - ' + subject)}&body=${encodeURIComponent(mailBody)}`;

            showFormSuccess(
                form,
                'Message ready to send',
                'Your email client has opened with your message pre-filled — just hit send. If it didn\'t open, email us directly at <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>.'
            );
        });
    });

    // --- CV upload form ---
    const cvForm = document.querySelector('.cv-upload-form');
    if (cvForm) {
        attachRealTimeValidation(cvForm);
    }

    // --- Inline CV upload on index.html ---
    const inlineCvForm = document.querySelector('.cv-upload-form:not(.cv-upload-section .cv-upload-form)');
    // (handled by the querySelectorAll above if it shares the class — no extra wiring needed)

    // --- Scroll animations ---
    document.querySelectorAll('.service-card, .location-card, .team-card, .about-card, .contact-card').forEach(el => {
        el.classList.add('js-animate');
        scrollObserver.observe(el);
    });

    // --- Touch feedback ---
    document.querySelectorAll('.btn, .nav-link').forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.97)';
        }, { passive: true });
        button.addEventListener('touchend', () => {
            button.style.transform = '';
        });
    });

    // --- iOS zoom prevention ---
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 768) input.style.fontSize = '16px';
        });
    });
});

// ============================================================
// Resize handler
// ============================================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});

// ============================================================
// CV Form success message
// ============================================================
if (window.location.search.includes('submitted=true')) {
    const wrapper = document.querySelector('.cv-form-wrapper');
    if (wrapper) {
        wrapper.innerHTML = `
            <div style="text-align:center; padding: 60px 20px;">
                <div style="font-size: 64px; margin-bottom: 20px;">✅</div>
                <h2 style="color: #1a3c6e; margin-bottom: 16px;">CV Submitted Successfully!</h2>
                <p style="color: #555; font-size: 18px; margin-bottom: 8px;">Thank you for applying to FlockIn Recruitment.</p>
                <p style="color: #555; font-size: 16px; margin-bottom: 32px;">We'll review your CV and get back to you within 48 hours if there's a match.</p>
                <a href="index.html" style="background: #1a3c6e; color: white; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-size: 16px;">Back to Home</a>
            </div>
        `;
    }
}
