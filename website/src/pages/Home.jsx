import {
  ArrowRight,
  Briefcase,
  Code,
  CurrencyDollar,
  EnvelopeSimple,
  Factory,
  Heart,
  Heartbeat,
  Scales,
  Shield,
  Star,
  User,
  Wrench,
} from "@phosphor-icons/react";
import { URLS, asset } from "../constants";
import { ActionLink } from "../Layout";

const imageRail = [
  { src: "port-fourchon-dusk.webp", alt: "Offshore vessels at dusk", position: "50% 57%" },
  { src: "solar-jobs.jpg", alt: "Energy professionals at a solar site", position: "50% 50%" },
  { src: "david-dewar-ursa-tlp.webp", alt: "Professional at an illuminated platform", position: "61% 50%" },
  { src: "aerospace-jobs.jpg", alt: "Aerospace technician working on an aircraft", position: "50% 50%" },
  { src: "allan-cortez-cassio-peneluppi-offshore.webp", alt: "Two professionals at a worksite", position: "46% 48%" },
];

const specialismCards = [
  { title: "Technology", description: "Engineering, data, product, and cyber across the USA and Europe.", href: URLS.technology, image: "aerospace-jobs.jpg", imageAlt: "Technology professionals at work", position: "50% 50%", icon: Code, tone: "deep" },
  { title: "Finance", description: "From financial analysts to CFOs across all verticals.", href: URLS.finance, image: "direct-placement.jpg", imageAlt: "Finance professionals in a meeting", position: "58% 50%", icon: CurrencyDollar, tone: "steel" },
  { title: "Legal", description: "In-house counsel, compliance, and regulatory specialists.", href: URLS.legal, image: "early-morning-q5k.webp", imageAlt: "Legal professionals at work", position: "50% 50%", icon: Scales, tone: "deep" },
  { title: "Engineering", description: "Technical, infrastructure, and operations talent.", href: URLS.engineering, image: "brandon-ward-worksite.webp", imageAlt: "Engineering professional at a worksite", position: "100% 50%", icon: Wrench, tone: "steel" },
  { title: "Healthcare", description: "Clinical professionals and health-tech talent.", href: URLS.healthcare, image: "veteran-support.webp", imageAlt: "Healthcare professional", position: "0% 48%", icon: Heartbeat, tone: "deep" },
  { title: "Manufacturing", description: "Production, operations, and supply chain talent across the USA and Europe.", href: URLS.manufacturing, image: "offshore-crew.webp", imageAlt: "Manufacturing crew members at work", position: "50% 40%", icon: Factory, tone: "steel" },
];

const stats = [
  { value: "20+", label: "Placements Made" },
  { value: "10+", label: "Companies Served" },
  { value: "48hr", label: "Avg Response Time" },
  { value: "2", label: "Continents Covered" },
];

const values = [
  { icon: Shield, title: "Honesty", description: "We tell clients when a role is hard to fill, and we tell candidates when they're not the right fit. Straight feedback saves everyone time and builds trust that lasts beyond a single placement." },
  { icon: Star, title: "Quality Over Volume", description: "We'd rather send two candidates we believe in than ten we're not sure about. Every CV we put forward has been reviewed and spoken to. No bulk-applying on your behalf." },
  { icon: Heart, title: "Long-Term Thinking", description: "We care about whether the placement works out, not just whether it happens. A hire that doesn't last is bad for the client, bad for the candidate, and bad for us." },
];

const featuredJobs = [
  {
    title: "Packaging Sales Representative",
    category: "Manufacturing",
    location: "Remote (TX)",
    description: "Join a growing corrugated packaging manufacturer serving industrial, logistics, and food & beverage sectors across Texas. Drive new business and manage accounts in a defined territory with uncapped commission potential.",
    tags: ["Sales", "Corrugated", "Remote", "Permanent"],
    salary: "Base + uncapped commission — DOE",
    href: "/job-packaging-sales",
  },
  {
    title: "Business Unit Manager — Aerospace",
    category: "Engineering",
    location: "Orange County, CA",
    description: "Lead all aspects of an aerospace manufacturing business unit: production scheduling, quality, safety, and P&L ownership. On-site role with cross-functional leadership across engineering, supply chain, and finance.",
    tags: ["Aerospace", "Manufacturing", "Leadership", "Permanent"],
    salary: "$175,000 – $200,000 / year",
    href: "/job-aerospace-manager",
  },
];

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--rule">Specialist Recruitment · USA &amp; Europe</p>
            <h1 id="hero-heading">
              <span>We&apos;re here to make</span>
              <span>hiring better.</span>
            </h1>
            <p className="hero-copy__intro">
              FlockIn Recruitment partners with businesses across the USA and Europe to connect them
              with the right talent in Tech, Finance, Legal, Engineering, and Healthcare. We handle
              the full process so you spend your time meeting people worth hiring.
            </p>
            <div className="hero-actions" aria-label="Choose your path">
              <ActionLink href={URLS.contact} icon={User}>Hire Talent</ActionLink>
              <ActionLink href={URLS.candidates} tone="outline" icon={Briefcase}>Upload Your CV</ActionLink>
            </div>
          </div>
          <div className="hero-media">
            <img src={asset("jrod-worksite.webp")} alt="A recruitment professional at work" fetchPriority="high" />
            <p className="hero-media__location">
              <span>USA &amp; Europe</span>
              <span>Worldwide reach</span>
            </p>
          </div>
        </div>
      </section>

      <section className="image-rail" aria-label="FlockIn industries and placements">
        {imageRail.map((image) => (
          <figure key={image.src}>
            <img src={asset(image.src)} alt={image.alt} loading="lazy" style={{ objectPosition: image.position }} />
          </figure>
        ))}
      </section>

      <section className="trust-section" aria-labelledby="trust-heading">
        <div className="section-grid section-grid--trust">
          <div className="trust-copy">
            <p className="eyebrow eyebrow--rule">Moving Forward Together</p>
            <h2 id="trust-heading">Quality over volume.<span>Every time.</span></h2>
            <div className="heading-rule" aria-hidden="true" />
            <p>One key component of any successful hire is the quality of the process behind it. We would rather send two profiles we genuinely believe in than ten we&apos;re not sure about. A shortlist should be a recommendation, not a lucky dip.</p>
            <p>FlockIn Recruitment partners with businesses across the USA and Europe, handling the full recruitment process so you spend your time meeting people worth hiring — not wading through CVs.</p>
            <ActionLink href={URLS.values}>Our Values</ActionLink>
          </div>
          <figure className="trust-media">
            <img src={asset("team-trident-staff.webp")} alt="FlockIn recruitment team at work" loading="lazy" />
            <figcaption>USA &amp; Europe · Moving Forward Together</figcaption>
          </figure>
        </div>
      </section>

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

      <section id="specialisms" className="services-section" aria-labelledby="specialisms-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">What we place</p>
          <h2 id="specialisms-heading">Six disciplines. One standard.</h2>
          <div className="service-grid">
            {specialismCards.map((card) => {
              const Icon = card.icon;
              return (
                <a key={card.title} className={`service-card service-card--${card.tone}`} href={card.href} aria-label={`Learn more about ${card.title} recruitment`}>
                  <img src={asset(card.image)} alt={card.imageAlt} loading="lazy" style={{ objectPosition: card.position }} />
                  <span className="service-card__body">
                    <Icon size={34} weight="regular" aria-hidden="true" />
                    <h3>{card.title}</h3>
                    <span>{card.description}</span>
                    <ArrowRight className="service-card__arrow" size={24} weight="bold" aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="values" className="values-section" aria-labelledby="values-heading">
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

      <section id="jobs" className="jobs-section" aria-labelledby="jobs-heading">
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
                  {job.tags.map((tag) => <span key={tag} className="job-tag">{tag}</span>)}
                </div>
                <p className="job-card__salary">{job.salary}</p>
                <ActionLink href={job.href}>View Role</ActionLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="employers" className="pathways" aria-label="Candidate and employer pathways">
        <div className="pathway">
          <p className="eyebrow eyebrow--light">For candidates</p>
          <h2>Your next move, handled with care.</h2>
          <p>We won&apos;t put you forward for roles that aren&apos;t right. We listen to what you actually want, then introduce you only where you&apos;ll genuinely thrive.</p>
          <ActionLink href={URLS.candidates} tone="light" icon={Briefcase}>Upload Your CV</ActionLink>
          <a className="pathway__contact" href="mailto:contact@flockinrecruitment.com">
            <EnvelopeSimple size={18} aria-hidden="true" />
            contact@flockinrecruitment.com
          </a>
        </div>
        <div className="pathway">
          <p className="eyebrow eyebrow--light">For employers</p>
          <h2>Shortlists you can act on.</h2>
          <p>We would rather send two profiles we genuinely believe in than ten we&apos;re not sure about. A shortlist should be a recommendation, not a lucky dip.</p>
          <ActionLink href={URLS.contact} tone="light" icon={User}>Start a Search</ActionLink>
          <a className="pathway__contact" href="mailto:contact@flockinrecruitment.com">
            <EnvelopeSimple size={18} aria-hidden="true" />
            contact@flockinrecruitment.com
          </a>
        </div>
      </section>
    </>
  );
}
