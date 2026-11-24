import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Mail,
  Menu, Smartphone, Code2, Layers3, Zap, X, MapPin,
} from "lucide-react";

const skills = [
  { title: "Mobile", items: ["React Native", "JavaScript", "TypeScript", "React Navigation", "Redux"] },
  { title: "Web", items: ["React.js", "TypeScript", "HTML", "CSS", "Responsive UI"] },
  { title: "Integrations", items: ["Firebase", "REST APIs", "Push Notifications", "Payment Gateways", "App Store Releases"] },
  { title: "Tools & Platforms", items: ["Git", "Android Studio", "Xcode", "Play Console", "App Store Connect"] },
];

const projects = [
  {
    number: "01",
    name: "SmartHR",
    type: "Human Resources · Mobile",
    description: "An employee-focused HR application covering common workforce workflows, authentication, API integration and operational screens.",
    tags: ["React Native", "REST APIs", "Firebase"],
    note: "Professional experience — independently recreate a sanitized portfolio demo; do not publish employer code or data.",
  },
  {
    number: "02",
    name: "Bhagavad Gita App",
    type: "Content · Subscriptions · Mobile",
    description: "A devotional audio experience with chapter and verse content, subscription plans, streaming and offline access.",
    tags: ["React Native", "Subscriptions", "Audio", "Payments"],
    note: "Professional project experience. Add public screenshots or a demo only where you have permission.",
  },
  {
    number: "03",
    name: "EasyCoach",
    type: "Booking · Payments · Mobile",
    description: "A transport and booking workflow involving customer journeys, booking operations and payment-related integrations.",
    tags: ["React Native", "API Integration", "Payments"],
    note: "Professional project experience. Keep company-owned implementation details private.",
  },
];

const experience = [
  {
    role: "React Native Developer",
    company: "Dhanush Healthcare Solutions",
    period: "Aug 2021 – Dec 2026",
    description: "Building and maintaining cross-platform mobile applications, integrating APIs and third-party services, and supporting production releases across Android and iOS.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("santhoshreddykunta03@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Santhosh home">
          <span className="brand-mark">S</span><span>SANTHOSH<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building mobile<br />experiences that<br /><span className="gradient-text">work in the real world.</span></h1>
            <p className="hero-subtitle">I'm <strong>Santhosh Reddy Kunta</strong>, a React Native developer focused on building reliable, user-friendly applications for Android and iOS.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> India</span>
              <span className="meta-divider" />
              <span>5 years of mobile development experience</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="code-card">
              <div className="code-card-top"><span /><span /><span /><small>developer.ts</small></div>
              <div className="code-lines">
                <div><i>01</i><span className="code-purple">const</span> developer = {"{"}</div>
                <div><i>02</i>&nbsp;&nbsp;name: <span className="code-green">"Santhosh"</span>,</div>
                <div><i>03</i>&nbsp;&nbsp;role: <span className="code-green">"React Native"</span>,</div>
                <div><i>04</i>&nbsp;&nbsp;experience: <span className="code-orange">5</span>,</div>
                <div><i>05</i>&nbsp;&nbsp;focus: [</div>
                <div><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"Mobile"</span>,</div>
                <div><i>07</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"TypeScript"</span></div>
                <div><i>08</i>&nbsp;&nbsp;]</div>
                <div><i>09</i>{"};"}</div>
                <div className="code-cursor"><i>10</i><span /></div>
              </div>
              <div className="code-card-footer"><span className="status-dot" /> Building, learning, improving.</div>
            </div>
            <div className="floating-chip chip-mobile"><Smartphone size={16} /> Android & iOS</div>
            <div className="floating-chip chip-ts"><Code2 size={16} /> TypeScript</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-heading-row">
            <h2>Practical engineering.<br /><span className="muted-heading">Thoughtful experiences.</span></h2>
            <p className="section-intro">I work across the mobile application lifecycle — from building interfaces and integrating APIs to debugging production issues and preparing releases.</p>
          </div>
          <div className="about-grid">
            <div className="about-card about-main">
              <span className="card-icon"><Layers3 size={20} /></span>
              <h3>Mobile-first developer</h3>
              <p>My core experience is in React Native and cross-platform mobile development. I've worked with real application requirements, third-party integrations and app store delivery.</p>
            </div>
            <div className="about-card">
              <span className="card-icon"><Zap size={20} /></span>
              <h3>Growing my stack</h3>
              <p>I'm strengthening TypeScript and expanding into React.js and Node.js to become more effective across the product stack.</p>
            </div>
            <div className="about-card">
              <span className="card-icon"><Code2 size={20} /></span>
              <h3>How I approach work</h3>
              <p>Readable code, maintainable structure, clear API boundaries and solving the actual user problem before adding complexity.</p>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-kicker">02 / SKILLS</div>
          <div className="section-heading-row">
            <h2>Tools I use<br /><span className="muted-heading">to build and ship.</span></h2>
            <p className="section-intro">A practical toolkit centered on mobile development, with a deliberate expansion into web and backend technologies.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-top"><span>0{index + 1}</span><ArrowUpRight size={16} /></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="small-disclaimer">Skills reflect a mix of professional experience and current learning. Be prepared to discuss your hands-on depth for each technology.</p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-kicker">03 / EXPERIENCE</div>
          <div className="section-heading-row">
            <h2>Experience built<br /><span className="muted-heading">through real products.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.company}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-top"><span className="timeline-period">{item.period}</span><span className="timeline-location">India</span></div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-kicker">04 / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Products and problems<br /><span className="muted-heading">I've worked on.</span></h2>
            <p className="section-intro">A snapshot of application domains and engineering challenges. Some work was completed as part of company teams and is described at a high level.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-body">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-note">{project.note}</div>
                </div>
                <div className="project-arrow"><ArrowUpRight size={22} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker">05 / CONTACT</div>
            <h2>Have a role or project<br /><span className="gradient-text">in mind?</span></h2>
            <p>I'm open to discussing Senior React Native opportunities and interesting product work.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? "Email copied" : "Copy email address"}</button>
              <a className="button button-quiet" href="https://www.linkedin.com/in/santhosh-reddy-47225b188" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="https://github.com/kuntasanthoshreddy" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
            </div>
            <p className="contact-placeholder">Email: santhoshreddykunta03@gmail.com · LinkedIn and GitHub links are connected.</p>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>SANTHOSH<span className="brand-dot">.</span></span></a>
        <span>Designed & built with React + TypeScript.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
