import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import mailapi from '../../../apikey';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    const serviceId = mailapi.serviceId;
    const templateId = mailapi.templateId;
    const publicKey = mailapi.publicKey;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl border-t border-primary/20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-16"
        >
          <div className="h-px bg-slate-700/50 flex-grow mr-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-slate-200 whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl pt-1">04.</span> Contact
          </h2>
          <div className="h-px bg-slate-700/50 flex-grow ml-8"></div>
        </motion.div>

        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto mb-10 text-lg"
          >
            I'm currently looking for a new position!<br />
            Also, my inbox is always open. If you have any questions, or just want to say hello, I'll do my best to get back to you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact Info container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-card p-6 rounded-lg border border-slate-800 shadow-xl">
              <h4 className="text-primary font-mono text-sm mb-4">CONNECT</h4>
              <ul className="space-y-6 text-slate-300">
                <li>
                  <a href="https://github.com/peanutcorn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors group">
                    <div className="p-3 bg-darker rounded-full group-hover:bg-primary/10 transition-colors">
                      <FaGithub size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-sm text-slate-500">github.com/peanutcorn</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-darker rounded-full group-hover:bg-primary/10 transition-colors">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-slate-500">bamtory922@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-darker rounded-full group-hover:bg-primary/10 transition-colors">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-sm text-slate-500">Busan, Republic of Korea</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-card p-8 rounded-lg border border-slate-800 shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-darker border border-slate-700 text-white rounded p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-darker border border-slate-700 text-white rounded p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-darker border border-slate-700 text-white rounded p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              <input
                type="submit"
                value={isSubmitting ? 'Sending...' : 'Send Message'}
                disabled={isSubmitting}
                className="self-start px-8 py-3 rounded border border-primary text-primary font-medium hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 flex items-center justify-center min-w-[160px] cursor-pointer"
              />

              {submitStatus === 'success' && (
                <p className="text-primary text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
