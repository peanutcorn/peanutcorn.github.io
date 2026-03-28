import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center py-20 px-6 bg-dark">
      <div className="container mx-auto max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-slate-200">
            <span className="text-primary font-mono text-xl md:text-2xl pt-1">01.</span> About Me
          </h2>
          <div className="h-px bg-slate-700/50 flex-grow ml-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 space-y-4 text-lg leading-relaxed mix-blend-lighten"
          >
            <p>
              1번째 줄 자기소개
            </p>
            <p>
              2번째 줄
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
            className="relative group mx-auto md:ml-auto md:mr-0 w-full max-w-[300px]"
          >
            <div className="absolute inset-0 bg-primary/20 rounded transform translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform border border-primary"></div>
            <div className="relative h-[300px] w-full rounded bg-card overflow-hidden z-10 p-1 border border-slate-700 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-300">
              {/* Image placeholder */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm shadow-inner overflow-hidden">
                <div className="text-center p-4">
                  <p className="text-primary/70 mb-2">[Image Placeholder]</p>
                  <p className="text-xs">~이미지 설명~</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
