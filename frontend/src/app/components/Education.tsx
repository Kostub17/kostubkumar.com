import { GraduationCap, Award, BookOpen, Star, Medal, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2020',
      gpa: '3.9/4.0',
      description: 'Specialized in Software Engineering and Artificial Intelligence',
      coursework: [
        'Advanced Algorithms',
        'Machine Learning',
        'Software Architecture',
        'Distributed Systems',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2014 - 2018',
      gpa: '3.7/4.0',
      description: 'Dean\'s List, Cum Laude honors',
      coursework: [
        'Data Structures',
        'Web Development',
        'Database Systems',
        'Operating Systems',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2022',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2021',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic background and professional certifications
        </motion.p>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
            <GraduationCap className="text-neutral-400 mx-auto mb-2" size={24} />
            <div className="text-white font-semibold">2 Degrees</div>
            <div className="text-neutral-400 text-xs">Completed</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
            <Award className="text-neutral-400 mx-auto mb-2" size={24} />
            <div className="text-white font-semibold">3 Certifications</div>
            <div className="text-neutral-400 text-xs">Professional</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center">
            <Star className="text-neutral-400 mx-auto mb-2" size={24} />
            <div className="text-white font-semibold">3.8 GPA</div>
            <div className="text-neutral-400 text-xs">Average</div>
          </div>
        </motion.div>

        <div className="mb-12">
          <motion.h2
            className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-3 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
              <GraduationCap className="text-emerald-400" size={24} />
            </div>
            Academic Degrees
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-6 md:pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 border-4 border-black"></div>

                  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                            <Medal className="text-emerald-400" size={20} />
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="font-medium text-emerald-400">
                              {edu.institution}
                            </span>
                            <span className="text-neutral-500">•</span>
                            <span className="text-neutral-500">{edu.period}</span>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-emerald-950 border border-emerald-800 rounded-lg">
                          <div className="text-xs text-emerald-400 mb-1">GPA</div>
                          <div className="text-lg font-bold text-white">{edu.gpa}</div>
                        </div>
                      </div>

                      <p className="text-neutral-400 mb-4 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <BookOpen size={18} className="text-cyan-400" />
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <motion.span
                              key={i}
                              className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full text-sm hover:border-emerald-500 transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <motion.h2
            className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="p-3 bg-gradient-to-br from-cyan-950 to-cyan-900 rounded-xl border border-cyan-800">
              <Award className="text-cyan-400" size={24} />
            </div>
            Certifications
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <TrendingUp className="text-cyan-400" size={24} />
                    <span className="px-2 py-1 bg-cyan-950 border border-cyan-800 rounded text-cyan-400 text-xs">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-neutral-400 text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
