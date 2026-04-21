import { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  ArrowUpRight,
  GitBranch,
  Terminal,
  Cpu,
} from 'lucide-react';
import Spline from '@splinetool/react-spline';

// ──────────────────────────────────────────────
// Custom liquid-glass cursor
// ──────────────────────────────────────────────
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{ marginLeft: '-6px', marginTop: '-6px' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 bg-white/5 backdrop-blur-[2px] rounded-full z-[9998] pointer-events-none"
        style={{ marginLeft: '-20px', marginTop: '-20px' }}
      />
    </>
  );
};

// Rain-like flowing lines
// ──────────────────────────────────────────────
const RainEffect = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[1px] bg-gradient-to-b from-transparent via-orange-500 to-transparent"
        style={{
          left: `${80 + Math.random() * 18}%`,
          height: `${100 + Math.random() * 200}px`,
          opacity: 0.1 + Math.random() * 0.4,
          top: '-20%',
          animation: `rainFlow ${15 + Math.random() * 20}s linear ${Math.random() * 10}s infinite`,
        }}
      />
    ))}
  </div>
);

// 3-D Spline hero (impact-maximised)
// ──────────────────────────────────────────────
const SplineHero = () => (
  <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden scale-110 md:scale-125">
    <Spline
      scene="https://prod.spline.design/NvZtJtZeZI4rtU91/scene.splinecode"
      className="w-full h-full pointer-events-none"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />
  </div>
);

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'NexShop Platform',
    category: 'E-COMMERCE',
    tech: 'Next.js, Stripe, PostgreSQL',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    color: 'from-orange-500 to-red-500',
    tilt: 'md:[--tw-rotate-y:-12deg] md:[--tw-rotate-z:2deg]',
  },
  {
    id: 2,
    title: 'DataVizion SaaS',
    category: 'DASHBOARD',
    tech: 'React, Tailwind, Node.js',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-cyan-500 to-blue-500',
    tilt: 'md:-translate-y-8 z-10',
    featured: true,
  },
  {
    id: 3,
    title: 'FitTracker API',
    category: 'BACKEND',
    tech: 'Spring Boot, Redis, AWS',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-500 to-indigo-500',
    tilt: 'md:[--tw-rotate-y:12deg] md:[--tw-rotate-z:-2deg]',
  },
];

const skills = [
  { icon: Code2, label: 'Frontend', items: 'React · Next.js · TypeScript · Tailwind' },
  { icon: Server, label: 'Backend', items: 'Node.js · Spring Boot · Express · FastAPI' },
  { icon: Database, label: 'Database', items: 'PostgreSQL · MongoDB · Redis · Supabase' },
  { icon: Layout, label: 'Design', items: 'Figma · Framer · Spline · Three.js' },
];

// ──────────────────────────────────────────────
// App
// ──────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <CustomCursor />
      <RainEffect />

      {/* Ambient glow blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-[glowPulse_8s_ease-in-out_infinite]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-[glowPulse_8s_ease-in-out_infinite_3s]" />

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5'
            : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Terminal size={18} className="text-black" />
            </div>
            <span>
              DEV<span className="text-orange-500">.</span>CORE
            </span>
          </div>

          <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            {['about', 'projects', 'skills', 'contact'].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>

          <button className="hidden sm:block px-6 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-orange-500 hover:text-white transition-all">
            GET RESUME
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <SplineHero />

        <div className="relative z-10 flex flex-col items-center text-center pointer-events-none px-6 max-w-5xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in">
            <span className="text-[10px] tracking-[0.3em] font-bold text-orange-400 uppercase leading-[1.6]">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 mix-blend-difference uppercase">
            Architecting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
              Digital World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto mb-12 mix-blend-difference leading-[1.6] keep-all">
            단순히 작동하는 코드를 넘어,
            <br className="sm:hidden" /> 비즈니스의 핵심 가치를 전달하는
            <br className="hidden md:block" />
            견고한 풀스택 솔루션을 설계하고 구축합니다.
            <br className="sm:hidden" /> 기술의 한계를 넘어선 사용자 경험을 완성합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a
              href="#projects"
              className="px-10 py-5 rounded-full bg-orange-500 text-black font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-white transition-all hover:-translate-y-1"
            >
              Explore Work <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 rounded-full border border-white/20 backdrop-blur-sm bg-black/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-gray-500 pointer-events-none z-10">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-orange-500/70 rotate-90 origin-left ml-2 mt-4">
          </span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 py-40 px-8 flex justify-center items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] uppercase">
              I don't just code.
              <br />
              <span className="text-gray-600">I solve problems.</span>
            </h2>
            <div className="flex flex-col gap-8 text-xl text-gray-400 font-light leading-[1.7] keep-all">
              <p>
                기술은 목표를 달성하기 위한 가장 강력한 도구입니다.
                <br />
                저의 목표는 비즈니스의 핵심 가치를 사용자에게 가장 효율적이고
                <br className="hidden md:block" />
                감동적인 방식으로 전달하는 시스템을 구축하는 것입니다.
              </p>
              <p>
                프론트엔드의 세밀한 인터랙션부터 백엔드의 대규모 데이터 처리까지,
                <br className="hidden md:block" />
                전체 아키텍처를 조망하는 시야로 프로젝트의 모든 단계를 책임집니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-2xl bg-[#111] border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu
                  size={120}
                  className="text-orange-500/20 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
                <div className="flex justify-between items-end">
                  <div className="leading-[1.4]">
                    <p className="text-[10px] text-orange-500 font-bold mb-1 tracking-widest">LOCATION</p>
                    <p className="text-xl font-bold">SEOUL, KOREA</p>
                  </div>
                  <div className="text-right leading-[1.4]">
                    <p className="text-[10px] text-gray-400 mb-1 tracking-widest">EXPERIENCE</p>
                    <p className="text-xl font-bold text-white">5+ YEARS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-10 py-32 px-4 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[1.1]">
            Featured
            <br />
            Projects<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-md leading-[1.6] keep-all">
            기술적 도전과 비즈니스 가치를 동시에 달성한
            <br /> 엄선된 프로젝트 결과물들입니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-4 max-w-7xl mx-auto [perspective:3000px] py-10 px-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`group relative w-full ${p.featured ? 'md:w-[30rem] h-[520px]' : 'md:w-80 h-[440px]'
                } ${p.tilt} hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out rounded-2xl overflow-hidden border border-white/10 shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity" />
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <p className="text-[10px] font-black tracking-[0.3em] text-orange-500 mb-4 uppercase">
                  {p.category}
                </p>
                <h3
                  className={`font-black tracking-tight mb-2 leading-[1.2] ${p.featured ? 'text-4xl' : 'text-2xl'
                    }`}
                >
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-[1.6]">{p.tech}</p>
                <div className="flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="flex-1 py-4 bg-white text-black font-black text-[10px] tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
                    View Case <ArrowUpRight size={14} />
                  </button>
                  <button className="p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors">
                    <GitBranch size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 py-32 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter uppercase leading-[1.1]">
            Tech<br />
            Stack<span className="text-orange-500">.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ icon: Icon, label, items }) => (
              <div
                key={label}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <Icon size={32} className="text-orange-500 mb-6 relative z-10" />
                <p className="text-[10px] font-bold text-gray-600 tracking-[0.3em] uppercase mb-2 relative z-10">
                  {label}
                </p>
                <p className="text-lg font-bold text-white relative z-10">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID BANNER ── */}
      <section className="relative z-10 py-56 bg-white text-black text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[35vw] font-black leading-none -ml-20">BUILD</h2>
        </div>
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[1.05] uppercase text-black">
            Ready to launch your
            <br />
            Next{' '}
            <span className="underline decoration-[8px] underline-offset-[12px]">
              Big Idea
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-16 text-gray-700 max-w-2xl mx-auto leading-[1.6] keep-all">
            훌륭한 프로덕트는 뛰어난 기술과 비전이 만날 때 탄생합니다.
            <br className="hidden md:block" />
            당신의 아이디어에 기술이라는 날개를 달아보세요.
          </p>
          <a
            href="#contact"
            className="inline-block px-14 py-7 bg-black text-white rounded-full font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform shadow-2xl"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left */}
          <div>
            <h2 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-16 uppercase">
              Get In
              <br />
              <span className="text-gray-700">Touch.</span>
            </h2>
            <div className="flex flex-col gap-12">
              <div className="group cursor-default">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">
                  Work Inquiry
                </p>
                <p className="text-2xl md:text-4xl font-black group-hover:text-orange-500 transition-colors duration-300">
                  hello@devcore.com
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">
                  Location
                </p>
                <p className="text-2xl md:text-4xl font-black group-hover:text-blue-500 transition-colors duration-300">
                  Seoul, Korea
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-10">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-5 text-2xl font-bold focus:outline-none focus:border-orange-500 transition-colors peer placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-5 text-2xl font-bold text-gray-600 transition-all
                    peer-focus:-top-8 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:text-orange-500
                    peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                >
                  Your Name
                </label>
              </div>
              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-5 text-2xl font-bold focus:outline-none focus:border-orange-500 transition-colors peer placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-5 text-2xl font-bold text-gray-600 transition-all
                    peer-focus:-top-8 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:text-orange-500
                    peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                >
                  Email Address
                </label>
              </div>
              {/* Message */}
              <div className="relative group mt-4">
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/10 py-5 text-xl font-bold focus:outline-none focus:border-orange-500 transition-colors peer placeholder-transparent resize-none leading-[1.6]"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-5 text-xl font-bold text-gray-600 transition-all
                    peer-focus:-top-10 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:text-orange-500
                    peer-[:not(:placeholder-shown)]:-top-10 peer-[:not(:placeholder-shown)]:text-[10px] uppercase"
                >
                  Project Details
                </label>
              </div>
            </div>

            <button className="group flex items-center justify-between py-8 px-12 bg-white text-black rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all duration-500">
              <span>SEND MESSAGE</span>
              <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-24 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-3xl font-black tracking-tighter">
              DEV<span className="text-orange-500">.</span>CORE
            </div>
            <p className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">
              Full Stack Architect
            </p>
          </div>

          <div className="flex gap-16 text-[10px] font-black tracking-[0.3em] uppercase text-gray-600">
            {['Privacy', 'Terms', 'Archive'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="text-[10px] tracking-[0.2em] text-gray-800 font-bold uppercase">
            &copy; 2026 Developed with Passion.
          </div>
        </div>

        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[28vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none select-none uppercase">
          Creator
        </div>
      </footer>
    </div>
  );
}
