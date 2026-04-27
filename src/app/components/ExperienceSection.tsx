"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiCalendar, FiExternalLink } from "react-icons/fi";
import { SiSpringboot, SiReact, SiAngular, SiNodedotjs, SiPostgresql, SiFirebase, SiDocker, SiKubernetes, SiJenkins, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const EXPERIENCES = [
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    type: "Full-Time",
    period: "Dec 2024 – Present",
    location: "Hyderabad, India",
    color: "#39ff14",
    logo: "LTI",
    logoColor: "#39ff14",
    technologies: [
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D33833" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
    highlights: [
      "Developing enterprise-grade applications using Java, Spring Boot, Angular, React, Vite, Node.js, and Express",
      "Designed and implemented RESTful APIs with Spring Boot and Express.js for seamless frontend-backend communication",
      "Built responsive, high-performance UIs with React, Angular, HTML5, and CSS3",
      "Implemented backend microservices with Node.js and Express, integrating PostgreSQL for high availability",
      "Implemented CI/CD pipelines using Jenkins to automate build, testing, and deployment processes",
      "Integrated secure authentication and authorization using OAuth2, JWT, and RBAC mechanisms",
      "Participated in Agile sprints: planning, backlog grooming, stand-ups, and retrospectives",
      "Collaborated with cross-functional teams (QA, PMs, designers) to deliver production-ready features",
    ],
  },
  {
    company: "Worldlynk Limited",
    role: "Freelance Full Stack Developer",
    type: "Remote · Contract",
    period: "Feb 2024 – Oct 2024",
    location: "London, United Kingdom",
    color: "#39ff14",
    logo: "WL",
    logoColor: "#39ff14",
    technologies: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ],
    highlights: [
      "Architected a web platform for international students (UK study) with React.js, Redux, and Tailwind CSS — boosted engagement by 25%",
      "Designed scalable backend using Firebase (Firestore, secure rules) and Express microservices on Netlify",
      "Implemented end-to-end consultancy workflow for managing and tracking student applications",
      "Integrated Stripe payment gateway for events, restaurants, and accommodation — compliant with industry standards",
      "Built real-time messaging with Firebase Realtime Database for instant student–consultant communication",
      "Designed full ETL pipeline for 1,000+ structured university data points",
      "Optimized Firestore read requests → improved load times by 30%",
      "Developed 'Reliv' social feature — increased platform engagement by 25%",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section" ref={ref} style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-tag">Career Journey</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, #39ff14, #00ff00, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                style={{ paddingLeft: 56, position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: 13,
                    top: 28,
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}`,
                    border: "2px solid var(--bg-primary)",
                  }}
                />

                {/* Card */}
                <div className="glass-card" style={{ padding: 32 }}>
                  {/* Top row */}
                  <div 
                    style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      justifyContent: "space-between", 
                      alignItems: "flex-start", 
                      gap: 16, 
                      marginBottom: 24 
                    }}
                    className="exp-card-header"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      {/* Company logo */}
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 12,
                          background: `linear-gradient(135deg, ${exp.color}15, ${exp.color}30)`,
                          border: `1px solid ${exp.color}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: exp.color,
                          fontFamily: "'JetBrains Mono', monospace",
                          flexShrink: 0,
                        }}
                      >
                        {exp.logo}
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>{exp.role}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                          <span style={{ color: exp.color, fontWeight: 600, fontSize: "0.95rem" }}>{exp.company}</span>
                          <span
                            style={{
                              fontSize: "0.7rem",
                              padding: "2px 8px",
                              borderRadius: 100,
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}30`,
                              color: exp.color,
                              fontWeight: 600,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-meta" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.82rem" }}>
                        <FiCalendar size={13} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.82rem" }}>
                        <FiMapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Tech row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {exp.technologies.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          padding: "4px 10px",
                          borderRadius: 6,
                          background: `${color}10`,
                          border: `1px solid ${color}25`,
                          fontSize: "0.75rem",
                          color,
                          fontWeight: 600,
                        }}
                      >
                        <Icon size={12} />
                        {name}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                    {exp.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        style={{ display: "flex", gap: 12, color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}
                      >
                        <span style={{ color: exp.color, marginTop: 4, flexShrink: 0 }}>▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
