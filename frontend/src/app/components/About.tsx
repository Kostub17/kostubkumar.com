import { User, Heart, Target, Award, Rocket, Users, Code2, Coffee, Trophy, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {

  const achievements = [
    { icon: Trophy, label: 'Best Developer Award 2024', color: 'emerald' },
    { icon: Star, label: 'Top Contributor', color: 'cyan' },
    { icon: Award, label: 'Certified Professional', color: 'emerald' },
    { icon: Rocket, label: '10+ Successful Launches', color: 'cyan' },
  ];

  const values = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and elegant solutions' },
    { icon: Users, title: 'Collaboration', description: 'Working effectively with diverse teams' },
    { icon: Rocket, title: 'Innovation', description: 'Embracing new technologies and approaches' },
    { icon: Coffee, title: 'Dedication', description: 'Committed to continuous improvement' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Achievement Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-neutral-700 transition-all"
              >
                <Icon className="text-neutral-400 mx-auto mb-2" size={24} />
                <p className="text-xs text-neutral-400">{achievement.label}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
              <User className="text-emerald-400" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">
                Who I Am
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                I'm a dedicated software developer with a passion for creating elegant
                solutions to complex problems. With several years of experience in web
                development, I've had the opportunity to work on diverse projects ranging
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with
                the latest technologies and best practices. When I'm not coding, you'll
                find me exploring new frameworks, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all"
                >
                  <Icon className="text-emerald-400 mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-neutral-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
                <Heart className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  What I Love
                </h3>
                <ul className="space-y-2 text-neutral-400">
                  {['Building intuitive user interfaces', 'Solving challenging technical problems', 'Learning new technologies', 'Collaborating with talented teams', 'Creating meaningful user experiences'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-950 to-cyan-900 rounded-xl border border-cyan-800">
                <Target className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  My Goals
                </h3>
                <ul className="space-y-2 text-neutral-400">
                  {['Deliver high-quality software solutions', 'Continuously improve my skills', 'Contribute to impactful projects', 'Mentor aspiring developers', 'Stay at the forefront of technology'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
