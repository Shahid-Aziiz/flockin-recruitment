import { Briefcase, MapPin, CurrencyDollar, Scales } from "@phosphor-icons/react";

export function JobLaborEmploymentAttorney() {
  return (
    <>
      <section className="page-hero page-hero--job" aria-labelledby="job-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Legal · Colorado (Remote)</p>
          <h1 id="job-heading">Labor &amp; Employment Attorney</h1>
          <p className="page-hero__sub">Up to $275,000 DOE + Performance Bonus · Remote · Full-time</p>
        </div>
      </section>

      <section className="job-detail-section">
        <div className="section-shell job-detail-grid">
          <div className="job-detail-main">
            <div className="job-meta-bar">
              <span><MapPin size={16} aria-hidden="true" /> Colorado (Remote)</span>
              <span><Briefcase size={16} aria-hidden="true" /> Permanent</span>
              <span><CurrencyDollar size={16} aria-hidden="true" /> Up to $275,000 DOE + Bonus</span>
              <span><Scales size={16} aria-hidden="true" /> Legal</span>
            </div>

            <div className="job-body">
              <h2>Firm Overview</h2>
              <p>This is a top-tier labor and employment law practice recognised for excellence and depth across both plaintiff and defense matters. Backed by an award-winning team of accomplished attorneys, the firm has built a strong reputation for outstanding advocacy and legal counsel. You will be joining a high-calibre team that values quality of work, client relationships, and professional development.</p>

              <h2>Role Overview</h2>
              <p>We are looking for an experienced Labor &amp; Employment Attorney to join this fully remote position based in Colorado. You will advise clients on a broad range of labor and employment matters — from day-to-day compliance questions through to complex litigation — representing both plaintiffs and defendants across state and federal courts and agencies.</p>

              <h2>Key Responsibilities</h2>
              <ul>
                <li>Provide expert legal counsel on Colorado-specific statutes and federal labor and employment laws.</li>
                <li>Advise clients on workplace compliance, HR policies, and employment practices.</li>
                <li>Manage litigation case files from inception through to resolution.</li>
                <li>Represent clients in wrongful termination, discrimination, retaliation, and wage/hour disputes.</li>
                <li>Handle matters on both plaintiff and defense sides across state and federal forums.</li>
                <li>Draft pleadings, motions, briefs, and other legal documents.</li>
                <li>Conduct depositions, hearings, mediations, and trials as required.</li>
                <li>Stay current on evolving employment legislation and regulatory changes affecting clients.</li>
                <li>Build and maintain strong client relationships through responsive, high-quality counsel.</li>
              </ul>

              <h2>Requirements</h2>
              <ul>
                <li>Licensed to practice law in Colorado (required).</li>
                <li>Demonstrated experience in labor and employment law — plaintiff, defense, or both.</li>
                <li>Strong understanding of Colorado employment statutes and federal law (Title VII, FLSA, FMLA, ADA, ADEA, etc.).</li>
                <li>Experience managing litigation files independently from filing through resolution.</li>
                <li>Excellent written and oral advocacy skills.</li>
                <li>Ability to manage multiple matters and client relationships simultaneously.</li>
                <li>Self-motivated with the ability to work effectively in a fully remote environment.</li>
                <li>J.D. from an accredited law school.</li>
              </ul>

              <h2>Compensation &amp; Benefits</h2>
              <ul>
                <li>Base salary up to $275,000 depending on experience.</li>
                <li>Performance and incentive bonus.</li>
                <li>Comprehensive medical, dental, and vision coverage.</li>
                <li>401(k) retirement plan.</li>
                <li>Generous PTO and paid holidays.</li>
                <li>Fully remote — work from anywhere in Colorado.</li>
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
                <input type="hidden" name="_subject" value="Job Application: Labor & Employment Attorney" />
                <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="position" value="Labor & Employment Attorney" />

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
                    <label htmlFor="bar_state">Bar admission state(s) <span aria-hidden="true">*</span></label>
                    <input id="bar_state" name="bar_state" type="text" required placeholder="e.g. Colorado" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="university">Law School <span aria-hidden="true">*</span></label>
                  <input id="university" name="university" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="resume">Resume (PDF) <span aria-hidden="true">*</span></label>
                  <input id="resume" name="resume" type="file" accept=".pdf" required />
                </div>
                <div className="form-field">
                  <label htmlFor="experience">Relevant experience <span aria-hidden="true">*</span></label>
                  <textarea id="experience" name="experience" rows={4} placeholder="Briefly describe your labor & employment law experience…" required />
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
