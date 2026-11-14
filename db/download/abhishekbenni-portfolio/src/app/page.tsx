"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  Code2,
  Zap,
  Trophy,
  Briefcase,
  Cloud,
  BarChart3,
  Star,
  GraduationCap,
  BrainCircuit,
  MessageSquareText,
  ScanText,
  Mic,
  Sparkles,
  Database,
  Network,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import {
  profile,
  navLinks,
  aboutHeadline,
  aboutParagraphs,
  education,
  experience,
  skills,
  projects,
  certifications,
  achievements,
  stat,
  AVATAR,
  RESUME_PDF,
  type Skill,
} from "@/lib/portfolio-data";

/* ---------------- reveal-on-scroll ---------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`pf-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- icon maps ---------------- */

const skillIcons: Record<NonNullable<Skill["icon"]>, LucideIcon> = {
  brain: BrainCircuit,
  chat: MessageSquareText,
  scan: ScanText,
  mic: Mic,
  sparkles: Sparkles,
  database: Database,
  network: Network,
  boxes: Boxes,
};

const achievementIcons: Record<string, LucideIcon> = {
  trophy: Trophy,
  briefcase: Briefcase,
  cloud: Cloud,
  chart: BarChart3,
  star: Star,
  graduation: GraduationCap,
};

/* ---------------- section heading ---------------- */

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="pf-section-heading">
      <p className="pf-kicker">{kicker}</p>
      <h2>{title}</h2>
      <div className="pf-underline" />
    </Reveal>
  );
}

/* ---------------- page ---------------- */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".pf-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pf-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ---------- NAV ---------- */}
      <nav className="pf-nav" aria-label="Main navigation">
        <a className="pf-brand" href="#home">
          {profile.brand}
        </a>
        <div className="pf-navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            className="pf-nav-cta hidden sm:inline-block"
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
          <button
            className="pf-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`pf-mobile-menu ${menuOpen ? "pf-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="pf-mobile-resume" href={RESUME_PDF} target="_blank" rel="noopener noreferrer">
          View Resume ↗
        </a>
      </div>

      <main className="flex-1">
        {/* ---------- HERO ---------- */}
        <section id="home" className="pf-hero pf-shell">
          <div className="pf-hero-copy">
            <Reveal>
              <p className="pf-eyebrow">
                Hi, I&apos;m <span aria-hidden="true">👋</span>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1>
                {profile.heroTitleTop}
                <span>{profile.heroTitleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <h2>
                {profile.heroRole} <b>•</b> {profile.heroRole2}
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="pf-lead">{profile.heroLead}</p>
            </Reveal>
            <Reveal delay={320}>
              <div className="pf-hero-actions">
                <a className="pf-primary" href="#projects">
                  View Work 🚀
                </a>
                <a className="pf-secondary" href="#contact">
                  Contact Me
                </a>
                <a
                  className="pf-secondary"
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="pf-socials">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={17} />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a href={profile.hackerrank} target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
                  <Code2 size={17} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="pf-hero-visual">
            <Reveal delay={200} className="w-full flex justify-center">
              <div className="pf-portrait-frame">
                <img src={AVATAR} alt={profile.name} />
              </div>
            </Reveal>
            <Reveal delay={500} className="!absolute right-1 bottom-7">
              <div className="pf-performance-card">
                <span aria-hidden="true">
                  <Zap size={17} />
                </span>
                <div>
                  Profile
                  <br />
                  <b>Open to AI/ML internships</b>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="pf-section pf-shell pf-section-heading">
          <SectionHeading kicker="WHO I AM" title="About Me" />
          <Reveal className="pf-about">
            <div className="pf-about-photo">
              <img src={AVATAR} alt={profile.name} />
            </div>
            <div className="pf-about-copy">
              <h3>{aboutHeadline}</h3>
              {aboutParagraphs.map((p, i) => (
                <p key={i}>
                  {p.pre}
                  <strong>{p.strong}</strong>
                  {p.post}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------- EDUCATION & EXPERIENCE ---------- */}
        <section id="education" className="pf-section pf-shell">
          <Reveal className="pf-split-heading">
            <div>
              <p className="pf-kicker">ACADEMIC BACKGROUND</p>
              <h2>Education</h2>
            </div>
            <div id="experience">
              <p className="pf-kicker">PROFESSIONAL EXPERIENCE</p>
              <h2>Experience</h2>
            </div>
          </Reveal>
          <div className="pf-edu-exp-grid">
            <div className="pf-timeline-column">
              {education.map((item, i) => (
                <Reveal key={item.degree} delay={i * 100}>
                  <article className="pf-timeline-entry">
                    <span className="pf-timeline-dot" aria-hidden="true" />
                    <div className="pf-timeline-content">
                      <div className="pf-card-top">
                        <h3>{item.degree}</h3>
                        <span>{item.period}</span>
                      </div>
                      <p className="pf-institution">{item.institution}</p>
                      {item.board && (
                        <p className="pf-board">
                          <strong>Board:</strong> {item.board}
                        </p>
                      )}
                      <strong className="pf-result">{item.result}</strong>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="pf-timeline-column">
              <Reveal delay={100}>
                <article className="pf-timeline-entry pf-exp-entry">
                  <span className="pf-timeline-dot" aria-hidden="true" />
                  <div className="pf-timeline-content pf-exp-content">
                    <div className="pf-card-top">
                      <h3>{experience.role}</h3>
                      <span>{experience.period}</span>
                    </div>
                    <p className="pf-institution">
                      <strong>{experience.org}</strong> — {experience.location}
                    </p>
                    <p className="pf-exp-description">{experience.summary}</p>
                    <ul>
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <span className="pf-proof-pill">Certificate available on request</span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <section id="skills" className="pf-section pf-tools-section">
          <div className="pf-shell">
            <Reveal>
              <p className="pf-kicker">TOOLS &amp; TECHNOLOGIES</p>
              <h2>Tech Stack</h2>
              <p className="pf-section-subtitle">Technologies and tools I work with.</p>
            </Reveal>
            <div className="pf-skill-grid">
              {skills.map((skill, i) => {
                const Icon = skill.icon ? skillIcons[skill.icon] : null;
                return (
                  <Reveal key={skill.name} delay={(i % 6) * 60}>
                    <div className="pf-skill-card">
                      {skill.img ? (
                        <img src={skill.img} alt={skill.name} loading="lazy" />
                      ) : (
                        Icon && (
                          <span className="pf-skill-icon" aria-hidden="true">
                            <Icon size={22} />
                          </span>
                        )
                      )}
                      <strong>{skill.name}</strong>
                      <span>{skill.category}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="pf-section pf-shell">
          <Reveal>
            <p className="pf-kicker">SELECTED WORK</p>
            <h2>Projects</h2>
          </Reveal>
          <div className="pf-project-grid">
            {projects.map((project, i) => (
              <Reveal key={project.number} delay={i * 120}>
                <article className="pf-project-card">
                  <div className="pf-project-head">
                    <h3>{project.title}</h3>
                    <span>{project.number}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="pf-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="pf-project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                    <span>{project.linkNote}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- CERTIFICATIONS ---------- */}
        <section id="certifications" className="pf-section pf-shell">
          <Reveal>
            <p className="pf-kicker">CREDENTIALS &amp; LEARNING</p>
            <h2>Certifications</h2>
          </Reveal>
          <div className="pf-cert-grid">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 100}>
                <article className="pf-cert-card">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  <small>{cert.detail}</small>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- ACHIEVEMENTS ---------- */}
        <section id="achievements" className="pf-section pf-achievements-section">
          <div className="pf-shell">
            <Reveal className="pf-achievement-hero">
              <div>
                <p className="pf-kicker">MILESTONES &amp; RECOGNITION</p>
                <h2>Achievements</h2>
                <p>
                  A snapshot of the results, credentials and milestones I have earned through consistent
                  academic performance, hands-on AI projects and industry-recognized learning programs.
                </p>
              </div>
              <div className="pf-achievement-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </Reveal>
            <div className="pf-achievement-grid">
              {achievements.map((achievement, i) => {
                const Icon = achievementIcons[achievement.icon] ?? Trophy;
                return (
                  <Reveal key={achievement.number} delay={(i % 3) * 100}>
                    <article className="pf-achievement-card">
                      <div className="pf-achievement-card-top">
                        <span className="pf-achievement-icon" aria-hidden="true">
                          <Icon size={24} />
                        </span>
                        <span className="pf-achievement-number">{achievement.number}</span>
                      </div>
                      <p className="pf-achievement-eyebrow">{achievement.eyebrow}</p>
                      <h3>{achievement.title}</h3>
                      <p className="pf-achievement-org">{achievement.org}</p>
                      <p className="pf-achievement-date">{achievement.date}</p>
                      <p className="pf-achievement-description">{achievement.description}</p>
                      <div className="pf-achievement-footer">
                        <span className="pf-achievement-highlight">{achievement.highlight}</span>
                        <span>{profile.name}</span>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="pf-achievement-bottom">
              <div>
                <span aria-hidden="true">
                  <Zap size={20} />
                </span>
                <div>
                  <strong>Open to AI/ML internships &amp; collaborations</strong>
                  <p>Actively building LLM, NLP, OCR and ASR based solutions — let&apos;s talk.</p>
                </div>
              </div>
              <a href="#contact">Get in touch ↗</a>
            </Reveal>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="pf-section">
          <div className="pf-contact-section">
            <Reveal>
              <h2>Contact Me</h2>
            </Reveal>
            <div className="pf-contact-grid">
              <Reveal>
                <form action={`mailto:${profile.email}`} method="post" encType="text/plain">
                  <input placeholder="Name" required name="name" aria-label="Your name" />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    aria-label="Your email"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    aria-label="Your message"
                  />
                  <button type="submit">Send Message</button>
                </form>
              </Reveal>
              <Reveal delay={120}>
                <div className="pf-contact-card">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> {profile.phone}
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      {profile.linkedinLabel} ↗
                    </a>
                  </p>
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      {profile.githubLabel} ↗
                    </a>
                  </p>
                  <p>
                    <strong>HackerRank:</strong>{" "}
                    <a href={profile.hackerrank} target="_blank" rel="noopener noreferrer">
                      {profile.hackerrankLabel} ↗
                    </a>
                  </p>
                  <p>
                    <strong>Location:</strong> {profile.location}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="pf-footer pf-shell">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.footerTagline}</span>
      </footer>
    </div>
  );
}
