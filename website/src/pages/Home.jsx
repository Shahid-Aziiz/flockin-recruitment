import { Link } from "react-router-dom";
import { asset } from "../constants";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const root = document.querySelector(".nw");
    if (!root) return undefined;
    const onClick = (e) => {
      const btn = e.target.closest(".fq__q");
      if (!btn) return;
      const item = btn.parentElement;
      const opening = !item.classList.contains("open");
      document.querySelectorAll(".fq.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".fq__q").setAttribute("aria-expanded", "false");
      });
      if (opening) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const el = document.getElementById("st-h");
    if (!el) return undefined;
    const original = el.innerHTML;
    let i = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((t) => {
            if (!t) return;
            if (/^\s+$/.test(t)) {
              frag.appendChild(document.createTextNode(" "));
            } else {
              const w = document.createElement("span");
              w.className = "w";
              const wi = document.createElement("span");
              wi.className = "wi";
              wi.style.setProperty("--i", i++);
              wi.textContent = t;
              w.appendChild(wi);
              frag.appendChild(w);
            }
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) {
          walk(n);
        }
      });
    };
    walk(el);
    el.setAttribute("data-fill", "");
    document.documentElement.classList.add("js");
    const update = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const start = vh * 0.88;
      const end = vh * 0.38;
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      const ws = el.querySelectorAll(".wi");
      const n = ws.length;
      for (let k = 0; k < n; k++) {
        const t = (p * (n + 3) - k) / 3;
        ws[k].style.opacity = (0.16 + 0.84 * Math.max(0, Math.min(1, t))).toFixed(3);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      el.removeAttribute("data-fill");
      el.innerHTML = original;
    };
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <clipPath id="notch" clipPathUnits="objectBoundingBox">
            <path d="M0.17,0 H1 V0.33 H0.58 C0.36,0.33 0.36,0.69 0.58,0.69 H1 V1 H0.17 C0.05,0.85 0.05,0.15 0.17,0 Z" />
          </clipPath>
          <clipPath id="notchm" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.30 H0.64 C0.42,0.30 0.42,0.68 0.64,0.68 H1 V1 H0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="nw">
        <section className="hero2" aria-labelledby="h2t">
          <div className="hp">
            <div className="hcopy">
              <h1 id="h2t"><span>You focus on the</span><span>business, we’ll find</span><span><em>the talent</em><b>.</b></span></h1>
              <p>Employers often face a difficult decision: hire quickly to fill a vacancy or take time to find the right person? When you work with an experienced talent advisor, you don’t have to choose.</p>
              <div className="ctas">
                <Link className="hcta hcta--l" to="/hire-talent"><span className="hpill">Grow your team</span><span className="hci">
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <Link className="hcta hcta--w" to="/cv-upload"><span className="hpill">Grow your career</span><span className="hci">
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="swrap ill">
              <img src={asset("new/home-0-b3ac95af.png")} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="nw">
        <section className="st" aria-labelledby="st-h">
          <div className="st__in">
            <h2 id="st-h">Helping teams across the USA and Europe <span className="ic ic--l">
                <svg viewBox="0 0 24 24" fill="#111f33" aria-hidden="true">
                  <circle cx="8" cy="8" r="3.4" />
                  <circle cx="16.5" cy="9" r="2.8" />
                  <path d="M2.5 20c.4-3.6 2.6-5.6 5.5-5.6s5.1 2 5.5 5.6zM13.6 20c.2-2.4 1.4-4 3.4-4s3.4 1.6 3.6 4z" />
                </svg>
              </span> hire people <span className="dim">who stay and do good work.</span>
            </h2>
            <div className="sg">
              <div className="sc sc--tall sc--lime">
                <div className="sc__n">20+</div>
                <div>
                  <h3>Placements made</h3>
                  <p>Roles filled for employers across our specialist sectors.</p>
                </div>
              </div>
              <div className="sc sc--sm">
                <div className="sc__av"><span className="a1">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="8.5" r="4.2" />
                      <path d="M3.5 22c.6-4.6 4.2-7.2 8.5-7.2s7.9 2.6 8.5 7.2z" />
                    </svg>
                  </span><span className="a2">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="8.5" r="4.2" />
                      <path d="M3.5 22c.6-4.6 4.2-7.2 8.5-7.2s7.9 2.6 8.5 7.2z" />
                    </svg>
                  </span><span className="a3">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="8.5" r="4.2" />
                      <path d="M3.5 22c.6-4.6 4.2-7.2 8.5-7.2s7.9 2.6 8.5 7.2z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3>Two continents</h3>
                  <p>Recruiting in the USA and Europe.</p>
                </div>
              </div>
              <div className="sc sc--tall">
                <div className="sc__n">48hr</div>
                <div>
                  <h3>Average response time</h3>
                  <p>How long you wait to hear back from us after you get in touch.</p>
                </div>
              </div>
              <div className="sc">
                <div className="sc__n">10+</div>
                <div>
                  <h3>Companies served</h3>
                  <p>Employers who have trusted us with a search.</p>
                </div>
              </div>
            </div>
            <div className="st__brands">Employers we have worked with <div className="st__logos"><span><i />Logo 1</span><span><i />Logo 2</span><span><i />Logo 3</span><span><i />Logo 4</span><span><i />Logo 5</span><span><i />Logo 6</span><span><i />Logo 7</span></div></div>
          </div>
        </section>
      </div>
      <section id="specialisms" className="services-section" aria-labelledby="specialisms-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">What we recruit for</p>
          <h2 id="specialisms-heading">Our specialisms</h2>
          <div className="service-grid">
            <Link className="spc" aria-label="Learn more about Technology recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Technology professionals working in a modern office" src={asset("new/home-1-85af20b9.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
                </svg>
              </span>
              <h3>Technology</h3>
              <p>Engineering, data, product and cyber security roles.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link className="spc" aria-label="Learn more about Finance recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Finance professionals in a business meeting" src={asset("new/home-2-ae5b2066.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" />
                </svg>
              </span>
              <h3>Finance</h3>
              <p>Financial analysts through to CFOs.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link className="spc" aria-label="Learn more about Legal recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Lawyers discussing documents in an office" src={asset("new/home-3-bee44db4.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z" />
                </svg>
              </span>
              <h3>Legal</h3>
              <p>In-house counsel, compliance and regulatory roles.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link className="spc" aria-label="Learn more about Engineering recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Engineer wearing a hard hat at an industrial site" src={asset("new/home-4-fb434438.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z" />
                </svg>
              </span>
              <h3>Engineering</h3>
              <p>Technical, infrastructure and operations roles.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link className="spc" aria-label="Learn more about Healthcare recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Doctors and nurses in a hospital" src={asset("new/home-5-9c14e632.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z" />
                </svg>
              </span>
              <h3>Healthcare</h3>
              <p>Clinical and health-tech roles.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link className="spc" aria-label="Learn more about Manufacturing recruitment" to="/#specialisms"><span className="spc__ph">
                <img alt="Factory worker in a manufacturing facility" src={asset("new/home-6-a661c778.jpg")} loading="lazy" />
              </span><span className="spc__ic">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M116,176a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h28A8,8,0,0,1,116,176Zm60-8H148a8,8,0,0,0,0,16h28a8,8,0,0,0,0-16Zm64,48a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V88a8,8,0,0,1,12.8-6.4L96,120V88a8,8,0,0,1,12.8-6.4l38.74,29.05L159.1,29.74A16.08,16.08,0,0,1,174.94,16h18.12A16.08,16.08,0,0,1,208.9,29.74l15,105.13s.08.78.08,1.13v72h8A8,8,0,0,1,240,216Zm-77.86-94.4,8.53,6.4h36.11L193.06,32H174.94ZM48,208H208V144H168a8,8,0,0,1-4.8-1.6l-14.4-10.8,0,0L112,104v32a8,8,0,0,1-12.8,6.4L48,104Z" />
                </svg>
              </span>
              <h3>Manufacturing</h3>
              <p>Production, operations and supply chain roles.</p><span className="spc__go">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="nw">
        <section className="hw" id="employers" aria-labelledby="hw-h">
          <div className="hw-in">
            <header className="hw-head">
              <h2 id="hw-h">Hiring with us, <em>step by step</em>.</h2>
              <p>Five steps from your first message to a signed offer.</p>
            </header>
            <div className="hw-grid">
              <article className="hw-big"><span className="hw-n">01</span>
                <svg className="hw-art" viewBox="100 240 1080 780" aria-hidden="true">
                  <defs>
                    <linearGradient id="hwl" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f1ff6b" />
                      <stop offset=".55" stopColor="#d4f000" />
                      <stop offset="1" stopColor="#a9c200" />
                    </linearGradient>
                    <linearGradient id="hww" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#ffffff" />
                      <stop offset=".6" stopColor="#e3e8ef" />
                      <stop offset="1" stopColor="#b9c4d4" />
                    </linearGradient>
                    <linearGradient id="hwe" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#cfd8e6" />
                    </linearGradient>
                  </defs>
                  <g opacity=".35" transform="translate(30 56)">
                    <g transform="translate(0 0)">
                      <polygon points="157,297 731,297 731,485 369,485 369,665 486,665 486,830 369,830 369,952 157,952" fill="#000" />
                      <polygon points="731,297 1094,297 1094,952 742,952 742,788 883,788 883,485 731,485" fill="#000" />
                      <circle cx="570" cy="625" r="49" fill="none" />
                      <circle cx="742" cy="625" r="49" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(26 34)">
                    <polygon points="157,297 731,297 731,485 369,485 369,665 486,665 486,830 369,830 369,952 157,952" fill="#7d8f00" />
                    <polygon points="731,297 1094,297 1094,952 742,952 742,788 883,788 883,485 731,485" fill="#6f7f93" />
                    <circle cx="570" cy="625" r="49" fill="none" />
                    <circle cx="742" cy="625" r="49" fill="none" />
                  </g>
                  <g transform="translate(13 17)">
                    <polygon points="157,297 731,297 731,485 369,485 369,665 486,665 486,830 369,830 369,952 157,952" fill="#8fa400" />
                    <polygon points="731,297 1094,297 1094,952 742,952 742,788 883,788 883,485 731,485" fill="#8794a6" />
                    <circle cx="570" cy="625" r="49" fill="none" />
                    <circle cx="742" cy="625" r="49" fill="none" />
                  </g>
                  <g transform="translate(0 0)">
                    <polygon points="157,297 731,297 731,485 369,485 369,665 486,665 486,830 369,830 369,952 157,952" fill="url(#hwl)" stroke="rgba(255,255,255,.75)" strokeWidth="3" strokeLinejoin="round" />
                    <polygon points="731,297 1094,297 1094,952 742,952 742,788 883,788 883,485 731,485" fill="url(#hww)" stroke="rgba(255,255,255,.75)" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="570" cy="625" r="49" fill="url(#hwe)" />
                    <circle cx="742" cy="625" r="49" fill="url(#hwe)" />
                  </g>
                </svg>
                <div className="hw-bt">
                  <h3>Send us a role</h3>
                  <p>Share the role and your contact details. A recruiter calls you within one working day.</p>
                  <div className="fb-row">
                    <Link className="fb fb--l" to="/hire-talent"><span>Send us a role</span><i>
                        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                          <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hw-c"><span className="hw-n">02</span>
                <div>
                  <h3>Tell us what you need</h3>
                  <p>We talk through the role, the team and the kind of person you want.</p>
                </div>
              </article>
              <article className="hw-c"><span className="hw-n">03</span>
                <div>
                  <h3>Review a short list</h3>
                  <p>You get a few candidates we have already spoken to, with notes on each.</p>
                </div>
              </article>
              <article className="hw-c"><span className="hw-n">04</span>
                <div>
                  <h3>Meet the best ones</h3>
                  <p>We set up the interviews, brief the candidates and collect your feedback.</p>
                </div>
              </article>
              <article className="hw-c hw-c--l"><span className="hw-n">05</span>
                <div>
                  <h3>Make an offer</h3>
                  <p>Pick your person. We help with the offer and check in after they start.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="nw">
        <section id="candidates" className="collage" aria-labelledby="c-h">
          <div className="blocks tl" aria-hidden="true"><i style={{ left: "calc(var(--u)*0)", top: "calc(var(--u)*0)", width: "calc(var(--u)*1)", height: "calc(var(--u)*2)", background: "var(--lime)" }} /><i style={{ left: "calc(var(--u)*1)", top: "calc(var(--u)*2)", width: "calc(var(--u)*1)", height: "calc(var(--u)*1)", background: "var(--lime)" }} /><i style={{ left: "calc(var(--u)*2)", top: "calc(var(--u)*1)", width: "calc(var(--u)*2)", height: "calc(var(--u)*1)", background: "var(--lime)" }} /></div>
          <div className="blocks br" aria-hidden="true"><i style={{ left: "calc(var(--u)*0)", top: "calc(var(--u)*0)", width: "calc(var(--u)*1)", height: "calc(var(--u)*1)", background: "var(--navy)" }} /><i style={{ left: "calc(var(--u)*2)", top: "calc(var(--u)*1)", width: "calc(var(--u)*2)", height: "calc(var(--u)*1)", background: "var(--navy)" }} /><i style={{ left: "calc(var(--u)*1)", top: "calc(var(--u)*2)", width: "calc(var(--u)*1)", height: "calc(var(--u)*1)", background: "var(--navy)" }} /></div>
          <div className="collage__in">
            <div className="photos" aria-hidden="true">
              <img className="p1" src={asset("new/home-7-7b2a25e2.jpg")} alt="" />
              <img className="p2" src={asset("new/home-8-cd192c4a.jpg")} alt="" />
              <img className="p3" src={asset("new/home-9-069433bc.jpg")} alt="" />
            </div>
            <div>
              <p className="eyebrow">For candidates</p>
              <h2 className="display" id="c-h">Looking for your next role?</h2>
              <p className="lead">Send us your CV and tell us what you want from your next job. We only put you forward for roles that fit, and we speak to you before we do.</p>
              <Link className="link-circle" to="/#jobs"><span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>View open roles
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="nw">
        <section id="faq" className="costfaq" aria-labelledby="p-h">
          <div className="cf__shell">
            <div className="cf__in">
              <div className="cf__left"><span className="pill">Fees</span>
                <h2 className="display" id="p-h">What does it cost?</h2>
                <p className="cf__lead">Every search is different, so we agree the fee with you before we start. Tell us about the role and we will set out the options.</p>
                <p className="faq-label">Frequently asked questions</p>
                <div className="faqs">
                  <div className="fq">
                    <button className="fq__q" type="button" aria-expanded="false" aria-controls="fa0"><span>What makes FlockIn different from a job board?</span><b aria-hidden="true" /></button>
                    <div className="fq__a" id="fa0" role="region">
                      <div>
                        <p>A job board hands you a pile of applications to sort through. We read every CV, speak to the candidates ourselves, and send you a short list of people we believe in.</p>
                      </div>
                    </div>
                  </div>
                  <div className="fq">
                    <button className="fq__q" type="button" aria-expanded="false" aria-controls="fa1"><span>How quickly will I hear back?</span><b aria-hidden="true" /></button>
                    <div className="fq__a" id="fa1" role="region">
                      <div>
                        <p>Our average response time is 48 hours.</p>
                      </div>
                    </div>
                  </div>
                  <div className="fq">
                    <button className="fq__q" type="button" aria-expanded="false" aria-controls="fa2"><span>How many candidates will I see?</span><b aria-hidden="true" /></button>
                    <div className="fq__a" id="fa2" role="region">
                      <div>
                        <p>A small shortlist. We would rather send you two candidates we believe in than ten we are unsure about.</p>
                      </div>
                    </div>
                  </div>
                  <div className="fq">
                    <button className="fq__q" type="button" aria-expanded="false" aria-controls="fa3"><span>How do your fees work?</span><b aria-hidden="true" /></button>
                    <div className="fq__a" id="fa3" role="region">
                      <div>
                        <p>We agree fees with you before work starts on a role. Get in touch and we will talk you through the options.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="cf__card" aria-label="Fees">
                <img className="cf__logo" src={asset("new/home-10-e63b2176.png")} alt="" />
                <h3 className="display">Tailored to<br />your search</h3>
                <p className="cf__sub">Whether you are hiring one person or building a team, we will agree the scope and the fee together.</p>
                <Link className="pillbtn" to="/hire-talent">Get a quote</Link>
                <h4>Includes</h4>
                <ul className="inc">
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
                    </svg><span>Fees agreed before a search starts</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
                    </svg><span>A shortlist built around your role</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
                    </svg><span>Every candidate reviewed and spoken to</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
                    </svg><span>Clear updates from a named recruiter</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </div>
      <section id="jobs" className="jobs-section" aria-labelledby="jobs-heading">
        <div className="section-shell">
          <p className="eyebrow eyebrow--rule">Open roles</p>
          <h2 id="jobs-heading">Current vacancies</h2>
          <div className="jobs-grid">
            <div className="job-card">
              <div className="job-card__meta"><span>Manufacturing</span><span>Remote (TX)</span></div>
              <h3>Packaging Sales Representative</h3>
              <p className="job-card__desc">A growing corrugated packaging manufacturer in Texas is looking for a sales rep to win new business and manage accounts in a set territory. Commission is uncapped.</p>
              <div className="job-card__tags"><span className="job-tag">Sales</span><span className="job-tag">Corrugated</span><span className="job-tag">Remote</span><span className="job-tag">Permanent</span></div>
              <p className="job-card__salary">Base + uncapped commission, DOE</p>
              <Link className="action-link action-link--navy" to="/job-packaging-sales"><span>View Role</span>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
              </Link>
            </div>
            <div className="job-card job-card--closed"><span className="job-card__closed-badge">Position Closed</span>
              <div className="job-card__meta"><span>Engineering</span><span>Orange County, CA</span></div>
              <h3>Business Unit Manager, Aerospace</h3>
              <p className="job-card__desc">Run an aerospace manufacturing business unit, including production scheduling, quality, safety and the P&L. On-site, working across engineering, supply chain and finance.</p>
              <div className="job-card__tags"><span className="job-tag">Aerospace</span><span className="job-tag">Manufacturing</span><span className="job-tag">Leadership</span><span className="job-tag">Permanent</span></div>
              <p className="job-card__salary">$175,000 to $200,000 / year</p>
            </div>
            <div className="job-card job-card--closed"><span className="job-card__closed-badge">Position Closed</span>
              <div className="job-card__meta"><span>Technology</span><span>Southfield, MI</span></div>
              <h3>Director of Data Strategy and AI</h3>
              <p className="job-card__desc">Lead Guardian Alarm's data function and own the roadmap across architecture, engineering, governance, BI and AI/ML. Build Microsoft Fabric OneLake as the single source of truth.</p>
              <div className="job-card__tags"><span className="job-tag">Data Strategy</span><span className="job-tag">AI</span><span className="job-tag">Microsoft Fabric</span><span className="job-tag">Leadership</span><span className="job-tag">Permanent</span></div>
              <p className="job-card__salary">$180,000 base + bonus</p>
            </div>
            <div className="job-card">
              <div className="job-card__meta"><span>Legal</span><span>Colorado (Remote)</span></div>
              <h3>Labor & Employment Attorney</h3>
              <p className="job-card__desc">Join a respected labor and employment practice handling both plaintiff and defense work. You will advise on Colorado and federal employment law and run cases from start to finish.</p>
              <div className="job-card__tags"><span className="job-tag">Labor & Employment</span><span className="job-tag">Litigation</span><span className="job-tag">Remote</span><span className="job-tag">Permanent</span></div>
              <p className="job-card__salary">Up to $275,000 DOE + Bonus</p>
              <Link className="action-link action-link--navy" to="/job-labor-employment-attorney"><span>View Role</span>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
