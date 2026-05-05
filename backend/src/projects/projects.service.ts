import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return [
      {
        id: 1,
        title: 'Semantic Contract Diff',
        description: 'LLM-powered legal contract analysis using vector embeddings.',
        tech: ['Python', 'OpenRouter', 'BAAI embeddings', 'cosine similarity'],
        github: 'https://github.com/...',
      },
      {
        id: 2,
        title: 'PropShape',
        description: 'Fractional real estate investment platform — 3rd place at Finnovate.',
        tech: ['React', 'NestJS'],
        github: '',
      },
      // add more projects here
    ];
  }
}