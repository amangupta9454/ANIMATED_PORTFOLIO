<h1 align="center" style="color:#0F172A; font-size: 52px; font-weight: 800;">💼 Aman Gupta – Premium Developer Portfolio</h1>

<h3 align="center" style="color:#4B5563; line-height: 1.6;">
An immersive, high-performance, and highly interactive developer portfolio built with React, Vite, and GSAP. Designed to showcase advanced UI animations, responsive web design, and a curated collection of full-stack projects.
</h3>

<p align="center" style="margin-top: 20px;">
  <a href="http://gupta-aman-portfolio.netlify.app/" target="_blank" style="font-size: 18px; font-weight: bold; background: #000; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none;"><b>🌐 Live Portfolio Demo</b></a>
</p>

<p align="center" style="margin-top: 15px;">
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue?style=for-the-badge&logo=react" alt="React Badge" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind Badge" />
  <img src="https://img.shields.io/badge/Animations-GSAP%20%7C%20Three.js-green?style=for-the-badge" alt="Animations Badge" />
  <img src="https://img.shields.io/badge/Performance-Optimized-orange?style=for-the-badge" alt="Performance Badge" />
  <img src="https://img.shields.io/badge/Hosting-Netlify-success?style=for-the-badge&logo=netlify" alt="Hosting Badge" />
</p>

<hr>

<h2>📚 Table of Contents</h2>
<ol>
  <li><a href="#about">🧭 About the Portfolio</a></li>
  <li><a href="#features">✨ Architectural & Design Features</a></li>
  <li><a href="#tech">🧰 Comprehensive Tech Stack</a></li>
  <li><a href="#projects">🚀 Featured Projects</a></li>
  <li><a href="#experience">💼 Professional Experience</a></li>
  <li><a href="#achievements">🏆 Achievements & Honors</a></li>
  <li><a href="#structure">🗂️ Codebase Structure</a></li>
  <li><a href="#performance">⚡ Performance Optimizations</a></li>
  <li><a href="#screenshots">📸 Visual Showcase (Screenshots)</a></li>
  <li><a href="#creator">👨‍💻 Creator & Contact</a></li>
  <li><a href="#setup">🛠️ Setup & Installation</a></li>
</ol>

<hr>

<h2 id="about">🧭 About the Portfolio</h2>
<p>
This repository houses the source code for my personal digital portfolio, a <b>state-of-the-art interactive web application</b>. As a Full Stack Web Developer heavily focused on the <b>MERN stack, UI/UX aesthetics, and AI implementations</b>, I engineered this site to serve as a comprehensive resume, project showcase, and a testament to my frontend engineering capabilities.
</p>
<p>
Every section features meticulously crafted animations—from custom HTML5 Canvas particle systems that react to cursor movement, to staggered DOM entrance animations powered by ScrollReveal and GSAP.
</p>

<hr>

<h2 id="features">✨ Architectural & Design Features</h2>
<p>Through deep analysis of the application's architecture (specifically <code>Home.jsx</code>, <code>Navbar.jsx</code>, and <code>Footer.jsx</code>), the portfolio embeds several advanced web development techniques:</p>
<ul>
  <li><b>Custom Canvas Particle Engine:</b> Deeply integrated HTML5 <code>&lt;canvas&gt;</code> that renders hundreds of floating particles connected by proximity lines (on desktop). Uses <code>requestAnimationFrame</code> for fluid 60fps rendering, automatically downgrading settings for mobile devices to preserve battery and frame rates.</li>
  <li><b>Glassmorphism UI:</b> Usage of translucent backgrounds with heavy blur effects layered over animated gradients.</li>
  <li><b>Micro-interactions & 3D Tilt:</b> Embedded <code>vanilla-tilt</code> to create 15-degree floating card distortions on hover events with simulated glare, offering a hyper-premium tactile feel.</li>
  <li><b>Scroll-triggered Choreography:</b> Complex deployment of <code>scrollreveal</code> to execute synchronized staggered animations (fades, slides, and scales) dynamically as users traverse the viewport.</li>
  <li><b>Typewriter Integration:</b> Implementation of <code>Typed.js</code> in the hero banner, creating an engaging typing loop of my professional titles.</li>
</ul>

<hr>

<h2 id="tech">🧰 Comprehensive Tech Stack</h2>

<h3>Framework & Build Tooling</h3>
<ul>
  <li><b>React.js 19</b> (Component-based UI design)</li>
  <li><b>Vite</b> (Next-generation ultra-fast frontend tooling)</li>
  <li><b>Node.js Environment</b> (for ES modules and local dev)</li>
</ul>

<h3>Styling & CSS Architecture</h3>
<ul>
  <li><b>Tailwind CSS 4.x</b> (Utility-first styling, highly scalable)</li>
  <li><b>Custom CSS</b> (<code>index.css</code>) for complex keyframe animations beyond utility classes.</li>
</ul>

<h3>Animation Engineering</h3>
<ul>
  <li><b>GSAP (GreenSock)</b> (For robust timeline animations)</li>
  <li><b>Framer Motion</b> (For advanced component lifecycle transitions)</li>
  <li><b>React Three Fiber / Drei</b> (For foundational 3D context)</li>
  <li><b>Vanilla-Tilt</b> (For 3D hovering physics)</li>
  <li><b>ScrollReveal</b> (For viewport-based intersection animations)</li>
</ul>

<h3>Icons & Typography</h3>
<ul>
  <li><b>React Icons</b> (FontAwesome, SimpleIcons integrations)</li>
  <li><b>Lucide-React</b> (For sleek, modern SVG iconography)</li>
</ul>

<hr>

<h2 id="projects">🚀 Featured Projects</h2>
<p>The portfolio natively highlights my leading projects, pulling dynamic data representing my full-stack journey:</p>
<ol>
  <li>
    <b>MaaCare — Maternal Healthcare Platform</b>
    <ul>
      <li><i>Tech:</i> React, Tailwind, MongoDB, Express, Node.js, Socket.io, Jitsi</li>
      <li><i>Description:</i> AI-powered personalized support and community for expectant mothers.</li>
    </ul>
  </li>
  <li>
    <b>Mindstep (AI Career Coach Website)</b>
    <ul>
      <li><i>Tech:</i> React, Node.js, Gemini API</li>
      <li><i>Description:</i> Generates personalized roadmaps and AI-driven resume analyses.</li>
    </ul>
  </li>
  <li>
    <b>FARMIO — Local Roots, Fresh Routes</b>
    <ul>
      <li><i>Tech:</i> MERN Stack, OpenAI API, Data.gov API</li>
      <li><i>Description:</i> Comprehensive Farmer-to-Consumer platform streamlining local agriculture commerce.</li>
    </ul>
  </li>
  <li>
    <b>Code-A-Nova</b>
    <ul>
      <li><i>Tech:</i> MERN Stack</li>
      <li><i>Description:</i> Fully-featured startup platform providing program listings and internship management.</li>
    </ul>
  </li>
  <li>
    <b>Crossroads 2026 & TechFusion</b>
    <ul>
      <li><i>Description:</i> Advanced college event and club portals loaded with Framer animations.</li>
    </ul>
  </li>
</ol>

<hr>

<h2 id="experience">💼 Professional Experience</h2>
<p>Documented inside the application's timeline component:</p>
<ul>
  <li><b>ALTA AI Builders Fellowship Program:</b> Applied AI, Machine Learning, and LLM orchestrations.</li>
  <li><b>MERN Stack Development Intern @ Code-A-Nova:</b> Driving end-to-end web deployment.</li>
  <li><b>AI Winter Intern @ Mirai Schools of Technology:</b> Built automated workflows using n8n and trigger APIs.</li>
  <li><b>Frontend / Full Stack Internships:</b> Edunet Foundation, CodSoft, and CodeAlpha.</li>
</ul>

<hr>

<h2 id="achievements">🏆 Achievements & Honors</h2>
<p>The app visually displays a dedicated section of proven competitive success:</p>
<ul>
  <li><b>1st Position:</b> Project Exhibition Winner at Crossroads 2026.</li>
  <li><b>1st Position:</b> Technical Paper Competition (AI in Healthcare) at Scroll's 2025 (Ajay Kumar Garg Eng. College).</li>
  <li><b>2nd Position:</b> Tech Fusion Ideathon (IPEM College).</li>
  <li><b>Finalist:</b> Hacknovate 7.0 (30-hour International Hackathon, ABESIT).</li>
</ul>

<hr>

<h2 id="structure">🗂️ Codebase Structure</h2>
<pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #333; overflow-x: auto;">
PORTFOLIO/
├── public/                 // Static assets natively served
├── src/
│   ├── assets/             // Images, Vectors, and Media
│   ├── Components/         // Modular React Components
│   │   ├── Home.jsx        // (125KB+) Massive core logic, canvas algorithms, data constants
│   │   ├── Navbar.jsx      // Sticky, glassmorphism top navigation
│   │   ├── Footer.jsx      // Elaborate multi-column footer with social links
│   ├── App.jsx             // React Router configuration
│   ├── main.jsx            // DOM mounting and Context providers
│   └── index.css           // Global foundational stylesheets
├── package.json            // Scripts & Dependency management
├── eslint.config.js        // Strict linting rules
└── vite.config.js          // Build optimizations configuration
</pre>

<hr>

<h2 id="performance">⚡ Performance Optimizations</h2>
<p>During the code analysis, several top-tier architectural optimizations were identified:</p>
<ul>
  <li><b>UseMemo Hook Aggregation:</b> Static datasets (Projects, Achievements, Experiences) are heavily memoized using <code>useMemo</code> strictly to prevent redundant component re-renders.</li>
  <li><b>Device-Specific Render Scaling:</b> Implementation of <code>window.matchMedia('(prefers-reduced-motion: reduce)')</code> alongside mobile user-agent spoof checks to intentionally downgrade canvas particle counts (from 80fps on desktop down to 30fps/0fps where necessary) to save device battery and prevent stutter.</li>
  <li><b>Event Listener Callbacks:</b> Handlers attached to <code>window.resize</code> and <code>mousemove</code> are aggressively wrapped in <code>useCallback</code> to prevent memory leaks across canvas boundaries.</li>
</ul>

<hr>

<h2 id="screenshots">📸 Visual Showcase (Screenshots)</h2>
<p><i>A small visual glimpse of the interface aesthetics:</i></p>

<div align="center" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-bottom: 20px;">
    <div style="flex: 1 1 280px; max-width: 45%; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 10px;">🏠 Home Banner</h3>
        <img src="https://res.cloudinary.com/dnmtainqq/image/upload/v1769615345/Screenshot_2026-01-28_211641_g2wz0k.png" alt="Home Page" style="max-width: 100%; border-radius: 4px;">
    </div>
    <div style="flex: 1 1 280px; max-width: 45%; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 10px;">🛠️ Skills Matrix</h3>
        <img src="https://res.cloudinary.com/dnmtainqq/image/upload/v1769615321/Screenshot_2026-01-28_211724_qfio2g.png" alt="My Skills" style="max-width: 100%; border-radius: 4px;">
    </div>
    <div style="flex: 1 1 280px; max-width: 45%; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 10px;">💼 Project Showcase</h3>
        <img src="https://res.cloudinary.com/dnmtainqq/image/upload/v1769615341/Screenshot_2026-01-28_211711_xclzec.png" alt="Project Page" style="max-width: 100%; border-radius: 4px;">
    </div>
    <div style="flex: 1 1 280px; max-width: 45%; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 10px;">📜 Experience Timeline</h3>
        <img src="https://res.cloudinary.com/dnmtainqq/image/upload/v1769615321/Screenshot_2026-01-28_211735_ypbik8.png" alt="Experiences" style="max-width: 100%; border-radius: 4px;">
    </div>
</div>

<hr>

<h2 id="setup">🛠️ Setup & Installation</h2>
<p>If you wish to clone and run this portfolio locally to inspect the animation physics:</p>

<p><b>1. Clone the repository</b></p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; color: #000;"><code>git clone https://github.com/amangupta9454/PORTFOLIO.git
cd PORTFOLIO/FRONTEND</code></pre>

<p><b>2. Install dependencies</b></p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; color: #000;"><code>npm install</code></pre>

<p><b>3. Spin up the Vite Dev Server</b></p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; color: #000;"><code>npm run dev</code></pre>

<p><b>4. Build for Production</b></p>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; color: #000;"><code>npm run build</code></pre>

<hr>

<h2 id="creator" align="center">👨‍💻 Creator & Contact</h2>

<p align="center" style="font-size: 20px;"><b>Aman Gupta</b></p>
<p align="center"><i>Full Stack Web Developer • AI Integration Enthusiast • MERN Specialist</i></p>

<p align="center" style="margin-top: 15px;">
  <a href="https://github.com/amangupta9454" target="_blank"><img src="https://img.shields.io/badge/GitHub-amangupta9454-black?style=for-the-badge&logo=github" /></a>
  <a href="https://www.linkedin.com/in/amangupta9454/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" /></a>
  <a href="mailto:ag0567688@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail" /></a>
</p>

<hr>
<p align="center"><i>⭐ If you found this portfolio repository inspiring or learned something from the canvas logic, consider leaving a star! ⭐</i></p>
