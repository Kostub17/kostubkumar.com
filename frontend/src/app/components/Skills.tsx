import { Code, Wrench, Cloud, Database, Zap, Trophy, Target, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'emerald',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'cyan',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'emerald',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Jest', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'VS Code', level: 95 },
      ],
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'cyan',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'Netlify', level: 85 },
        { name: 'Linux', level: 75 },
        { name: 'Nginx', level: 70 },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My technical skills and proficiency levels
        </motion.p>

        {/* Skill Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: Code, label: 'Languages', value: '12+' },
            { icon: Zap, label: 'Frameworks', value: '20+' },
            { icon: Trophy, label: 'Certifications', value: '8' },
            { icon: Target, label: 'Proficiency', value: '92%' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center hover:border-neutral-700 transition-all"
              >
                <Icon className="text-neutral-400 mx-auto mb-2" size={24} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                  activeCategory === index
                    ? 'bg-emerald-700 border-emerald-700 text-white'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <Icon size={18} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills */}
        <motion.div
          key={activeCategory}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-white flex items-center gap-2">
                    <Activity size={16} className="text-emerald-400" />
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="relative w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
            Soft Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Communication',
              'Time Management',
              'Adaptability',
              'Critical Thinking',
              'Leadership',
              'Attention to Detail',
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-center text-neutral-300 hover:border-neutral-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
