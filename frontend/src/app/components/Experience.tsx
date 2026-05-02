import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise-scale web applications using React, TypeScript, and Node.js. Mentoring junior developers and driving technical decisions.',
      achievements: [
        'Architected and implemented a microservices-based platform serving 100K+ users',
        'Reduced application load time by 40% through performance optimization',
        'Led a team of 5 developers in an agile environment',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Solutions LLC',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed and maintained full-stack web applications for various clients across different industries.',
      achievements: [
        'Built responsive web applications using React and modern CSS frameworks',
        'Integrated RESTful APIs and third-party services',
        'Collaborated with designers to implement pixel-perfect UI designs',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: 'Jan 2020 - May 2021',
      description: 'Contributed to multiple projects in a fast-paced startup environment, gaining experience in full-stack development.',
      achievements: [
        'Developed new features and fixed bugs across the stack',
        'Participated in code reviews and pair programming sessions',
        'Learned best practices for scalable application architecture',
      ],
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
          Experience
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My professional journey in software development
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 border-4 border-black"></div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-emerald-950 rounded-lg border border-emerald-800">
                            <TrendingUp className="text-emerald-400" size={18} />
                          </div>
                          <h2 className="text-2xl font-semibold text-white">
                            {exp.title}
                          </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 ml-12 text-sm">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <Briefcase size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-500">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-400 mb-6 leading-relaxed bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                      {exp.description}
                    </p>

                    <div>
                      <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
                        Key Achievements:
                      </h3>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 bg-neutral-900/30 p-3 rounded-lg border border-neutral-800/50"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                          >
                            <span className="text-emerald-400 mt-1">▸</span>
                            <span className="text-neutral-400">{achievement}</span>
                          </motion.div>
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
    </div>
  );
}
