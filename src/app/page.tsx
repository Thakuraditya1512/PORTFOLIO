
"use client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-black via-indigo-950 to-black font-sans">
      {/* Parallax Space Background */}
      <Parallax pages={1.2} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <ParallaxLayer offset={0} speed={0.1} style={{ opacity: 0.5 }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(123,47,255,0.15)_0%,transparent_70%)]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.3 }}>
          <div className="absolute left-1/2 top-1/3 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-indigo-800 blur-3xl opacity-40" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4} style={{ opacity: 0.2 }}>
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-500 blur-2xl opacity-30" />
        </ParallaxLayer>
      </Parallax>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl"
        >
          {/* Text Column */}
          <div className="flex-1 flex flex-col items-start gap-6">
            <span className="uppercase tracking-widest text-sm text-cyan-400 font-mono">AI Engineer · Software Engineer</span>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
              Thakur<br />Aditya<br />Singh
            </h1>
            <div className="flex items-center gap-3 text-lg text-cyan-300 font-mono">
              <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              Full-Stack · AI · Cloud · DevOps
            </div>
            <p className="max-w-xl text-lg text-zinc-300">
              Architecting enterprise-grade applications and AI systems at <span className="text-cyan-400 font-semibold">LTIMindtree</span>.<br />
              Passionate about building scalable platforms that bridge the gap between artificial intelligence and real-world impact.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#projects" className="px-8 py-3 rounded bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow-lg hover:scale-105 transition-transform">EXPLORE WORK</a>
              <a href="#contact" className="px-8 py-3 rounded border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-900/30 transition">TRANSMIT SIGNAL</a>
            </div>
          </div>
          {/* Image Column */}
          <div className="flex-1 flex items-center justify-center relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-cyan-400/30 overflow-hidden bg-gradient-to-br from-indigo-900 via-black to-purple-900"
            >
              {/* Replace src with your image path */}
              <Image
                src="/aditya.jpeg"
              
                alt="Thakur Aditya Singh"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400/40 animate-spin-slow"
                style={{ borderStyle: "dashed" }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              />
              {/* Floating planet */}
              <motion.div
                className="absolute -right-10 bottom-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 blur-xl opacity-60"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Parallax stars overlay (placeholder, can be replaced with canvas) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Add a canvas or SVG for animated stars here if desired */}
        </div>
      </section>
    </div>
  );
}
