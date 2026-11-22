import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Services() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".sv-card"));
    const stack = document.querySelector(".sv-stack");
    if (!stack || !cards.length) return undefined;
    const eq = () => {
      if (window.innerWidth <= 900) {
        cards.forEach((c) => { c.style.minHeight = ""; });
        stack.style.removeProperty("--pad");
        return;
      }
      let m = 0;
      cards.forEach((c) => { c.style.minHeight = "0"; m = Math.max(m, c.offsetHeight); });
      cards.forEach((c) => { c.style.minHeight = m + "px"; });
      stack.style.setProperty("--pad", Math.round(window.innerHeight * 0.2) + "px");
    };
    window.addEventListener("resize", eq);
    window.addEventListener("load", eq);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(eq);
    eq();
    return () => {
      window.removeEventListener("resize", eq);
      window.removeEventListener("load", eq);
      cards.forEach((c) => { c.style.minHeight = ""; });
    };
  }, []);

  return (
    <>
      <section className="sv sv-hero" aria-labelledby="sv-h1">
        <div className="sv-hero__in">
          <h1 id="sv-h1">Hiring support that fits <em>how your team works</em>.</h1>
          <p className="sv-lead">Founded in 2024. Headquartered in Los Angeles. Serving the USA and Europe.</p>
          <div className="fb-row">
            <Link className="fb fb--l" to="/hire-talent"><span>Send us a role</span><i>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </Link>
            <Link className="fb fb--n" to="/cv-upload"><span>Upload your CV</span><i>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <svg className="sv-blocks" viewBox="0 0 220 220" aria-hidden="true">
          <rect x="0" y="170" width="50" height="50" fill="#d4f000" />
          <rect x="55" y="170" width="50" height="50" fill="#d4f000" />
          <rect x="110" y="170" width="50" height="50" fill="#111f33" />
          <rect x="165" y="170" width="50" height="50" fill="#d4f000" />
          <rect x="55" y="115" width="50" height="50" fill="#111f33" />
          <rect x="110" y="115" width="50" height="50" fill="#d4f000" />
          <rect x="165" y="115" width="50" height="50" fill="#d4f000" />
          <rect x="110" y="60" width="50" height="50" fill="#d4f000" />
          <rect x="165" y="60" width="50" height="50" fill="#111f33" />
          <rect x="165" y="5" width="50" height="50" fill="#d4f000" />
        </svg>
      </section>
      <section className="sv sv-block sv-stackwrap" id="services" aria-labelledby="sv-h2a">
        <h2 id="sv-h2a">Four ways we can help.</h2>
        <div className="sv-stack">
          <article className="sv-card sv-card--w" id="s1" style={{ "--k": "0" }}><span className="sv-tab"><b className="tl">360° Recruitment</b><b className="ts">360° Recruitment</b></span>
            <div className="sv-card__l">
              <h3>360° Recruitment</h3>
              <p className="sv-sub">Full cycle hiring for your open roles</p>
              <p className="sv-sum">We run the whole hiring process for a role, from the first call to the signed offer, so it keeps moving.</p>
              <div className="fb-row">
                <Link className="fb fb--n" to="/contact"><span>Talk to us</span><i>
                    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
            <ol className="sv-steps">
              <li><span className="sv-n">1</span>
                <div><strong>Role intake</strong>
                  <p>We talk through the role, the team and the kind of person you need, and write it down.</p>
                </div>
              </li>
              <li><span className="sv-n">2</span>
                <div><strong>Sourcing</strong>
                  <p>We search beyond job ads and reach people who are not looking yet.</p>
                </div>
              </li>
              <li><span className="sv-n">3</span>
                <div><strong>Screening and shortlist</strong>
                  <p>We speak to every candidate first. You get a short list with notes on each person.</p>
                </div>
              </li>
              <li><span className="sv-n">4</span>
                <div><strong>Interviews</strong>
                  <p>We book the interviews, brief the candidates and collect your feedback.</p>
                </div>
              </li>
              <li><span className="sv-n">5</span>
                <div><strong>Offer and follow-up</strong>
                  <p>We help with the offer and stay in touch after the start date.</p>
                </div>
              </li>
            </ol>
          </article>
          <article className="sv-card sv-card--n" id="s2" style={{ "--k": "1" }}><span className="sv-tab"><b className="tl">RPO Support</b><b className="ts">RPO Support</b></span>
            <div className="sv-card__l">
              <h3>RPO Support</h3>
              <p className="sv-sub">Hiring capacity without permanent headcount</p>
              <p className="sv-sum">When you need extra hiring help for a while, a recruiter or small team works inside your company, then scales back when you do not need them.</p>
              <div className="fb-row">
                <Link className="fb fb--l" to="/contact"><span>Talk to us</span><i>
                    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
            <ol className="sv-steps">
              <li><span className="sv-n">1</span>
                <div><strong>Capacity planning</strong>
                  <p>We look at how many roles you have and how fast you need them filled, then agree how much help you need.</p>
                </div>
              </li>
              <li><span className="sv-n">2</span>
                <div><strong>Recruiter or team</strong>
                  <p>You get a named recruiter, or a small team for bigger volumes, working in your tools and process.</p>
                </div>
              </li>
              <li><span className="sv-n">3</span>
                <div><strong>Tools and reporting</strong>
                  <p>We use your systems. We agree response times and reporting up front.</p>
                </div>
              </li>
              <li><span className="sv-n">4</span>
                <div><strong>Pipeline</strong>
                  <p>Sourcing, screening and scheduling run all the time, and you can see where every role stands.</p>
                </div>
              </li>
              <li><span className="sv-n">5</span>
                <div><strong>Handover</strong>
                  <p>Everything we build stays with you when we finish.</p>
                </div>
              </li>
            </ol>
          </article>
          <article className="sv-card sv-card--l" id="s3" style={{ "--k": "2" }}><span className="sv-tab"><b className="tl">AI-Powered Talent Acquisition</b><b className="ts">AI Sourcing</b></span>
            <div className="sv-card__l">
              <h3>AI-Powered Talent Acquisition</h3>
              <p className="sv-sub">A wider search in less time</p>
              <p className="sv-sum">We use AI to search more widely and reach a first interview sooner. A recruiter checks everyone before you see them.</p>
              <div className="fb-row">
                <Link className="fb fb--n" to="/contact"><span>Talk to us</span><i>
                    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
            <ol className="sv-steps">
              <li><span className="sv-n">1</span>
                <div><strong>Market mapping</strong>
                  <p>We look at where candidates are, who employs them and what they are paid. If a role will be hard to fill, we tell you early.</p>
                </div>
              </li>
              <li><span className="sv-n">2</span>
                <div><strong>Wider search</strong>
                  <p>AI finds people with related job titles and career paths who still match the role.</p>
                </div>
              </li>
              <li><span className="sv-n">3</span>
                <div><strong>Ranking</strong>
                  <p>Candidates are ranked against your requirements, so we start with the strongest.</p>
                </div>
              </li>
              <li><span className="sv-n">4</span>
                <div><strong>Outreach</strong>
                  <p>Messages are written for the person and the role, with regular follow-up.</p>
                </div>
              </li>
              <li><span className="sv-n">5</span>
                <div><strong>Human review</strong>
                  <p>A recruiter speaks to every candidate and writes the summary you read.</p>
                </div>
              </li>
            </ol>
          </article>
          <article className="sv-card sv-card--w" id="s4" style={{ "--k": "3" }}><span className="sv-tab"><b className="tl">Administration Assistance</b><b className="ts">Admin Support</b></span>
            <div className="sv-card__l">
              <h3>Administration Assistance</h3>
              <p className="sv-sub">Support for the work around hiring</p>
              <p className="sv-sum">We take on the admin that slows hiring down, like scheduling, records and paperwork.</p>
              <div className="fb-row">
                <Link className="fb fb--n" to="/contact"><span>Talk to us</span><i>
                    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
            <ol className="sv-steps">
              <li><span className="sv-n">1</span>
                <div><strong>Interview scheduling</strong>
                  <p>We book interviews across US and European time zones and handle changes and reminders.</p>
                </div>
              </li>
              <li><span className="sv-n">2</span>
                <div><strong>Candidate records</strong>
                  <p>We keep your ATS or CRM up to date as things happen.</p>
                </div>
              </li>
              <li><span className="sv-n">3</span>
                <div><strong>Documents</strong>
                  <p>We collect, check and file CVs, references, contracts and right-to-work documents.</p>
                </div>
              </li>
              <li><span className="sv-n">4</span>
                <div><strong>Reports</strong>
                  <p>We prepare trackers and weekly updates so everyone sees the same numbers.</p>
                </div>
              </li>
              <li><span className="sv-n">5</span>
                <div><strong>Candidate updates</strong>
                  <p>We send updates and rejections quickly and politely.</p>
                </div>
              </li>
            </ol>
          </article>
        </div>
      </section>
      <section className="sv sv-proc" aria-labelledby="sv-h2b">
        <h2 id="sv-h2b">How it works.</h2>
        <div className="sv-pg">
          <div className="sv-ps" tabIndex="0"><i className="sv-plus" aria-hidden="true" /><span>01</span>
            <div className="sv-pt">
              <h3>Intake</h3>
              <p>A short call about the role, the team and the person you need.</p>
            </div>
          </div>
          <div className="sv-ps" tabIndex="0"><i className="sv-plus" aria-hidden="true" /><span>02</span>
            <div className="sv-pt">
              <h3>Source and screen</h3>
              <p>We find candidates and speak to them before anything reaches you.</p>
            </div>
          </div>
          <div className="sv-ps" tabIndex="0"><i className="sv-plus" aria-hidden="true" /><span>03</span>
            <div className="sv-pt">
              <h3>Shortlist</h3>
              <p>You get a short list. We handle scheduling and keep candidates updated.</p>
            </div>
          </div>
          <div className="sv-ps" tabIndex="0"><i className="sv-plus" aria-hidden="true" /><span>04</span>
            <div className="sv-pt">
              <h3>Offer and follow-up</h3>
              <p>We help with the offer and check in after the start date.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sv sv-block" aria-labelledby="sv-h2c">
        <h2 id="sv-h2c">Pick how you want to work with us.</h2>
        <div className="sv-grid3">
          <div className="sv-eng">
            <h3>Contingency Recruitment</h3>
            <p>You only pay when someone you hire starts. No upfront fee and no retainer. Good for single roles or small searches.</p>
            <ul>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>No fee until they start</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>90-day replacement guarantee</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>No risk to start</span>
              </li>
            </ul>
          </div>
          <div className="sv-eng">
            <h3>Embedded RPO</h3>
            <p>A recruiter or small team works with you month to month, in your process and your tools. Good for steady or high-volume hiring.</p>
            <ul>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>A named recruiter on your account</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>Scale up or down each month</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>Works in your ATS and tools</span>
              </li>
            </ul>
          </div>
          <div className="sv-eng">
            <h3>Project-Based Hiring</h3>
            <p>A fixed scope for a set group of roles, like a new office or team. We agree deliverables and timelines at the start.</p>
            <ul>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>Clear scope and deliverables</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>Good for new teams and expansion</span>
              </li>
              <li><span className="sv-tick">
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#111f33" />
                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#d4f000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span><span>Timelines agreed from day one</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sv sv-cta" aria-labelledby="sv-h2f">
        <div>
          <h2 id="sv-h2f">Send us one role. We will send back a shortlist.</h2>
          <p>No cost and no obligation. It is a sample of how we work.</p>
        </div>
        <div className="fb-row">
          <Link className="fb fb--n" to="/contact"><span>Get in touch</span><i>
              <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </i>
          </Link>
          <Link className="fb fb--w2" to="/cv-upload"><span>Upload your CV</span><i>
              <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </i>
          </Link>
        </div>
      </section>
    </>
  );
}
