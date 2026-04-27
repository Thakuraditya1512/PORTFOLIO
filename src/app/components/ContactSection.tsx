"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiGithub } from "react-icons/fi";

const CONTACT_INFO = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "thakuradityasingh1512@gmail.com",
    href: "mailto:thakuradityasingh1512@gmail.com",
    color: "#00ff9f",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+91 93984 15366",
    href: "tel:+919398415366",
    color: "#10b981",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Hyderabad, India",
    href: "#",
    color: "#a855f7",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "thakur-aditya-singh",
    href: "https://linkedin.com/in/thakur-aditya-singh",
    color: "#0A66C2",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-tag">Let's Connect</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
            Open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div 
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 36 }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Quick info cards */}
            {CONTACT_INFO.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass-card"
                  style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color,
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      {label}
                    </p>
                    <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.9rem", marginTop: 2 }}>{value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              {[
                { href: "https://github.com/Thakuraditya1512", Icon: FiGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/thakur-aditya-singh", Icon: FiLinkedin, label: "LinkedIn" },
                { href: "mailto:thakuradityasingh1512@gmail.com", Icon: FiMail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: "16px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    fontSize: "0.75rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,255,159,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }}
                >
                  <Icon size={20} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", 
                  gap: 16 
                }}
              >
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formState.subject}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formState.message}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="btn-glow"
                style={{
                  padding: "14px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  fontSize: "0.95rem",
                  opacity: sending ? 0.7 : 1,
                  cursor: sending ? "not-allowed" : "pointer",
                }}
              >
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 10 }}>
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : sending ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin-slow 0.8s linear infinite" }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
