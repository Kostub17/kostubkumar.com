import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Kostub Kumar</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl font-bold text-neutral-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Northeastern 2029
            </motion.p>

            <motion.p
              className="text-lg text-neutral-500 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hey, I'm Kostub. I'm a second-year Data Science and Finance major at 
              Northeastern University. I enjoy basketball, tennis, boxing, playing
              the guitar, and hitting the gym.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-all"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-neutral-700 text-neutral-300 rounded-lg hover:border-neutral-600 hover:text-white transition-all"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://github.com/Kostub17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kostub-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kostubk@gmail.com"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="lg:ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-2 overflow-hidden">
                <div className="aspect-square w-full max-w-md bg-neutral-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder Content */}
                  <div className="relative z-10 text-center p-8">
                    <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-2 overflow-hidden">
                      <img
                        src="headshot.jpeg"
                        alt="Kostub Kumar"
                        className="aspect-square w-full max-w-md rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
