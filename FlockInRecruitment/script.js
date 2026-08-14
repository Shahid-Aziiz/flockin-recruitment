// ============================================================
// MOBILE NAV
// ============================================================
const burger    = document.querySelector('.burger');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
    if (!burger || !mobileNav) return;
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
}

if (burger && mobileNav) {
    burger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
            closeMobileNav();
        }
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMobileNav();
});

// ============================================================
// SMOOTH SCROLLING
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        closeMobileNav();
        const target = document.querySelector(href);
        if (target) {
            const headerH = document.querySelector('header') ? document.querySelector('header').offsetHeight : 72;
            window.scrollTo({ top: target.offsetTop - headerH - 16, behavior: 'smooth' });
        }
    });
});

// ============================================================
// ROTATING WORD IN HERO
// ============================================================
(function() {
    const el = document.getElementById('rotator');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const words = ['finance', 'tech', 'legal', 'engineering', 'healthcare', 'manufacturing'];
    let i = 0;
    setInterval(() => {
        i = (i + 1) % words.length;
        el.style.opacity = '0';
        setTimeout(() => { el.textContent = words[i]; el.style.opacity = '1'; }, 220);
    }, 2400);
    el.style.transition = 'opacity .22s ease';
})();

// ============================================================
// COUNT-UP ANIMATION
// ============================================================
function animateCount(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;
    const dur = 1200;
    let t0 = null;
    function step(ts) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// Fire hero counters immediately
document.querySelectorAll('.hero [data-count]').forEach(animateCount);

// ============================================================
// REVEAL ON SCROLL + COUNT-UP TRIGGER
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            entry.target.querySelectorAll('[data-count]').forEach(animateCount);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================================
// ACTIVE NAV HIGHLIGHTING (index.html)
// ============================================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerH  = document.querySelector('header') ? document.querySelector('header').offsetHeight : 72;
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - headerH - 80) current = s.id;
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || href === `index.html#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================================
// FORM VALIDATION
// ============================================================
function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
        const empty = input.type === 'checkbox' ? !input.checked : !input.value.trim();
        if (empty) {
            input.classList.add('error'); valid = false;
        } else {
            input.classList.remove('error');
        }
        if (input.type === 'email' && input.value.trim()) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.classList.add('error'); valid = false;
            }
        }
    });
    return valid;
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

// ============================================================
// BACK TO TOP
// ============================================================
const btt = document.createElement('button');
btt.innerHTML = '<i class="fas fa-arrow-up"></i>';
btt.className = 'back-to-top';
btt.setAttribute('aria-label', 'Back to top');
document.body.appendChild(btt);
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
    btt.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

// ============================================================
// DOM CONTENT LOADED
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Contact forms ---
    document.querySelectorAll('.contact-form').forEach(form => {
        attachRealTimeValidation(form);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(form)) return;
            form.submit();
        });
    });

    // --- CV upload form ---
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxG9rX94Bex_cKolDKiFSnkKGOgfTBOCqxDIeetzWW0MC3buU6LFIkTSXPYCRHUVGXulw/exec';

    document.querySelectorAll('.cv-upload-form').forEach(cvForm => {
        attachRealTimeValidation(cvForm);

        const fileInput = cvForm.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.addEventListener('change', () => {
                const wrapper = fileInput.closest('.file-upload-wrapper');
                const info    = wrapper.querySelector('.file-upload-info');
                const file    = fileInput.files[0];
                wrapper.classList.toggle('has-file', !!file);

                let nameEl = wrapper.querySelector('.file-selected-name');
                if (file) {
                    info.querySelector('p').textContent = 'File selected:';
                    info.querySelector('i').className   = 'fas fa-check-circle';
                    if (!nameEl) {
                        nameEl = document.createElement('p');
                        nameEl.className = 'file-selected-name';
                        info.appendChild(nameEl);
                    }
                    nameEl.textContent = file.name;
                } else {
                    info.querySelector('p').textContent = 'Click to upload or drag and drop';
                    info.querySelector('i').className   = 'fas fa-cloud-upload-alt';
                    if (nameEl) nameEl.remove();
                }
            });
        }

        cvForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!validateForm(cvForm)) return;

            const submitBtn = cvForm.querySelector('[type="submit"]');
            const origText  = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting…';
            submitBtn.disabled  = true;

            try {
                const formData = new FormData(cvForm);
                const data = {};
                formData.forEach((v, k) => { if (k !== 'cvFile') data[k] = v; });

                const file = fileInput ? fileInput.files[0] : null;
                if (file) {
                    const base64 = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result.split(',')[1]);
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                    data.cvFile     = base64;
                    data.cvFileName = file.name;
                    data.cvFileType = file.type;
                }

                const res    = await fetch(APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(data) });
                const result = await res.json();
                if (result.success) {
                    window.location.href = 'https://www.flockinrecruitment.com/thankyou.html';
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } catch {
                submitBtn.innerHTML = origText;
                submitBtn.disabled  = false;
                alert('Something went wrong. Please try again or email us at contact@flockinrecruitment.com');
            }
        });
    });

    // --- iOS font zoom prevention ---
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 680) input.style.fontSize = '16px';
        });
    });

    // --- CV submission success (query param fallback) ---
    if (window.location.search.includes('submitted=true')) {
        const wrapper = document.querySelector('.cv-form-panel');
        if (wrapper) {
            wrapper.innerHTML = `
                <div class="form-success">
                    <div class="form-success-icon"><i class="fas fa-check-circle"></i></div>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for reaching out to FlockIn Recruitment.<br>We'll review your resume and be in touch within 48 hours if there's a match.</p>
                    <a href="index.html" class="btn btn-gold" style="margin-top:20px;">Back to Home</a>
                </div>
            `;
        }
    }
});
