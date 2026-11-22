import { Link } from "react-router-dom";


export function HireTalent() {
  return (
    <>
      <section className="sv sv-hero ct-hero" aria-labelledby="ht-h1">
        <div className="sv-hero__in">
          <h1 id="ht-h1">Tell us <em>who you need</em> to hire.</h1>
          <p className="sv-lead">Share a few details about the role. A recruiter will call you within one working day to plan the search.</p>
        </div>
      </section>
      <section className="sv ct-grid" id="hire">
        <div className="ct-form">
          <h2>Send us a role</h2>
          <form action="https://formsubmit.co/dihahs.07@gmail.com" method="POST" encType="multipart/form-data" className="ct-f">
            <input type="hidden" name="_subject" value="New Hiring Request - FlockIn Recruitment" />
            <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="ct-row">
              <label htmlFor="company"><span>Company name *</span>
                <input id="company" name="company" type="text" placeholder="Acme Inc." required />
              </label>
              <label htmlFor="name"><span>Your name *</span>
                <input id="name" name="name" type="text" placeholder="John Smith" required />
              </label>
            </div>
            <div className="ct-row">
              <label htmlFor="email"><span>Work email *</span>
                <input id="email" name="email" type="email" placeholder="john@company.com" required />
              </label>
              <label htmlFor="phone"><span>Phone number</span>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </label>
            </div>
            <div className="ct-row">
              <label htmlFor="role"><span>Role you are hiring for *</span>
                <input id="role" name="role" type="text" placeholder="Senior Accountant" required />
              </label>
              <label htmlFor="loc"><span>Location or remote</span>
                <input id="loc" name="location" type="text" placeholder="Los Angeles, CA or Remote" />
              </label>
            </div>
            <div className="ct-row ct-row--3">
              <label htmlFor="size"><span>Company size</span>
                <select id="size" name="company_size">
                  <option value="">Select</option>
                  <option>1 to 10</option>
                  <option>11 to 50</option>
                  <option>51 to 200</option>
                  <option>201 to 1,000</option>
                  <option>1,000+</option>
                </select>
              </label>
              <label htmlFor="count"><span>Roles to fill</span>
                <select id="count" name="roles_to_fill">
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2 to 3</option>
                  <option>4 to 10</option>
                  <option>More than 10</option>
                </select>
              </label>
              <label htmlFor="when"><span>How soon *</span>
                <select id="when" name="timeline" required>
                  <option value="">Select</option>
                  <option>Right away</option>
                  <option>Within 30 days</option>
                  <option>In 1 to 3 months</option>
                  <option>Just exploring</option>
                </select>
              </label>
            </div>
            <label htmlFor="service"><span>What do you need help with?</span>
              <select id="service" name="service">
                <option value="">Select</option>
                <option>360° Recruitment</option>
                <option>RPO Support</option>
                <option>AI-Powered Talent Acquisition</option>
                <option>Administration Assistance</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label htmlFor="message"><span>About the role *</span>
              <textarea id="message" name="message" rows="5" placeholder="What the person will do, the team, must have skills, salary range if you can share it." required />
            </label>
            <label htmlFor="jd" className="ct-file"><span>Job description (optional)</span>
              <input id="jd" name="attachment" type="file" accept=".pdf,.doc,.docx" />
            </label>
            <p className="ct-note">By sending this you agree to our <Link to="/privacy-policy">Privacy Policy</Link>. We only use your details to reply to your request.</p>
            <div className="fb-row">
              <button className="fb fb--n" type="submit"><span>Send request</span><i>
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
            <h3>What happens next</h3>
            <ol className="ht-steps">
              <li><b>1</b>
                <div><strong>We reply within one working day</strong><span>A recruiter reads your request and gets in touch to confirm the details.</span></div>
              </li>
              <li><b>2</b>
                <div><strong>A short intake call</strong><span>We talk through the role, the team and the kind of person you need.</span></div>
              </li>
              <li><b>3</b>
                <div><strong>You get a short list</strong><span>Candidates we have already spoken to, with notes on each one.</span></div>
              </li>
            </ol>
          </div>
          <div className="ct-card">
            <h3>Prefer to talk first?</h3>
            <p>Call or email us and we will answer any questions before you send anything.</p>
            <ul className="ht-lines">
              <li>
                <a href="tel:+13239849907">+1 323 984 9907</a><span>Monday to Friday, 9:00 AM to 6:00 PM</span>
              </li>
              <li>
                <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a><span>We reply within one working day</span>
              </li>
            </ul>
          </div>
          <div className="ct-card">
            <h3>Looking for a job instead?</h3>
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
