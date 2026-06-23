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
            form.submit();
        });
    });

    // --- CV upload form(s) ---
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxG9rX94Bex_cKolDKiFSnkKGOgfTBOCqxDIeetzWW0MC3buU6LFIkTSXPYCRHUVGXulw/exec';

    document.querySelectorAll('.cv-upload-form').forEach(cvForm => {
        attachRealTimeValidation(cvForm);

        const fileInput = cvForm.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.addEventListener('change', () => {
                const wrapper = fileInput.closest('.file-upload-wrapper');
                const info = wrapper.querySelector('.file-upload-info');
                const file = fileInput.files[0];

                wrapper.classList.toggle('has-file', !!file);

                let nameEl = wrapper.querySelector('.file-selected-name');
                if (file) {
                    info.querySelector('p').textContent = 'File selected:';
                    info.querySelector('i').className = 'fas fa-check-circle';
                    if (!nameEl) {
                        nameEl = document.createElement('p');
                        nameEl.className = 'file-selected-name';
                        info.appendChild(nameEl);
                    }
                    nameEl.textContent = file.name;
                } else {
                    info.querySelector('p').textContent = 'Click to upload or drag and drop';
                    info.querySelector('i').className = 'fas fa-cloud-upload-alt';
                    if (nameEl) nameEl.remove();
                }
            });
        }

        cvForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!validateForm(cvForm)) return;

            const submitBtn = cvForm.querySelector('[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(cvForm);
                const data = {};
                formData.forEach((value, key) => {
                    if (key !== 'cvFile') data[key] = value;
                });

                const file = fileInput ? fileInput.files[0] : null;
                if (file) {
                    const base64 = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result.split(',')[1]);
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                    data.cvFile = base64;
                    data.cvFileName = file.name;
                    data.cvFileType = file.type;
                }

                const res = await fetch(APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: JSON.stringify(data)
                });

                const result = await res.json();
                if (result.success) {
                    window.location.href = 'https://www.flockinrecruitment.com/thankyou.html';
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } catch (err) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                alert('Something went wrong. Please try again or email us directly at contact@flockinrecruitment.com');
            }
        });
    });


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
