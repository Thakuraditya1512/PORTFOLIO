"use client";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        background: "linear-gradient(0deg, rgba(0,255,159,0.02), transparent)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #00ff9f, #10b981)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "0.75rem",
                color: "white",
              }}
            >
              TAS
            </div>
            <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>Thakur Aditya Singh</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            Full-Stack Software Engineer · Hyderabad, India
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "0.82rem" }}>
          <span>Built with</span>
          <FiHeart size={13} style={{ color: "#ec4899" }} />
          <span>using Next.js, Framer Motion & React Icons</span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
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
                width: 38,
                height: 38,
                borderRadius: 9,
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,255,159,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 32, color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace" }}>
        © {year} Thakur Aditya Singh · All rights reserved
      </div>
    </footer>
  );
}
