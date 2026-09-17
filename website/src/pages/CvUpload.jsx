import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UploadSimple } from "@phosphor-icons/react";
import { GAS_ENDPOINT } from "../constants";

export function CvUpload() {
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

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
      <section className="page-hero" aria-labelledby="cv-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">For candidates</p>
          <h1 id="cv-heading">Submit your resume.</h1>
          <p className="page-hero__sub">We read every resume we receive and only get in touch when there&apos;s a genuine match. No spam, no generic job alerts.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-grid">
          <div className="contact-form-col">
            <h2>Your details</h2>

            {error && <p className="form-error" role="alert">{error}</p>}

            <form ref={formRef} onSubmit={handleSubmit} className="page-form">
              <fieldset className="form-fieldset">
                <legend>Personal information</legend>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First name <span aria-hidden="true">*</span></label>
                    <input id="firstName" name="firstName" type="text" placeholder="John" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last name <span aria-hidden="true">*</span></label>
                    <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
                  <input id="email" name="email" type="email" placeholder="john@email.com" required />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone number <span aria-hidden="true">*</span></label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
                <div className="form-field">
                  <label htmlFor="address">Location</label>
                  <textarea id="address" name="address" rows={2} placeholder="City, Country" />
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Professional information</legend>
                <div className="form-field">
                  <label htmlFor="currentPosition">Current position</label>
                  <input id="currentPosition" name="currentPosition" type="text" placeholder="e.g. Senior Software Engineer" />
                </div>
                <div className="form-field">
                  <label htmlFor="experience">Years of experience</label>
                  <select id="experience" name="experience">
                    <option value="">Select experience level</option>
                    <option value="0-1 years">0 to 1 years</option>
                    <option value="1-3 years">1 to 3 years</option>
                    <option value="3-5 years">3 to 5 years</option>
                    <option value="5-10 years">5 to 10 years</option>
                    <option value="10+ years">10 or more years</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="skills">Key skills</label>
                  <textarea id="skills" name="skills" rows={3} placeholder="e.g. Project Management, JavaScript, Financial Modelling" />
                </div>
                <div className="form-field">
                  <label htmlFor="desiredPosition">Desired position</label>
                  <input id="desiredPosition" name="desiredPosition" type="text" placeholder="e.g. Head of Engineering, Finance Manager" />
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Resume upload</legend>
                <div className="form-field">
                  <label htmlFor="cvFile">Resume / CV <span aria-hidden="true">*</span></label>
                  <div className={`file-upload-wrapper ${fileName ? "has-file" : ""}`}>
                    <input id="cvFile" name="cvFile" type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
                    <div className="file-upload-ui">
                      <UploadSimple size={24} aria-hidden="true" />
                      <span>{fileName || "Click to upload PDF or Word document (max 5 MB)"}</span>
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="coverLetter">Cover letter</label>
                  <textarea id="coverLetter" name="coverLetter" rows={5} placeholder="Tell us about yourself and what you're looking for…" />
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Preferences</legend>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="location">Preferred location</label>
                    <select id="location" name="location">
                      <option value="">Any location</option>
                      <option value="United States">United States</option>
                      <option value="Europe">Europe</option>
                      <option value="Remote">Remote</option>
                      <option value="Open to anywhere">Open to anywhere</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="availability">Availability</label>
                    <select id="availability" name="availability">
                      <option value="">Select availability</option>
                      <option value="Immediate">Immediate</option>
                      <option value="2 weeks notice">2 weeks notice</option>
                      <option value="1 month notice">1 month notice</option>
                      <option value="3 months notice">3 months notice</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <div className="form-field form-field--checkbox">
                <label className="checkbox-label">
                  <input type="checkbox" name="privacyConsent" required />
                  <span>I consent to FlockIn Recruitment processing my personal data in accordance with their <a href="/privacy-policy">privacy policy</a>. <span aria-hidden="true">*</span></span>
                </label>
              </div>

              <div className="form-field form-field--checkbox">
                <label className="checkbox-label">
                  <input type="checkbox" name="marketingConsent" />
                  <span>I&apos;d like to receive updates about job opportunities and recruitment insights.</span>
                </label>
              </div>

              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </div>

          <aside className="contact-info-col">
            <div className="contact-info-card">
              <h3>What happens next?</h3>
              <ul className="info-list">
                <li>We review every CV we receive personally.</li>
                <li>If there&apos;s a current match, we&apos;ll contact you within 2 working days.</li>
                <li>If not, we keep your profile on file for future roles.</li>
                <li>We never share your details without your consent.</li>
              </ul>
            </div>
            <div className="contact-info-card">
              <h3>Resume tips</h3>
              <ul className="info-list">
                <li>Keep it to 2 pages maximum.</li>
                <li>Lead with your most recent experience.</li>
                <li>Include specific achievements, not just responsibilities.</li>
                <li>PDF format is preferred.</li>
              </ul>
            </div>
            <div className="contact-info-card">
              <h3>Prefer to call?</h3>
              <p>Call us on <a href="tel:+13239849907">+1 323 984 9907</a> or email <a href="mailto:contact@flockinrecruitment.com">contact@flockinrecruitment.com</a> and we&apos;ll get back to you.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
