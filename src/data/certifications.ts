export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    date: 'Progressing',
    icon: '⚛️',
    color: 'from-blue-500/20 to-cyan-500/20',
    url: '',
  },
  {
    id: '2',
    title: 'Meta React Basics',
    issuer: 'Meta / Coursera',
    date: '2025',
    icon: '⚛️',
    color: 'from-blue-500/20 to-cyan-500/20',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/N22RQR7X6D50',
  },
  {
    id: '3',
    title: 'ASP.NET MVC Certification',
    issuer: 'Future I Technologies',
    date: '2021',
    icon: '🔷',
    color: 'from-indigo-500/20 to-blue-500/20',
    url: '',
  },
];
