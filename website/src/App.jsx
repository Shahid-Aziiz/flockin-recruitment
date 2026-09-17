import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CaretDown,
  Code,
  CurrencyDollar,
  EnvelopeSimple,
  FacebookLogo,
  Factory,
  Heart,
  Heartbeat,
  LinkedinLogo,
  List,
  MagnifyingGlass,
  Phone,
  Scales,
  Shield,
  Star,
  User,
  Wrench,
  X,
} from "@phosphor-icons/react";
import "@fontsource/oswald/latin-400.css";
import "@fontsource/oswald/latin-500.css";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/oswald/latin-700.css";
import "@fontsource/league-gothic/latin-400.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-500.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";

const BASE_URL = import.meta.env.BASE_URL;
const asset = (name) => `${BASE_URL}assets/${name}`;

const URLS = {
  specialisms: "#specialisms",
  technology: "#specialisms",
  finance: "#specialisms",
  legal: "#specialisms",
  engineering: "#specialisms",
  healthcare: "#specialisms",
  manufacturing: "#specialisms",
  jobs: "#jobs",
  employers: "#employers",
  values: "#values",
  contact: "contact.html",
  candidates: "cv-upload.html",
  team: "team.html",
  privacy: "privacy-policy.html",
  terms: "terms-of-service.html",
  linkedin: "https://www.linkedin.com/company/flockinrecruitment/",
  facebook: "https://www.facebook.com/flockinrecruitment",
};

const navItems = [
  {
    id: "specialisms",
    label: "Specialisms",
    href: URLS.specialisms,
    children: [
      { label: "Technology", href: URLS.technology },
      { label: "Finance", href: URLS.finance },
      { label: "Legal", href: URLS.legal },
      { label: "Engineering", href: URLS.engineering },
      { label: "Healthcare", href: URLS.healthcare },
      { label: "Manufacturing", href: URLS.manufacturing },
    ],
  },
  { id: "jobs", label: "Job Search", href: URLS.jobs },
  { id: "employers", label: "For Employers", href: URLS.employers },
  { id: "values", label: "Values", href: URLS.values },
  { id: "contact", label: "Contact", href: URLS.contact },
];

const imageRail = [
  {
    src: "port-fourchon-dusk.webp",
    alt: "Offshore vessels at dusk",
    position: "50% 57%",
  },
  {
    src: "solar-jobs.jpg",
    alt: "Energy professionals at a solar site",
    position: "50% 50%",
  },
  {
    src: "david-dewar-ursa-tlp.webp",
    alt: "Professional at an illuminated platform",
    position: "61% 50%",
  },
  {
    src: "aerospace-jobs.jpg",
    alt: "Aerospace technician working on an aircraft",
    position: "50% 50%",
  },
  {
    src: "allan-cortez-cassio-peneluppi-offshore.webp",
    alt: "Two professionals at a worksite",
    position: "46% 48%",
  },
];

const specialismCards = [
  {
    title: "Technology",
    description:
      "Engineering, data, product, and cyber across the USA and Europe.",
    href: URLS.technology,
    image: "aerospace-jobs.jpg",
    imageAlt: "Technology professionals at work",
    position: "50% 50%",
    icon: Code,
    tone: "deep",
  },
  {
    title: "Finance",
    description: "From financial analysts to CFOs across all verticals.",
    href: URLS.finance,
    image: "direct-placement.jpg",
    imageAlt: "Finance professionals in a meeting",
    position: "58% 50%",
    icon: CurrencyDollar,
    tone: "steel",
  },
  {
    title: "Legal",
    description: "In-house counsel, compliance, and regulatory specialists.",
    href: URLS.legal,
    image: "early-morning-q5k.webp",
    imageAlt: "Legal professionals at work",
    position: "50% 50%",
    icon: Scales,
    tone: "deep",
  },
  {
    title: "Engineering",
    description: "Technical, infrastructure, and operations talent.",
    href: URLS.engineering,
    image: "brandon-ward-worksite.webp",
    imageAlt: "Engineering professional at a worksite",
    position: "100% 50%",
    icon: Wrench,
    tone: "steel",
  },
  {
    title: "Healthcare",
    description: "Clinical professionals and health-tech talent.",
    href: URLS.healthcare,
    image: "veteran-support.webp",
    imageAlt: "Healthcare professional",
    position: "0% 48%",
    icon: Heartbeat,
    tone: "deep",
  },
  {
    title: "Manufacturing",
    description:
      "Production, operations, and supply chain talent across the USA and Europe.",
    href: URLS.manufacturing,
    image: "offshore-crew.webp",
    imageAlt: "Manufacturing crew members at work",
    position: "50% 40%",
    icon: Factory,
    tone: "steel",
  },
];

const stats = [
  { value: "20+", label: "Placements Made" },
  { value: "10+", label: "Companies Served" },
  { value: "48hr", label: "Avg Response Time" },
  { value: "2", label: "Continents Covered" },
];

const values = [
  {
    icon: Shield,
    title: "Honesty",
    description:
      "We tell clients when a role is hard to fill, and we tell candidates when they're not the right fit. Straight feedback saves everyone time and builds trust that lasts beyond a single placement.",
  },
  {
    icon: Star,
    title: "Quality Over Volume",
    description:
      "We'd rather send two candidates we believe in than ten we're not sure about. Every CV we put forward has been reviewed and spoken to. No bulk-applying on your behalf.",
  },
  {
    icon: Heart,
    title: "Long-Term Thinking",
    description:
      "We care about whether the placement works out, not just whether it happens. A hire that doesn't last is bad for the client, bad for the candidate, and bad for us.",
  },
];

const featuredJobs = [
  {
    title: "Packaging Sales Representative",
    category: "Manufacturing",
    location: "Remote (TX)",
    description:
      "Join a growing corrugated packaging manufacturer serving industrial, logistics, and food & beverage sectors across Texas. Drive new business and manage accounts in a defined territory with uncapped commission potential.",
    tags: ["Sales", "Corrugated", "Remote", "Permanent"],
    salary: "Base + uncapped commission — DOE",
    href: "job-packaging-sales.html",
  },
  {
    title: "Business Unit Manager — Aerospace",
    category: "Engineering",
    location: "Orange County, CA",
    description:
      "Lead all aspects of an aerospace manufacturing business unit: production scheduling, quality, safety, and P&L ownership. On-site role with cross-functional leadership across engineering, supply chain, and finance.",
    tags: ["Aerospace", "Manufacturing", "Leadership", "Permanent"],
    salary: "$175,000 – $200,000 / year",
    href: "job-aerospace-manager.html",
  },
];

function SearchForm({ className = "", inputRef, compact = false }) {
  return (
    <form
      className={`search-form ${compact ? "search-form--compact" : ""} ${className}`}
      action="#jobs"
      method="get"
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
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.children && (
                  <button
                    ref={(node) => {
                      triggerRefs.current[item.id] = node;
                    }}
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
                <ul
                  id={`desktop-${item.id}-submenu`}
                  className="desktop-submenu"
                >
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
          <a
            href={BASE_URL}
            aria-label="FlockIn Recruitment home"
            onClick={onClose}
          >
            <img
              src={asset("team-trident-logo.png")}
              alt="FlockIn Recruitment"
            />
          </a>
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
                    {item.href ? (
                      <a href={item.href} onClick={onClose}>
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-${item.id}-submenu`}
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.id)
                        }
                      >
                        <CaretDown size={18} weight="bold" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {item.children && isExpanded && (
                    <ul
                      id={`mobile-${item.id}-submenu`}
                      className="mobile-submenu"
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={onClose}>
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

        <div className="mobile-drawer__contacts">
          <a href="mailto:contact@flockinrecruitment.com">
            contact@flockinrecruitment.com
          </a>
          <a href="tel:+13239849907">+1 323 984 9907</a>
        </div>

        <div className="mobile-drawer__socials" aria-label="Social media">
          <a
            href={URLS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FlockIn Recruitment on LinkedIn"
          >
            <LinkedinLogo size={24} weight="fill" aria-hidden="true" />
          </a>
          <a
            href={URLS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FlockIn Recruitment on Facebook"
          >
            <FacebookLogo size={24} weight="fill" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}

function ActionLink({ href, tone = "navy", icon: Icon, children }) {
  return (
    <a className={`action-link action-link--${tone}`} href={href}>
      {Icon && <Icon size={22} weight="regular" aria-hidden="true" />}
      <span>{children}</span>
      <ArrowRight size={18} weight="bold" aria-hidden="true" />
    </a>
  );
}

export function App() {
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
        mobileDrawerRef.current.querySelectorAll(
          "a[href], button:not([disabled]), input:not([disabled])",
        ),
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
        window.requestAnimationFrame(() =>
          headerRef.current?.querySelector(".brand")?.focus(),
        );
      }
    };

    mobileMedia.addEventListener("change", onBreakpointChange);
    return () => mobileMedia.removeEventListener("change", onBreakpointChange);
  }, [mobileOpen, openMenu, searchOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header ref={headerRef} className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href={BASE_URL}
            aria-label="FlockIn Recruitment home"
          >
            <img
              src={asset("team-trident-logo.png")}
              alt="FlockIn Recruitment"
            />
          </a>

          <DesktopNavigation
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            triggerRefs={triggerRefs}
          />

          <div className="header-utility">
            <button
              ref={searchButtonRef}
              type="button"
              className="utility-search"
              aria-label={`${searchOpen ? "Close" : "Open"} site search`}
              aria-expanded={searchOpen}
              aria-controls="desktop-search-panel"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <MagnifyingGlass size={19} weight="bold" aria-hidden="true" />
              <span>Search</span>
            </button>
            <a
              href={URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FlockIn Recruitment on LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" aria-hidden="true" />
            </a>
            <a
              href={URLS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FlockIn Recruitment on Facebook"
            >
              <FacebookLogo size={20} weight="fill" aria-hidden="true" />
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
                onClick={() => {
                  setSearchOpen(false);
                  searchButtonRef.current?.focus();
                }}
              >
                <X size={21} weight="bold" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </header>

      <MobileNavigation
        open={mobileOpen}
        onClose={closeMobile}
        drawerRef={mobileDrawerRef}
        closeButtonRef={mobileCloseRef}
      />

      <main id="main-content">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--rule">
                Specialist Recruitment · USA &amp; Europe
              </p>
              <h1 id="hero-heading">
                <span>We&apos;re here to make</span>
                <span>hiring better.</span>
              </h1>
              <p className="hero-copy__intro">
                FlockIn Recruitment partners with businesses across the USA and
                Europe to connect them with the right talent in Tech, Finance,
                Legal, Engineering, and Healthcare. We handle the full process
                so you spend your time meeting people worth hiring.
              </p>
              <div className="hero-actions" aria-label="Choose your path">
                <ActionLink href={URLS.contact} icon={User}>
                  Hire Talent
                </ActionLink>
                <ActionLink
                  href={URLS.candidates}
                  tone="outline"
                  icon={Briefcase}
                >
                  Upload Your CV
                </ActionLink>
              </div>
            </div>
            <div className="hero-media">
              <img
                src={asset("jrod-worksite.webp")}
                alt="A recruitment professional at work"
                fetchPriority="high"
              />
              <p className="hero-media__location">
                <span>USA &amp; Europe</span>
                <span>Worldwide reach</span>
              </p>
            </div>
          </div>
        </section>

        {/* Image rail */}
        <section
          className="image-rail"
          aria-label="FlockIn industries and placements"
        >
          {imageRail.map((image) => (
            <figure key={image.src}>
              <img
                src={asset(image.src)}
                alt={image.alt}
                loading="lazy"
                style={{ objectPosition: image.position }}
              />
            </figure>
          ))}
        </section>

        {/* About / Trust */}
        <section className="trust-section" aria-labelledby="trust-heading">
          <div className="section-grid section-grid--trust">
            <div className="trust-copy">
              <p className="eyebrow eyebrow--rule">Moving Forward Together</p>
              <h2 id="trust-heading">
                Quality over volume.
                <span>Every time.</span>
              </h2>
              <div className="heading-rule" aria-hidden="true" />
              <p>
                One key component of any successful hire is the quality of the
                process behind it. We would rather send two profiles we
                genuinely believe in than ten we&apos;re not sure about. A
                shortlist should be a recommendation, not a lucky dip.
              </p>
              <p>
                FlockIn Recruitment partners with businesses across the USA and
                Europe, handling the full recruitment process so you spend your
                time meeting people worth hiring — not wading through CVs.
              </p>
              <ActionLink href={URLS.values}>Our Values</ActionLink>
            </div>
            <figure className="trust-media">
              <img
                src={asset("team-trident-staff.webp")}
                alt="FlockIn recruitment team at work"
                loading="lazy"
              />
              <figcaption>USA &amp; Europe · Moving Forward Together</figcaption>
            </figure>
          </div>
        </section>

        {/* Stats band */}
        <section className="stats-band" aria-label="FlockIn key statistics">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-item__value">{stat.value}</div>
                <div className="stat-item__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialisms */}
        <section
          id="specialisms"
          className="services-section"
          aria-labelledby="specialisms-heading"
        >
          <div className="section-shell">
            <p className="eyebrow eyebrow--rule">What we place</p>
            <h2 id="specialisms-heading">Six disciplines. One standard.</h2>
            <div className="service-grid">
              {specialismCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    className={`service-card service-card--${card.tone}`}
                    href={card.href}
                    aria-label={`Learn more about ${card.title} recruitment`}
                  >
                    <img
                      src={asset(card.image)}
                      alt={card.imageAlt}
                      loading="lazy"
                      style={{ objectPosition: card.position }}
                    />
                    <span className="service-card__body">
                      <Icon size={34} weight="regular" aria-hidden="true" />
                      <h3>{card.title}</h3>
                      <span>{card.description}</span>
                      <ArrowRight
                        className="service-card__arrow"
                        size={24}
                        weight="bold"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          id="values"
          className="values-section"
          aria-labelledby="values-heading"
        >
          <div className="section-shell">
            <p className="eyebrow eyebrow--rule">How we work</p>
            <h2 id="values-heading">What we stand for.</h2>
            <div className="values-grid">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="value-card">
                    <Icon size={36} weight="regular" aria-hidden="true" />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section
          id="jobs"
          className="jobs-section"
          aria-labelledby="jobs-heading"
        >
          <div className="section-shell">
            <p className="eyebrow eyebrow--rule">Open roles</p>
            <h2 id="jobs-heading">Featured opportunities.</h2>
            <div className="jobs-grid">
              {featuredJobs.map((job) => (
                <div key={job.title} className="job-card">
                  <div className="job-card__meta">
                    <span>{job.category}</span>
                    <span>{job.location}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="job-card__desc">{job.description}</p>
                  <div className="job-card__tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="job-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="job-card__salary">{job.salary}</p>
                  <ActionLink href={job.href}>View Role</ActionLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathways — For Candidates / For Employers */}
        <section
          id="employers"
          className="pathways"
          aria-label="Candidate and employer pathways"
        >
          <div className="pathway">
            <p className="eyebrow eyebrow--light">For candidates</p>
            <h2>Your next move, handled with care.</h2>
            <p>
              We won&apos;t put you forward for roles that aren&apos;t right.
              We listen to what you actually want, then introduce you only
              where you&apos;ll genuinely thrive.
            </p>
            <ActionLink href={URLS.candidates} tone="light" icon={Briefcase}>
              Upload Your CV
            </ActionLink>
            <a
              className="pathway__contact"
              href="mailto:contact@flockinrecruitment.com"
            >
              <EnvelopeSimple size={18} aria-hidden="true" />
              contact@flockinrecruitment.com
            </a>
          </div>
          <div className="pathway">
            <p className="eyebrow eyebrow--light">For employers</p>
            <h2>Shortlists you can act on.</h2>
            <p>
              We would rather send two profiles we genuinely believe in than
              ten we&apos;re not sure about. A shortlist should be a
              recommendation, not a lucky dip.
            </p>
            <ActionLink href={URLS.contact} tone="light" icon={User}>
              Start a Search
            </ActionLink>
            <a
              className="pathway__contact"
              href="mailto:contact@flockinrecruitment.com"
            >
              <EnvelopeSimple size={18} aria-hidden="true" />
              contact@flockinrecruitment.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a
            className="footer-brand"
            href={BASE_URL}
            aria-label="FlockIn Recruitment home"
          >
            <img src={asset("team-trident-logo.png")} alt="" />
            <span>FlockIn</span>
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href={URLS.specialisms}>Specialisms</a>
            <a href={URLS.jobs}>Job Search</a>
            <a href={URLS.employers}>For Employers</a>
            <a href={URLS.values}>Values</a>
            <a href={URLS.contact}>Contact</a>
            <a href={URLS.privacy}>Privacy</a>
          </nav>

          <div className="footer-socials" aria-label="Social media">
            <a
              href={URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FlockIn Recruitment on LinkedIn"
            >
              <LinkedinLogo size={21} weight="fill" aria-hidden="true" />
            </a>
            <a
              href={URLS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FlockIn Recruitment on Facebook"
            >
              <FacebookLogo size={21} weight="fill" aria-hidden="true" />
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
            <a href={URLS.team}>Our Team</a>
            <a href={URLS.contact}>Contact</a>
            <a href={URLS.candidates}>Upload Resume</a>
            <a href={URLS.privacy}>Privacy Policy</a>
          </div>
          <div>
            <strong>Get in touch</strong>
            <a href="mailto:contact@flockinrecruitment.com">
              contact@flockinrecruitment.com
            </a>
            <a href="tel:+13239849907">
              <Phone size={16} aria-hidden="true" /> +1 323 984 9907
            </a>
            <span>Building 117-A, Al-Faisal Town, Lahore Cantt</span>
          </div>
        </div>

        <div className="footer-legal">
          <span>
            © {new Date().getFullYear()} FlockIn Recruitment. All rights
            reserved.
          </span>
          <span>Moving Forward Together</span>
        </div>
      </footer>
    </>
  );
}
