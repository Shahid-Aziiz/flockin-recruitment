import { Heart, Shield, Star } from "@phosphor-icons/react";

const teamMembers = [
  {
    name: "Hanzala Ayoub",
    role: "Founder & CEO",
    bio: "Hanzala started FlockIn after years in talent acquisition, frustrated by agencies that flooded clients with CVs and called it service. He sets the standard for how we run every search and still does the initial briefing call for new clients himself.",
  },
  {
    name: "Shahid Aziz",
    role: "Co-Founder & Principal Recruiter",
    bio: "Shahid runs the recruitment side of the business. He's placed candidates across finance, manufacturing, and tech, and has a good eye for when someone interviews well versus when they'll actually perform. Most of our repeat clients ask for him by name.",
  },
  {
    name: "Arsam Ali",
    role: "Director & GTM Lead",
    bio: "Arsam leads our go-to-market work and is usually the first person a new client speaks to. He specialises in commercial and sales hiring — roles where attitude and drive matter as much as experience on paper.",
  },
  {
    name: "M. Abdullah",
    role: "Tech Recruiter & Developer",
    bio: "Abdullah handles our technology searches and keeps our own systems running. He knows the difference between a developer who can talk the talk and one who can actually build — which matters when clients need technical hires they can trust.",
  },
  {
    name: "Tahir Iqbal",
    role: "Business Development",
    bio: "Tahir brings new clients on board and makes sure existing ones are looked after. If you're getting in touch for the first time, he's likely who you'll hear from — and he'll be direct about what we can and can't do for you.",
  },
  {
    name: "Alishba Tariq",
    role: "Business Development",
    bio: "Alishba manages client relationships and candidate follow-ups. She's the reason nothing falls through the cracks once a search is underway — and candidates consistently say she's the most responsive recruiter they've dealt with.",
  },
];

const howWeWork = [
  { icon: Shield, title: "Honesty First", description: "We tell clients when a role is hard to fill and tell candidates when they're not the right fit. It saves everyone time and leads to better outcomes." },
  { icon: Star, title: "Quality Over Volume", description: "A shortlist from us is a genuine recommendation, not a dump of available CVs. We'd rather send two strong candidates than ten average ones." },
  { icon: Heart, title: "We Care About the Outcome", description: "We follow up after placements because a hire that doesn't stick is bad for everyone. We want to know it worked." },
];

export function Team() {
  return (
    <>
      <section className="page-hero" aria-labelledby="team-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Who we are</p>
          <h1 id="team-heading">Our Team</h1>
          <p className="page-hero__sub">Six people. When you work with FlockIn, you&apos;ll actually know who you&apos;re dealing with.</p>
        </div>
      </section>

      <section className="team-section">
        <div className="section-shell">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-card__avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section" aria-labelledby="how-we-work-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">How we work</p>
          <h2 id="how-we-work-heading">What we stand for.</h2>
          <div className="values-grid">
            {howWeWork.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="value-card">
                  <Icon size={36} weight="regular" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
