import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Phone, MapPin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center bg-black relative overflow-hidden">

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-neutral-400 leading-relaxed mb-4">
              I'm a Second-Year Data Science and Business student at Northeastern University with a passion for working on 
              things that sit at the intersection of finance and data. I am interested in working on projects that are in the
              fintech space. I have experience working on many projects in the past such as a Pairs Trading Algorithm, 
              a Semantic Legal Differenciator, a Heart Disease Detector, etc. Through these projects, I've built a strong 
              foundation in tools such as React, Python, NestJS, machine learning, etc. 
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Outside of tech, I'm someone who's always staying active. You'll find me on the tennis court, playing 
              basketball, or in the gym. I picked up guitar a while back and still play whenever I get the chance. I'm 
              also deeply connected to my South Asian roots through UTSAV, Northeastern's South Asian cultural club, 
              which has been one of the most meaningful parts of my college experience. Whether it's through code, music, 
              or community, I'm always looking for ways to create something worth being proud of.
              
            </p>
          </motion.div>
        </div>

        {/* Contact Me Section */}
        <div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Contact Me
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {/* Email */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-400 transition-all group cursor-pointer">
              <a
                href="mailto:kostubk@gmail.com"
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-900/50 transition-all">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-neutral-400 text-sm">kostubk@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Phone */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-cyan-400 transition-all group cursor-pointer">
              <a
                href="tel:+1234567890"
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-cyan-900/30 rounded-lg group-hover:bg-cyan-900/50 transition-all">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-neutral-400 text-sm">+1 (443) 666-1624</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-400 transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-900/50 transition-all">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-neutral-400 text-sm">Boston, MA + Garnet Valley, PA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-neutral-400 mb-4">Follow me on social media:</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/Kostub17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 transition-all hover:bg-neutral-800 inline-flex items-center gap-2"
                aria-label="GitHub"
              >
                <Github size={24} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/kostub-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 transition-all hover:bg-neutral-800 inline-flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/kostub_kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 transition-all hover:bg-neutral-800 inline-flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram size={24} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

