"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiAngular, SiRedux, SiTailwindcss, SiHtml5,
  SiSpringboot, SiExpress, SiNodedotjs, SiDotnet,
  SiDocker, SiKubernetes, SiGithubactions, SiJenkins,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiRedis,
  SiVite, SiNextdotjs, SiGraphql,
  SiTensorflow, SiPytorch, SiOpencv, SiKeras,
  SiFastapi, SiLangchain, SiOpenai, SiGrafana,
} from "react-icons/si";
import {
  FaJava, FaAws, FaShieldAlt, FaGitAlt, FaMicrosoft,
} from "react-icons/fa";
import { DiCss3, DiDotnet } from "react-icons/di";

// For C# we use a custom text badge or fa icon
const CSharpIcon = (props: { size?: number; color?: string }) => (
  <span
    style={{
      fontWeight: 900,
      fontSize: props.size ? props.size * 0.85 : 14,
      color: props.color || "currentColor",
      fontFamily: "monospace",
      lineHeight: 1,
      userSelect: "none",
    }}
  >
    C#
  </span>
);

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    color: "#00ff9f",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "C#", Icon: CSharpIcon, color: "#239120" },
    ],
  },
  {
    label: "Frontend",
    color: "#10b981",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: DiCss3, color: "#1572B6" },
    ],
  },
  {
    label: "Backend",
    color: "#10b981",
    skills: [
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
      { name: ".NET Core", Icon: SiDotnet, color: "#512BD4" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#ccff00",
    skills: [
      { name: "Microsoft Azure", Icon: FaMicrosoft, color: "#0078D4" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D33833" },
      { name: "Git", Icon: FaGitAlt, color: "#F05033" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    ],
  },
  {
    label: "Databases",
    color: "#0d9488",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    label: "AI & ML",
    color: "#00ff88",
    skills: [
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "Keras", Icon: SiKeras, color: "#D00000" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
      { name: "OpenAI", Icon: SiOpenai, color: "#74AA9C" },
    ],
  },
  {
    label: "Security",
    color: "#10b981",
    skills: [
      { name: "OAuth 2.0", Icon: FaShieldAlt, color: "#EB5424" },
      { name: "JWT", Icon: FaShieldAlt, color: "#00ff9f" },
      { name: "RBAC", Icon: FaShieldAlt, color: "#10b981" },
      { name: "Azure AD", Icon: FaMicrosoft, color: "#0078D4" },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section" ref={ref}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-tag">Technical Arsenal</span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginTop: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: 16,
              maxWidth: 500,
              margin: "16px auto 0",
            }}
          >
            A curated set of technologies I use to build scalable, production-grade systems.
          </p>
        </motion.div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {SKILL_CATEGORIES.map(({ label, color, skills }, catIdx) => (
            <div key={label}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 20,
                    borderRadius: 2,
                    background: color,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `linear-gradient(90deg, ${color}33, transparent)`,
                  }}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {skills.map(({ name, Icon, color: iconColor }, i) => (
                  <motion.div
                    key={name}
                    custom={catIdx * 2 + i * 0.5}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="skill-badge"
                    style={{ cursor: "default" }}
                  >
                    <Icon
                      size={16}
                      color={iconColor}
                      style={{ flexShrink: 0 }}
                    />
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid-cols-mobile-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
            marginTop: 64,
          }}
        >
          {[
            { value: "40+", label: "Technologies", color: "#00ff9f" },
            { value: "1.5+", label: "Years Experience", color: "#a855f7" },
            { value: "10+", label: "Projects Built", color: "#10b981" },
            { value: "50+", label: "Students Mentored", color: "#f59e0b" },
          ].map(({ value, label, color }) => (
            <div key={label} className="stat-card">
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color,
                  letterSpacing: "-0.03em",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  marginTop: 4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
