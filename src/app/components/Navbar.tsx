"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: "rgba(255,255,255,0.9)",
              border: "2px solid #39ff14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.85rem",
              color: "#000000",
              letterSpacing: "-0.02em",
              boxShadow: "0 0 15px rgba(57,255,20,0.3)",
            }}
          >
            TAS
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Thakur<span style={{ color: "#39ff14" }}>Aditya</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div
          className="nav-links-desktop"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{
                  color: isActive ? "#39ff14" : "var(--text-secondary)",
                  background: isActive ? "rgba(57,255,20,0.12)" : "transparent",
                  border: isActive ? "1px solid rgba(57,255,20,0.3)" : "1px solid transparent",
                }}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn-neon-glow"
            style={{ marginLeft: 8, padding: "8px 18px", fontSize: "0.85rem" }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>Hire Me</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          style={{ color: "var(--text-primary)" }}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              background: "rgba(5,5,16,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border)",
              overflow: "hidden",
            }}
            className="nav-mobile-menu"
          >
            <div style={{ padding: "16px 24px 24px" }}>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                    color: active === href.replace("#", "") ? "#39ff14" : "var(--text-secondary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="btn-neon-glow"
                style={{ display: "block", textAlign: "center", marginTop: 20, padding: "12px", width: "100%" }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
          }
        }
        @media (min-width: 769px) {
          .nav-mobile-toggle {
            display: none !important;
          }
          .nav-mobile-menu {
            display: none !important;
          }
        }
        .nav-link {
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8;
          font-size: 0.87rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
        }
      `}</style>
    </nav>
  );
}
