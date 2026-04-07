import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Trophy,
  Star,
  Code2,
  Layers,
  Database,
  Wrench,
  ChevronDown,
  Download,
  Send,
  Award,
  Zap,
  Twitter,
} from 'lucide-react';

// ─── TILT CARD ────────────────────────────────────────────────────────────────

function TiltCard({
  children,
  className = '',
  style = {},
  intensity = 12,
  as: Tag = 'div',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -intensity;
    const rotateY = ((x - cx) / cx) * intensity;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }, []);

  return (
    <Tag
      ref={cardRef}
      className={className}
      style={{ ...style, transition: 'transform 0.15s ease-out', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const LINKEDIN_URL = 'https://www.linkedin.com/in/shivani-bhati-24325832a/';
const GITHUB_URL = 'https://github.com/ShivaniiiBhati';
const EMAIL = 'shivaniiibhati10@gmail.com';
const X_URL = 'https://x.com/Shivaniibhati35';
const CODOLIO_URL = 'https://codolio.com/profile/Shivanibhati';
const LEETCODE_URL = 'https://leetcode.com/u/shivanibhati/';

const ROLES = [
  'Developer & Builder',
  'Open Source Contributor',
  'Hackathon Participant',
  'DSA Problem Solver',
  'B.Tech CS Student',
];

const SKILLS: { category: string; icon: React.ReactNode; color: string; tags: string[] }[] = [
  {
    category: 'Languages',
    icon: <Code2 size={16} />,
    color: 'violet',
    tags: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Layers size={16} />,
    color: 'cyan',
    tags: ['Flask', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'React Native'],
  },
  {
    category: 'Security & CS Fundamentals',
    icon: <Wrench size={16} />,
    color: 'emerald',
    tags: ['PKI', 'RSA', 'X.509', 'SHA-256', 'Cybersecurity', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Database size={16} />,
    color: 'orange',
    tags: ['Git', 'GitHub', 'VS Code', 'SQLite', 'OpenSSL', 'Linux', 'Postman'],
  },
];

const PROJECTS = [
  {
    title: 'LifeLine — Telemedicine App',
    description:
      'A full-stack telemedicine mobile app bridging rural healthcare gaps. Features role-based auth for doctors & patients, AI symptom checker (Google Gemini 2.5 Flash), digital health records via QR codes, and video consultations via VideoSDK.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'SQLite', 'Google Gemini API'],
    github: 'https://github.com/ShivaniiiBhati/LifeLine',
    live: '',
    featured: true,
  },
  {
    title: 'LegalChamps (hackOclock)',
    description:
      'A hackathon-winning legal education platform with interactive gameplay, modular learning paths, AI chatbot, emergency resource finder, and a rewards system. Built for all age groups to make legal literacy accessible.',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/ShivaniiiBhati/hackOclock',
    live: 'https://legalchamps-hackoclock.vercel.app',
    featured: true,
  },
  {
    title: 'Expense Splitter',
    description:
      'A clean web app to split expenses among groups — perfect for trips, roommates, or events. Enter expenses, assign participants, and instantly see who owes what.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ShivaniiiBhati/expense_splitter',
    live: '',
    featured: true,
  },
  {
    title: 'Quick Share',
    description:
      'A Python-based local file sharing tool that spins up an HTTP server and generates a QR code for instant file access across devices on the same network — no cloud, no setup.',
    tech: ['Python', 'HTTP Server', 'QR Code', 'Flask'],
    github: 'https://github.com/ShivaniiiBhati/Quick-Share',
    live: '',
    featured: false,
  },
  {
    title: 'Deepfake Detection System',
    description:
      'A machine learning project to detect AI-generated deepfake media using computer vision techniques. Contributed to the detection pipeline and model evaluation.',
    tech: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV'],
    github: 'https://github.com/ShivaniiiBhati/deepfake-detection-project',
    live: '',
    featured: false,
  },
  {
    title: 'Mini PKI System',
    description:
      'A Flask-based Public Key Infrastructure application for managing user certificates, key files, and certificate signing — includes validation, revocation, and an admin dashboard.',
    tech: ['Python', 'Flask', 'HTML', 'Cryptography'],
    github: 'https://github.com/ShivaniiiBhati/Mini-PKI',
    live: '',
    featured: false,
  },
];

const ACHIEVEMENTS = [
  {
    title: '1st Place — Tech Trivia 2025',
    issuer: 'BIS Noida × GL Bajaj Institute',
    date: '2025',
    icon: <Trophy size={20} />,
    description: 'Won 1st position at Tech Trivia 2025 — a technical quiz competition organised by BIS Noida and GL Bajaj Institute of Technology and Management.',
  },
  {
    title: 'hackOclock Hackathon',
    issuer: 'Hackathon',
    date: '2025',
    icon: <Trophy size={20} />,
    description: 'Built LegalChamps — a legal education platform with AI chatbot and gamified learning — as part of a 4-member team at hackOclock.',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    icon: <Award size={20} />,
    description: 'Completed Cisco\'s foundational cybersecurity course covering network security, threat landscape, and security best practices.',
  },
  {
    title: 'Cloud Security Fundamentals',
    issuer: 'Palo Alto Networks Cybersecurity Academy',
    date: '2024',
    icon: <Award size={20} />,
    description: 'Earned certification in cloud security fundamentals from Palo Alto Networks, covering cloud architecture, threats, and security controls.',
  },
  {
    title: 'Virtual Internship — Cybersecurity',
    issuer: 'AICTE × Cisco',
    date: '2024',
    icon: <Star size={20} />,
    description: 'Completed a virtual internship program in Cybersecurity under AICTE and Cisco, gaining hands-on exposure to real-world security scenarios.',
  },
  {
    title: 'GitHub Pull Shark',
    issuer: 'GitHub',
    date: '2025',
    icon: <Github size={20} />,
    description: 'Earned the Pull Shark achievement on GitHub for opening pull requests that get merged into open-source projects.',
  },
  {
    title: 'Open Source Contributions',
    issuer: 'GitHub',
    date: '2024–2025',
    icon: <Code2 size={20} />,
    description: 'Contributed to open-source projects including composio (AI agent integrations), llmware (enterprise RAG pipelines), and daytona (AI code infrastructure).',
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentIndex, texts]);

  return (
    <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
      {displayed}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/20 mb-4">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-[#8b8aa0] text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    </motion.div>
  );
}

// ─── SECTIONS ────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px]" />
        {/* Grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Particles />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#8b8aa0] text-sm tracking-widest uppercase mb-6 font-medium"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
          >
            Shivani
            <br />
            <span className="text-5xl md:text-7xl font-semibold text-white/80">Bhati</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium mb-8 h-10"
          >
            <TypewriterText texts={ROLES} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[#8b8aa0] text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Passionate developer crafting secure, scalable applications — from full-stack web to cybersecurity infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <a
              href="/api/resume"
              download="Shivani_Resume.pdf"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-violet-300 border border-violet-500/40 hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-[#8b8aa0]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: 'Active', label: 'Ready to Work' },
    { value: '8.6', label: 'CGPA' },
    { value: '10+', label: 'Technologies' },
    { value: '17+', label: 'Repositories' },
  ];

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About Me" title="Who I Am" />

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10" />
                <span className="text-8xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  SB
                </span>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-2xl border border-violet-500/10" />
              <div className="absolute -inset-6 rounded-2xl border border-violet-500/5" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-violet-500/5 blur-xl" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Developer & Cybersecurity Enthusiast from New Delhi
            </h3>
            <p className="text-[#8b8aa0] leading-relaxed mb-6">
              Hey, I'm Shivani — a B.Tech Computer Science student at GL Bajaj Institute of Technology and Management, Greater Noida (2023–2027), maintaining a CGPA of 8.6. I build secure, scalable applications with a strong focus on web development and cybersecurity fundamentals.
            </p>
            <p className="text-[#8b8aa0] leading-relaxed mb-8">
              I've built projects ranging from telemedicine apps and legal-tech hackathon tools to file-sharing systems and PKI infrastructure. I'm a member of IEEE and NSS, actively contributing to open source, solving DSA on LeetCode, and always chasing the next interesting problem.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-[#13131a] border border-[#2a2a3a] rounded-xl p-4 hover:border-violet-500/30 transition-colors"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8b8aa0] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    violet: { bg: 'bg-violet-500/10', text: 'text-violet-300', border: 'border-violet-500/20' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/20' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/20' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-300', border: 'border-orange-500/20' },
  };

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Skills"
          title="My Tech Stack"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group, gi) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });
            const colors = colorMap[group.color];

            return (
              <motion.div
                key={group.category}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`${colors.text}`}>{group.icon}</span>
                  <h3 className="font-semibold text-white text-sm tracking-wide">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.1 + ti * 0.04 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${colors.bg} ${colors.text} ${colors.border} cursor-default`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          subtitle="A collection of projects that showcase my skills and passion for development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });

            return (
              <motion.div
                key={project.title}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={project.featured && i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <TiltCard
                  className={`group relative bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-violet-500/40 transition-colors duration-300 cursor-default overflow-hidden h-full`}
                  style={{
                    boxShadow: '0 0 0 0 rgba(124,58,237,0)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px -10px rgba(124,58,237,0.2)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(124,58,237,0)';
                  }}
                >
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.featured && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full mb-3">
                      Featured
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8b8aa0] text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md bg-[#1a1a24] text-[#8b8aa0] border border-[#2a2a3a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#8b8aa0] hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#8b8aa0] hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Achievements"
          title="Milestones & Recognition"
          subtitle="Click any achievement to view it on my LinkedIn profile"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });

            return (
              <motion.div
                key={ach.title}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard
                  as="a"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  intensity={10}
                  className="group relative bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-violet-500/50 transition-colors duration-300 cursor-pointer overflow-hidden block h-full"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px -10px rgba(124,58,237,0.25)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* LinkedIn hover overlay */}
                  <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-colors duration-300 rounded-2xl flex items-end justify-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-xs font-medium text-violet-300 bg-violet-500/20 px-2 py-1 rounded-full border border-violet-500/30">
                      <Linkedin size={10} />
                      View on LinkedIn →
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                      {ach.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors leading-tight">
                        {ach.title}
                      </h3>
                      <p className="text-xs text-violet-400/70 mb-2">
                        {ach.issuer} · {ach.date}
                      </p>
                      <p className="text-xs text-[#8b8aa0] leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      handle: '@shivani-bhati',
      href: LINKEDIN_URL,
      color: 'text-blue-400',
      border: 'border-blue-500/20 hover:border-blue-400/50',
      bg: 'hover:bg-blue-500/5',
      glow: 'hover:shadow-blue-500/10',
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      handle: '@ShivaniiiBhati',
      href: GITHUB_URL,
      color: 'text-white',
      border: 'border-white/10 hover:border-white/30',
      bg: 'hover:bg-white/5',
      glow: 'hover:shadow-white/5',
    },
    {
      icon: <Twitter size={22} />,
      label: 'X (Twitter)',
      handle: '@Shivaniibhati35',
      href: X_URL,
      color: 'text-sky-400',
      border: 'border-sky-500/20 hover:border-sky-400/50',
      bg: 'hover:bg-sky-500/5',
      glow: 'hover:shadow-sky-500/10',
    },
    {
      icon: <Code2 size={22} />,
      label: 'LeetCode',
      handle: '@shivanibhati',
      href: LEETCODE_URL,
      color: 'text-orange-400',
      border: 'border-orange-500/20 hover:border-orange-400/50',
      bg: 'hover:bg-orange-500/5',
      glow: 'hover:shadow-orange-500/10',
    },
    {
      icon: <Zap size={22} />,
      label: 'Codolio',
      handle: '@Shivanibhati',
      href: CODOLIO_URL,
      color: 'text-violet-400',
      border: 'border-violet-500/20 hover:border-violet-400/50',
      bg: 'hover:bg-violet-500/5',
      glow: 'hover:shadow-violet-500/10',
    },
    {
      icon: <Mail size={22} />,
      label: 'Email',
      handle: 'shivaniiibhati10@gmail.com',
      href: `mailto:${EMAIL}`,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20 hover:border-emerald-400/50',
      bg: 'hover:bg-emerald-500/5',
      glow: 'hover:shadow-emerald-500/10',
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          label="Contact"
          title="Find Me Across the Web"
          subtitle="Reach out through any of these platforms — I'd love to connect."
        />

        {/* Open to work badge */}
        <div className="flex justify-center mb-10">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              >
                <TiltCard
                  as="span"
                  intensity={14}
                  className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#13131a] border ${s.border} ${s.bg} transition-colors duration-300 shadow-lg ${s.glow} cursor-pointer block`}
                >
                  <span className={`${s.color} group-hover:scale-110 transition-transform duration-200`}>
                    {s.icon}
                  </span>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-white mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-[#8b8aa0] truncate max-w-[120px]">{s.handle}</div>
                  </div>
                  <ExternalLink size={11} className="text-[#8b8aa0] opacity-0 group-hover:opacity-60 transition-opacity" />
                </TiltCard>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Let's Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-[#8b8aa0] uppercase tracking-widest mb-3">Let's Work Together</p>
            <h3 className="text-2xl font-bold text-white mb-2">Got a project or opportunity?</h3>
            <p className="text-[#8b8aa0] text-sm">I'm open to new collaborations. Let's build something amazing.</p>
          </div>

          {/* Contact Form */}
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-medium text-[#8b8aa0] mb-2 uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formState[field.key as 'name' | 'email']}
                    onChange={(e) => setFormState((prev) => ({ ...prev, [field.key]: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#2a2a3a] text-white placeholder-[#8b8aa0] focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8b8aa0] mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                value={formState.message}
                onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-[#2a2a3a] text-white placeholder-[#8b8aa0] focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              {submitted ? (
                '✓ Message Sent!'
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <title>Shivani Bhati — Full Stack Developer Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Shivani Bhati — Full Stack Developer specializing in React, Node.js, and modern web technologies."
      />
      <div className="bg-[#0a0a0f] min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </>
  );
}
