import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with cart management, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Real-time inventory management',
        'Secure payment processing',
        'Responsive design for all devices',
      ],
      stats: { stars: 234, forks: 56, watchers: 89 },
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative project management tool with real-time updates and team collaboration features.',
      technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Team analytics dashboard',
      ],
      stats: { stars: 189, forks: 42, watchers: 67 },
    },
    {
      title: 'Weather Dashboard',
      description:
        'An interactive weather application providing detailed forecasts and weather visualization.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        '7-day weather forecast',
        'Interactive weather charts',
        'Location-based search',
      ],
      stats: { stars: 156, forks: 31, watchers: 48 },
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive analytics dashboard for managing multiple social media accounts.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com',
      highlights: [
        'Multi-platform integration',
        'Engagement analytics',
        'Scheduled posting',
      ],
      stats: { stars: 312, forks: 78, watchers: 124 },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A showcase of my recent work and side projects
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >

              <div className="relative h-48 bg-neutral-800 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredProject === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* GitHub Stats Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-3">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-neutral-700">
                    <Star className="text-yellow-400" size={14} />
                    <span className="text-white text-xs">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-neutral-700">
                    <GitFork className="text-emerald-400" size={14} />
                    <span className="text-white text-xs">{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-neutral-700">
                    <Eye className="text-cyan-400" size={14} />
                    <span className="text-white text-xs">{project.stats.watchers}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold text-white mb-2 text-sm flex items-center gap-2">
                    <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
                    Key Features:
                  </h3>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="text-neutral-400 text-sm flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <span className="text-emerald-400 mr-2">▸</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-neutral-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-700 rounded-lg text-white hover:bg-emerald-600 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
