import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaLinkedin, FaDownload, FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaBriefcase, FaCalendarAlt, FaBuilding, FaGraduationCap, FaBookOpen, FaSchool, FaSeedling, FaTrophy, FaEnvelope, FaPhone, FaMapMarkerAlt, FaMedal, FaProjectDiagram, FaCloud  } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaCuttlefish, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiCplusplus, SiExpress } from "react-icons/si";
import Typed from "typed.js";
import HeroImage from "../assets/coder-image.png";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt";
import agri from "../assets/agri.jpg";
import coach from "../assets/coach.jpg";
import calculator from "../assets/cross.png";
import image from "../assets/image.png";
import hero from "../assets/heroImage.png";

const Home = () => {
  const typedRef = useRef(null);
  const imageRef = useRef(null);
  const aboutImageRef = useRef(null);
  const [greeting, setGreeting] = useState("");
  const [isDarkTheme] = useState(true);
  const [downloadCount, setDownloadCount] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const canvasRef = useRef(null);
  const aboutCanvasRef = useRef(null);
  const projectsCanvasRef = useRef(null);
  const skillsCanvasRef = useRef(null);
  const experienceCanvasRef = useRef(null);
  const qualificationCanvasRef = useRef(null);
  const ctaCanvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const aboutAnimationFrameRef = useRef(null);
  const projectsAnimationFrameRef = useRef(null);
  const skillsAnimationFrameRef = useRef(null);
  const experienceAnimationFrameRef = useRef(null);
  const qualificationAnimationFrameRef = useRef(null);
  const ctaAnimationFrameRef = useRef(null);
  
  // Mobile detection and performance optimization
  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  }, []);
  
  const isReducedMotion = useMemo(() => {
    return typeof window !== 'undefined' && 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Optimized particle count based on device
  const particleCount = useMemo(() => {
    if (isReducedMotion) return 0;
    if (isMobile) return 30;
    return window.innerWidth > 1200 ? 80 : 60;
  }, [isMobile, isReducedMotion]);

  // Skills data
  const skills = useMemo(() => [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, proficiency: 50 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, proficiency: 80 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, proficiency: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, proficiency: 60 },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, proficiency: 85 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: 85 },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" />, proficiency: 82 },
  { name: "Nodemailer", icon: <FaEnvelope className="text-blue-400" />, proficiency: 90 },
  { name: "C", icon: <FaCuttlefish className="text-blue-400" />, proficiency: 50 },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" />, proficiency: 10 },
  { name: "Python", icon: <SiPython className="text-yellow-500" />, proficiency: 70 },
  { name: "DSA (Basic)", icon: <FaGitAlt className="text-orange-400" />, proficiency: 5 },
  { name: "System Designing", icon: <FaProjectDiagram className="text-purple-500" />, proficiency: 20 },
  { name: "Cloud Computing (Basic)", icon: <FaCloud className="text-sky-400" />, proficiency: 20 },
], []);


  // Experience data
  const experiences = useMemo(() => [
    {
      id: 1,
      title: "Backend Development Internship",
      company: "Tranquiex Technology",
      duration: "10 Sep 2025 - Ongoing",
      description:
        "Developing backend systems using Node.js, Express, and MongoDB to build robust APIs, efficiently manage databases, troubleshoot server-side issues, and optimize performance and scalability.",
    },
    {
      id: 2,
      title: "Frontend Development Internship",
      company: "Edunet Foundation",
      duration: "20 Aug 2025 - 10 Oct 2025",
      description:
        "Built dynamic, responsive web pages using HTML, CSS, and JavaScript, enhancing web development skills.",
    },

    {
      id: 3,
      title: "Mern Stack Development Internship",
      company: "CodSoft",
      duration: "10 Sep 2024 - 10 Oct 2024",
      description:
        "Worked on full-stack web applications using MongoDB, Express, React, and Node.js, gaining hands-on experience in building scalable solutions.",
    },
    {
      id: 4,
      title: "Frontend Web Development Internship",
      company: "CodeAlpha",
      duration: "15 Sep 2024 - 15 Oct 2024",
      description:
        "Developed advanced websites with a focus on user experience and maintainable code.",
    },
   
  ], []);

  // Qualification data
  const qualifications = useMemo(() => [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-sky-300" />,
      title: 'B.Tech in CSE (2023–2027)',
      subtitle: 'Hi-Tech Institute of Engineering and Technology, Ghaziabad',
      detail: 'Current SGPA: 6.9',
      borderColor: 'border-sky-400',
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), transparent)',
      badge: 'In Progress',
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-4xl text-emerald-300" />,
      title: 'Intermediate (2020–2022)',
      subtitle: 'New Modern Children Public School, Dullahapur, Ghazipur',
      detail: 'PCM – 60.6%',
      borderColor: 'border-emerald-400',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), transparent)',
      badge: 'Completed',
    },
    {
      id: 3,
      icon: <FaSchool className="text-4xl text-amber-300" />,
      title: 'High School (2018–2020)',
      subtitle: 'Shree Balkrishna Public Vidyalaya, Sherpur Sachui, Mau',
      detail: 'General Subjects – 66.8%',
      borderColor: 'border-amber-400',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), transparent)',
      badge: 'Completed',
    },
    {
      id: 4,
      icon: <FaSeedling className="text-4xl text-fuchsia-300" />,
      title: 'Diploma in Agriculture (2022–2023)',
      subtitle: 'Maharishi Dayanand College Of Vocational Training',
      detail: 'Score: 91.8%',
      borderColor: 'border-fuchsia-400',
      gradient: 'linear-gradient(135deg, rgba(217, 70, 239, 0.25), transparent)',
      badge: 'Completed',
    },
  ], []);

  // Achievement data
  const achievements = useMemo(() => [
    {
  id: 1,
  icon: <FaMedal className="text-4xl text-blue-500" />,
  title: 'Technical Paper Competition Winner',
  subtitle: 'Scroll’s 2025 – Ajay Kumar Garg Engineering College, Ghaziabad',
  detail: 'Secured 1st position in a National Technical Paper Writing Competition for the research paper titled "AI-Powered Skin Cancer Detection Using Deep Learning" under the domain of AI in Healthcare.',
  borderColor: 'border-blue-500',
  gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), transparent)',
  badge: '1st Position',
},
 {
  id: 2,
  icon: <FaMedal className="text-4xl text-yellow-500" />,
  title: 'Tech Fusion Ideathon – Runner Up',
  subtitle: 'Tech Fusion IPEM College, Ghaziabad',
  detail: 'Achieved 2nd position in the Tech Fusion Ideathon for presenting an innovative solution with effective problem analysis, creativity, and execution under competitive evaluation.',
  borderColor: 'border-yellow-500',
  gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.25), transparent)',
  badge: '2nd Position',
},

    
    {
      id: 3,
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
      title: 'Quiz Competition Winner',
      subtitle: 'Gambed Quiz Competition 2024',
      detail: 'Won first place in competitive programming and general knowledge quiz',
      borderColor: 'border-yellow-400',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), transparent)',
      badge: '1st Place',
    },
   
  ], []);

  // Optimized event handlers with useCallback
  const handleResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleAboutResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = Math.min(600, window.innerHeight);
    }
  }, []);

  const handleProjectsResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleSkillsResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleExperienceResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleQualificationResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleCtaResize = useCallback((canvas) => {
    if (canvas && canvas.getContext) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  const handleMouseMove = useCallback((e, mouse) => {
    if (!isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
  }, [isMobile]);

  const handleMouseOut = useCallback((mouse) => {
    mouse.x = undefined;
    mouse.y = undefined;
  }, []);

  // Project data
  const projects = useMemo(() => [
    {
      id: 1,
      name: "AI CAREER COACH WEBSITE",
      description: "Developed an AI-powered career coach web app using MERN stack and Gemini API for personalized roadmaps and resume generation.",
      image: coach,
      sourceCode: "https://github.com/amangupta9454/AI-COACH",
      livePreview: "https://mindstep.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS", "GEMINI API"],
      featured: true,
    },
    {
      id: 2,
      name: "FARMIO-Local Roots, Fresh Routes",
      description: "A fully functional FARMER-CONSUMER AGRICULTURE website with modern UI and custom features.",
      image: agri,
      sourceCode: "https://github.com/amangupta9454/FARMIO",
      livePreview: "https://agrifarmio.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS", "OPENAI API", "DATA.GOV API"],
      featured: true,
    },
    {
      id: 3,
      name: "TECH FEST REGISTRATION WEBSITE",
      description: "A fully functional college technical fest website with modern UI and custom features.",
      image: calculator,
      sourceCode: "https://github.com/amangupta9454/crossroads-2025",
      livePreview: "https://hiet-crossroads.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS"],
      featured: false,
    },
    {
      id: 4,
      name: "TEAMUP PLATFORM FOR HACKATHON ENTHUSIASTS",
      description: "A fully functional Teamup platform website with modern UI and custom features.",
      image: image,
      sourceCode: "https://github.com/amangupta9454/college",
      livePreview: "https://hietteam.netlify.app/",
      tags: ["MERN STACK"],
      featured: false,
    }
  ], []);

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening");

    // Faster loading animation
    const progressInterval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5; // Increased speed
      });
    }, 30);

    // Optimized Typed.js initialization
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Web Developer",
        "Software Engineer",
        "Code Crafter",
        "Problem Solver",
      ],
      typeSpeed: 80, // Faster typing
      backSpeed: 40, // Faster backspacing
      loop: true,
      smartBackspace: true,
      startDelay: 500,
    });

    // Enhanced ScrollReveal with faster animations
    const sr = ScrollReveal({
      distance: "30px",
      duration: 500, // Faster duration
      delay: 40, // Reduced delay
      reset: true, // Enable reset for repeated animations
      opacity: 0,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother easing
      mobile: true,
      cleanup: true,
      viewFactor: 0.2, // Trigger when 20% of element is visible
      viewOffset: { top: 60, right: 0, bottom: 60, left: 0 },
    });

    // Enhanced reveal animations with staggered timing
    sr.reveal(".sr-fade", { 
      origin: "bottom", 
      delay: 100,
      distance: "40px",
      duration: 800,
      scale: 0.9
    });
    sr.reveal(".sr-left", { 
      origin: "left", 
      delay: 200,
      distance: "60px",
      duration: 900,
      rotate: { x: 0, y: 0, z: 5 }
    });
    sr.reveal(".sr-right", { 
      origin: "right", 
      delay: 300,
      distance: "60px",
      duration: 900,
      rotate: { x: 0, y: 0, z: -5 }
    });
    sr.reveal(".sr-about-heading", { 
      origin: "top", 
      delay: 150,
      distance: "50px",
      duration: 1000,
      scale: 0.8
    });
    sr.reveal(".sr-about-text", { 
      origin: "left", 
      delay: 250,
      distance: "40px",
      duration: 800,
      interval: 100
    });
    sr.reveal(".sr-about-image", { 
      origin: "right", 
      delay: 350,
      distance: "50px",
      duration: 1000,
      rotate: { x: 0, y: 10, z: 0 }
    });
    
    // Additional reveal animations for enhanced elements
    sr.reveal(".sr-button", { 
      origin: "bottom", 
      delay: 400,
      distance: "30px",
      duration: 600,
      interval: 150,
      scale: 0.9
    });
    sr.reveal(".sr-skill-card", { 
      origin: "bottom", 
      delay: 200,
      distance: "40px",
      duration: 700,
      interval: 100,
      scale: 0.95
    });
    sr.reveal(".sr-project-card", { 
      origin: "bottom", 
      delay: 150,
      distance: "50px",
      duration: 800,
      interval: 200,
      scale: 0.9,
      rotate: { x: 0, y: 0, z: 2 }
    });
    sr.reveal(".sr-project-heading", { 
      origin: "top", 
      delay: 100,
      distance: "40px",
      duration: 900,
      scale: 0.8
    });

    // Skills section animations
    sr.reveal(".sr-skills-heading", { 
      origin: "top", 
      delay: 100,
      distance: "40px",
      duration: 900,
      scale: 0.8
    });
    sr.reveal(".sr-skills-card", { 
      origin: "bottom", 
      delay: 100,
      distance: "30px",
      duration: 600,
      interval: 80,
      scale: 0.9
    });

    // Experience section animations
    sr.reveal(".sr-experience-heading", { 
      origin: "top", 
      delay: 120,
      distance: "40px",
      duration: 900,
      scale: 0.8
    });
    sr.reveal(".sr-experience-card", { 
      origin: "left", 
      delay: 150,
      distance: "60px",
      duration: 800,
      interval: 150,
      scale: 0.9,
      rotate: { x: 0, y: 0, z: 1 }
    });
    sr.reveal(".sr-experience-timeline", { 
      origin: "right", 
      delay: 100,
      distance: "30px",
      duration: 700,
      scale: 0.95
    });

    // Qualification section animations
    sr.reveal(".sr-qualification-heading", { 
      origin: "top", 
      delay: 100,
      distance: "40px",
      duration: 900,
      scale: 0.8
    });
    sr.reveal(".sr-qualification-card", { 
      origin: "bottom", 
      delay: 120,
      distance: "50px",
      duration: 800,
      interval: 120,
      scale: 0.9,
      rotate: { x: 0, y: 0, z: 1 }
    });
    sr.reveal(".sr-achievement-card", { 
      origin: "right", 
      delay: 200,
      distance: "60px",
      duration: 900,
      scale: 0.9,
      rotate: { x: 0, y: 0, z: -2 }
    });

    // CTA section animations
    sr.reveal(".sr-cta-heading", { 
      origin: "top", 
      delay: 100,
      distance: "40px",
      duration: 900,
      scale: 0.8
    });
    sr.reveal(".sr-cta-content", { 
      origin: "bottom", 
      delay: 150,
      distance: "30px",
      duration: 700,
      interval: 100,
      scale: 0.95
    });
    sr.reveal(".sr-cta-button", { 
      origin: "bottom", 
      delay: 200,
      distance: "30px",
      duration: 600,
      interval: 100,
      scale: 0.9
    });

    // Conditional VanillaTilt initialization (disable on mobile for performance)
    if (!isMobile && imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 15, // Reduced tilt for smoother performance
        speed: 300,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }

    if (!isMobile && aboutImageRef.current) {
      VanillaTilt.init(aboutImageRef.current, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }

    // Optimized canvas animation for hero section
    const canvas = canvasRef.current;
    const mouse = { x: undefined, y: undefined };
    
    if (canvas && particleCount > 0) {
      const ctx = canvas.getContext("2d");
      let w = canvas.width = canvas.offsetWidth;
      let h = canvas.height = canvas.offsetHeight;
      
      const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5 + 0.5, // Smaller particles for better performance
        dx: (Math.random() - 0.5) * 1, // Slower movement
        dy: (Math.random() - 0.5) * 1,
        color: `hsl(${Math.random() * 360}, 60%, ${isDarkTheme ? 75 : 55}%)`,
        alpha: Math.random() * 0.8 + 0.2,
      }));

      let lastTime = 0;
      const targetFPS = isMobile ? 30 : 60; // Lower FPS on mobile
      const frameInterval = 1000 / targetFPS;

      const animateParticles = (currentTime) => {
        if (currentTime - lastTime < frameInterval) {
          animationFrameRef.current = requestAnimationFrame(animateParticles);
          return;
        }
        lastTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        
        // Solid background instead of gradient for better performance on mobile
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Simplified particle connections (only for desktop)
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 100) { // Reduced connection distance
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                ctx.strokeStyle = `rgba(${isDarkTheme ? "255,255,255" : "0,0,0"}, ${(100 - dist) / 100 * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            });
          });
        }

        // Mouse interaction (desktop only)
        if (!isMobile && mouse.x !== undefined && mouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              const force = (100 - dist) / 100;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 2;
              particle.y += dirY * force * 2;
            }
          });
        }

        particles.forEach((particle) => {
          particle.x += particle.dx;
          particle.y += particle.dy;

          // Bounce off walls
          if (particle.x < 0 || particle.x > w) particle.dx *= -1;
          if (particle.y < 0 || particle.y > h) particle.dy *= -1;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        });

        animationFrameRef.current = requestAnimationFrame(animateParticles);
      };

      const resizeHandler = () => handleResize(canvas);
      const mouseMoveHandler = (e) => handleMouseMove(e, mouse);
      const mouseOutHandler = () => handleMouseOut(mouse);

      window.addEventListener("resize", resizeHandler);
      if (!isMobile) {
        canvas.addEventListener("mousemove", mouseMoveHandler);
        canvas.addEventListener("mouseleave", mouseOutHandler);
      }
      
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    }

    // Optimized about section canvas
    const aboutCanvas = aboutCanvasRef.current;
    if (aboutCanvas && particleCount > 0) {
      const ctx = aboutCanvas.getContext("2d");
      let w = aboutCanvas.width = aboutCanvas.offsetWidth;
      let h = aboutCanvas.height = Math.min(600, window.innerHeight);
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.7) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        rotation: Math.random() * 360,
        dr: (Math.random() - 0.5) * 1,
        color: `hsl(${Math.random() * 360}, 50%, ${isDarkTheme ? 65 : 45}%)`,
        alpha: Math.random() * 0.7 + 0.3,
      }));

      let lastAboutTime = 0;
      const aboutTargetFPS = isMobile ? 24 : 45;
      const aboutFrameInterval = 1000 / aboutTargetFPS;

      const animateAboutParticles = (currentTime) => {
        if (currentTime - lastAboutTime < aboutFrameInterval) {
          aboutAnimationFrameRef.current = requestAnimationFrame(animateAboutParticles);
          return;
        }
        lastAboutTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        particles.forEach((particle) => {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          ctx.restore();

          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.rotation += particle.dr;

          if (particle.x < 0 || particle.x > w) particle.dx *= -1;
          if (particle.y < 0 || particle.y > h) particle.dy *= -1;
        });

        aboutAnimationFrameRef.current = requestAnimationFrame(animateAboutParticles);
      };

      const aboutResizeHandler = () => handleAboutResize(aboutCanvas);
      window.addEventListener("resize", aboutResizeHandler);
      aboutAnimationFrameRef.current = requestAnimationFrame(animateAboutParticles);
    }

    // Optimized projects section canvas
    const projectsCanvas = projectsCanvasRef.current;
    const projectsMouse = { x: undefined, y: undefined };
    
    if (projectsCanvas && particleCount > 0) {
      const ctx = projectsCanvas.getContext("2d");
      let w = projectsCanvas.width = projectsCanvas.offsetWidth;
      let h = projectsCanvas.height = projectsCanvas.offsetHeight;
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.8) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        color: `hsl(${Math.random() * 60 + 160}, 70%, ${isDarkTheme ? 70 : 50}%)`, // Cyan/teal range
        alpha: Math.random() * 0.6 + 0.4,
        pulse: Math.random() * 0.02 + 0.01,
      }));

      let lastProjectsTime = 0;
      const projectsTargetFPS = isMobile ? 30 : 50;
      const projectsFrameInterval = 1000 / projectsTargetFPS;

      const animateProjectsParticles = (currentTime) => {
        if (currentTime - lastProjectsTime < projectsFrameInterval) {
          projectsAnimationFrameRef.current = requestAnimationFrame(animateProjectsParticles);
          return;
        }
        lastProjectsTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Enhanced particle connections for projects
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                ctx.strokeStyle = `rgba(${isDarkTheme ? "34,197,94" : "16,185,129"}, ${(120 - dist) / 120 * 0.2})`; // Emerald color
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            });
          });
        }

        // Mouse interaction for projects section
        if (!isMobile && projectsMouse.x !== undefined && projectsMouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - projectsMouse.x;
            const dy = particle.y - projectsMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 1.5;
              particle.y += dirY * force * 1.5;
            }
          });
        }

        particles.forEach((particle) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.alpha += particle.pulse;

          // Pulse effect
          if (particle.alpha > 0.8 || particle.alpha < 0.2) {
            particle.pulse *= -1;
          }

          // Bounce off walls
          if (particle.x < 0 || particle.x > w) particle.dx *= -1;
          if (particle.y < 0 || particle.y > h) particle.dy *= -1;

          // Draw particle with glow effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          ctx.fill();
          
          // Add glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2);
          ctx.globalAlpha = particle.alpha * 0.3;
          ctx.fill();
          
          ctx.globalAlpha = 1;
        });

        projectsAnimationFrameRef.current = requestAnimationFrame(animateProjectsParticles);
      };

      const projectsResizeHandler = () => handleProjectsResize(projectsCanvas);
      const projectsMouseMoveHandler = (e) => handleMouseMove(e, projectsMouse);
      const projectsMouseOutHandler = () => handleMouseOut(projectsMouse);

      window.addEventListener("resize", projectsResizeHandler);
      if (!isMobile) {
        projectsCanvas.addEventListener("mousemove", projectsMouseMoveHandler);
        projectsCanvas.addEventListener("mouseleave", projectsMouseOutHandler);
      }
      
      projectsAnimationFrameRef.current = requestAnimationFrame(animateProjectsParticles);
    }

    // Optimized skills section canvas with triangular/hexagonal particles
    const skillsCanvas = skillsCanvasRef.current;
    const skillsMouse = { x: undefined, y: undefined };
    
    if (skillsCanvas && particleCount > 0) {
      const ctx = skillsCanvas.getContext("2d");
      let w = skillsCanvas.width = skillsCanvas.offsetWidth;
      let h = skillsCanvas.height = skillsCanvas.offsetHeight;
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.9) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 4 + 2,
        dx: (Math.random() - 0.5) * 2, // Faster movement
        dy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        dr: (Math.random() - 0.5) * 3, // Faster rotation
        color: `hsl(${Math.random() * 120 + 240}, 80%, ${isDarkTheme ? 75 : 55}%)`, // Purple/blue/magenta range
        alpha: Math.random() * 0.8 + 0.2,
        shape: Math.random() > 0.5 ? 'triangle' : 'hexagon',
        pulse: Math.random() * 0.03 + 0.01,
      }));

      let lastSkillsTime = 0;
      const skillsTargetFPS = isMobile ? 35 : 60; // Higher FPS for faster animation
      const skillsFrameInterval = 1000 / skillsTargetFPS;

      // Function to draw triangle
      const drawTriangle = (ctx, x, y, size, rotation) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * Math.cos(Math.PI / 6), size * Math.sin(Math.PI / 6));
        ctx.lineTo(-size * Math.cos(Math.PI / 6), size * Math.sin(Math.PI / 6));
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };

      // Function to draw hexagon
      const drawHexagon = (ctx, x, y, size, rotation) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = size * Math.cos(angle);
          const py = size * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };

      const animateSkillsParticles = (currentTime) => {
        if (currentTime - lastSkillsTime < skillsFrameInterval) {
          skillsAnimationFrameRef.current = requestAnimationFrame(animateSkillsParticles);
          return;
        }
        lastSkillsTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Enhanced particle connections with different colors
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 150) { // Larger connection distance
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                
                // Gradient connection lines
                const gradient = ctx.createLinearGradient(particleA.x, particleA.y, particleB.x, particleB.y);
                gradient.addColorStop(0, `rgba(${isDarkTheme ? "147,51,234" : "124,58,237"}, ${(150 - dist) / 150 * 0.3})`); // Purple
                gradient.addColorStop(1, `rgba(${isDarkTheme ? "59,130,246" : "37,99,235"}, ${(150 - dist) / 150 * 0.3})`); // Blue
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            });
          });
        }

        // Enhanced mouse interaction
        if (!isMobile && skillsMouse.x !== undefined && skillsMouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - skillsMouse.x;
            const dy = particle.y - skillsMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const force = (150 - dist) / 150;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 3; // Stronger force
              particle.y += dirY * force * 3;
              particle.dr += force * 2; // Affect rotation
            }
          });
        }

        particles.forEach((particle) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.rotation += particle.dr;
          particle.alpha += particle.pulse;

          // Pulse effect
          if (particle.alpha > 0.9 || particle.alpha < 0.1) {
            particle.pulse *= -1;
          }

          // Bounce off walls with slight randomization
          if (particle.x < 0 || particle.x > w) {
            particle.dx *= -1;
            particle.dr += (Math.random() - 0.5) * 2;
          }
          if (particle.y < 0 || particle.y > h) {
            particle.dy *= -1;
            particle.dr += (Math.random() - 0.5) * 2;
          }

          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          
          if (particle.shape === 'triangle') {
            drawTriangle(ctx, particle.x, particle.y, particle.size, particle.rotation);
          } else {
            drawHexagon(ctx, particle.x, particle.y, particle.size, particle.rotation);
          }
          
          // Add glow effect
          ctx.globalAlpha = particle.alpha * 0.4;
          if (particle.shape === 'triangle') {
            drawTriangle(ctx, particle.x, particle.y, particle.size * 1.3, particle.rotation);
          } else {
            drawHexagon(ctx, particle.x, particle.y, particle.size * 1.3, particle.rotation);
          }
          
          ctx.globalAlpha = 1;
        });

        skillsAnimationFrameRef.current = requestAnimationFrame(animateSkillsParticles);
      };

      const skillsResizeHandler = () => handleSkillsResize(skillsCanvas);
      const skillsMouseMoveHandler = (e) => handleMouseMove(e, skillsMouse);
      const skillsMouseOutHandler = () => handleMouseOut(skillsMouse);

      window.addEventListener("resize", skillsResizeHandler);
      if (!isMobile) {
        skillsCanvas.addEventListener("mousemove", skillsMouseMoveHandler);
        skillsCanvas.addEventListener("mouseleave", skillsMouseOutHandler);
      }
      
      skillsAnimationFrameRef.current = requestAnimationFrame(animateSkillsParticles);
    }

    // Optimized experience section canvas with diamond-shaped particles
    const experienceCanvas = experienceCanvasRef.current;
    const experienceMouse = { x: undefined, y: undefined };
    
    if (experienceCanvas && particleCount > 0) {
      const ctx = experienceCanvas.getContext("2d");
      let w = experienceCanvas.width = experienceCanvas.offsetWidth;
      let h = experienceCanvas.height = experienceCanvas.offsetHeight;
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.85) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * 360,
        dr: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 80 + 20}, 85%, ${isDarkTheme ? 70 : 50}%)`, // Orange/yellow/red range
        alpha: Math.random() * 0.7 + 0.3,
        pulse: Math.random() * 0.025 + 0.01,
        sparkle: Math.random() > 0.7, // Some particles sparkle
      }));

      let lastExperienceTime = 0;
      const experienceTargetFPS = isMobile ? 32 : 55;
      const experienceFrameInterval = 1000 / experienceTargetFPS;

      // Function to draw diamond
      const drawDiamond = (ctx, x, y, size, rotation) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };

      // Function to draw star (for sparkle particles)
      const drawStar = (ctx, x, y, size, rotation) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle1 = (i * 4 * Math.PI) / 5;
          const angle2 = ((i + 1) * 4 * Math.PI) / 5;
          const x1 = size * Math.cos(angle1);
          const y1 = size * Math.sin(angle1);
          const x2 = (size * 0.4) * Math.cos(angle2 - Math.PI / 5);
          const y2 = (size * 0.4) * Math.sin(angle2 - Math.PI / 5);
          
          if (i === 0) ctx.moveTo(x1, y1);
          else ctx.lineTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };

      const animateExperienceParticles = (currentTime) => {
        if (currentTime - lastExperienceTime < experienceFrameInterval) {
          experienceAnimationFrameRef.current = requestAnimationFrame(animateExperienceParticles);
          return;
        }
        lastExperienceTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Enhanced particle connections with gradient colors
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                
                // Gradient connection lines with warm colors
                const gradient = ctx.createLinearGradient(particleA.x, particleA.y, particleB.x, particleB.y);
                gradient.addColorStop(0, `rgba(${isDarkTheme ? "251,146,60" : "234,88,12"}, ${(130 - dist) / 130 * 0.25})`); // Orange
                gradient.addColorStop(1, `rgba(${isDarkTheme ? "239,68,68" : "220,38,38"}, ${(130 - dist) / 130 * 0.25})`); // Red
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            });
          });
        }

        // Enhanced mouse interaction for experience section
        if (!isMobile && experienceMouse.x !== undefined && experienceMouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - experienceMouse.x;
            const dy = particle.y - experienceMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const force = (140 - dist) / 140;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 2.5;
              particle.y += dirY * force * 2.5;
              particle.dr += force * 3; // Stronger rotation effect
              particle.pulse += force * 0.01; // Enhance pulsing
            }
          });
        }

        particles.forEach((particle) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.rotation += particle.dr;
          particle.alpha += particle.pulse;

          // Enhanced pulse effect
          if (particle.alpha > 0.85 || particle.alpha < 0.15) {
            particle.pulse *= -1;
          }

          // Bounce off walls with rotation change
          if (particle.x < 0 || particle.x > w) {
            particle.dx *= -1;
            particle.dr += (Math.random() - 0.5) * 3;
          }
          if (particle.y < 0 || particle.y > h) {
            particle.dy *= -1;
            particle.dr += (Math.random() - 0.5) * 3;
          }

          // Draw particle based on type
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          
          if (particle.sparkle) {
            drawStar(ctx, particle.x, particle.y, particle.size * 0.8, particle.rotation);
          } else {
            drawDiamond(ctx, particle.x, particle.y, particle.size, particle.rotation);
          }
          
          // Add enhanced glow effect
          ctx.globalAlpha = particle.alpha * 0.5;
          if (particle.sparkle) {
            drawStar(ctx, particle.x, particle.y, particle.size * 1.4, particle.rotation);
          } else {
            drawDiamond(ctx, particle.x, particle.y, particle.size * 1.3, particle.rotation);
          }
          
          // Extra sparkle effect for special particles
          if (particle.sparkle && Math.random() > 0.95) {
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = `hsl(${Math.random() * 60 + 40}, 90%, 80%)`; // Bright yellow/gold
            drawStar(ctx, particle.x, particle.y, particle.size * 0.5, -particle.rotation);
          }
          
          ctx.globalAlpha = 1;
        });

        experienceAnimationFrameRef.current = requestAnimationFrame(animateExperienceParticles);
      };

      const experienceResizeHandler = () => handleExperienceResize(experienceCanvas);
      const experienceMouseMoveHandler = (e) => handleMouseMove(e, experienceMouse);
      const experienceMouseOutHandler = () => handleMouseOut(experienceMouse);

      window.addEventListener("resize", experienceResizeHandler);
      if (!isMobile) {
        experienceCanvas.addEventListener("mousemove", experienceMouseMoveHandler);
        experienceCanvas.addEventListener("mouseleave", experienceMouseOutHandler);
      }
      
      experienceAnimationFrameRef.current = requestAnimationFrame(animateExperienceParticles);
    }

    // Optimized qualification section canvas with flowing particles
    const qualificationCanvas = qualificationCanvasRef.current;
    const qualificationMouse = { x: undefined, y: undefined };
    
    if (qualificationCanvas && particleCount > 0) {
      const ctx = qualificationCanvas.getContext("2d");
      let w = qualificationCanvas.width = qualificationCanvas.offsetWidth;
      let h = qualificationCanvas.height = qualificationCanvas.offsetHeight;
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.75) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        color: `hsl(${Math.random() * 120 + 180}, 75%, ${isDarkTheme ? 70 : 50}%)`, // Blue/cyan/green range
        alpha: Math.random() * 0.8 + 0.2,
        trail: [],
        trailLength: 8,
        pulse: Math.random() * 0.02 + 0.01,
      }));

      let lastQualificationTime = 0;
      const qualificationTargetFPS = isMobile ? 30 : 50;
      const qualificationFrameInterval = 1000 / qualificationTargetFPS;

      const animateQualificationParticles = (currentTime) => {
        if (currentTime - lastQualificationTime < qualificationFrameInterval) {
          qualificationAnimationFrameRef.current = requestAnimationFrame(animateQualificationParticles);
          return;
        }
        lastQualificationTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Enhanced particle connections with flowing lines
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                
                // Gradient connection lines with cool colors
                const gradient = ctx.createLinearGradient(particleA.x, particleA.y, particleB.x, particleB.y);
                gradient.addColorStop(0, `rgba(${isDarkTheme ? "59,130,246" : "37,99,235"}, ${(120 - dist) / 120 * 0.2})`); // Blue
                gradient.addColorStop(1, `rgba(${isDarkTheme ? "34,197,94" : "16,185,129"}, ${(120 - dist) / 120 * 0.2})`); // Green
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            });
          });
        }

        // Enhanced mouse interaction for qualification section
        if (!isMobile && qualificationMouse.x !== undefined && qualificationMouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - qualificationMouse.x;
            const dy = particle.y - qualificationMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 2;
              particle.y += dirY * force * 2;
            }
          });
        }

        particles.forEach((particle) => {
          // Add current position to trail
          particle.trail.push({ x: particle.x, y: particle.y });
          if (particle.trail.length > particle.trailLength) {
            particle.trail.shift();
          }

          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.alpha += particle.pulse;

          // Pulse effect
          if (particle.alpha > 0.9 || particle.alpha < 0.1) {
            particle.pulse *= -1;
          }

          // Bounce off walls
          if (particle.x < 0 || particle.x > w) particle.dx *= -1;
          if (particle.y < 0 || particle.y > h) particle.dy *= -1;

          // Draw trail
          particle.trail.forEach((point, index) => {
            const trailAlpha = (index / particle.trailLength) * particle.alpha * 0.6;
            const trailSize = particle.radius * (index / particle.trailLength);
            
            ctx.beginPath();
            ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = trailAlpha;
            ctx.fill();
          });

          // Draw main particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          ctx.fill();
          
          // Add glow effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * 1.8, 0, Math.PI * 2);
          ctx.globalAlpha = particle.alpha * 0.3;
          ctx.fill();
          
          ctx.globalAlpha = 1;
        });

        qualificationAnimationFrameRef.current = requestAnimationFrame(animateQualificationParticles);
      };

      const qualificationResizeHandler = () => handleQualificationResize(qualificationCanvas);
      const qualificationMouseMoveHandler = (e) => handleMouseMove(e, qualificationMouse);
      const qualificationMouseOutHandler = () => handleMouseOut(qualificationMouse);

      window.addEventListener("resize", qualificationResizeHandler);
      if (!isMobile) {
        qualificationCanvas.addEventListener("mousemove", qualificationMouseMoveHandler);
        qualificationCanvas.addEventListener("mouseleave", qualificationMouseOutHandler);
      }
      
      qualificationAnimationFrameRef.current = requestAnimationFrame(animateQualificationParticles);
    }

    // Optimized CTA section canvas with energetic star particles
    const ctaCanvas = ctaCanvasRef.current;
    const ctaMouse = { x: undefined, y: undefined };
    
    if (ctaCanvas && particleCount > 0) {
      const ctx = ctaCanvas.getContext("2d");
      let w = ctaCanvas.width = ctaCanvas.offsetWidth;
      let h = ctaCanvas.height = ctaCanvas.offsetHeight;
      
      const particles = Array.from({ length: Math.floor(particleCount * 0.95) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 6 + 2,
        dx: (Math.random() - 0.5) * 2.5, // Faster movement
        dy: (Math.random() - 0.5) * 2.5,
        rotation: Math.random() * 360,
        dr: (Math.random() - 0.5) * 4, // Faster rotation
        color: `hsl(${Math.random() * 360}, 90%, ${isDarkTheme ? 80 : 60}%)`, // Full spectrum
        alpha: Math.random() * 0.9 + 0.1,
        pulse: Math.random() * 0.04 + 0.02, // Stronger pulse
        energy: Math.random() * 0.5 + 0.5, // Energy level for special effects
      }));

      let lastCtaTime = 0;
      const ctaTargetFPS = isMobile ? 40 : 60; // Higher FPS for energetic effect
      const ctaFrameInterval = 1000 / ctaTargetFPS;

      // Function to draw energetic star
      const drawEnergeticStar = (ctx, x, y, size, rotation, energy) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        
        // Main star
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle1 = (i * 2 * Math.PI) / 6;
          const angle2 = ((i + 1) * 2 * Math.PI) / 6;
          const outerRadius = size * energy;
          const innerRadius = size * 0.4 * energy;
          
          const x1 = outerRadius * Math.cos(angle1);
          const y1 = outerRadius * Math.sin(angle1);
          const x2 = innerRadius * Math.cos(angle2 - Math.PI / 6);
          const y2 = innerRadius * Math.sin(angle2 - Math.PI / 6);
          
          if (i === 0) ctx.moveTo(x1, y1);
          else ctx.lineTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      };

      const animateCtaParticles = (currentTime) => {
        if (currentTime - lastCtaTime < ctaFrameInterval) {
          ctaAnimationFrameRef.current = requestAnimationFrame(animateCtaParticles);
          return;
        }
        lastCtaTime = currentTime;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0f0f23" : "#f0f8ff";
        ctx.fillRect(0, 0, w, h);

        // Enhanced particle connections with rainbow gradients
        if (!isMobile) {
          particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach((particleB) => {
              const dx = particleA.x - particleB.x;
              const dy = particleA.y - particleB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 160) { // Larger connection distance
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                
                // Rainbow gradient connection lines
                const gradient = ctx.createLinearGradient(particleA.x, particleA.y, particleB.x, particleB.y);
                const hue1 = (currentTime * 0.1 + i * 30) % 360;
                const hue2 = (currentTime * 0.1 + i * 30 + 60) % 360;
                gradient.addColorStop(0, `hsla(${hue1}, 80%, ${isDarkTheme ? 70 : 50}%, ${(160 - dist) / 160 * 0.4})`);
                gradient.addColorStop(1, `hsla(${hue2}, 80%, ${isDarkTheme ? 70 : 50}%, ${(160 - dist) / 160 * 0.4})`);
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.2;
                ctx.stroke();
              }
            });
          });
        }

        // Enhanced mouse interaction for CTA section
        if (!isMobile && ctaMouse.x !== undefined && ctaMouse.y !== undefined) {
          particles.forEach((particle) => {
            const dx = particle.x - ctaMouse.x;
            const dy = particle.y - ctaMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              const force = (160 - dist) / 160;
              const dirX = dx / dist;
              const dirY = dy / dist;
              particle.x += dirX * force * 4; // Very strong force
              particle.y += dirY * force * 4;
              particle.dr += force * 5; // Strong rotation effect
              particle.energy += force * 0.3; // Boost energy
            }
          });
        }

        particles.forEach((particle) => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          particle.rotation += particle.dr;
          particle.alpha += particle.pulse;
          
          // Dynamic energy fluctuation
          particle.energy += (Math.random() - 0.5) * 0.02;
          particle.energy = Math.max(0.3, Math.min(1.2, particle.energy));

          // Enhanced pulse effect
          if (particle.alpha > 0.95 || particle.alpha < 0.05) {
            particle.pulse *= -1;
          }

          // Bounce off walls with energy boost
          if (particle.x < 0 || particle.x > w) {
            particle.dx *= -1;
            particle.dr += (Math.random() - 0.5) * 4;
            particle.energy += 0.1;
          }
          if (particle.y < 0 || particle.y > h) {
            particle.dy *= -1;
            particle.dr += (Math.random() - 0.5) * 4;
            particle.energy += 0.1;
          }

          // Update color dynamically
          const hue = (currentTime * 0.1 + particle.x * 0.1 + particle.y * 0.1) % 360;
          particle.color = `hsl(${hue}, 90%, ${isDarkTheme ? 80 : 60}%)`;

          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          
          drawEnergeticStar(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.energy);
          
          // Add intense glow effect
          ctx.globalAlpha = particle.alpha * 0.6;
          drawEnergeticStar(ctx, particle.x, particle.y, particle.size * 1.5, particle.rotation, particle.energy * 0.8);
          
          // Extra sparkle effect for high energy particles
          if (particle.energy > 0.9 && Math.random() > 0.92) {
            ctx.globalAlpha = 0.9;
            ctx.fillStyle = `hsl(${(hue + 180) % 360}, 100%, 90%)`; // Complementary color
            drawEnergeticStar(ctx, particle.x, particle.y, particle.size * 0.3, -particle.rotation, 1);
          }
          
          ctx.globalAlpha = 1;
        });

        ctaAnimationFrameRef.current = requestAnimationFrame(animateCtaParticles);
      };

      const ctaResizeHandler = () => handleCtaResize(ctaCanvas);
      const ctaMouseMoveHandler = (e) => handleMouseMove(e, ctaMouse);
      const ctaMouseOutHandler = () => handleMouseOut(ctaMouse);

      window.addEventListener("resize", ctaResizeHandler);
      if (!isMobile) {
        ctaCanvas.addEventListener("mousemove", ctaMouseMoveHandler);
        ctaCanvas.addEventListener("mouseleave", ctaMouseOutHandler);
      }
      
      ctaAnimationFrameRef.current = requestAnimationFrame(animateCtaParticles);
    }

    // Cleanup function
    return () => {
      typed.destroy();
      sr.destroy();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (aboutAnimationFrameRef.current) {
        cancelAnimationFrame(aboutAnimationFrameRef.current);
      }
      if (projectsAnimationFrameRef.current) {
        cancelAnimationFrame(projectsAnimationFrameRef.current);
      }
      if (skillsAnimationFrameRef.current) {
        cancelAnimationFrame(skillsAnimationFrameRef.current);
      }
      if (experienceAnimationFrameRef.current) {
        cancelAnimationFrame(experienceAnimationFrameRef.current);
      }
      if (qualificationAnimationFrameRef.current) {
        cancelAnimationFrame(qualificationAnimationFrameRef.current);
      }
      if (ctaAnimationFrameRef.current) {
        cancelAnimationFrame(ctaAnimationFrameRef.current);
      }
      
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleAboutResize);
      window.removeEventListener("resize", handleProjectsResize);
      window.removeEventListener("resize", handleSkillsResize);
      window.removeEventListener("resize", handleExperienceResize);
      window.removeEventListener("resize", handleQualificationResize);
      window.removeEventListener("resize", handleCtaResize);
      clearInterval(progressInterval);
      
      // Clean up VanillaTilt
      if (imageRef.current && imageRef.current.vanillaTilt) {
        imageRef.current.vanillaTilt.destroy();
      }
      if (aboutImageRef.current && aboutImageRef.current.vanillaTilt) {
        aboutImageRef.current.vanillaTilt.destroy();
      }
    };
  }, [isDarkTheme, isMobile, particleCount, handleResize, handleAboutResize, handleProjectsResize, handleSkillsResize, handleExperienceResize, handleQualificationResize, handleCtaResize, handleMouseMove, handleMouseOut]);

  const handleDownload = useCallback(() => {
    setDownloadCount((prev) => prev + 1);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Enhanced Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/10">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
            style={{ 
              width: `${loadProgress}%`, 
              transition: "width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              boxShadow: loadProgress > 0 ? '0 0 10px rgba(139, 92, 246, 0.5)' : 'none'
            }}
          />
        </div>

        {/* Optimized Canvas Background */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl top-[10%] left-[10%] animate-float-slow"></div>
        <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl bottom-[10%] right-[10%] animate-float-reverse"></div>
        <div className="absolute w-[100px] h-[100px] bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-2xl top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle"></div>
        
        {/* Additional floating elements */}
        <div className="absolute w-[80px] h-[80px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl top-[20%] right-[20%] animate-float-diagonal"></div>
        <div className="absolute w-[120px] h-[120px] bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-full blur-3xl bottom-[30%] left-[20%] animate-float-reverse-diagonal"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition-all duration-700 hover:shadow-purple-500/20 sr-left ${
            isDarkTheme 
              ? 'border-white/10 bg-white/5 hover:bg-white/8' 
              : 'border-black/10 bg-black/5 hover:bg-black/8'
          }`}>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-2 ${
              isDarkTheme 
                ? 'from-yellow-300 via-orange-400 to-pink-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            } drop-shadow-lg animate-text-shimmer`}>
              {greeting}, I'm Aman Gupta
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl font-semibold mt-4 ${
              isDarkTheme ? 'text-emerald-400' : 'text-blue-600'
            }`}>
              <span ref={typedRef}></span>
            </p>
            
            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/RESUME.pdf"
                download
                onClick={handleDownload}
                className={`sr-button group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden ${
                  isDarkTheme 
                    ? 'text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500' 
                    : 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-400 hover:via-purple-400 hover:to-indigo-500'
                } animate-gradient bg-[length:200%_200%]`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaDownload className="group-hover:animate-bounce transition-transform duration-300" />
                Download Resume {downloadCount > 0 && `(${downloadCount})`}
              </a>
              <a
                href="https://linkedin.com/in/amangupta9454"
                target="_blank"
                rel="noopener noreferrer"
                className={`sr-button group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden ${
                  isDarkTheme 
                    ? 'text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500' 
                    : 'text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500'
                } animate-gradient bg-[length:200%_200%]`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaLinkedin className="group-hover:animate-bounce transition-transform duration-300" />
                LinkedIn Profile
              </a>
            </div>
            
            {/* Enhanced Skills Preview */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB'].map((skill, index) => (
                <div
                  key={skill}
                  className={`sr-skill-card px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default ${
                    isDarkTheme 
                      ? 'bg-white/10 text-white/90 hover:bg-white/20 border border-white/20' 
                      : 'bg-black/10 text-black/90 hover:bg-black/20 border border-black/20'
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative sr-right">
            <div className={`absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-30 animate-spin-slow ${
              isDarkTheme 
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500' 
                : 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
            }`}></div>
            
            <div ref={imageRef} className="relative z-10 transform transition-all duration-700 hover:scale-105">
              <img
                src={HeroImage}
                alt="Aman Gupta"
                className="max-h-[350px] lg:max-h-[400px] w-auto rounded-3xl shadow-2xl border-2 border-white/20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-[600px] flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={aboutCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Background Effects */}
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl top-[15%] left-[15%] animate-float-slow"></div>
        <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-full blur-3xl bottom-[15%] right-[15%] animate-float-reverse"></div>
        <div className="absolute w-[90px] h-[90px] bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl top-[40%] right-[10%] animate-float-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition-all duration-700 hover:shadow-indigo-500/20 ${
            isDarkTheme 
              ? 'border-white/10 bg-white/5 hover:bg-white/8' 
              : 'border-black/10 bg-black/5 hover:bg-black/8'
          }`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-6 sr-about-heading ${
              isDarkTheme 
                ? 'from-cyan-300 via-blue-400 to-purple-400' 
                : 'from-blue-600 via-purple-600 to-indigo-600'
            } drop-shadow-lg animate-text-shimmer`}>
              About Me
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed sr-about-text ${
              isDarkTheme ? 'text-gray-200' : 'text-gray-700'
            }`}>
              I'm <span className="font-semibold text-purple-400">Aman Gupta</span>, a passionate Full Stack Web Developer with expertise in modern web technologies. I specialize in creating seamless digital experiences that solve real-world problems through clean, efficient code.
            </p>
            <p className={`text-lg md:text-xl leading-relaxed mt-4 sr-about-text ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My journey is fueled by continuous learning, innovation, and a love for crafting user-friendly applications. When I'm not coding, I enjoy exploring new tech trends and contributing to open-source projects.
            </p>
            
            {/* Enhanced About Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
              <div className={`sr-skill-card p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                isDarkTheme 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-black/10 border border-black/20'
              } backdrop-blur-sm`}>
                <div className={`text-2xl font-bold ${isDarkTheme ? 'text-cyan-400' : 'text-blue-600'}`}>2+</div>
                <div className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Years Experience</div>
              </div>
              <div className={`sr-skill-card p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                isDarkTheme 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-black/10 border border-black/20'
              } backdrop-blur-sm`}>
                <div className={`text-2xl font-bold ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>15+</div>
                <div className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Projects Built</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative sr-about-image">
            <div className={`absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-30 animate-spin-slow ${
              isDarkTheme 
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
            }`}></div>
            
            <div ref={aboutImageRef} className="relative z-10 transform transition-all duration-700 hover:scale-105">
              <img
                src={hero}
                alt="Aman Gupta - About"
                className="max-h-[350px] lg:max-h-[400px] w-auto rounded-3xl shadow-2xl border-2 border-white/20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background with faster particles */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={projectsCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl top-[5%] left-[5%] animate-float-slow"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl bottom-[5%] right-[5%] animate-float-reverse"></div>
        <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-violet-500/25 to-purple-500/25 rounded-full blur-2xl top-[40%] left-[10%] animate-float-diagonal"></div>
        <div className="absolute w-[180px] h-[180px] bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl bottom-[30%] right-[15%] animate-float-reverse-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center  pb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 sr-project-heading ${
              isDarkTheme 
                ? 'from-emerald-300 via-cyan-400 to-blue-400' 
                : 'from-emerald-600 via-cyan-600 to-blue-600'
            } drop-shadow-lg animate-text-shimmer`}>
              My Projects
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto sr-project-heading ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are some of my recent projects that showcase my skills in full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`sr-project-card group relative p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition-all duration-700 hover:shadow-cyan-500/20 ${
                  isDarkTheme 
                    ? 'border-white/10 bg-white/5 hover:bg-white/8' 
                    : 'border-black/10 bg-black/5 hover:bg-black/8'
                } ${project.featured ? 'ring-2 ring-gradient-to-r ring-cyan-500/30' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      isDarkTheme 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    } shadow-lg animate-pulse`}>
                      <FaStar className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl lg:text-2xl font-bold ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300`}>
                    {project.name}
                  </h3>
                  
                  <p className={`text-sm lg:text-base leading-relaxed ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110 ${
                          isDarkTheme 
                            ? 'bg-white/10 text-cyan-300 hover:bg-white/20 border border-white/20' 
                            : 'bg-black/10 text-blue-600 hover:bg-black/20 border border-black/20'
                        } backdrop-blur-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                        isDarkTheme 
                          ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                      }`}
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                        isDarkTheme 
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500' 
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                      }`}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/amangupta9454"
              target="_blank"
              rel="noopener noreferrer"
              className={`sr-button group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden ${
                isDarkTheme 
                  ? 'text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500' 
                  : 'text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-500'
              } animate-gradient bg-[length:200%_200%]`}
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaCode className="group-hover:animate-bounce transition-transform duration-300" />
              View More Projects
            </a>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section
        id="skill"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background with triangular/hexagonal particles */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={skillsCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[220px] h-[220px] bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl top-[8%] left-[8%] animate-float-slow"></div>
        <div className="absolute w-[180px] h-[180px] bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-full blur-3xl bottom-[8%] right-[8%] animate-float-reverse"></div>
        <div className="absolute w-[160px] h-[160px] bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-2xl top-[45%] right-[12%] animate-float-diagonal"></div>
        <div className="absolute w-[140px] h-[140px] bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 rounded-full blur-2xl bottom-[35%] left-[15%] animate-float-reverse-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center pb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 sr-skills-heading ${
              isDarkTheme 
                ? 'from-purple-300 via-indigo-400 to-blue-400' 
                : 'from-purple-600 via-indigo-600 to-blue-600'
            } drop-shadow-lg animate-text-shimmer`}>
              My Skills
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto sr-skills-heading ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here are the technologies and tools I work with to create amazing digital experiences 
              and bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`sr-skills-card group relative p-6 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.05] transition-all duration-700 cursor-default ${
                  isDarkTheme 
                    ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:shadow-purple-500/20' 
                    : 'border-black/10 bg-black/5 hover:bg-black/8 hover:shadow-purple-500/20'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Skill Icon */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl lg:text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className={`text-sm lg:text-base font-bold text-center ${
                    isDarkTheme ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'
                  } transition-colors duration-300`}>
                    {skill.name}
                  </h3>
                  
                  {/* Proficiency Bar */}
                  <div className="w-full bg-gray-200/20 rounded-full h-2 lg:h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 delay-300 ${
                        isDarkTheme 
                          ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500' 
                          : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600'
                      } group-hover:shadow-lg group-hover:shadow-purple-500/30`}
                      style={{ 
                        width: `${skill.proficiency}%`,
                        animationDelay: `${index * 100 + 500}ms`
                      }}
                    />
                  </div>
                  
                  {/* Proficiency Percentage */}
                  <div className={`text-xs lg:text-sm font-semibold ${
                    isDarkTheme ? 'text-purple-300' : 'text-purple-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {skill.proficiency}%
                  </div>
                </div>
                
                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10' 
                    : 'bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10'
                } pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="text-center mt-16">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-xl border backdrop-blur-xl ${
              isDarkTheme 
                ? 'border-white/10 bg-white/5 text-gray-300' 
                : 'border-black/10 bg-black/5 text-gray-600'
            } shadow-xl`}>
              <div className="text-2xl lg:text-3xl">🚀</div>
              <div>
                <div className={`text-lg lg:text-xl font-bold ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  Always Learning
                </div>
                <div className="text-sm lg:text-base">
                  Continuously expanding my skillset with new technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background with diamond-shaped particles */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={experienceCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[240px] h-[240px] bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl top-[6%] left-[6%] animate-float-slow"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl bottom-[6%] right-[6%] animate-float-reverse"></div>
        <div className="absolute w-[170px] h-[170px] bg-gradient-to-r from-amber-500/25 to-yellow-500/25 rounded-full blur-2xl top-[40%] right-[10%] animate-float-diagonal"></div>
        <div className="absolute w-[160px] h-[160px] bg-gradient-to-r from-red-500/25 to-pink-500/25 rounded-full blur-2xl bottom-[35%] left-[12%] animate-float-reverse-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center pb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 sr-experience-heading ${
              isDarkTheme 
                ? 'from-orange-300 via-amber-400 to-yellow-400' 
                : 'from-orange-600 via-amber-600 to-yellow-600'
            } drop-shadow-lg animate-text-shimmer`}>
              My Experience
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto sr-experience-heading ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Here's my professional journey showcasing internships and hands-on experience 
              in web development and programming.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`sr-experience-timeline absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 ${
              isDarkTheme 
                ? 'bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500' 
                : 'bg-gradient-to-b from-orange-600 via-amber-600 to-yellow-600'
            } rounded-full shadow-lg`}></div>
            
            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`sr-experience-card relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:justify-center`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    isDarkTheme 
                      ? 'bg-orange-500 border-orange-400 shadow-lg shadow-orange-500/30' 
                      : 'bg-orange-600 border-orange-500 shadow-lg shadow-orange-600/30'
                  } z-10 animate-pulse`} style={{ top: '2rem' }}></div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 group relative p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.03] transition-all duration-700 ${
                    isDarkTheme 
                      ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:shadow-orange-500/20' 
                      : 'border-black/10 bg-black/5 hover:bg-black/8 hover:shadow-orange-500/20'
                  }`}>
                    {/* Company Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        isDarkTheme 
                          ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30' 
                          : 'bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30'
                      } transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <FaBriefcase className={`text-2xl ${
                          isDarkTheme ? 'text-orange-400' : 'text-orange-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-xl lg:text-2xl font-bold ${
                          isDarkTheme ? 'text-white group-hover:text-orange-300' : 'text-gray-900 group-hover:text-orange-600'
                        } transition-colors duration-300`}>
                          {experience.title}
                        </h3>
                      </div>
                    </div>

                    {/* Company and Duration */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <FaBuilding className={`text-lg ${
                          isDarkTheme ? 'text-amber-400' : 'text-amber-600'
                        }`} />
                        <span className={`text-lg font-semibold ${
                          isDarkTheme ? 'text-amber-300' : 'text-amber-700'
                        }`}>
                          {experience.company}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className={`text-lg ${
                          isDarkTheme ? 'text-orange-400' : 'text-orange-600'
                        }`} />
                        <span className={`text-base ${
                          isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {experience.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-base lg:text-lg leading-relaxed ${
                      isDarkTheme ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {experience.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                      isDarkTheme 
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500' 
                        : 'bg-gradient-to-br from-orange-600 to-amber-600'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping`}></div>
                    
                    <div className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full ${
                      isDarkTheme 
                        ? 'bg-gradient-to-br from-amber-500 to-yellow-500' 
                        : 'bg-gradient-to-br from-amber-600 to-yellow-600'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>

                    {/* Enhanced glow effect on hover */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDarkTheme 
                        ? 'bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5' 
                        : 'bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5'
                    } pointer-events-none`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="text-center mt-16">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-xl border backdrop-blur-xl ${
              isDarkTheme 
                ? 'border-white/10 bg-white/5 text-gray-300' 
                : 'border-black/10 bg-black/5 text-gray-600'
            } shadow-xl hover:scale-105 transition-transform duration-300`}>
              <div className="text-2xl lg:text-3xl">💼</div>
              <div>
                <div className={`text-lg lg:text-xl font-bold ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  Growing Experience
                </div>
                <div className="text-sm lg:text-base">
                  Building expertise through hands-on internships and real projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification & Achievements Section */}
      <section
        id="qualification"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background with flowing particles */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={qualificationCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl top-[4%] left-[4%] animate-float-slow"></div>
        <div className="absolute w-[220px] h-[220px] bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl bottom-[4%] right-[4%] animate-float-reverse"></div>
        <div className="absolute w-[190px] h-[190px] bg-gradient-to-r from-indigo-500/25 to-purple-500/25 rounded-full blur-2xl top-[35%] right-[8%] animate-float-diagonal"></div>
        <div className="absolute w-[180px] h-[180px] bg-gradient-to-r from-teal-500/25 to-cyan-500/25 rounded-full blur-2xl bottom-[30%] left-[8%] animate-float-reverse-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center pb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 sr-qualification-heading ${
              isDarkTheme 
                ? 'from-blue-300 via-cyan-400 to-green-400' 
                : 'from-blue-600 via-cyan-600 to-green-600'
            } drop-shadow-lg animate-text-shimmer`}>
              Qualification & Achievements
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto sr-qualification-heading ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My educational journey and notable achievements that have shaped my development 
              as a software engineer and problem solver.
            </p>
          </div>

          {/* Qualifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {qualifications.map((qualification, index) => (
              <div
                key={qualification.id}
                className={`sr-qualification-card group relative p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.03] transition-all duration-700 ${
                  isDarkTheme 
                    ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:shadow-blue-500/20' 
                    : 'border-black/10 bg-black/5 hover:bg-black/8 hover:shadow-blue-500/20'
                }`}
                style={{ 
                  animationDelay: `${index * 120}ms`,
                  backgroundImage: qualification.gradient
                }}
              >
                {/* Status Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    qualification.badge === 'In Progress' 
                      ? (isDarkTheme ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white')
                      : (isDarkTheme ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white')
                  } shadow-lg`}>
                    {qualification.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                    qualification.borderColor || 'border-blue-400'
                  } ${
                    isDarkTheme 
                      ? 'bg-white/5 border-opacity-30' 
                      : 'bg-black/5 border-opacity-30'
                  }`}>
                    {qualification.icon}
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${
                      isDarkTheme ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
                    } transition-colors duration-300`}>
                      {qualification.title}
                    </h3>
                    
                    <h4 className={`text-base lg:text-lg font-semibold mb-3 ${
                      isDarkTheme ? 'text-blue-300' : 'text-blue-700'
                    }`}>
                      {qualification.subtitle}
                    </h4>
                    
                    <p className={`text-base ${
                      isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {qualification.detail}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-green-500/5' 
                    : 'bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-green-500/5'
                } pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="text-center mb-12">
            <h3 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 ${
              isDarkTheme 
                ? 'from-yellow-300 via-orange-400 to-red-400' 
                : 'from-yellow-600 via-orange-600 to-red-600'
            } drop-shadow-lg animate-text-shimmer`}>
              Notable Achievements
            </h3>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`sr-achievement-card group relative p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl hover:scale-[1.03] transition-all duration-700 ${
                  isDarkTheme 
                    ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:shadow-yellow-500/20' 
                    : 'border-black/10 bg-black/5 hover:bg-black/8 hover:shadow-yellow-500/20'
                }`}
                style={{ 
                  animationDelay: `${(qualifications.length * 120) + (index * 200)}ms`,
                  backgroundImage: achievement.gradient
                }}
              >
                {/* Trophy Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDarkTheme 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  } shadow-lg animate-pulse`}>
                    <FaStar className="w-3 h-3" />
                    {achievement.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start gap-6">
                  {/* Trophy Icon */}
                  <div className={`p-4 rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                    achievement.borderColor || 'border-yellow-400'
                  } ${
                    isDarkTheme 
                      ? 'bg-white/5 border-opacity-30' 
                      : 'bg-black/5 border-opacity-30'
                  }`}>
                    {achievement.icon}
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${
                      isDarkTheme ? 'text-white group-hover:text-yellow-300' : 'text-gray-900 group-hover:text-yellow-600'
                    } transition-colors duration-300`}>
                      {achievement.title}
                    </h3>
                    
                    <h4 className={`text-base lg:text-lg font-semibold mb-3 ${
                      isDarkTheme ? 'text-yellow-300' : 'text-yellow-700'
                    }`}>
                      {achievement.subtitle}
                    </h4>
                    
                    <p className={`text-base ${
                      isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {achievement.detail}
                    </p>
                  </div>
                </div>

                {/* Sparkle Effects */}
                <div className={`absolute -top-2 -left-2 w-8 h-8 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-yellow-500 to-orange-500' 
                    : 'bg-gradient-to-br from-yellow-600 to-orange-600'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping`}></div>
                
                <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500' 
                    : 'bg-gradient-to-br from-orange-600 to-red-600'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5' 
                    : 'bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5'
                } pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-center mt-16">
            <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-xl border backdrop-blur-xl ${
              isDarkTheme 
                ? 'border-white/10 bg-white/5 text-gray-300' 
                : 'border-black/10 bg-black/5 text-gray-600'
            } shadow-xl hover:scale-105 transition-transform duration-300`}>
              <div className="text-2xl lg:text-3xl">🎓</div>
              <div>
                <div className={`text-lg lg:text-xl font-bold ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  Committed to Excellence
                </div>
                <div className="text-sm lg:text-base">
                  Continuously pursuing knowledge and achieving milestones
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      >
        {/* Canvas Background with energetic star particles */}
        <div className="absolute inset-0 z-0">
          <canvas 
            ref={ctaCanvasRef} 
            className="w-full h-full"
            style={{ background: isDarkTheme ? '#0f0f23' : '#f0f8ff' }}
          />
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl top-[3%] left-[3%] animate-float-slow"></div>
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl bottom-[3%] right-[3%] animate-float-reverse"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-yellow-500/25 to-orange-500/25 rounded-full blur-2xl top-[30%] right-[5%] animate-float-diagonal"></div>
        <div className="absolute w-[220px] h-[220px] bg-gradient-to-r from-green-500/25 to-emerald-500/25 rounded-full blur-2xl bottom-[25%] left-[5%] animate-float-reverse-diagonal"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl w-full text-center">
          {/* Section Header */}
          <div className="pb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-8 sr-cta-heading ${
              isDarkTheme 
                ? 'from-pink-300 via-purple-400 to-cyan-400' 
                : 'from-pink-600 via-purple-600 to-cyan-600'
            } drop-shadow-lg animate-text-shimmer`}>
              Let's Work Together!
            </h2>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto sr-cta-content leading-relaxed ${
              isDarkTheme ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Ready to bring your ideas to life? I'm passionate about creating exceptional 
              digital experiences and would love to collaborate on your next project.
            </p>
          </div>

          {/* Main CTA Content */}
          <div className={`sr-cta-content p-8 lg:p-12 rounded-3xl border backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition-all duration-700 mb-12 ${
            isDarkTheme 
              ? 'border-white/10 bg-white/5 hover:bg-white/8 hover:shadow-purple-500/20' 
              : 'border-black/10 bg-black/5 hover:bg-black/8 hover:shadow-purple-500/20'
          }`}>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className={`sr-cta-content flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkTheme 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}>
                <div className={`p-4 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30' 
                    : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                }`}>
                  <FaEnvelope className={`text-2xl ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Email
                  </h3>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    ag0567688@gmail.com
                  </p>
                </div>
              </div>

              <div className={`sr-cta-content flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkTheme 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}>
                <div className={`p-4 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30' 
                    : 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30'
                }`}>
                  <FaPhone className={`text-2xl ${isDarkTheme ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Phone
                  </h3>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    +91 9560472926
                  </p>
                </div>
              </div>

              <div className={`sr-cta-content flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkTheme 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-black/5 hover:bg-black/10 border border-black/10'
              }`}>
                <div className={`p-4 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30' 
                    : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                }`}>
                  <FaMapMarkerAlt className={`text-2xl ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Location
                  </h3>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    Ghaziabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:ag0567688@gmail.com"
                className={`sr-cta-button group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 relative overflow-hidden ${
                  isDarkTheme 
                    ? 'text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500' 
                    : 'text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-400 hover:via-purple-400 hover:to-indigo-500'
                } animate-gradient bg-[length:200%_200%]`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaEnvelope className="group-hover:animate-bounce transition-transform duration-300" />
                Get In Touch
              </a>

              <a
                href="/RESUME.pdf"
                download
                onClick={handleDownload}
                className={`sr-cta-button group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 relative overflow-hidden ${
                  isDarkTheme 
                    ? 'text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 hover:from-cyan-500 hover:via-blue-500 hover:to-teal-500' 
                    : 'text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-600 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-500'
                } animate-gradient bg-[length:200%_200%]`}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaDownload className="group-hover:animate-bounce transition-transform duration-300" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className={`text-xl font-bold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Connect With Me
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com/in/amangupta9454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sr-cta-button group p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDarkTheme 
                      ? 'bg-white/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-white/20' 
                      : 'bg-black/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-black/20'
                  } shadow-lg hover:shadow-xl`}
                >
                  <FaLinkedin className="text-2xl group-hover:animate-bounce" />
                </a>

                <a
                  href="https://github.com/amangupta9454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sr-cta-button group p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDarkTheme 
                      ? 'bg-white/10 hover:bg-gray-800 text-gray-400 hover:text-white border border-white/20' 
                      : 'bg-black/10 hover:bg-gray-800 text-gray-600 hover:text-white border border-black/20'
                  } shadow-lg hover:shadow-xl`}
                >
                  <FaGithub className="text-2xl group-hover:animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className={`sr-cta-content text-center ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-lg">
              Looking forward to creating something amazing together! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(90deg); }
          50% { transform: translate(-5px, -10px) rotate(180deg); }
          75% { transform: translate(-10px, 5px) rotate(270deg); }
        }
        
        @keyframes float-reverse-diagonal {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-10px, 15px) rotate(-90deg); }
          50% { transform: translate(5px, 10px) rotate(-180deg); }
          75% { transform: translate(10px, -5px) rotate(-270deg); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1) translateX(-50%) translateY(-50%); opacity: 0.4; }
          50% { transform: scale(1.1) translateX(-50%) translateY(-50%); opacity: 0.6; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes slide-shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-float-diagonal {
          animation: float-diagonal 10s ease-in-out infinite;
        }
        
        .animate-float-reverse-diagonal {
          animation: float-reverse-diagonal 12s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          animation: text-shimmer 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Enhanced smooth scrolling */
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-padding-top: 80px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          
          .sr-skill-card, .sr-skills-card, .sr-experience-card, .sr-qualification-card, .sr-achievement-card, .sr-cta-content {
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
          }
          
          .sr-skills-card, .sr-qualification-card, .sr-achievement-card {
            padding: 1rem;
          }

          .sr-experience-card, .sr-cta-content {
            padding: 1.5rem;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .sr-fade, .sr-left, .sr-right, .sr-about-heading, .sr-about-text, .sr-about-image, .sr-button, .sr-skill-card, .sr-skills-heading, .sr-skills-card, .sr-experience-heading, .sr-experience-card, .sr-experience-timeline, .sr-qualification-heading, .sr-qualification-card, .sr-achievement-card, .sr-cta-heading, .sr-cta-content, .sr-cta-button {
            opacity: 1 !important;
            transform: none !important;
          }
        }
        
        /* Enhanced focus states for accessibility */
        .sr-button:focus-visible, .sr-experience-card:focus-visible, .sr-qualification-card:focus-visible, .sr-achievement-card:focus-visible, .sr-cta-button:focus-visible {
          outline: 2px solid #fb7185;
          outline-offset: 2px;
        }
        
        /* Smooth transitions for all interactive elements */
        .sr-skill-card, .sr-button, .sr-skills-card, .sr-experience-card, .sr-qualification-card, .sr-achievement-card, .sr-cta-content, .sr-cta-button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </>
  );
};

export default Home;
