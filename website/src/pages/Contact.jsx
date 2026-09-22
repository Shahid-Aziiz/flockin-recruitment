import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { URLS } from "../constants";
import { ActionLink } from "../Layout";

export function Contact() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Get in touch</p>
          <h1 id="contact-heading">Let&apos;s have a conversation.</h1>
          <p className="page-hero__sub">Hiring for a role or looking for your next move? We respond to every enquiry within one working day.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-grid">
          <div className="contact-form-col">
            <h2>Send a message</h2>
            <form
              action="https://formsubmit.co/dihahs.07@gmail.com"
              method="POST"
              className="page-form"
            >
              <input type="hidden" name="_subject" value="New Enquiry — FlockIn Recruitment" />
              <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-field">
                <label htmlFor="name">Full name <span aria-hidden="true">*</span></label>
                <input id="name" name="name" type="text" placeholder="John Smith" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="Recruitment Services">Recruitment Services</option>
                  <option value="Executive Search">Executive Search</option>
                  <option value="RPO">RPO</option>
                  <option value="Resume Submission">Resume Submission</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about the role you're hiring for, or how we can help…" required />
              </div>

              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>

          <aside className="contact-info-col">
            <div className="contact-info-card">
              <h3>Contact details</h3>
              <ul className="contact-details-list">
                <li>
                  <Phone size={18} aria-hidden="true" />
                  <div>
                    <a href="tel:+13239849907">+1 323 984 9907</a>
                    <span>Monday to Friday, 9:00 AM – 6:00 PM</span>
                  </div>
                </li>
                <li>
                  <EnvelopeSimple size={18} aria-hidden="true" />
                  <div>
                    <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a>
                    <span>Reply within one working day</span>
                  </div>
                </li>
                <li>
                  <MapPin size={18} aria-hidden="true" />
                  <div>
                    <span>10990 Wilshire Blvd, Ste 300</span>
                    <span>Los Angeles, California 90024, US</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-info-card">
              <h3>For Employers</h3>
              <p>We handle the full search process — briefing, sourcing, screening, and presenting a shortlist you can act on. No bulk CVs.</p>
              <ActionLink href={URLS.contact}>Start a Search</ActionLink>
            </div>

            <div className="contact-info-card">
              <h3>For Candidates</h3>
              <p>We only put you forward for roles that genuinely fit. Upload your CV and we&apos;ll be in touch when there&apos;s a real match.</p>
              <ActionLink href={URLS.candidates}>Upload Your CV</ActionLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
