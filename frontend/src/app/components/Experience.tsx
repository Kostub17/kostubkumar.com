import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  const work_experiences = [
    {
      title: 'Sales Associate',
      company: 'TJX Inc.',
      period: 'Jun 2024 - Dec 2024',
      description: 'Provided exceptional customer service in a fast-paced retail environment, assisting customers with product selection and maintaining store presentation.',
      achievements: [
        'Reduced customer wait time by 40% through improved service processes',
      ],
    },
    {
      title: 'Guitar Teacher',
      company: 'Glen Mills Music and Arts Center',
      period: 'Feb 2024 - Jul 2024',
      description: 'Taught guitar to young students of 7-12 years old and all skill levels, developing personalized lesson plans to help them achieve their musical goals using Trinity College Curriculum.',
      achievements: [
        'Helped 10+ students improve their guitar skills and pass Trinity College exams',
        'Created engaging lesson plans that catered to different learning styles',
      ],
    },
  ];

  const other_experiences = [
    {
      title: 'Quant Analyst',
      company: 'Disrupt - The Fintech Initiative at Northeastern University',
      period: 'Jan 2026 - Present',
      description: 'Conduct quantitative research and analysis to develop trading strategies using Bloomberg Terminal data, Python, and machine learning techniques.',
      achievements: [
        'Developed a pairs trading algorithm that compared XOM and gold stocks',
        'Developed a Black-Scholes option pricing model to price coffee commodities.'
      ],
    },
    {
      title: 'Research Associate',
      company: 'Blockchain Club at Northeastern University',
      period: 'Jan 2025 - Present',
      description: 'Researched and analyzed Solona blockchain and their Validator Architecture.',
      achievements: [
        'Researched and analyzed Solona blockchain and their Validator Architecture.',
        'Working on a research paper on the security of Solona’s Proof of History consensus mechanism.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'AINU Dev Team at Northeastern University',
      period: 'Sept 2025 - Present',
      description: 'Contributed to multiple projects in the NU AI Club.',
      achievements: [
        'Built a Semantic Legal Differenciator that uses NLP to differentiate between similar legal contracts.',
        'Gained experience working on full stack projects using OpenRouter APIs.'
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h1>

        <motion.h2
            className="text-4xl font-semibold text-white mt-10 mb-7 pl-4 md:pl-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"></div>

          <div className="space-y-12">
            {work_experiences.map((exp, index) => (
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


        <motion.h2
            className="text-4xl font-semibold text-white mt-20 mb-7 pl-4 md:pl-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
          Other Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"></div>

          <div className="space-y-12">
            {other_experiences.map((exp, index) => (
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
