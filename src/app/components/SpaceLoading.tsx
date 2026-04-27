"use client";

import { useState, useEffect, useRef } from "react";

export default function SpaceLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const spiderRef = useRef<HTMLDivElement>(null);
  const soundWaveRef = useRef<HTMLDivElement>(null);
  const completionRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    window.addEventListener("loading-complete", handleComplete);
    return () => window.removeEventListener("loading-complete", handleComplete);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const codeLines = [
      { text: '<span class="comment">// Initializing neural network...</span>', delay: 0 },
      { text: '<span class="keyword">const</span> <span class="variable">system</span> = <span class="keyword">new</span> <span class="function">NeuralInterface</span>();', delay: 10 },
      { text: '<span class="keyword">await</span> <span class="variable">system</span>.<span class="function">initialize</span>();', delay: 10 },
      { text: '<span class="comment">// Deploying spider security...</span>', delay: 10 },
      { text: '<span class="keyword">const</span> <span class="variable">spider</span> = <span class="keyword">new</span> <span class="function">NeonSpider</span>();', delay: 10 },
      { text: '<span class="function">console</span>.<span class="function">log</span>(<span class="string">"🌐  terminal ready"</span>);', delay: 10 }
    ];

    let currentLineIndex = 0;

    // Matrix Rain Effect
    const createMatrixRain = () => {
      if (!matrixRef.current) return;

      const columns = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${3 + Math.random() * 4}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;

        const chars = '01ｱｲｳｴｵｶｷｸｹｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
        let text = '';
        for (let j = 0; j < 20; j++) {
          text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;

        matrixRef.current.appendChild(column);
      }
    };

    const typeCharacters = (element: HTMLElement, text: string, callback: () => void) => {
      let index = 0;

      const typeChar = () => {
        if (index < text.length) {
          element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
          index++;
          setTimeout(typeChar, 1 + Math.random() * 3);
        } else {
          element.innerHTML = text;
          callback();
        }
      };

      typeChar();
    };

    const typeLine = () => {
      if (!terminalRef.current) return;

      if (currentLineIndex >= codeLines.length) {
        setTimeout(showCompletion, 50);
        return;
      }

      const line = codeLines[currentLineIndex];
      const lineElement = document.createElement('div');
      lineElement.className = 'code-line';
      lineElement.style.animationDelay = '0s';

      terminalRef.current.appendChild(lineElement);

      if (line.text) {
        typeCharacters(lineElement, line.text, () => {
          currentLineIndex++;
          setTimeout(typeLine, 5);
        });
      } else {
        currentLineIndex++;
        setTimeout(typeLine, 5);
      }

      // Show spider after certain lines
      if (currentLineIndex === 3) {
        setTimeout(() => {
          if (spiderRef.current) {
            spiderRef.current.classList.add('spider-active');
          }
          if (soundWaveRef.current) {
            soundWaveRef.current.classList.add('active');
          }
        }, 20);
      }
    };

    const showCompletion = () => {
      if (!completionRef.current) return;

      // Create particle burst
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 100 + Math.random() * 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.animation = `particleBurst 1s ease-out forwards`;

        completionRef.current.appendChild(particle);
      }

      setTimeout(() => {
        if (completionRef.current) {
          completionRef.current.classList.add('active');
        }

        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('loading-complete'));
        }, 2000);
      }, 500);
    };

    // Initialize
    createMatrixRain();
    setTimeout(typeLine, 10);

    return () => {
      // Cleanup
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      <div id="cyberpunk-loader">
        <style jsx>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          
          #cyberpunk-loader {
            width: 100%;
            height: 100vh;
            background: radial-gradient(ellipse at center, #0a0a0f 0%, #000000 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Animated Circuit Grid Background */
          .circuit-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridPulse 4s ease-in-out infinite;
          }

          .circuit-trace {
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.6), transparent);
            height: 2px;
            animation: traceFlow 3s linear infinite;
          }

          @keyframes gridPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }

          @keyframes traceFlow {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }

          /* Matrix Rain */
          .matrix-rain {
            position: absolute;
            inset: 0;
            pointer-events: none;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: rgba(0, 255, 0, 0.8);
            text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
          }

          .matrix-column {
            position: absolute;
            top: -100%;
            animation: matrixFall linear infinite;
          }

          @keyframes matrixFall {
            to { transform: translateY(200vh); }
          }

          /* Terminal Container */
          .terminal-container {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 800px;
            background: linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(0, 10, 30, 0.9));
            border: 2px solid rgba(0, 255, 255, 0.6);
            border-radius: 16px;
            box-shadow: 
              0 0 40px rgba(0, 255, 255, 0.4),
              inset 0 0 20px rgba(0, 255, 255, 0.1);
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          /* Terminal Header */
          .terminal-header {
            background: linear-gradient(90deg, rgba(0, 40, 80, 0.8), rgba(0, 20, 60, 0.8));
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          }

          .terminal-dots {
            display: flex;
            gap: 8px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
          }

          .dot-red { background: #ff4444; }
          .dot-yellow { background: #ffaa00; }
          .dot-green { background: #00ff88; }

          .terminal-title {
            flex: 1;
            color: rgba(0, 255, 255, 0.9);
            font-family: 'Courier New', monospace;
            font-size: 14px;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
            animation: glitch 2s infinite;
          }

          @keyframes glitch {
            0%, 100% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.6); }
            25% { text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff; }
            50% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
            75% { text-shadow: 0 0 15px rgba(0, 255, 255, 0.9); }
          }

          /* Terminal Body */
          .terminal-body {
            padding: 20px;
            min-height: 300px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.6;
            color: rgba(0, 255, 255, 0.9);
            position: relative;
          }

          .code-line {
            margin: 4px 0;
            opacity: 0;
            animation: fadeInLine 0.5s forwards;
          }

          @keyframes fadeInLine {
            to { opacity: 1; }
          }

          .keyword { color: #ff79c6; text-shadow: 0 0 5px #ff79c6; }
          .function { color: #8be9fd; text-shadow: 0 0 5px #8be9fd; }
          .string { color: #50fa7b; text-shadow: 0 0 5px #50fa7b; }
          .number { color: #ffb86c; text-shadow: 0 0 5px #ffb86c; }
          .comment { color: #6272a4; font-style: italic; }
          .variable { color: #f8f8f2; text-shadow: 0 0 3px rgba(255, 255, 255, 0.3); }

          .cursor {
            display: inline-block;
            width: 10px;
            height: 18px;
            background: rgba(0, 255, 255, 0.8);
            animation: cursorBlink 1s step-end infinite;
            vertical-align: text-bottom;
            margin-left: 2px;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
          }

          @keyframes cursorBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          /* Neon Spider */
          .neon-spider {
            position: absolute;
            bottom: -150px;
            right: -150px;
            width: 120px;
            height: 120px;
            z-index: 15;
            opacity: 0;
            transition: all 0.8s ease;
          }

          .spider-active {
            bottom: 20px;
            right: 20px;
            opacity: 1;
          }

          .spider-body {
            position: relative;
            width: 60px;
            height: 60px;
            background: radial-gradient(circle, rgba(255, 0, 255, 0.8), rgba(0, 255, 255, 0.6));
            border-radius: 50%;
            box-shadow: 
              0 0 30px rgba(255, 0, 255, 0.8),
              inset 0 0 20px rgba(0, 255, 255, 0.6);
            animation: spiderPulse 2s ease-in-out infinite;
          }

          @keyframes spiderPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(255, 0, 255, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.6); }
            50% { transform: scale(1.2); box-shadow: 0 0 50px rgba(255, 0, 255, 1), inset 0 0 30px rgba(0, 255, 255, 0.8); }
          }

          .spider-leg {
            position: absolute;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255, 0, 255, 0.8), rgba(0, 255, 255, 0.6));
            transform-origin: left center;
            box-shadow: 0 0 10px rgba(255, 0, 255, 0.6);
          }

          .spider-eye {
            position: absolute;
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            top: 20px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }

          .spider-eye.left { left: 15px; }
          .spider-eye.right { right: 15px; }

          /* Sound Waves */
          .sound-wave {
            position: absolute;
            bottom: 30px;
            right: 80px;
            width: 200px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .sound-wave.active {
            opacity: 1;
          }

          .wave-bar {
            width: 3px;
            background: linear-gradient(to top, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.8));
            border-radius: 2px;
            animation: waveAnimation 1s ease-in-out infinite;
          }

          @keyframes waveAnimation {
            0%, 100% { height: 10px; }
            50% { height: 40px; }
          }

          /* Holographic Overlay */
          .holographic-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, 
              transparent 30%, 
              rgba(0, 255, 255, 0.1) 50%, 
              transparent 70%);
            animation: holographicScan 3s linear infinite;
            pointer-events: none;
            z-index: 20;
          }

          @keyframes holographicScan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          /* Completion Overlay */
          .completion-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.8s ease;
            z-index: 30;
          }

          .completion-overlay.active {
            opacity: 1;
            pointer-events: auto;
          }

          .success-icon {
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, rgba(0, 255, 0, 0.8), rgba(0, 255, 255, 0.6));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            box-shadow: 0 0 40px rgba(0, 255, 0, 0.8);
            animation: successPulse 2s ease-in-out infinite;
          }

          @keyframes successPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(0, 255, 0, 0.8); }
            50% { transform: scale(1.1); box-shadow: 0 0 60px rgba(0, 255, 0, 1); }
          }

          .success-text {
            color: rgba(0, 255, 0, 0.9);
            font-family: 'Courier New', monospace;
            font-size: 18px;
            text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
            margin-bottom: 10px;
          }

          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
          }

          @keyframes particleBurst {
            0% { 
              transform: translate(0, 0) scale(0); 
              opacity: 1; 
            }
            100% { 
              transform: translate(var(--tx), var(--ty)) scale(1); 
              opacity: 0; 
            }
          }
        `}</style>

        {/* Circuit Grid Background */}
        <div className="circuit-grid">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="circuit-trace"
              style={{
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 150}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Matrix Rain */}
        <div className="matrix-rain" ref={matrixRef}></div>

        {/* Terminal Container */}
        <div className="terminal-container">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="terminal-title"> TERMINAL v2.077</div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body" ref={terminalRef}></div>
        </div>

        {/* Neon Spider */}
        <div className="neon-spider" ref={spiderRef}>
          <div className="spider-body">
            <div className="spider-eye left"></div>
            <div className="spider-eye right"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="spider-leg"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: 'left center'
                }}
              />
            ))}
          </div>
        </div>

        {/* Sound Waves */}
        <div className="sound-wave" ref={soundWaveRef}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: `${10 + Math.random() * 30}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Overlay */}
        <div className="holographic-overlay"></div>

        {/* Completion Overlay */}
        <div className="completion-overlay" ref={completionRef}>
          <div className="success-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20L16 26L30 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="success-text">SYSTEM READY</div>
          <div style={{ color: 'rgba(0, 255, 255, 0.7)', fontFamily: 'monospace' }}>Neural network activated</div>
        </div>
      </div>
    </div>
  );
}
