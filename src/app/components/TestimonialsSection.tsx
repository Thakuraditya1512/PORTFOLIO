"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section" ref={ref} style={{ padding: "60px 0", background: "rgba(0,0,0,0.2)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
          
          {/* Amy Hinsley Testimonial
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ 
              padding: "24px", 
              display: "flex", 
              alignItems: "center", 
              gap: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(10,10,10,0.4)",
              filter: "grayscale(100%)",
              width: "100%",
              maxWidth: "450px"
            }}
          >
            <div style={{ flexShrink: 0, position: "relative", width: "80px", height: "80px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Image
                src="/amy_hinsley.png"
                alt="Amy Hinsley"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>Amy Hinsley</h3>
              <p style={{ fontSize: "0.8rem", color: "#ccc", lineHeight: "1.4" }}>
                Global Head of Marketing,<br />
                Consumer Services & Solutions — HP
              </p>
            </div>
          </motion.div> */}

          {/* Aditya Singh Developer Card / Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
            style={{ 
              padding: "24px", 
              display: "flex", 
              alignItems: "center", 
              gap: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(10,10,10,0.4)",
              filter: "grayscale(100%)",
              width: "100%",
              maxWidth: "450px"
            }}
          >
            <div style={{ flexShrink: 0, position: "relative", width: "80px", height: "80px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Image
                src="/aditya.png"
                alt="Thakur Aditya Singh"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>Thakur Aditya Singh</h3>
              <p style={{ fontSize: "0.8rem", color: "#ccc", lineHeight: "1.4", marginBottom: "10px" }}>
                Software Engineer at LTIMindtree<br />
                Full-Stack & AI Developer
              </p>
              <a 
                href="/resume.pdf" 
                download 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "6px", 
                  fontSize: "0.75rem", 
                  fontWeight: 700, 
                  color: "#fff", 
                  background: "rgba(255,255,255,0.1)", 
                  padding: "6px 12px", 
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <FiDownload size={12} /> Resume
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
