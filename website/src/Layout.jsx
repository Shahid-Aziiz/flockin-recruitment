import { useEffect, useRef, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowRight,
  CaretDown,
  EnvelopeSimple,
  LinkedinLogo,
  List,
  MagnifyingGlass,
  Phone,
  X,
} from "@phosphor-icons/react";
import { URLS, navItems, asset } from "./constants";

function SearchForm({ className = "", inputRef, compact = false }) {
  const navigate = useNavigate();
  return (
    <form
      className={`search-form ${compact ? "search-form--compact" : ""} ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        const term = e.target.elements.s.value.trim();
        if (term) navigate(`/?q=${encodeURIComponent(term)}`);
      }}
      role="search"
    >
      <label htmlFor={compact ? "mobile-search" : "desktop-search"}>
        Search FlockIn
      </label>
      <div className="search-form__row">
        <input
          ref={inputRef}
          id={compact ? "mobile-search" : "desktop-search"}
          name="s"
          type="search"
          placeholder="Search jobs, specialisms…"
          required
        />
        <button type="submit" aria-label="Submit search">
          <MagnifyingGlass size={20} weight="bold" aria-hidden="true" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}

function DesktopNavigation({ openMenu, setOpenMenu, triggerRefs }) {
  return (
    <nav className="desktop-nav" aria-label="Primary navigation">
      <ul>
        {navItems.map((item) => {
          const isOpen = openMenu === item.id;
          return (
            <li
              key={item.id}
              className={`nav-item ${item.children ? "nav-item--has-children" : ""}`}
              onMouseEnter={() => item.children && setOpenMenu(item.id)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenMenu(null);
                }
              }}
            >
              <div className="nav-item__label">
                <a href={item.href}>{item.label}</a>
                {item.children && (
                  <button
                    ref={(node) => { triggerRefs.current[item.id] = node; }}
                    type="button"
                    className="nav-disclosure"
                    aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
                    aria-expanded={isOpen}
                    aria-controls={`desktop-${item.id}-submenu`}
                    onClick={() => setOpenMenu(isOpen ? null : item.id)}
                  >
                    <CaretDown size={14} weight="bold" aria-hidden="true" />
                  </button>
                )}
              </div>
              {item.children && isOpen && (
                <ul id={`desktop-${item.id}-submenu`} className="desktop-submenu">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} onClick={() => setOpenMenu(null)}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNavigation({ open, onClose, drawerRef, closeButtonRef }) {
  const [expanded, setExpanded] = useState(null);

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
            <img src={asset("flockin-logo.png")} alt="FlockIn Recruitment" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-button icon-button--light"
            aria-label="Close navigation"
            onClick={onClose}
          >
            <X size={28} weight="bold" aria-hidden="true" />
          </button>
        </div>

        <SearchForm compact />

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            {navItems.map((item) => {
              const isExpanded = expanded === item.id;
              return (
                <li key={item.id}>
                  <div className="mobile-nav__row">
                    <a href={item.href} onClick={onClose}>{item.label}</a>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-${item.id}-submenu`}
                        onClick={() => setExpanded(isExpanded ? null : item.id)}
                      >
                        <CaretDown size={18} weight="bold" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {item.children && isExpanded && (
                    <ul id={`mobile-${item.id}-submenu`} className="mobile-submenu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={onClose}>{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer__contacts">
          <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>
          <a href="tel:+13239849907">+1 323 984 9907</a>
        </div>

        <div className="mobile-drawer__socials" aria-label="Social media">
          <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
            <LinkedinLogo size={24} weight="fill" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}

export function ActionLink({ href, tone = "navy", icon: Icon, children, onClick }) {
  return (
    <a className={`action-link action-link--${tone}`} href={href} onClick={onClick}>
      {Icon && <Icon size={22} weight="regular" aria-hidden="true" />}
      <span>{children}</span>
      <ArrowRight size={18} weight="bold" aria-hidden="true" />
    </a>
  );
}

function applySearchHighlight(term) {
  const main = document.getElementById("main-content");
  if (!main) return;
  main.querySelectorAll("mark.search-highlight").forEach((m) => {
    m.replaceWith(document.createTextNode(m.textContent));
  });
  if (!term) return;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (regex.test(node.textContent)) { regex.lastIndex = 0; nodes.push(node); }
  }
  nodes.forEach((textNode) => {
    const parent = textNode.parentNode;
    if (!parent || ["MARK", "SCRIPT", "STYLE", "INPUT", "TEXTAREA"].includes(parent.tagName)) return;
    const parts = textNode.textContent.split(regex);
    if (parts.length <= 1) return;
    const frag = document.createDocumentFragment();
    parts.forEach((part, i) => {
      if (i % 2 === 1) {
        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.textContent = part;
        frag.appendChild(mark);
      } else if (part) {
        frag.appendChild(document.createTextNode(part));
      }
    });
    parent.replaceChild(frag, textNode);
  });
  const first = main.querySelector("mark.search-highlight");
  if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function Layout() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const triggerRefs = useRef({});
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const mobileCloseRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
        return;
      }
      if (searchOpen) {
        setSearchOpen(false);
        searchButtonRef.current?.focus();
        return;
      }
      if (openMenu) {
        const activeMenu = openMenu;
        setOpenMenu(null);
        triggerRefs.current[activeMenu]?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, openMenu, searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileCloseRef.current?.focus();

    const trapFocus = (event) => {
      if (event.key !== "Tab" || !mobileDrawerRef.current) return;
      const focusable = Array.from(
        mobileDrawerRef.current.querySelectorAll("a[href], button:not([disabled]), input:not([disabled])"),
      ).filter((node) => node.offsetParent !== null);
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
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 960px)");
    const onBreakpointChange = (event) => {
      const hadMobileDrawer = mobileOpen;
      const hadDesktopOverlay = Boolean(searchOpen || openMenu);
      setMobileOpen(false);
      setSearchOpen(false);
      setOpenMenu(null);
      if (event.matches && hadDesktopOverlay) {
        window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
      } else if (!event.matches && hadMobileDrawer) {
        window.requestAnimationFrame(() => headerRef.current?.querySelector(".brand")?.focus());
      }
    };
    mobileMedia.addEventListener("change", onBreakpointChange);
    return () => mobileMedia.removeEventListener("change", onBreakpointChange);
  }, [mobileOpen, openMenu, searchOpen]);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get("q")?.trim() || "";
    applySearchHighlight(term);
  }, [location]);

  const closeMobile = () => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header ref={headerRef} className="site-header">
        <div className="header-inner">
          <Link className="brand" to={URLS.home} aria-label="FlockIn Recruitment home">
            <img src={asset("flockin-logo.png")} alt="FlockIn Recruitment" />
          </Link>

          <DesktopNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} triggerRefs={triggerRefs} />

          <div className="header-utility">
            <button
              ref={searchButtonRef}
              type="button"
              className="utility-search"
              aria-label={`${searchOpen ? "Close" : "Open"} site search`}
              aria-expanded={searchOpen}
              aria-controls="desktop-search-panel"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <MagnifyingGlass size={19} weight="bold" aria-hidden="true" />
              <span>Search</span>
            </button>
            <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
              <LinkedinLogo size={20} weight="fill" aria-hidden="true" />
            </a>
          </div>

          <button
            ref={mobileToggleRef}
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
          >
            <List size={31} weight="bold" aria-hidden="true" />
          </button>

          {searchOpen && (
            <div id="desktop-search-panel" className="search-panel">
              <SearchForm inputRef={searchInputRef} />
              <button
                type="button"
                className="search-panel__close"
                aria-label="Close search"
                onClick={() => { setSearchOpen(false); searchButtonRef.current?.focus(); }}
              >
                <X size={21} weight="bold" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={closeMobile} drawerRef={mobileDrawerRef} closeButtonRef={mobileCloseRef} />

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <Link className="footer-brand" to={URLS.home} aria-label="FlockIn Recruitment home">
            <img src={asset("flockin-logo.png")} alt="" />
            <span>FlockIn</span>
          </Link>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href={URLS.specialisms}>Specialisms</a>
            <a href={URLS.jobs}>Job Search</a>
            <a href={URLS.employers}>For Employers</a>
            <a href={URLS.values}>Values</a>
            <Link to={URLS.contact}>Contact</Link>
            <Link to={URLS.privacy}>Privacy</Link>
          </nav>

          <div className="footer-socials" aria-label="Social media">
            <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="FlockIn Recruitment on LinkedIn">
              <LinkedinLogo size={21} weight="fill" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-resources">
          <div>
            <strong>Specialisms</strong>
            <a href={URLS.technology}>Technology</a>
            <a href={URLS.finance}>Finance</a>
            <a href={URLS.legal}>Legal</a>
            <a href={URLS.engineering}>Engineering</a>
            <a href={URLS.healthcare}>Healthcare</a>
            <a href={URLS.manufacturing}>Manufacturing</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href={URLS.values}>Values</a>
            <Link to={URLS.contact}>Contact</Link>
            <Link to={URLS.candidates}>Upload Resume</Link>
            <Link to={URLS.privacy}>Privacy Policy</Link>
          </div>
          <div>
            <strong>Get in touch</strong>
            <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>
            <a href="tel:+13239849907"><Phone size={16} aria-hidden="true" /> +1 323 984 9907</a>
            <span>10990 Wilshire Blvd, Ste 300, Los Angeles, CA 90024, US</span>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} FlockIn Recruitment. All rights reserved.</span>
          <span>Moving Forward Together</span>
        </div>
      </footer>
    </>
  );
}
