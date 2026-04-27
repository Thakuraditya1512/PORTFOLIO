"use client";

import { useState, useEffect } from "react";

export default function SpaceLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      <div id="loader">
        <style jsx>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          #loader { width: 100%; height: 520px; background: #1e1e2e; border-radius: 12px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
          .titlebar { background: #181825; height: 36px; display: flex; align-items: center; padding: 0 16px; gap: 8px; flex-shrink: 0; }
          .dot { width: 12px; height: 12px; border-radius: 50%; }
          .dot-r { background: #ff5f57; }
          .dot-y { background: #febc2e; }
          .dot-g { background: #28c840; }
          .tab { margin-left: 16px; background: #1e1e2e; color: #cdd6f4; font-size: 12px; font-family: var(--font-mono); padding: 4px 16px; border-radius: 6px 6px 0 0; }
          .ide-body { display: flex; flex: 1; overflow: hidden; }
          .gutter { background: #181825; width: 44px; padding-top: 12px; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
          .line-no { color: #585b70; font-size: 11px; font-family: var(--font-mono); line-height: 20px; }
          .editor { flex: 1; padding: 12px 16px; font-family: var(--font-mono); font-size: 13px; line-height: 20px; color: #cdd6f4; position: relative; overflow: hidden; }
          .line { white-space: pre; height: 20px; display: flex; align-items: center; }
          .kw { color: #cba6f7; }
          .fn { color: #89b4fa; }
          .str { color: #a6e3a1; }
          .num { color: #fab387; }
          .cmt { color: #585b70; }
          .type { color: #89dceb; }
          .var { color: #f38ba8; }
          .cursor { display: inline-block; width: 2px; height: 14px; background: #cdd6f4; animation: blink 1s step-end infinite; vertical-align: middle; }
          @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
          .error-bar { background: #1e1e2e; border-top: 1px solid #313244; padding: 8px 16px; font-family: var(--font-mono); font-size: 12px; color: #f38ba8; display: none; flex-shrink: 0; }
          .error-bar .err-title { color: #f38ba8; font-weight: 500; margin-bottom: 4px; }
          .err-line { display: flex; align-items: flex-start; gap: 8px; }
          .err-ico { color: #f38ba8; }
          #spider { position: absolute; right: -120px; bottom: -120px; width: 100px; height: 100px; transition: none; pointer-events: none; }
          .spider-body { fill: #181825; }
          .spider-eye { fill: #f38ba8; }
          .spider-leg { stroke: #cba6f7; stroke-width: 2.5; fill: none; stroke-linecap: round; }
          .thread { stroke: rgba(203,166,247,0.5); stroke-width: 1; }
          #overlay { position: absolute; inset: 0; background: #1e1e2e; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.6s ease; border-radius: 12px; }
          #overlay .ok-icon { width: 48px; height: 48px; border-radius: 50%; background: #a6e3a1; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
          #overlay .ok-check { color: #1e1e2e; font-size: 24px; font-weight: 700; }
          #overlay p { color: #cdd6f4; font-family: var(--font-mono); font-size: 14px; }
          #status { color: #89b4fa; font-size: 11px; font-family: var(--font-mono); margin-top: 8px; }
        `}</style>
        
        <div className="titlebar">
          <div className="dot dot-r"></div>
          <div className="dot dot-y"></div>
          <div className="dot dot-g"></div>
          <div className="tab">main.js</div>
        </div>
        <div className="ide-body">
          <div className="gutter" id="gutter"></div>
          <div className="editor" id="editor"></div>
        </div>
        <div className="error-bar" id="errorBar">
          <div className="err-title">Compilation Error</div>
          <div className="err-line"><span className="err-ico">✖</span><span>main.js:7:3 — Unexpected token '('. Expected ';' after variable declaration.</span></div>
          <div className="err-line" style={{marginTop:"3px",color:"#585b70"}}><span className="err-ico">‣</span><span>main.js:12:1 — Cannot find module 'spider-fix'. Did you mean 'spider-web'?</span></div>
        </div>
        <svg id="spider" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line className="thread" x1="50" y1="0" x2="50" y2="30"/>
          <ellipse className="spider-body" cx="50" cy="52" rx="14" ry="18"/>
          <ellipse className="spider-body" cx="50" cy="35" rx="10" ry="8"/>
          <circle className="spider-eye" cx="46" cy="33" r="2.5"/>
          <circle className="spider-eye" cx="54" cy="33" r="2.5"/>
          <circle style={{fill:"#fab387"}} cx="46" cy="33" r="1" />
          <circle style={{fill:"#fab387"}} cx="54" cy="33" r="1" />
          <line className="spider-leg" x1="38" y1="40" x2="16" y2="30"/>
          <line className="spider-leg" x1="38" y1="46" x2="14" y2="44"/>
          <line className="spider-leg" x1="38" y1="52" x2="16" y2="58"/>
          <line className="spider-leg" x1="38" y1="58" x2="20" y2="70"/>
          <line className="spider-leg" x1="62" y1="40" x2="84" y2="30"/>
          <line className="spider-leg" x1="62" y1="46" x2="86" y2="44"/>
          <line className="spider-leg" x1="62" y1="52" x2="84" y2="58"/>
          <line className="spider-leg" x1="62" y1="58" x2="80" y2="70"/>
        </svg>
        <div id="overlay">
          <div className="ok-icon"><span className="ok-check">✓</span></div>
          <p>Page loaded!</p>
          <div id="status">spider fixed your bugs</div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
        const lines = [
          { text: '', raw: '' },
          { text: '<span class="kw">import</span> <span class="fn">SpiderFix</span> <span class="kw">from</span> <span class="str">"spider-fix"</span>;', raw: "import SpiderFix from 'spider-fix';" },
          { text: '', raw: '' },
          { text: '<span class="kw">const</span> <span class="type">App</span> = () <span class="kw">=></span> {', raw: 'const App = () => {' },
          { text: '  <span class="kw">let</span> <span class="var">bugs</span> = <span class="num">42</span>;', raw: '  let bugs = 42;' },
          { text: '  <span class="kw">const</span> <span class="fn">fixBugs</span> = (<span class="var">count</span>) <span class="kw">=></span> {', raw: '  const fixBugs = (count) => {' },
          { text: '    <span class="var">count</span>(<span class="num">0</span>  <span class="cmt">// ← missing closing paren</span>', raw: '    count(0  // missing )' },
          { text: '    <span class="kw">return</span> <span class="str">"all good"</span>;', raw: '    return "all good";' },
          { text: '  };', raw: '  };' },
          { text: '', raw: '' },
          { text: '  <span class="fn">fixBugs</span>(<span class="var">bugs</span>);', raw: '  fixBugs(bugs);' },
          { text: '  <span class="kw">require</span>(<span class="str">"spider-fix"</span>);', raw: '  require("spider-fix");' },
          { text: '  <span class="kw">return</span> <span class="str">"done"</span>;', raw: '  return "done";' },
          { text: '};', raw: '};' },
          { text: '', raw: '' },
          { text: '<span class="fn">App</span>();', raw: 'App();' },
        ];

        const editor = document.getElementById('editor');
        const gutter = document.getElementById('gutter');
        const errorBar = document.getElementById('errorBar');
        const spider = document.getElementById('spider');
        const overlay = document.getElementById('overlay');
        const loader = document.getElementById('loader');

        let currentLine = 0;
        let currentChar = 0;
        let rendered = [];
        let lineEls = [];

        function addLine(idx) {
          const g = document.createElement('div');
          g.className = 'line-no';
          g.textContent = idx + 1;
          gutter.appendChild(g);

          const el = document.createElement('div');
          el.className = 'line';
          el.id = 'L' + idx;
          editor.appendChild(el);
          lineEls[idx] = el;
        }

        function typeChar() {
          if (currentLine >= lines.length) {
            showError();
            return;
          }
          const line = lines[currentLine];
          if (currentLine >= rendered.length) {
            addLine(currentLine);
            rendered.push('');
          }
          const el = lineEls[currentLine];
          if (currentChar < line.raw.length) {
            rendered[currentLine] = line.text.substring(0, getHtmlPos(line.text, currentChar + 1));
            const visChar = currentChar + 1;
            el.innerHTML = line.text.substring(0, getHtmlPos(line.text, visChar)) + '<span class="cursor"></span>';
            currentChar++;
            const delay = line.raw[currentChar - 1] === '\\n' ? 60 : (Math.random() * 40 + 20);
            setTimeout(typeChar, delay);
          } else {
            el.innerHTML = line.text || '&nbsp;';
            currentChar = 0;
            currentLine++;
            setTimeout(typeChar, currentLine === 6 ? 180 : 60);
          }
        }

        function getHtmlPos(html, charCount) {
          let count = 0, i = 0;
          while (i < html.length && count < charCount) {
            if (html[i] === '<') { while (i < html.length && html[i] !== '>') i++; i++; }
            else { count++; i++; }
          }
          return i;
        }

        function showError() {
          errorBar.style.display = 'block';
          setTimeout(spiderEnter, 600);
        }

        let spiderX = 0, spiderY = 0;
        let targetX = 0, targetY = 0;

        function spiderEnter() {
          spider.style.transition = 'none';
          spider.style.right = '-120px';
          spider.style.bottom = '-120px';
          spider.style.width = '100px';
          spider.style.height = '100px';
          spider.style.display = 'block';

          let phase = 0;
          const rect = loader.getBoundingClientRect();

          const stages = [
            { right: '20px', bottom: '80px', size: '100px', dur: 1200 },
            { right: '40px', bottom: '120px', size: '130px', dur: 900 },
            { right: '60px', bottom: '180px', size: '160px', dur: 700 },
            { right: '80px', bottom: '240px', size: '200px', dur: 600 },
            { right: '100px', bottom: '280px', size: '240px', dur: 500 },
          ];

          function nextStage() {
            if (phase >= stages.length) {
              setTimeout(bugFixed, 400);
              return;
            }
            const s = stages[phase];
            spider.style.transition = \`right \${s.dur}ms ease, bottom \${s.dur}ms ease, width \${s.dur}ms ease, height \${s.dur}ms ease\`;
            spider.style.right = s.right;
            spider.style.bottom = s.bottom;
            spider.style.width = s.size;
            spider.style.height = s.size;
            phase++;
            setTimeout(nextStage, s.dur + 100);
          }

          setTimeout(nextStage, 100);
        }

        function bugFixed() {
          errorBar.innerHTML = '<span style="color:#a6e3a1">✔ Spider fixed your bugs! Compiling...</span>';

          setTimeout(() => {
            spider.style.transition = 'right 0.8s ease, bottom 0.8s ease, opacity 0.8s ease';
            spider.style.opacity = '0';
            spider.style.right = '-200px';
            overlay.style.pointerEvents = 'auto';
            overlay.style.opacity = '1';
          }, 1000);
        }

        setTimeout(typeChar, 400);
        `
      }} />
    </div>
  );
}
