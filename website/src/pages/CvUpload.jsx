import { UploadBox } from "../components/UploadBox";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GAS_ENDPOINT } from "../constants";

export function CvUpload() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = formRef.current;
    const file = form.cvFile.files[0];

    try {
      const base64File = file ? await toBase64(file) : null;

      const payload = {
        type: "resume",
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        currentPosition: form.currentPosition.value,
        experience: form.experience.value,
        skills: form.skills.value,
        desiredPosition: form.desiredPosition.value,
        location: form.location.value,
        availability: form.availability.value,
        coverLetter: form.coverLetter.value,
        fileName: file ? file.name : "",
        base64File,
      };

      await fetch(GAS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      navigate("/thankyou");
    } catch {
      setError("Something went wrong. Please email your CV directly to contact@flockinrecruitment.com");
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="sv sv-hero ct-hero" aria-labelledby="cv-h1">
        <div className="sv-hero__in">
          <h1 id="cv-h1">Send us <em>your CV</em>.</h1>
          <p className="sv-lead">We read every CV we receive and only get in touch when there is a real match. No spam and no generic job alerts.</p>
        </div>
      </section>
      <section className="sv ct-grid" id="cv">
        <div className="ct-form">
          <h2>Your details</h2>
          <form className="ct-f cv-f" ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
              <legend>About you</legend>
              <div className="ct-row">
                <label htmlFor="firstName"><span>First name *</span>
                  <input id="firstName" name="firstName" type="text" placeholder="John" required />
                </label>
                <label htmlFor="lastName"><span>Last name *</span>
                  <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
                </label>
              </div>
              <div className="ct-row">
                <label htmlFor="email"><span>Email address *</span>
                  <input id="email" name="email" type="email" placeholder="john@email.com" required />
                </label>
                <label htmlFor="phone"><span>Phone number *</span>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </label>
              </div>
              <label htmlFor="address"><span>Location</span>
                <input id="address" name="address" type="text" placeholder="City, Country" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Your work</legend>
              <div className="ct-row">
                <label htmlFor="currentPosition"><span>Current position</span>
                  <input id="currentPosition" name="currentPosition" type="text" placeholder="Senior Software Engineer" />
                </label>
                <label htmlFor="experience"><span>Years of experience</span>
                  <select id="experience" name="experience">
                    <option value="">Select</option>
                    <option>0 to 1 years</option>
                    <option>1 to 3 years</option>
                    <option>3 to 5 years</option>
                    <option>5 to 10 years</option>
                    <option>10 or more years</option>
                  </select>
                </label>
              </div>
              <label htmlFor="skills"><span>Key skills</span>
                <textarea id="skills" name="skills" rows="3" placeholder="For example: project management, JavaScript, financial modelling" />
              </label>
              <label htmlFor="desiredPosition"><span>Role you want next</span>
                <input id="desiredPosition" name="desiredPosition" type="text" placeholder="Head of Engineering, Finance Manager" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Your CV</legend><UploadBox id="cvFile" name="cvFile" accept=".pdf,.doc,.docx" required idle="Click to upload your CV" hint="PDF or Word, up to 5 MB">
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
                </svg>
              </UploadBox>
              <label htmlFor="coverLetter"><span>Cover letter (optional)</span>
                <textarea id="coverLetter" name="coverLetter" rows="4" placeholder="Tell us about yourself and what you are looking for." />
              </label>
            </fieldset>
            <fieldset>
              <legend>What you are looking for</legend>
              <div className="ct-row">
                <label htmlFor="location"><span>Preferred location</span>
                  <select id="location" name="location">
                    <option value="">Any location</option>
                    <option>United States</option>
                    <option>Europe</option>
                    <option>Remote</option>
                    <option>Open to anywhere</option>
                  </select>
                </label>
                <label htmlFor="availability"><span>Availability</span>
                  <select id="availability" name="availability">
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>2 weeks notice</option>
                    <option>1 month notice</option>
                    <option>3 months notice</option>
                    <option>Flexible</option>
                  </select>
                </label>
              </div>
            </fieldset>
            <label className="cv-check">
              <input type="checkbox" name="privacyConsent" required /><span>I agree to FlockIn Recruitment using my details as set out in the <Link to="/privacy-policy">Privacy Policy</Link>. *</span>
            </label>
            <label className="cv-check">
              <input type="checkbox" name="marketingConsent" /><span>Send me updates about job openings and hiring news.</span>
            </label>
            {error && <p className="cv-error" role="alert">{error}</p>}
        <div className="fb-row">
              <button className="fb fb--n" type="submit" disabled={submitting}><span>{submitting ? "Sending..." : "Send my CV"}</span><i>
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
            <ul className="cv-list cv-list--d">
              <li><span className="cv-dot" /><span>We read every CV we receive ourselves.</span></li>
              <li><span className="cv-dot" /><span>If there is a match right now, we contact you within 2 working days.</span></li>
              <li><span className="cv-dot" /><span>If not, we keep your profile for future roles.</span></li>
              <li><span className="cv-dot" /><span>We never share your details without your consent.</span></li>
            </ul>
          </div>
          <div className="ct-card">
            <h3>CV tips</h3>
            <ul className="cv-list">
              <li><span className="cv-dot" /><span>Keep it to 2 pages at most.</span></li>
              <li><span className="cv-dot" /><span>Start with your most recent job.</span></li>
              <li><span className="cv-dot" /><span>Include results, not only duties.</span></li>
              <li><span className="cv-dot" /><span>PDF is the best format.</span></li>
            </ul>
          </div>
          <div className="ct-card">
            <h3>Prefer to call?</h3>
            <p>Call or email us and we will help you send your details.</p>
            <ul className="ht-lines">
              <li>
                <a href="tel:+13239849907">+1 323 984 9907</a><span>Monday to Friday, 9:00 AM to 6:00 PM</span>
              </li>
              <li>
                <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a><span>We reply within one working day</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
