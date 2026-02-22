export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'backend' | 'cloud' | 'automation' | 'ai';
  tags: string[];
  problem: string;
  architecture: string;
  contribution: string[];
  tech: string[];
  impact: { label: string; value: string }[];
  color: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'best-rooms-only',
    title: 'BestRoomsOnly',
    tagline: 'Full-stack hotel booking platform with real-time availability',
    category: 'backend',
    tags: ['Booking', 'FastAPI', 'AIOSELL', 'PostgreSQL', 'FastAPI', 'PMS'],
    problem:
      'Hotels needed a centralized, scalable booking engine to manage room availability, pricing, and reservations across multiple properties in real-time, while supporting multiple payment gateways and OTA integrations.',
    architecture:
      'Microservices-inspired monolith with clean architecture — Domain, Application, Infrastructure, and Presentation layers. Real-time inventory managed via PostgreSQL for availability lookups. PMS (Aiosell) is the source of truth for inventory and bookings which is synchronized with our system through webhooks.',
    contribution: [
      'Designed entire backend REST API from scratch — 100+ endpoints',
      'Implemented JWT + RBAC security with role-specific access control',
      'Built real-time room availability engine with PMS(AIOSELL) integration',
      'Integrated payment gateway (Razorpay) with webhook handling',
      'Deployed on Hostinger with CI/CD via GitHub Actions'
    ],
    tech: ['Google’s Antigravity','FastAPI', 'PostgreSQL', 'JWT', 'RBAC', 'AIOSELL', 'PMS', 'Next Js'],
    impact: [
      { label: 'Monthly Bookings', value: '10,000+' },
      { label: 'API Endpoints', value: '100+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '<200ms' },
    ],
    color: 'from-blue-500/20 to-indigo-500/20',
    icon: '🏨',
  },
  {
    id: '2',
    slug: 'prompt-bi',
    title: 'Prompt BI',
    tagline: 'AI-driven business intelligence with natural language queries',
    category: 'ai',
    tags: ['AI', 'GPT', 'Analytics', 'ASP.NET Core'],
    problem:
      'Business teams struggled with complex SQL queries and BI tools. They needed a way to query business data using plain English, get instant visual insights, and share dashboards without technical expertise.',
    architecture:
      'REST API backend connected to GPT-4 for NLP query translation. Queries are parsed, validated, and executed against SQL Server. Results are streamed back as structured JSON for frontend visualization.',
    contribution: [
      'Architected the AI query pipeline — NLP → SQL → Results',
      'Implemented GPT-4 API integration with prompt engineering',
      'Built query validation and sanitization layer for SQL injection prevention',
      'Designed streaming response API with Server-Sent Events',
    ],
    tech: ['ASP.NET Core 8', 'GPT-4 API', 'SQL Server'],
    impact: [
      { label: 'Query Time', value: '-70%' },
      { label: 'Users Onboarded', value: '200+' },
      { label: 'Report Generation', value: '5x faster' },
      { label: 'Manual SQL Queries', value: '-85%' },
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    icon: '🧠',
  },
  {
    id: '3',
    slug: 'ar-training-application',
    title: 'AR Training Application',
    tagline: 'Augmented reality training platform for enterprise workforce',
    category: 'backend',
    tags: ['AR', 'Streaming', 'ASP.NET Core', 'Unity'],
    problem:
      'Enterprise clients needed an immersive training platform where employees could interact with AR simulations. The backend had to serve AR assets details, manage session states, and track training completion in real-time.',
    architecture:
      'Content delivery architecture with Azure Blob Storage for AR assets. WebSocket-based session management for real-time AR interaction tracking. REST APIs for Unity client integration.',
    contribution: [
      'Built content management API for AR scenes',
      'Implemented WebSocket server for real-time session tracking',
      'Created RBAC security with role-specific access control',
      'Designed Azure Blob Storage CDN integration for asset delivery',
      'Created training progress tracking with completion badges',
      'Built admin dashboard API for training analytics',
    ],
    tech: ['.NET MAUI','ASP.NET Core', 'Azure Blob Storage', 'Unity Integration', 'PostgreSQL'],
    impact: [
      { label: 'Training Modules', value: '50+' },
      { label: 'Concurrent Sessions', value: '100+' },
      { label: 'Asset Load Time', value: '-60%' },
      { label: 'Completion Rate', value: '+40%' },
    ],
    color: 'from-cyan-500/20 to-teal-500/20',
    icon: '🥽',
  },
  {
    id: '4',
    slug: 'swms-hrms',
    title: 'SWMS HRMS',
    tagline: 'End-to-end HR management system with payroll automation',
    category: 'backend',
    tags: ['HRMS', 'Payroll', 'ASP.NET Core', 'SQL Server'],
    problem:
      'A Waste Management company needed a centralized HR platform to manage employee onboarding, attendance, leave management, and automated payroll processing across multiple departments.',
    architecture:
      'Layered monolithic architecture with domain-driven design. SQL Server for transactional data. Quartz Service for monthly payroll processing. Role-based access for HR, managers',
    contribution: [
      'Designed and implemented complete HRMS from scratch',
      'Built automated payroll engine with tax calculation',
      'Implemented attendance tracking with biometric integration API',
      'Created leave management system with approval workflows',
      'Built reporting module with PDF export functionality',
    ],
    tech: ['ASP.NET Core', 'ADO.NET', 'SQL Server', 'Quartz Service', 'PDF Generation', 'Angular'],
    impact: [
      { label: 'Employees Managed', value: '5000+' },
      { label: 'Payroll Processing Time', value: '-75%' },
      { label: 'HR Operations', value: 'Digitized 98%' },
      { label: 'Report Generation', value: 'Automated' },
    ],
    color: 'from-emerald-500/20 to-green-500/20',
    icon: '👥',
  },
  {
    id: '5',
    slug: 'kiosk-tax-validation',
    title: 'Kiosk Tax Validation System',
    tagline: 'High-throughput tax validation engine for self-service kiosks',
    category: 'cloud',
    tags: ['Kiosk', 'Tax', 'Azure', 'High Throughput'],
    problem:
      'Government service kiosk needed a real-time tax validation system that could handle 1000+ daily transactions, verify tax payments, and issue digital stamps and track transactions in real-time without human intervention.',
    architecture:
      'Desktop Application with Stateless REST API. 3rd party API for data lookup stamp PDF delivery. Azure Monitor for transaction audit logging.',
    contribution: [
      'Partially Build the WPS Desktop application',
      'Implemented the IDS Scanner system to scan the QR Code - IoT',
      'Implemented the tracking system to track the stamps',
      'Built high-throughput REST API for tax validation',
      'Built transaction audit logging with Azure Monitor',
      'Implemented idempotent transaction processing',
    ],
    tech: ['WPS Desktop Application', 'IDS Scanner', 'API Integration', 'Azure Monitor'],
    impact: [
      { label: 'Daily Transactions', value: '1,000+' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Manual Processing', value: 'Eliminated' },
      { label: 'System Uptime', value: '99.95%' },
    ],
    color: 'from-rose-500/20 to-pink-500/20',
    icon: '🏛️',
  },
  {
    id: '6',
    slug: 'rpa-loan-processing',
    title: 'RPA Loan Processing System - (POC)',
    tagline: 'End-to-end robotic process automation for loan applications',
    category: 'automation',
    tags: ['UiPath', 'RPA', 'Automation', 'OCR'],
    problem:
      'A financial institution was manually processing 200+ loan applications daily — reviewing documents, extracting data, validating eligibility, and updating their core banking system. This was error-prone and time-consuming.',
    architecture:
      'UiPath attended/unattended bot architecture. OCR for document data extraction. REST API integration with core banking system for automated data entry and status updates.',
    contribution: [
      'Designed end-to-end RPA workflow with UiPath Studio',
      'Implemented OCR-based document extraction for loan forms',
      'Built eligibility validation logic within automation workflow',
      'Integrated with core banking APIs for automated updates',
      'Created exception handling and escalation workflows',
    ],
    tech: ['UiPath Studio', 'UiPath Orchestrator', 'OCR', 'REST APIs'],
    impact: [
      { label: 'Processing Time', value: '-75%' },
      { label: 'Manual Errors', value: '-95%' },
      { label: 'Daily Throughput', value: '3x increase' },
      { label: 'ROI', value: '6 months' },
    ],
    color: 'from-orange-500/20 to-amber-500/20',
    icon: '🤖',
  },
];
