import { Briefcase, MapPin, CurrencyDollar, Buildings } from "@phosphor-icons/react";

export function JobPackagingSales() {
  return (
    <>
      <section className="page-hero page-hero--job" aria-labelledby="job-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Manufacturing · Remote (TX)</p>
          <h1 id="job-heading">Packaging Sales Representative</h1>
          <p className="page-hero__sub">Base salary + uncapped commission — DOE · Reports to Owner</p>
        </div>
      </section>

      <section className="job-detail-section">
        <div className="section-shell job-detail-grid">
          <div className="job-detail-main">
            <div className="job-meta-bar">
              <span><MapPin size={16} aria-hidden="true" /> Remote — Houston, Dallas, Austin, or San Antonio, TX</span>
              <span><Briefcase size={16} aria-hidden="true" /> Permanent</span>
              <span><CurrencyDollar size={16} aria-hidden="true" /> Base + uncapped commission</span>
              <span><Buildings size={16} aria-hidden="true" /> Manufacturing &amp; Sales</span>
            </div>

            <div className="job-body">
              <h2>Client Background</h2>
              <p>Our client is a corrugated packaging manufacturer offering box sizes and styles across multiple industries. Following a recent facility acquisition and equipment investment, they are in an active growth phase with significantly increased capacity — and are looking for a driven sales professional to help them capitalise on it.</p>

              <h2>Key Responsibilities</h2>
              <ul>
                <li>Drive new business and expand existing accounts across manufacturing, distribution, and industrial sectors within a defined Texas territory.</li>
                <li>Manage the full sales cycle: prospecting, needs analysis, quoting, closing, and ongoing account management.</li>
                <li>Sell customised packaging solutions, aligning designs with customer operational and cost objectives.</li>
                <li>Collaborate with internal production and design teams to deliver efficient, timely solutions.</li>
                <li>Manage RFQs, pricing strategies, and sales forecasts through CRM tools.</li>
                <li>Maintain knowledge of target industries: industrial manufacturing, logistics, energy, food &amp; beverage.</li>
                <li>Build and nurture long-term client relationships through strong communication and follow-through.</li>
                <li>Operate independently within your territory, reporting directly to the Owner.</li>
              </ul>

              <h2>Requirements</h2>
              <ul>
                <li>Prior packaging sales experience is <strong>required</strong>.</li>
                <li>Corrugated experience preferred; manufacturing or distribution backgrounds also considered.</li>
                <li>Self-starter with an entrepreneurial mindset and strong ambition.</li>
                <li>Established professional network within one of the four listed Texas cities.</li>
                <li>Proven track record driving new business and growing accounts.</li>
                <li>Strong communication, negotiation, and relationship-building skills.</li>
                <li>Comfortable working independently and managing your own pipeline.</li>
                <li>Must be based near Houston, Dallas, Austin, or San Antonio.</li>
              </ul>

              <h2>Why Apply</h2>
              <ul>
                <li>Join a business in active growth — new facility, equipment, and ownership backing.</li>
                <li>Uncapped commission structure with genuine earning potential.</li>
                <li>Entrepreneurial culture with direct access to the owner.</li>
                <li>A product with proven demand across multiple industries.</li>
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
                <input type="hidden" name="_subject" value="Job Application: Packaging Sales Representative" />
                <input type="hidden" name="_next" value="https://www.flockinrecruitment.com/thankyou" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="position" value="Packaging Sales Representative" />

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
