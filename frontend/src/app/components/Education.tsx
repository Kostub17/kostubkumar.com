import { GraduationCap, Award, BookOpen, Star, Medal, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Data Science and Finance',
      institution: 'Northeastern University',
      period: '2025 - 2029',
      gpa: '3.85/4.0',
      description: 'Dean\'s List, Finnovate Third Place Winner',
      coursework: [
        'Advanced Programming with Data',
        'Discrete Structures',
        'Financial Management',
        'Business Statistics',
      ],
    },
    {
      degree: 'High School Education',
      institution: 'Garnet Valley High School',
      period: '2021 - 2025',
      gpa: '3.81/4.0',
      description: 'National Honors Society, Varisty Tennis, Programming Club President',
      coursework: [
        'AP Computer Science A',
        'AP Computer Science Principles',
        'AP Calculus BC',
        'Business Finance',
      ],
    },
  ];

  const other_education = [
    {
      institution: 'Goldman Sachs',
      program: 'Goldman Sachs Possibilities Series',
      period: 'Summer 2026',
      description: 'Networking and skill-building program for aspiring finance professionals',
      skills: [
        'Networking with industry leaders',
        'Finance Career Insights',
      ],
    },
    {
      institution: 'Trinity College',
      program: 'Trinity College, London',
      period: 'Nov 2019 - May 2025',
      description: 'Passed grades 1-6 in acoustic guitar with distinction.',
      skills: [
        'Acoustic Guitar',
        'Music Theory',
      ],
    },
    {
      institution: 'Harvard University',
      program: 'Harvard Secondary School Program',
      period: 'Summer 2024',
      description: 'Course: Robotics, Autonomous Vehicles, Drones, and Artificial Intelligence',
      skills: [
        'Robotics Fundamentals',
        'Image Recognition with AI',
        'Technical Problem Solving',
      ],
    },
    {
      institution: 'Codeyoung',
      program: 'Codeyoung Learning Platform',
      period: 'Sept 2023 - Oct 2024',
      description: 'Learning Advanced Programming Concepts and Data Structures in Python and Machine Learning',
      skills: [
        'Python',
        'Machine Learning',
        'SKLearn',
        'Projects',
      ],
    },
    {
      institution: 'Drexel University',
      program: 'Drexel University Business Camp',
      period: 'Summer 2024',
      description: 'Summer Program at Drexel University focused on Business and Entrepreneurship with < 20% acceptance rate, placed runner up in their pitch competition',
      skills: [
        'Business Strategy',
        'Case Studies',
        'Public Speaking',
        'Career Development',
      ],
    }
  ];

  const certifications = [
    {
      name: 'Akuna Options 101',
      issuer: 'Akuna Capital',
      year: 'Jan 2026',
    },
    {
      name: 'Generative AI Leader',
      issuer: 'Coursera',
      year: 'Feb 2026',
    },
    {
      name: 'Citi Markets Quantitative Analyst (MQA) Job Stimulation',
      issuer: 'Forage',
      year: 'Feb 2026',
    },
    {
      name: 'Introduction to Large Language Models',
      issuer: 'Google',
      year: 'Dec 2025',
    },
    {
      name: 'Acoustic Guitar Grade 6 with Distinction',
      issuer: 'Trinity College',
      year: 'Jan 2022',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
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
        </motion.p>

        {/*
        {/* Achievement Stats * /}
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
        */}


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
                            {edu.institution}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="font-medium text-emerald-400">
                              {edu.degree}
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
            Other Educational Experiences
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"></div>

            <div className="space-y-8">
              {other_education.map((edu, index) => (
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
                            {edu.institution}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="font-medium text-emerald-400">
                              {edu.program}
                            </span>
                            <span className="text-neutral-500">•</span>
                            <span className="text-neutral-500">{edu.period}</span>
                          </div>
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
                          {edu.skills.map((course, i) => (
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
