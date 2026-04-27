"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiZap } from "react-icons/fi";
import {
  SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiKubernetes,
  SiPython, SiTensorflow, SiKeras, SiOpencv,
  SiOpenai, SiPytorch, SiFastapi, SiAngular, SiTypescript, SiFirebase, SiGrafana,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";


const PROJECTS = [
  {
    title: "DevTrack",
    subtitle: "Personal Productivity & Monitoring Suite",
    year: "2025",
    description:
      "Full-stack productivity suite with real-time analytics, ETL pipelines, and live Grafana dashboards for monitoring coding hours, error rates, and productivity metrics.",
    color: "#39ff14",
    gradient: "linear-gradient(135deg, rgba(57,255,20,0.12), rgba(57,255,20,0.04))",
    technologies: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    ],
    highlights: [
      "JWT-based auth with role-based access control",
      "ETL pipelines for daily activity logs into PostgreSQL",
      "Live Grafana dashboards for developer observability",
      "Containerized with Docker, deployed on Kubernetes",
    ],
    badge: "DevOps",
    badgeColor: "#39ff14",
  },
  {
    title: "VisionCare",
    subtitle: "Deep Learning Medical Imaging System",
    year: "2024",
    description:
      "CNN-based deep learning system achieving 92% accuracy in detecting diabetic retinopathy from retinal images, deployed on AWS EC2 with scalable RESTful APIs.",
    color: "#39ff14",
    gradient: "linear-gradient(135deg, rgba(57,255,20,0.10), rgba(57,255,20,0.03))",
    technologies: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", Icon: SiKeras, color: "#D00000" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
    ],
    highlights: [
      "92% classification accuracy on retinal images",
      "Transfer learning with ResNet & EfficientNet",
      "OpenCV preprocessing pipelines for augmentation",
      "Deployed on AWS EC2 with REST API interface",
    ],
    badge: "AI/ML",
    badgeColor: "#39ff14",
  },
  {
    title: "ConversAI",
    subtitle: "Multimodal AI Chatbot & Image Intelligence",
    year: "2024",
    description:
      "Multimodal AI assistant combining LLMs, semantic search with FAISS, image classification, and contextual memory for real-time conversational intelligence.",
    color: "#39ff14",
    gradient: "linear-gradient(135deg, rgba(57,255,20,0.11), rgba(57,255,20,0.03))",
    technologies: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "OpenAI", Icon: SiOpenai, color: "#ffffff" },
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
    ],
    highlights: [
      "LLM orchestration via OpenAI API & LangChain",
      "FAISS vector search for semantic question answering",
      "Image classification pipeline with TensorFlow/PyTorch",
      "REST APIs with FastAPI, deployed on Docker + AWS",
    ],
    badge: "Gen AI",
    badgeColor: "#39ff14",
  },
  {
    title: "Learning Destiny",
    subtitle: "Scalable Education Platform",
    year: "2023",
    description:
      "Real-time education platform built with Angular and Firebase supporting thousands of concurrent users with RBAC, cross-cloud sync, and optimized WebSocket connections.",
    color: "#39ff14",
    gradient: "linear-gradient(135deg, rgba(57,255,20,0.09), rgba(57,255,20,0.02))",
    technologies: [
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ],
    highlights: [
      "Real-time data sync for thousands of concurrent users",
      "Granular RBAC for secure cross-role collaboration",
      "Firebase query optimization — 20% read cost reduction",
      "WebSocket connections for live classroom interaction",
    ],
    badge: "EdTech",
    badgeColor: "#f59e0b",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="section" ref={ref}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-tag">Featured Work</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
            Production-grade systems spanning full-stack web, AI/ML, DevOps, and cloud deployment.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          className="grid-cols-mobile-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: 28,
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="project-card"
              style={{
                borderColor: hovered === i ? `${project.color}40` : "var(--border)",
                boxShadow: hovered === i ? `0 0 40px ${project.color}15` : "none",
              }}
            >
              {/* Card header */}
              <div
                className="project-card-header"
                style={{ background: project.gradient }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          padding: "3px 10px",
                          borderRadius: 100,
                          background: `${project.badgeColor}20`,
                          border: `1px solid ${project.badgeColor}40`,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: project.badgeColor,
                          letterSpacing: "0.1em",
                        }}
                      >
                        <FiZap size={10} />
                        {project.badge}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                        {project.year}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)" }}>{project.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: project.color, fontWeight: 500, marginTop: 2 }}>{project.subtitle}</p>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        background: "transparent",
                        color: "var(--text-muted)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FiGithub size={15} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, marginTop: 14 }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {project.technologies.map(({ name, Icon, color }) => (
                    <span
                      key={name}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: `${color}12`,
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
              </div>

              {/* Highlights */}
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>
                  Key Achievements
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none" }}>
                  {project.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: "flex", gap: 10, fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      <span style={{ color: project.color, flexShrink: 0 }}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
