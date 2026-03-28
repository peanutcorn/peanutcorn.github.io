import { motion } from 'framer-motion';
import { MoveDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative pt-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono mb-4 text-lg"
        >
          Hello, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Seongmo Cho.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight"
        >
          I build new things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          3줄 정도 자기소개
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#about" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors font-medium">
            Learn More <MoveDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
