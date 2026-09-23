import {
  ArrowRight,
  Briefcase,
  Buildings,
  ChartLine,
  CheckCircle,
  Code,
  CurrencyDollar,
  Factory,
  Gear,
  GraduationCap,
  Heartbeat,
  MagnifyingGlass,
  Robot,
  Scales,
  Users,
  Wrench,
} from "@phosphor-icons/react";
import { ActionLink } from "../Layout";
import { URLS } from "../constants";

const services = [
  {
    id: "full-cycle",
    icon: Briefcase,
    title: "360° Recruitment",
    subtitle: "Full cycle hiring for your open roles",
    summary: "Most hiring delays do not come from a shortage of candidates — they come from unclear role definitions, slow screening and pipelines that go quiet between stages. We take ownership of the whole cycle so an open role keeps moving from the first conversation to the signed offer.",
    steps: [
      { title: "Role Intake & Requirement Profile", body: "We start with a short conversation about the role, the team and what a strong hire actually looks like. That produces a written profile covering must-have skills, the nice-to-have list, salary range, seniority and the softer fit a job description rarely captures." },
      { title: "Sourcing Strategy", body: "Job ads reach people who are already looking. We build a targeted pipeline that includes passive candidates too, using direct search across professional networks, our own database and referral routes." },
      { title: "Screening & Shortlist", body: "Every candidate is screened against your criteria before anything reaches your desk — a real conversation, not a keyword match. You receive a short, qualified list with notes on why each person fits." },
      { title: "Interview Coordination", body: "We handle scheduling across time zones, brief candidates before each stage and collect feedback afterwards. Candidates stay engaged through the process, which is where a large share of drop-offs normally happen." },
      { title: "Offer & Follow-Up", body: "We support the offer stage, manage counter-offer risk and stay in touch after the start date so the placement holds. A hire that leaves in month three is not a hire, and we treat it that way." },
    ],
  },
  {
    id: "rpo",
    icon: Users,
    title: "RPO Support",
    subtitle: "Hiring capacity without permanent headcount",
    summary: "Hiring volume rarely arrives at a steady pace. A funding round, a new office or a busy season can double your requisitions for a quarter and leave you overstaffed the next. Embedded recruiters give you the capacity when you need it and let you scale back when you do not.",
    steps: [
      { title: "Capacity Planning", body: "We look at your requisition load, your current team and your target time to hire, then agree how much recruiting capacity the next quarter actually needs. That is a quantitative view rather than a guess." },
      { title: "Recruiter or Pod Assignment", body: "You get a named recruiter — or a small pod for higher volume — working inside your process and your tools. They join your stand-ups, use your ATS and represent your brand to candidates." },
      { title: "Process, Tools & Reporting", body: "We work inside your existing systems rather than asking you to adopt ours. Service levels, response times and reporting cadence are agreed up front." },
      { title: "Pipeline Management", body: "Sourcing, screening, scheduling and candidate communication run continuously, not in bursts. You always know where each role stands without having to chase us for it." },
      { title: "Handover & Continuity", body: "Everything we build stays with you. Pipelines, notes, market intelligence and search strings live in your systems so your team picks up from a warm start when an engagement ends." },
    ],
  },
  {
    id: "ai",
    icon: Robot,
    title: "AI-Powered Talent Acquisition",
    subtitle: "A wider search in less time",
    summary: "AI is useful in recruitment for one reason — it covers ground that a human recruiter does not have hours to cover, so the recruiter can spend those hours on conversations instead. We use it to widen the search and shorten the gap between an open role and a first interview, with a person reviewing everything that reaches you.",
    steps: [
      { title: "Market Mapping", body: "Before outreach begins we map where your candidates sit, which companies they work for, what the market pays and how deep the talent pool really is. If a role is unfillable at the current salary or location, you hear it in week one rather than month three." },
      { title: "Sourcing at Scale", body: "AI tooling widens the search well beyond the obvious names, surfacing adjacent titles, non-linear career paths and candidates who are a strong match on capability rather than job title." },
      { title: "Candidate Ranking", body: "Profiles are ranked against your requirement profile rather than a generic template. That produces a defensible order of priority and keeps recruiter attention on the top of the list." },
      { title: "Outreach & Response Handling", body: "Messaging is tailored to the candidate and the role, then followed up on a set cadence. Response rates improve when the first message is specific and drop-offs fall when follow-up is consistent." },
      { title: "Human Review on Everything You See", body: "No candidate reaches your shortlist on an algorithm's word alone. A recruiter speaks to them, checks motivation, availability and fit, and writes the summary you read." },
    ],
  },
  {
    id: "admin",
    icon: Gear,
    title: "Administration Assistance",
    subtitle: "Support for the work around hiring",
    summary: "A large share of hiring time is not spent recruiting. It goes on scheduling, chasing documents, updating records and keeping systems accurate. That work is easy to deprioritise and expensive to get wrong. We take it off your team.",
    steps: [
      { title: "Interview Scheduling", body: "We coordinate interview slots across candidates, hiring managers and panels, including across US and European time zones. Reschedules, reminders and calendar invites are handled without your team stepping in." },
      { title: "Candidate Records & System Accuracy", body: "Candidate records are kept current in your ATS or CRM, with stages, notes and outcomes logged as they happen. Clean data means your reporting is trustworthy and nothing sits forgotten at a stage." },
      { title: "Document Handling", body: "Resumes, right-to-work documents, references, contracts and signed paperwork are collected, checked for completeness and filed where your team expects to find them." },
      { title: "Reporting & Trackers", body: "Requisition trackers, pipeline reports and weekly summaries are prepared and kept up to date, so hiring managers and leadership see the same numbers without anyone building a spreadsheet by hand." },
      { title: "Candidate Communication", body: "Acknowledgements, status updates and rejections go out promptly and professionally. Candidates who are turned down well stay open to your next role and your employer brand holds up in the market." },
    ],
  },
];

const engagementModels = [
  {
    icon: ChartLine,
    title: "Contingency Recruitment",
    description: "You only pay when we make a successful placement. No upfront fees, no retainer — our fee is triggered on the candidate's start date. Best suited for individual or small-batch searches where you want maximum commercial flexibility.",
    highlights: ["No fee until the candidate starts", "90-day replacement guarantee", "Zero risk to start"],
  },
  {
    icon: Users,
    title: "Embedded RPO",
    description: "A dedicated recruiter or small pod works alongside your team on a monthly basis, inside your process and your tools. Best for steady or high-volume hiring where you need consistent capacity without permanent headcount.",
    highlights: ["Named recruiter on your account", "Scales up or down monthly", "Works in your ATS and tools"],
  },
  {
    icon: Briefcase,
    title: "Project-Based Hiring",
    description: "A fixed scope for a defined set of roles — a new office, a new function or a funding-led ramp-up. We agree deliverables, timelines and success metrics at the start so everyone knows what good looks like.",
    highlights: ["Fixed scope, clear deliverables", "Ideal for ramp-ups and expansions", "Agreed timelines from day one"],
  },
];

const industries = [
  { icon: Code, label: "Technology & IT" },
  { icon: CurrencyDollar, label: "Accounting & Finance" },
  { icon: Scales, label: "Legal" },
  { icon: Wrench, label: "Engineering" },
  { icon: Heartbeat, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Buildings, label: "Construction" },
  { icon: GraduationCap, label: "Education" },
];

const whyUs = [
  "An experienced recruiter owns your account from the first call — you are not handed off after the pitch.",
  "AI-driven sourcing widens the search beyond the obvious candidates, so you see people your job ad would never have reached.",
  "Coverage across US and European time zones, so roles keep moving outside your own working hours.",
  "Straightforward updates — you always know where each role stands without having to chase us for it.",
  "Flexible engagement terms, so you can start with one role and scale only if the work earns it.",
  "90-day replacement guarantee on every contingency placement, at no additional fee.",
];

const process = [
  { num: "01", title: "Intake", body: "A short conversation about the role, the team and what a strong hire actually looks like." },
  { num: "02", title: "Source & Screen", body: "We build a targeted pipeline and screen against your criteria before anything reaches your desk." },
  { num: "03", title: "Shortlist", body: "You get a short, qualified list. We handle scheduling and keep candidates engaged throughout." },
  { num: "04", title: "Offer & Follow-Up", body: "We support the offer stage and stay in touch after the start date so the placement holds." },
];

export function Services() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">What we do</p>
          <h1 id="services-heading">Recruitment solutions built around the way your team already hires.</h1>
          <p className="page-hero__sub">Founded in 2024. Headquartered in Los Angeles. Serving the USA and Europe.</p>
        </div>
      </section>

      {/* Services */}
      <section className="services-detail-section" aria-labelledby="our-services-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Our services</p>
          <h2 id="our-services-heading">Four ways we support your hiring.</h2>
          <div className="services-list">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <article key={svc.id} id={svc.id} className="service-detail-card">
                  <div className="service-detail-card__header">
                    <Icon size={36} weight="regular" aria-hidden="true" />
                    <div>
                      <h3>{svc.title}</h3>
                      <p className="service-detail-card__subtitle">{svc.subtitle}</p>
                    </div>
                  </div>
                  <p className="service-detail-card__summary">{svc.summary}</p>
                  <ol className="service-steps">
                    {svc.steps.map((step) => (
                      <li key={step.title}>
                        <strong>{step.title}</strong>
                        <p>{step.body}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="process-section" aria-labelledby="process-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">How we work</p>
          <h2 id="process-heading">Four stages. Clear ownership at every point.</h2>
          <div className="process-grid">
            {process.map((step) => (
              <div key={step.num} className="process-step">
                <span className="process-step__num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Engage */}
      <section className="engagement-section" aria-labelledby="engagement-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Ways to engage</p>
          <h2 id="engagement-heading">Choose the model that fits your situation.</h2>
          <div className="engagement-grid">
            {engagementModels.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.title} className="engagement-card">
                  <Icon size={32} weight="regular" aria-hidden="true" />
                  <h3>{model.title}</h3>
                  <p>{model.description}</p>
                  <ul>
                    {model.highlights.map((h) => (
                      <li key={h}>
                        <CheckCircle size={16} weight="fill" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section" aria-labelledby="industries-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Sectors covered</p>
          <h2 id="industries-heading">Eight industries. One standard.</h2>
          <div className="industries-grid">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="industry-chip">
                <Icon size={22} weight="regular" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us-section" aria-labelledby="why-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Why teams work with us</p>
          <h2 id="why-heading">A hiring partner, not a vendor at arm's length.</h2>
          <ul className="why-us-list">
            {whyUs.map((point) => (
              <li key={point}>
                <CheckCircle size={20} weight="fill" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section" aria-labelledby="cta-heading">
        <div className="section-shell services-cta-inner">
          <div>
            <h2 id="cta-heading">Send us one role and we will come back with a shortlist.</h2>
            <p>No cost. No obligation. Just a sample of what working together looks like.</p>
          </div>
          <div className="services-cta-actions">
            <ActionLink href={URLS.contact}>Get in Touch</ActionLink>
            <ActionLink href={URLS.candidates} tone="outline">Upload Your CV</ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
