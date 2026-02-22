export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'mstsoft',
    company: 'MSTSoft',
    role: 'Senior .NET Developer',
    period: 'May 2024 – Present',
    current: true,
    location: 'India',
    description:
      'Leading backend development for enterprise-grade SaaS platforms, architecting scalable REST APIs and cloud-native solutions on Azure.',
    highlights: [
      'Architected and built BestRoomsOnly, a hotel booking platform serving 10,000+ monthly bookings',
      'Designed JWT + RBAC security layer reducing unauthorized access incidents by 99%',
      'Implemented Prompt BI — an AI-driven business intelligence tool integrating GPT APIs',
      'Developed AR Training Application backend serving APIs',
      'Implemented Kiosk Tax Validation System processing 1000+ daily transactions',
      'Created RPA Loan Processing automation with UiPath reducing processing time by 75%',      
      'Built Azure Functions for background processing reducing manual intervention by 80%',
      'Led Docker containerization strategy reducing deployment time by 60%',
    ],
    tech: ['ASP.NET Core 8', 'Entity Framework', 'Azure', 'Docker', 'MySQL', 'PostgreSQL', 'JWT', 'React', 'Next.js', 'FastAPI', 'UiPath', 'RPA', 'AI'],
  },
  {
    id: 'maxpro',
    company: 'Maxpro Technologies',
    role: 'Software Developer',
    period: 'Jul 2021 – May 2024',
    current: false,
    location: 'India',
    description:
      'Developed mission-critical backend systems across HRMS domains.',
    highlights: [
      'Built SWMS HRMS platform managing 5000+ employee records with real-time payroll processing',
      'Designed secure RESTful APIs following OWASP best practices',
    ],
    tech: ['ASP.NET Core', 'SQL Server', 'ADO.NET','Quartz.NET'],
  },
];
