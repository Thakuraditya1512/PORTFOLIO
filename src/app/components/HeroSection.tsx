"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin,
  FiDownload, FiArrowDown, FiExternalLink,
} from "react-icons/fi";
import {
  SiReact, SiAngular, SiSpringboot, SiNodedotjs,
  SiDocker, SiKubernetes, SiPostgresql, SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const ROLES = [
  "Full-Stack Engineer",
  "AI & ML Enthusiast",
  "Cloud Architect",
  "DevOps Practitioner",
  "Open Source Contributor",
];

const FLOATING_TECH = [
  { Icon: SiReact, color: "#39ff14", x: "8%", y: "20%", size: 36 },
  { Icon: SiAngular, color: "#39ff14", x: "88%", y: "15%", size: 32 },
  { Icon: SiSpringboot, color: "#39ff14", x: "5%", y: "72%", size: 30 },
  { Icon: SiNodedotjs, color: "#39ff14", x: "90%", y: "68%", size: 34 },
  { Icon: SiDocker, color: "#39ff14", x: "15%", y: "45%", size: 28 },
  { Icon: SiKubernetes, color: "#39ff14", x: "83%", y: "42%", size: 28 },
  { Icon: SiPostgresql, color: "#39ff14", x: "50%", y: "8%", size: 26 },
  { Icon: SiFirebase, color: "#39ff14", x: "50%", y: "88%", size: 26 },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseClient, setMouseClient] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Mouse tracking for both parallax and cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseClient({ x: e.clientX, y: e.clientY });
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 40, // Increased intensity
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 5-connection web system with purple color - section-specific
  useEffect(() => {
    let connectionCount = 0;
    let firstClick: { x: number; y: number } | null = null;
    let firstWebDesign: HTMLElement | null = null;
    let currentSection: HTMLElement | null = null;

    const handleClick = (e: MouseEvent) => {
      // Find the section containing the click
      const target = e.target as HTMLElement;
      currentSection = target.closest('section');
      
      if (!currentSection) return;

      // Find or create web container for this specific section
      let webContainer = currentSection.querySelector('.section-web-container') as HTMLElement;
      if (!webContainer) {
        webContainer = document.createElement('div');
        webContainer.className = 'section-web-container';
        webContainer.style.cssText = `
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 50;
          overflow: visible;
        `;
        currentSection.style.position = 'relative';
        currentSection.appendChild(webContainer);
      }

      // Get section's position for relative positioning
      const sectionRect = currentSection.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      
      // Calculate positions relative to the section
      const x = e.clientX - sectionRect.left;
      const y = e.clientY - sectionRect.top;

      if (!firstClick) {
        // First click - create web design
        firstClick = { x, y };

        firstWebDesign = document.createElement('div');
        firstWebDesign.className = 'spider-web-design';
        firstWebDesign.style.cssText = `
          position: absolute;
          width: 20px;
          height: 20px;
          left: ${x - 10}px;
          top: ${y - 10}px;
          pointer-events: none;
          z-index: 51;
          animation: webDesignSpin 3s linear infinite;
        `;
        
        const webColor = connectionCount >= 5 ? '147, 51, 234' : '57, 255, 20'; // Purple or green
        
        firstWebDesign.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 20 20" style="position: absolute;">
            <circle cx="10" cy="10" r="8" fill="none" stroke="rgba(${webColor},0.6)" stroke-width="1"/>
            <circle cx="10" cy="10" r="5" fill="none" stroke="rgba(${webColor},0.4)" stroke-width="0.5"/>
            <circle cx="10" cy="10" r="2" fill="rgba(${webColor},0.8)"/>
            <path d="M10,2 L10,18 M2,10 L18,10 M4,4 L16,16 M16,4 L4,16" stroke="rgba(${webColor},0.3)" stroke-width="0.5"/>
          </svg>
        `;

        webContainer.appendChild(firstWebDesign);
      } else {
        // Second click - connect webs
        const distance = Math.sqrt(Math.pow(x - firstClick.x, 2) + Math.pow(y - firstClick.y, 2));
        const angle = Math.atan2(y - firstClick.y, x - firstClick.x) * 180 / Math.PI;

        connectionCount++;

        // Create web line
        const web = document.createElement('div');
        web.className = 'spider-web';
        const webColor = connectionCount >= 5 ? '147, 51, 234' : '57, 255, 20'; // Purple or green
        
        web.style.cssText = `
          position: absolute;
          height: 3px;
          background: linear-gradient(90deg, 
            rgba(${webColor},0.8) 0%, 
            rgba(${webColor},0.6) 25%, 
            rgba(${webColor},0.4) 50%, 
            rgba(${webColor},0.6) 75%, 
            rgba(${webColor},0.8) 100%
          );
          transform-origin: left center;
          pointer-events: none;
          z-index: 50;
          box-shadow: 0 0 8px rgba(${webColor},0.6), inset 0 0 4px rgba(${webColor},0.4);
        `;

        web.style.width = `${distance}px`;
        web.style.left = `${firstClick.x}px`;
        web.style.top = `${firstClick.y}px`;
        web.style.transform = `rotate(${angle}deg)`;

        webContainer.appendChild(web);

        // Create end web design
        const endWebDesign = document.createElement('div');
        endWebDesign.className = 'spider-web-design';
        endWebDesign.style.cssText = `
          position: absolute;
          width: 24px;
          height: 24px;
          left: ${x - 12}px;
          top: ${y - 12}px;
          pointer-events: none;
          z-index: 52;
          animation: webDesignPulse 2s ease-in-out infinite;
        `;
        
        endWebDesign.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" style="position: absolute;">
            <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(${webColor},0.8)" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="7" fill="none" stroke="rgba(${webColor},0.6)" stroke-width="1"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="rgba(${webColor},0.4)" stroke-width="0.5"/>
            <circle cx="12" cy="12" r="2" fill="rgba(${webColor},0.9)"/>
            <path d="M12,2 L12,22 M2,12 L22,12 M5,5 L19,19 M19,5 L5,19" stroke="rgba(${webColor},0.5)" stroke-width="0.8"/>
            <path d="M12,2 L8,8 L16,8 Z M12,22 L8,16 L16,16 Z M2,12 L8,8 L8,16 Z M22,12 L16,8 L16,16 Z" 
                  stroke="rgba(${webColor},0.3)" stroke-width="0.5" fill="rgba(${webColor},0.1)"/>
          </svg>
        `;

        webContainer.appendChild(endWebDesign);

        // Reset for next web
        firstClick = null;
        firstWebDesign = null;
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="section min-h-screen relative overflow-hidden" 
      style={{ background: "#000000", cursor: "none" }}
    >
      {/* Spider Cursor - Desktop & Mobile */}
      <motion.div
        className="fixed pointer-events-none z-[100] block"
        animate={{ x: mouseClient.x - 15, y: mouseClient.y - 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      >
        <div className="relative w-8 h-8">
          {/* Spider Body */}
          <div className="absolute inset-0 bg-[#39ff14] rounded-full blur-[1px] opacity-80" />
          <div className="absolute inset-[30%] bg-black rounded-full" />
          
          {/* Spider Legs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-[1px] bg-[#39ff14]/60"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "left center",
                rotate: i * 45,
              }}
              animate={{
                scaleX: [1, 1.4, 1],
                rotate: [i * 45, i * 45 + (i % 2 === 0 ? 10 : -10), i * 45],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
          {/* Cursor Glow */}
          <div className="absolute inset-[-10px] bg-[#39ff14]/20 rounded-full blur-xl" />
        </div>
      </motion.div>

            
      {/* Web Animations */}
      <style jsx>{`
        @keyframes webDesignSpin {
          0% { 
            transform: rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
          }
        }
        
        @keyframes webDesignPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 1; 
          }
        }
        
        .spider-web {
          box-shadow: 0 0 12px rgba(57,255,20,0.8), inset 0 0 6px rgba(57,255,20,0.4);
        }
        
        .spider-web-design {
          filter: drop-shadow(0 0 8px rgba(57,255,20,0.6));
        }
      `}</style>

      {/* Background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: "transform 0.2s ease-out"
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: "50%", left: "40%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            top: "30%", left: "65%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Unique Mobile Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent z-0 md:hidden"
        animate={{
          top: ["0%", "100%", "0%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating tech icons */}
      {FLOATING_TECH.map(({ Icon, color, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          <div
            className="floating-icon-mobile"
            style={{
              transform: `translate(${mousePos.x * (i % 2 === 0 ? 1 : -1) * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <Icon size={size} color={color} style={{ opacity: 0.7, filter: `drop-shadow(0 0 12px ${color})` }} />
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ 
          y: y1, 
          opacity,
          transform: `perspective(1000px) rotateX(${-mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
          transition: "transform 0.1s ease-out"
        }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-6xl px-6 md:pl-20 lg:pl-32 mx-auto hero-container"
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2 hero-text-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="section-tag">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "var(--text-primary)" }}></span>
            
            <span className="gradient-text-neon"> Aditya</span>
            
            <span style={{ color: "var(--text-primary)" }}> Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1.1rem",
              color: "#39ff14",
              minHeight: "1.6rem",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span>&gt;</span>
            <span>{displayed}</span>
            <span className="blink" style={{ color: "#39ff14" }}>|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              maxWidth: 520,
              color: "var(--text-primary)",
              fontSize: "1.08rem",
              lineHeight: 1.7,
              textShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            Software Engineer at <span style={{ color: "#39ff14", fontWeight: 700, borderBottom: "1px solid #39ff14" }}>LTIMindtree</span>.
            {" "}1.3 years of experience building <span style={{ color: "#39ff14" }}>scalable enterprise platforms</span> at the intersection of
            AI, cloud, and modern web development.
          </motion.p>

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 contact-row"
          >
            {[
              { icon: <FiMapPin size={14} />, label: "Hyderabad, India" },
              { icon: <FiPhone size={14} />, label: "+91 93984 15366" },
              { icon: <FiMail size={14} />, label: "thakuradityasingh1512@gmail.com" },
            ].map(({ icon, label }, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-secondary)",
                  fontSize: "0.82rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "rgba(255,255,255,0.05)",
                  padding: "4px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ color: "#39ff14" }}>{icon}</span>
                <span style={{ color: "#ffffff" }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-2"
          >
            <a href="#projects" className="btn-neon-glow" style={{ padding: "12px 28px", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ position: "relative", zIndex: 1 }}>View My Work</span>
            </a>
            <a href="#contact" className="btn-neon-outline" style={{ padding: "12px 28px", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <FiMail size={15} /> Get In Touch
            </a>
            <a href="../aditya_resume.pdf" download className="btn-neon-outline" style={{ padding: "12px 28px", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: 8, borderColor: "#39ff14", color: "#39ff14" }}>
              <FiDownload size={15} /> Get Resume
            </a>
            <a
              href="https://linkedin.com/in/thakur-aditya-singh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 10,
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#39ff14";
                (e.currentTarget as HTMLElement).style.color = "#39ff14";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar area (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="hidden md:flex flex-shrink-0 items-center justify-center relative hero-avatar-wrapper"
          style={{ width: 340, height: 340 }}
        >
          {/* Rotating rings */}
          {[1, 1.3, 1.6].map((scale, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid rgba(57,255,20,${0.3 - i * 0.08})`,
                transform: `scale(${scale})`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* Avatar circle */}
          <motion.div
            className="animate-pulse-glow hero-avatar-circle"
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              border: "3px solid #39ff14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(57,255,20,0.4)",
            }}
          >
            {/* Initials avatar */}
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(57,255,20,0.3)",
              }}
            >
              <Image
                src="/aditya.jpeg"
                alt="Thakur Aditya Singh"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Scan line animation */}
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.8), transparent)",
              }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: "absolute",
              bottom: 20,
              right: 0,
              background: "rgba(255,255,255,0.9)",
              border: "2px solid #39ff14",
              borderRadius: 10,
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(57,255,20,0.3)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#39ff14",
                boxShadow: "0 0 12px rgba(57,255,20,1)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: "0.75rem", color: "#000000", fontWeight: 600 }}>
              Open to Work
            </span>
          </motion.div>

          {/* Company badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              position: "absolute",
              top: 30,
              left: 0,
              background: "rgba(255,255,255,0.9)",
              border: "2px solid #39ff14",
              borderRadius: 10,
              padding: "8px 14px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(57,255,20,0.3)",
            }}
          >
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block", marginBottom: 2 }}>Current</span>
            <span style={{ fontSize: "0.8rem", color: "#000000", fontWeight: 700 }}>LTIMindtree</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2"
        style={{ transform: "translateX(-50%)" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" style={{ color: "var(--text-muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>SCROLL</span>
          <FiArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
