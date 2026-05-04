import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black min-h-screen">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h1>

      <motion.p
        className="max-w-3xl text-neutral-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        View my resume below.
      </motion.p>

      <motion.div
        className="rounded-3xl border border-neutral-800 overflow-hidden bg-neutral-950"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <iframe
          src="\resume.pdf"
          title="Resume"
          className="w-full min-h-[80vh]"
        />
      </motion.div>

      <div className="mt-6 text-sm text-neutral-400">
        <p>
          If the resume does not appear, download it here:{' '}
          <a href="\resume.pdf" className="text-emerald-400 underline">
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
}
