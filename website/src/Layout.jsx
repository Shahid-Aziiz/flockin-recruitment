import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { URLS, navItems, asset } from "./constants";
import { PixelStrip } from "./components/PixelStrip";

const LINKEDIN_PATH = "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z";
const MENU_PATH = "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z";
const PHONE_PATH = "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ d, size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Brand({ onClick }) {
  return (
    <span className="brand-lockup brand-lockup--md" onClick={onClick}>
      <img alt="" src={asset("flockin-logo.png")} />
      <span className="brand-lockup__text">
        <strong>Flock<em>In</em></strong>
        <small>Recruitment</small>
      </span>
    </span>
  );
}

function isCurrent(item, pathname) {
  return Boolean(item.paths && item.paths.includes(pathname));
}

function MobileNavigation({ open, onClose, drawerRef, closeButtonRef, pathname }) {
  return (
    <>
      <button
        type="button"
        className={`mobile-scrim ${open ? "is-open" : ""}`}
        aria-label="Close navigation"
        tabIndex={-1}
        onClick={onClose}
      />
      <aside
        ref={drawerRef}
        id="mobile-navigation"
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <div className="mobile-drawer__header">
          <Link to={URLS.home} aria-label="FlockIn Recruitment home" onClick={onClose}>
            <Brand />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-toggle"
            aria-label="Close navigation"
            onClick={onClose}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <div className="mobile-nav__row">
                  <Link to={item.href} onClick={onClose} aria-current={isCurrent(item, pathname) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="fb-row mobile-drawer__cta">
          <Link className="fb fb--l" to={URLS.hire} onClick={onClose}>
            <span>Hire talent</span>
            <i><Arrow /></i>
          </Link>
        </div>

        <div className="mobile-drawer__contacts">
          <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>
          <a href="tel:+13239849907">+1 323 984 9907</a>
        </div>

        <div className="mobile-drawer__socials" aria-label="Social media">
          <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
            <Icon d={LINKEDIN_PATH} size={22} />
          </a>
        </div>
      </aside>
    </>
  );
}

export function Layout() {
  const location = useLocation();
  const { pathname, hash } = location;
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const closeRef = useRef(null);

  // Scroll to the section in the URL hash, otherwise back to the top on a route change.
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const go = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else if (tries++ < 20) {
          window.requestAnimationFrame(go);
        }
      };
      go();
    } else {
      window.scrollTo(0, 0);
    }
    setMobileOpen(false);
  }, [pathname, hash]);

  // Header turns into the glass bar after a little scrolling.
  useEffect(() => {
    const hd = headerRef.current;
    if (!hd) return undefined;
    let on = false;
    let queued = false;
    const frame = () => {
      queued = false;
      const v = window.scrollY || document.documentElement.scrollTop;
      if (!on && v > 40) on = true;
      else if (on && v < 12) on = false;
      hd.classList.toggle("is-scrolled", on);
    };
    const queue = () => {
      if (!queued) {
        queued = true;
        window.requestAnimationFrame(frame);
      }
    };
    window.addEventListener("scroll", queue, { passive: true });
    frame();
    return () => window.removeEventListener("scroll", queue);
  }, []);

  // Drawer: Escape to close, keep focus inside, lock page scroll.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll("a[href], button:not([disabled])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 961px)");
    const onChange = () => media.matches && setMobileOpen(false);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const isHome = pathname === "/";

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header" ref={headerRef}>
        <div className="header-inner">
          <Link className="brand" to={URLS.home} aria-label="FlockIn Recruitment home">
            <Brand />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul>
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <div className="nav-item__label">
                    <Link to={item.href} aria-current={isCurrent(item, pathname) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-utility">
            <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
              <Icon d={LINKEDIN_PATH} size={20} />
            </a>
            <Link className="header-cta" to={URLS.hire}>
              <span>Hire talent</span>
              <i><Arrow /></i>
            </Link>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon d={MENU_PATH} size={31} />
          </button>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={closeMobile} drawerRef={drawerRef} closeButtonRef={closeRef} pathname={pathname} />

      <main id="main-content">
        <Outlet />
      </main>

      <footer id="contact" className="site-footer">
        {isHome && (
          <div className="footer-cta">
            <p>Ready when you are.</p>
            <div className="fb-row">
              <Link className="fb fb--l" to={URLS.hire}>
                <span>Grow your team</span>
                <i><Arrow /></i>
              </Link>
              <Link className="fb fb--w" to={URLS.candidates}>
                <span>Grow your career</span>
                <i><Arrow /></i>
              </Link>
            </div>
          </div>
        )}
        <div className="footer-main">
          <Link className="footer-brand" to={URLS.home} aria-label="FlockIn Recruitment home">
            <Brand />
          </Link>
          <div className="footer-socials" aria-label="Social media">
            <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
              <Icon d={LINKEDIN_PATH} size={21} />
            </a>
          </div>
        </div>
        <div className="footer-resources">
          <div>
            <strong>Company</strong>
            <Link to={URLS.contact}>Contact</Link>
            <Link to={URLS.candidates}>Upload Resume</Link>
            <Link to={URLS.privacy}>Privacy Policy</Link>
            <Link to={URLS.terms}>Terms of Service</Link>
          </div>
          <div>
            <strong>Get in touch</strong>
            <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>
            <a href="tel:+13239849907">
              <Icon d={PHONE_PATH} size={16} /> +1 323 984 9907
            </a>
            <span>10990 Wilshire Blvd, Ste 300, Los Angeles, CA 90024, US</span>
          </div>
        </div>
        <PixelStrip />
      </footer>
    </>
  );
}
