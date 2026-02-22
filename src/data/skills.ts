export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & API Development',
    icon: '⚙️',
    skills: [
      'ASP.NET Core',
      'C#',
      '.NET 6/8',
      'RESTful APIs',
      'Web API',
      'MVC',
      'Middleware Design',
      'CQRS',
      'Repository Pattern',
    ],
  },
  {
    id: 'security',
    title: 'Security & Auth',
    icon: '🔐',
    skills: [
      'JWT Authentication',
      'RBAC',
      'OAuth 2.0',
      'Identity Framework',
      'API Key Auth',
      'SSL/TLS',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'Entity Framework Core',
      'Dapper',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'Microsoft Azure',
      'Azure Functions',
      'Azure Blob Storage',
      'Azure Service Bus',
      'Docker',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
  {
    id: 'background',
    title: 'Background Processing',
    icon: '⏱️',
    skills: [
      'Quartz.NET',
      'Azure Functions',
      'Hangfire',
      'Message Queues',
      'Event-Driven Architecture',
    ],
  },
  {
    id: 'automation',
    title: 'RPA & Automation',
    icon: '🤖',
    skills: [
      'UiPath Studio',
      'Workflow Automation',
      'Document Processing',
      'Bot Development',
      'OCR Integration',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Collaboration',
    icon: '🎨',
    skills: [
      'React',
      'Next.js',
      'Angular (basics)',
      'REST API Integration',
      'Swagger/OpenAPI',
      'Postman',
    ],
  },
];
