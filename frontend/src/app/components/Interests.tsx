import { Camera, Music, Plane, Code2, Book, Gamepad2, Heart, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Interests() {
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);
  const interests = [
    {
      title: 'Photography',
      icon: Camera,
      color: 'blue',
      description:
        'Capturing moments and exploring creative composition through landscape and street photography.',
      activities: [
        'Landscape photography',
        'Street photography',
        'Photo editing',
        'Camera gear exploration',
      ],
    },
    {
      title: 'Music',
      icon: Music,
      color: 'purple',
      description:
        'Playing guitar and exploring different genres, from classical to contemporary.',
      activities: [
        'Playing guitar',
        'Music theory',
        'Attending concerts',
        'Discovering new artists',
      ],
    },
    {
      title: 'Travel',
      icon: Plane,
      color: 'green',
      description:
        'Exploring new cultures, cuisines, and experiences around the world.',
      activities: [
        'Cultural exploration',
        'Adventure travel',
        'Local cuisine',
        'Meeting new people',
      ],
    },
    {
      title: 'Open Source',
      icon: Code2,
      color: 'orange',
      description:
        'Contributing to open-source projects and collaborating with the developer community.',
      activities: [
        'Contributing to projects',
        'Code reviews',
        'Documentation',
        'Community support',
      ],
    },
    {
      title: 'Reading',
      icon: Book,
      color: 'red',
      description:
        'Reading books on technology, science fiction, and personal development.',
      activities: [
        'Tech books',
        'Sci-fi novels',
        'Biographies',
        'Self-improvement',
      ],
    },
    {
      title: 'Gaming',
      icon: Gamepad2,
      color: 'indigo',
      description:
        'Enjoying strategy games and exploring game design principles.',
      activities: [
        'Strategy games',
        'Puzzle games',
        'Game design analysis',
        'Gaming communities',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-cyan-950 text-cyan-400',
      purple: 'bg-cyan-950 text-cyan-400',
      green: 'bg-emerald-950 text-emerald-400',
      orange: 'bg-emerald-950 text-emerald-400',
      red: 'bg-cyan-950 text-cyan-400',
      indigo: 'bg-emerald-950 text-emerald-400',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interests
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I love to do beyond coding
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const colorClasses = getColorClasses(interest.color);

            return (
              <motion.div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                onHoverStart={() => setHoveredInterest(index)}
                onHoverEnd={() => setHoveredInterest(null)}
              >
                <div>
                  <motion.div
                    className={`inline-flex p-4 rounded-xl mb-4 ${colorClasses} border border-neutral-700`}
                    animate={{ rotate: hoveredInterest === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {interest.title}
                  </h2>
                  <p className="text-neutral-400 mb-4 leading-relaxed text-sm">
                    {interest.description}
                  </p>
                  <div>
                    <h3 className="font-medium text-white mb-3 text-sm flex items-center gap-2">
                      <Zap size={14} className="text-cyan-400" />
                      Activities:
                    </h3>
                    <ul className="space-y-2">
                      {interest.activities.map((activity, i) => (
                        <motion.li
                          key={i}
                          className="text-neutral-400 text-sm flex items-start bg-neutral-900/50 p-2 rounded-lg border border-neutral-800/50"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        >
                          <span className="text-emerald-400 mr-2">▸</span>
                          <span>{activity}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-lg border border-emerald-800">
                <Heart className="text-emerald-400" size={24} />
              </div>
              Why These Matter
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              My diverse interests help me maintain a balanced life and bring fresh
              perspectives to my work. Photography trains my eye for design and
              composition, music enhances my creativity, and travel broadens my
              worldview. These experiences make me a more well-rounded developer and
              creative problem solver.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I believe that the best developers are those who find inspiration beyond
              their screens, bringing varied experiences and perspectives to their craft.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
