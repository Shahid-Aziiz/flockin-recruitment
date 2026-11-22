import { Link } from "react-router-dom";


export function Contact() {
  return (
    <>
      <section className="sv sv-hero ct-hero" aria-labelledby="ct-h1">
        <div className="sv-hero__in">
          <h1 id="ct-h1">Let us have <em>a conversation</em>.</h1>
          <p className="sv-lead">Hiring for a role or looking for your next move? We reply to every message within one working day.</p>
        </div>
      </section>
      <section className="sv ct-grid" id="contact">
        <div className="ct-form">
          <h2>Send a message</h2>
          <form action="https://formsubmit.co/dihahs.07@gmail.com" method="POST" className="ct-f">
            <input type="hidden" name="_subject" value="New Enquiry - FlockIn Recruitment" />
            <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="ct-row">
              <label htmlFor="name"><span>Full name *</span>
                <input id="name" name="name" type="text" placeholder="John Smith" required />
              </label>
              <label htmlFor="email"><span>Email address *</span>
                <input id="email" name="email" type="email" placeholder="john@company.com" required />
              </label>
            </div>
            <div className="ct-row">
              <label htmlFor="phone"><span>Phone number</span>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </label>
              <label htmlFor="subject"><span>Subject *</span>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option>Recruitment Services</option>
                  <option>Executive Search</option>
                  <option>RPO</option>
                  <option>Resume Submission</option>
                  <option>General Enquiry</option>
                </select>
              </label>
            </div>
            <label htmlFor="message"><span>Message *</span>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about the role you are hiring for, or how we can help." required />
            </label>
            <div className="fb-row">
              <button className="fb fb--n" type="submit"><span>Send message</span><i>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </button>
            </div>
          </form>
        </div>
        <aside className="ct-side">
          <div className="ct-card ct-card--n">
            <h3>Contact details</h3>
            <ul>
              <li><b>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </b>
                <div>
                  <a href="tel:+13239849907">+1 323 984 9907</a><span>Monday to Friday, 9:00 AM to 6:00 PM</span>
                </div>
              </li>
              <li><b>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </b>
                <div>
                  <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a><span>We reply within one working day</span>
                </div>
              </li>
              <li><b>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </b>
                <div><span className="ct-addr">10990 Wilshire Blvd, Ste 300</span><span className="ct-addr">Los Angeles, California 90024, US</span></div>
              </li>
            </ul>
          </div>
          <div className="ct-card">
            <h3>For employers</h3>
            <p>We run the search for you: briefing, sourcing, screening and a shortlist you can act on. No bulk CVs.</p>
            <div className="fb-row">
              <Link className="fb fb--l" to="/hire-talent"><span>Start a search</span><i>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
          <div className="ct-card">
            <h3>For candidates</h3>
            <p>We only put you forward for roles that fit. Upload your CV and we will be in touch when there is a real match.</p>
            <div className="fb-row">
              <Link className="fb fb--n" to="/cv-upload"><span>Upload your CV</span><i>
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
