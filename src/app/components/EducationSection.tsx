"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiBook, FiUsers, FiCalendar } from "react-icons/fi";
import { SiVmware } from "react-icons/si";

const EDUCATION = [
  {
    institution: "Anurag University",
    degree: "B.Tech in Artificial Intelligence",
    gpa: "8.07 / 10",
    period: "Jun 2020 – Jun 2024",
    location: "Hyderabad, India",
    color: "#00ff9f",
    logo: "AU",
    description: "Specialized in AI/ML, algorithms, data structures, software engineering and cloud computing. Built strong foundations in both theoretical CS and practical development.",
  },
];

const CERTIFICATIONS = [
  {
    title: "VMware IT Academy",
    subtitle: "Modern Applications, Containers & Kubernetes",
    issuer: "VMware",
    year: "2023",
    description: "12-hour technical certification covering containerized application development, Kubernetes orchestration, and modern cloud-native deployment practices.",
    color: "#10b981",
    Icon: SiVmware,
    badge: "Cloud Native",
  },
];

const LEADERSHIP = [
  {
    title: "Technical Mentor",
    org: "LearningDestiny Academy",
    description: "Mentored 50+ students in Data Structures & Algorithms and full-stack development, strengthening problem-solving skills and practical software engineering knowledge.",
    icon: <FiUsers size={20} />,
    color: "#10b981",
    metric: "50+ Students",
  },
  {
    title: "University Jury Member / Technical Evaluator",
    org: "Anurag University",
    description: "Invited as jury member to evaluate student software engineering projects, providing feedback on implementation quality, architecture, and problem-solving approaches.",
    icon: <FiAward size={20} />,
    color: "#ccff00",
    metric: "Jury Panel",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section" ref={ref} style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-tag">Academic Background</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gap: 48 }}>
          {/* Education */}
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass-card"
              style={{ padding: 36 }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
                {/* Logo */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}10)`,
                    border: `1px solid ${edu.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: edu.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    flexShrink: 0,
                  }}
                >
                  {edu.logo}
                </div>

                <div style={{ flex: 1 }}>
                  <div 
                    style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      justifyContent: "space-between", 
                      alignItems: "flex-start", 
                      gap: 12 
                    }}
                    className="edu-card-header"
                  >
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 800 }}>{edu.institution}</h3>
                      <p style={{ color: edu.color, fontWeight: 600, marginTop: 4 }}>{edu.degree}</p>
                    </div>
                    <div className="edu-meta" style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "6px 14px",
                          borderRadius: 100,
                          background: "linear-gradient(135deg, rgba(0,255,159,0.15), rgba(16,185,129,0.15))",
                          border: "1px solid rgba(0,255,159,0.3)",
                          fontSize: "0.9rem",
                          fontWeight: 800,
                          color: "#00ff9f",
                        }}
                      >
                        <FiBook size={14} />
                        GPA {edu.gpa}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, marginTop: 8, color: "var(--text-muted)", fontSize: "0.82rem" }}>
                        <FiCalendar size={13} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, marginTop: 16 }}>{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 4, height: 20, borderRadius: 2, background: "#f59e0b" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f59e0b", fontFamily: "'JetBrains Mono', monospace" }}>
                Certifications
              </span>
            </div>

            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="glass-card"
                style={{ padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${cert.color}20`,
                    border: `1px solid ${cert.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <cert.Icon size={22} color={cert.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>{cert.title}</h4>
                      <p style={{ color: cert.color, fontSize: "0.85rem", fontWeight: 600, marginTop: 2 }}>{cert.subtitle}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 100,
                          background: "rgba(245,158,11,0.15)",
                          border: "1px solid rgba(245,158,11,0.3)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#f59e0b",
                        }}
                      >
                        {cert.badge}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>{cert.year}</span>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.6, marginTop: 10 }}>{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 4, height: 20, borderRadius: 2, background: "#10b981" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#10b981", fontFamily: "'JetBrains Mono', monospace" }}>
                Leadership & Community
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))", gap: 20 }}>
              {LEADERSHIP.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{ padding: 24 }}
                >
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h4 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.title}</h4>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: 100,
                            background: `${item.color}15`,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: item.color,
                          }}
                        >
                          {item.metric}
                        </span>
                      </div>
                      <p style={{ color: item.color, fontSize: "0.8rem", fontWeight: 600, marginTop: 2 }}>{item.org}</p>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: 8 }}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
