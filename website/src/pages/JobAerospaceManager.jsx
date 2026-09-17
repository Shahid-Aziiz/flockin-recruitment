import { Briefcase, MapPin, CurrencyDollar, Buildings } from "@phosphor-icons/react";

export function JobAerospaceManager() {
  return (
    <>
      <section className="page-hero page-hero--job" aria-labelledby="job-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Engineering · Orange County, CA</p>
          <h1 id="job-heading">Business Unit Manager — Aerospace Manufacturing</h1>
          <p className="page-hero__sub">$175,000 – $200,000 / year · On-site · Full-time</p>
        </div>
      </section>

      <section className="job-detail-section">
        <div className="section-shell job-detail-grid">
          <div className="job-detail-main">
            <div className="job-meta-bar">
              <span><MapPin size={16} aria-hidden="true" /> Orange County, CA (on-site)</span>
              <span><Briefcase size={16} aria-hidden="true" /> Permanent</span>
              <span><CurrencyDollar size={16} aria-hidden="true" /> $175,000 – $200,000 / yr</span>
              <span><Buildings size={16} aria-hidden="true" /> Aerospace &amp; Manufacturing</span>
            </div>

            <div className="job-body">
              <h2>Role Overview</h2>
              <p>This is a senior leadership role within an established aerospace manufacturing business. You will have full accountability for business unit performance across operations, quality, safety, people, and P&amp;L. Reporting directly to senior executive leadership, your day-to-day will span production scheduling, resource allocation, financial oversight, new product introductions, and managing key customer and supplier relationships.</p>

              <h2>Key Responsibilities</h2>
              <ul>
                <li>Oversee all aspects of the aerospace manufacturing business unit for efficiency, customer satisfaction, and profitable growth.</li>
                <li>Manage production schedules, quality standards, and safety practices.</li>
                <li>Coordinate with engineering, supply chain, and finance teams across the organisation.</li>
                <li>Lead and develop a cross-functional team with clear performance goals, coaching, and outcome management.</li>
                <li>Monitor KPIs and operational metrics to identify and drive improvement opportunities.</li>
                <li>Review financial reports, manage budgets, and own the business unit P&amp;L.</li>
                <li>Support new product introductions from concept through to production readiness.</li>
                <li>Maintain strong relationships with aerospace customers and key suppliers.</li>
                <li>Ensure compliance with regulatory requirements and aerospace certification standards.</li>
                <li>Prepare reports and strategic updates for senior leadership.</li>
              </ul>

              <h2>Requirements</h2>
              <ul>
                <li>Proven experience in aerospace or advanced manufacturing operations at business unit, department, or plant leadership level.</li>
                <li>Demonstrated ability to manage production, quality, and safety processes at scale.</li>
                <li>Familiarity with lean manufacturing or continuous improvement methodologies (Six Sigma, Kaizen).</li>
                <li>Strong financial acumen — budgeting, cost control, and P&amp;L interpretation.</li>
                <li>Demonstrated people leadership: team building, performance management, coaching, and cross-functional collaboration.</li>
                <li>Excellent communication and stakeholder management skills.</li>
                <li>Bachelor's degree in Engineering, Business, Operations Management, or a related field (advanced degree a plus).</li>
                <li>Knowledge of aerospace industry standards (AS9100, ITAR) highly beneficial.</li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>Comfortable with on-site, hands-on leadership in Orange County, CA.</li>
              </ul>

              <h2>Why Apply</h2>
              <ul>
                <li>Senior leadership role with full business unit accountability.</li>
                <li>Competitive compensation of $175,000–$200,000 reflecting the seniority and scope of the role.</li>
                <li>Work within a respected aerospace manufacturing environment.</li>
                <li>Direct line to senior leadership with real influence over strategy and direction.</li>
              </ul>
            </div>

            <div className="job-apply-block">
              <h2>Apply for this role</h2>
              <form
                action="https://formsubmit.co/contact@flockinrecruitment.com"
                method="POST"
                encType="multipart/form-data"
                className="page-form"
              >
                <input type="hidden" name="_subject" value="Job Application: Business Unit Manager – Aerospace Manufacturing" />
                <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="position" value="Business Unit Manager – Aerospace Manufacturing" />

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="first_name">First name <span aria-hidden="true">*</span></label>
                    <input id="first_name" name="first_name" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="last_name">Last name <span aria-hidden="true">*</span></label>
                    <input id="last_name" name="last_name" type="text" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone <span aria-hidden="true">*</span></label>
                    <input id="phone" name="phone" type="tel" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="city">City <span aria-hidden="true">*</span></label>
                    <input id="city" name="city" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="country">Country <span aria-hidden="true">*</span></label>
                    <input id="country" name="country" type="text" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="desired_salary">Desired salary <span aria-hidden="true">*</span></label>
                    <input id="desired_salary" name="desired_salary" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="willing_to_relocate">Willing to relocate?</label>
                    <select id="willing_to_relocate" name="willing_to_relocate">
                      <option value="Maybe">Maybe</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="university">College / University <span aria-hidden="true">*</span></label>
                  <input id="university" name="university" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="resume">Resume (PDF) <span aria-hidden="true">*</span></label>
                  <input id="resume" name="resume" type="file" accept=".pdf" required />
                </div>
                <div className="form-field">
                  <label htmlFor="experience">Relevant experience <span aria-hidden="true">*</span></label>
                  <textarea id="experience" name="experience" rows={4} placeholder="Briefly describe your relevant experience…" required />
                </div>

                <button type="submit" className="form-submit">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
