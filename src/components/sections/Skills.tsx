import { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { 
  SiC, SiCplusplus, SiPython, 
  SiJavascript, SiHtml5, SiTailwindcss, 
  SiReact, SiTypescript, SiDocker, SiGit, 
  SiNodedotjs, SiFigma, SiMysql 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const skills = [
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
];

const Skills = () => {
  const [isFast, setIsFast] = useState(false);
  const baseX = useMotionValue(0);

  useAnimationFrame((_time, delta) => {
    // Normal speed: 50% in ~35s
    // Fast speed: 50% in ~7s
    const speed = isFast ? 0.00714 : 0.001428;
    let newX = baseX.get() - (speed * delta);
    
    // Wrap around to exactly 0 to create continuous infinite loop
    if (newX <= -50) {
      newX += 50; 
    }
    baseX.set(newX);
  });

  // Convert the numerical motion value into a percentage string
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <section id="skills" className="min-h-screen w-full flex flex-col justify-center py-20 px-6">
      <div className="container mx-auto max-w-6xl border-t border-primary/20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-slate-200 whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl pt-1">02.</span> Available Languages
          </h2>
          <div className="h-px bg-slate-700/50 flex-grow ml-8"></div>
        </motion.div>
        
        <div 
          className="relative w-full overflow-hidden flex py-10 mt-8 cursor-grab active:cursor-grabbing select-none"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
          onMouseDown={() => setIsFast(true)}
          onMouseUp={() => setIsFast(false)}
          onMouseLeave={() => setIsFast(false)}
          onTouchStart={() => setIsFast(true)}
          onTouchEnd={() => setIsFast(false)}
        >
          <motion.div
            className="flex gap-12 md:gap-16 px-6 whitespace-nowrap w-max"
            style={{ x }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-slate-700/50 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] mb-4 bg-darker">
                  <skill.icon className="text-4xl md:text-5xl drop-shadow-md" style={{ color: skill.color }} />
                </div>
                <p className="text-sm font-medium text-slate-300/80 group-hover:text-white transition-colors tracking-wide text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
