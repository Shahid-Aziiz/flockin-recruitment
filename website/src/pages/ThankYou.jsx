import { CheckCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { URLS } from "../constants";

export function ThankYou() {
  return (
    <section className="thankyou-section">
      <div className="thankyou-card">
        <CheckCircle size={64} weight="fill" className="thankyou-icon" aria-hidden="true" />
        <h1>Submitted Successfully!</h1>
        <p>Thank you for reaching out to FlockIn Recruitment.</p>
        <p className="thankyou-sub">We&apos;ll review your message and get back to you within 48 hours.</p>
        <div className="thankyou-actions">
          <Link to={URLS.home} className="action-link action-link--navy">
            <span>Back to Home</span>
          </Link>
          <a href={URLS.linkedin} target="_blank" rel="noopener noreferrer" className="action-link action-link--outline">
            <span>Follow on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
