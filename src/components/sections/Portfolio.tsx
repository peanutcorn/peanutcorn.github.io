import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const projects = [
  {
    title: 'peanutcorn.github.io',
    description: 'My portfolio website.',
    techs: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/peanutcorn/peanutcorn.github.io',
    link: 'https://peanutcorn.github.io',
  },
  {
    title: 'Project Title Two',
    description: 'making...',
    techs: ['..', '..', '..'],
    github: '#',
    link: '#',
  },
  {
    title: 'Project Title Three',
    description: 'making...',
    techs: ['..', '..', '..'],
    github: '#',
    link: '#',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen w-full py-20 px-6 bg-dark">
      <div className="container mx-auto max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-slate-200">
            <span className="text-primary font-mono text-xl md:text-2xl pt-1">03.</span> Portfolio
          </h2>
          <div className="h-px bg-slate-700/50 flex-grow ml-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 flex flex-col justify-between border border-transparent hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <a href={project.github} className="hover:text-primary transition-colors" aria-label="GitHub Link">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.link} className="hover:text-primary transition-colors" aria-label="External Link">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 mt-4 text-xs font-mono text-slate-500">
                {project.techs.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
