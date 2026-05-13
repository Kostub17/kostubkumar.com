import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
  highlights: string[];
  stats: {
    stars: number;
    forks: number;
    watchers: number;
  };
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = (import.meta as any).env.VITE_API_URL;
    if (!apiUrl) {
      setError('API URL not configured');
      setLoading(false);
      return;
    }

    fetch(`${apiUrl}/projects`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
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
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="text-neutral-400">Loading projects...</div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <div className="text-red-400 mb-4">Error loading projects: {error}</div>
              <div className="text-neutral-400 text-sm">
                Make sure your backend is running and VITE_API_URL is configured in your .env file.
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-neutral-400">No projects found.</div>
            </div>
          ) : (
            projects.map((project, index) => (
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
              </div>

              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold text-white mb-2 text-sm flex items-center gap-2">
                    <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-300 rounded-full"></div>
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
                        <span className="text-white mr-2">▸</span>
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
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-gray-600 transition-all"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-all"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
