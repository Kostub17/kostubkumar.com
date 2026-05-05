import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return [
    {
      title: 'Pairs Trading Algorithm',
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
  }
}