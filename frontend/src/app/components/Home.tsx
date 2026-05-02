import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-6">
                <Sparkles className="text-neutral-400" size={16} />
                <span className="text-neutral-400 text-sm">Available for new projects</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Your Name</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-neutral-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A passionate developer crafting beautiful and functional web experiences.
            </motion.p>

            <motion.p
              className="text-lg text-neutral-500 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to my portfolio! I specialize in building modern web applications
              with cutting-edge technologies. Explore my work, skills, and experiences
              to learn more about what I do.
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@example.com"
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
                    <div className="w-32 h-32 bg-neutral-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-6xl font-bold text-neutral-400">YN</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Replace with your photo</p>
                    <p className="text-neutral-500 text-xs mt-1">Recommended: 500x500px</p>
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
