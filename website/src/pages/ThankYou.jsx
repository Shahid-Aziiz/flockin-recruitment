import { Link } from "react-router-dom";


export function ThankYou() {
  return (
    <>
      <section className="sv ty">
        <div className="ty-card"><b className="ty-ic">
            <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </b>
          <h1>Thank you. <em>We have your message</em>.</h1>
          <p className="ty-p">Thank you for reaching out to FlockIn Recruitment. We will read it and get back to you within one working day.</p>
          <ul className="ty-steps">
            <li><span>1</span>A recruiter reads your message</li>
            <li><span>2</span>We get in touch to confirm the details</li>
            <li><span>3</span>We agree the next step with you</li>
          </ul>
          <div className="fb-row">
            <Link className="fb fb--n" to="/"><span>Back to Home</span><i>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </Link>
            <a className="fb fb--w2" href="https://www.linkedin.com/company/flockinrecruitment/" target="_blank" rel="noopener noreferrer"><span>Follow on LinkedIn</span><i>
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
