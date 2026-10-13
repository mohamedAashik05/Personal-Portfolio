import type {
  PersonalInfo,
  Specialization,
  Project,
  SkillCategoryGroup,
  Education,
  Certification,
  Publication
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Mohamed Aashik I',
  title: 'Software Engineer | Full Stack Developer',
  location: 'Chennai, Tamil Nadu, India',
  educationSummary: 'B.Tech in Computer Science and Business Systems (2022–2026)',
  cgpa: '8.08 / 10',
  positioning: 'Software developer building responsive interfaces, reliable APIs, database-driven applications, and AI-integrated solutions.',
  availability: 'Actively seeking entry-level opportunities across React.js, ASP.NET Core / .NET, and MERN stack development.',
  email: 'aashik.i2005@gmail.com',
  phone: '+91 9500570711',
  githubUsername: 'mohamedAashik05',
  githubUrl: 'https://github.com/mohamedAashik05',
  linkedinUsername: 'mohamed-aashik-12b418257',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-aashik-12b418257/',
  leetcodeUsername: 'mohamed aashik',
  leetcodeUrl: 'https://leetcode.com/u/mohamedAashik05/',
  resumeFileName: 'Mohamed_Aashik_Resume.pdf',
  resumeFilePath: '/Mohamed_Aashik_Resume.pdf',
};

export const heroSpecialties = [
  {
    title: 'React.js & Frontend Engineering',
    description: 'Component architecture, state management, modern CSS/Tailwind, and fast, accessible user interfaces.',
    tag: 'Frontend'
  },
  {
    title: '.NET & API Development',
    description: 'ASP.NET Core Web API, Entity Framework Core, LINQ, dependency injection, and normalized SQL Server schemas.',
    tag: 'Backend'
  },
  {
    title: 'MERN Stack Applications',
    description: 'Node.js, Express, MongoDB, JWT role-based security, full-stack data flow, and modern web integrations.',
    tag: 'Full Stack'
  }
];

export const specializations: Specialization[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Responsive Interfaces & Seamless User Experiences',
    description: 'Crafting performant, accessible web applications using React.js and modern JavaScript standards. Focused on predictable state, reusable components, and rigorous UI polish.',
    techFocus: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 & CSS3', 'REST API Integration'],
    coreCapabilities: [
      'Modular component hierarchies with clean separation of concerns',
      'Asynchronous data fetching with optimistic UI & resilient error handling',
      'Pixel-perfect responsive design across mobile, tablet, and ultra-wide screens',
      'State synchronization and controlled input validation patterns'
    ],
    architecturalPillars: [
      {
        title: 'Component Reusability',
        detail: 'Atomic, encapsulated UI components designed for clarity and easy maintenance.'
      },
      {
        title: 'Client Performance',
        detail: 'Minimal re-renders, lightweight bundle footprints, and zero layout shift.'
      },
      {
        title: 'Accessible Interactions',
        detail: 'Keyboard navigation, semantic landmarks, and WCAG AA contrast compliance.'
      }
    ],
    primaryProjectIds: ['qr-attendance', 'prompt-catalyst', 'replate']
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Reliable APIs & Robust Enterprise Architectures',
    description: 'Designing secure, structured backends with ASP.NET Core Web API and Node.js/Express. Strong emphasis on clean architecture, EF Core / T-SQL, dependency injection, and role-based security.',
    techFocus: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'LINQ', 'MS SQL Server', 'Node.js & Express', 'JWT Auth'],
    coreCapabilities: [
      'RESTful API design with comprehensive DTO mappings and model validation',
      'Entity Framework Core code-first migrations, relational constraints, and indexes',
      'Role-based access control (RBAC) with secure JWT issuance and validation',
      'Asynchronous task execution and connection pooling for database queries'
    ],
    architecturalPillars: [
      {
        title: 'Maintainable Web APIs',
        detail: 'Controller-service separation, middleware pipelines, and structured error responses.'
      },
      {
        title: 'Data Integrity',
        detail: 'ACID transactional safety in MS SQL Server with normalized relational designs.'
      },
      {
        title: 'Auth & Authorization',
        detail: 'Stateless JWT tokens with role claims (Admin, Manager, Trainer, Student).'
      }
    ],
    primaryProjectIds: ['employee-leave', 'qr-attendance', 'documind']
  },
  {
    id: 'fullstack-ai',
    title: 'Full Stack & AI Integration',
    subtitle: 'End-to-End Solutions with Intelligent Capabilities',
    description: 'Uniting frontend reactivity and robust backend services with modern AI capabilities—including Gemini API, Retrieval-Augmented Generation (RAG), and Model Context Protocol (MCP) tooling.',
    techFocus: ['MERN Stack', 'Gemini API', 'RAG & Vector Search', 'MCP Protocol', 'MongoDB', 'Cloud Deployment'],
    coreCapabilities: [
      'End-to-end full stack architecture connecting React dashboards to Express / .NET APIs',
      'Context-augmented generation pipelines extracting document chunks for grounded Q&A',
      'Model Context Protocol (MCP) server endpoints exposing real-time data retrieval tools',
      'Production deployment and environment variable management on Vercel and Render'
    ],
    architecturalPillars: [
      {
        title: 'Grounded AI Systems',
        detail: 'RAG pipelines with verifiable citations and hallucination mitigation.'
      },
      {
        title: 'Extensible Tooling',
        detail: 'Model Context Protocol (MCP) tools for dynamic agentic data queries.'
      },
      {
        title: 'Full Lifecycle Delivery',
        detail: 'Cohesive integration from database schemas to client-side reactivity.'
      }
    ],
    primaryProjectIds: ['prompt-catalyst', 'documind', 'replate', 'agrismart']
  }
];

export const projects: Project[] = [
  {
    id: 'qr-attendance',
    title: 'QR Attendance Management System',
    tagline: 'Automated Multi-Class Student Check-In & Tracking',
    category: 'Full Stack · React.js · Node.js · MS SQL Server',
    categoryFilter: ['react', 'mern'],
    status: 'completed',
    statusLabel: 'Completed',
    featured: true,
    description: 'A full-stack attendance management system that supports automated QR-based student check-in and check-out across multiple classes with real-time tracking.',
    highlights: [
      'React.js frontend paired with Node.js & Express.js REST API backend',
      'Microsoft SQL Server database integration with relational student and session schemas',
      'Server-side QR validation engine with strict duplicate check-in prevention algorithms',
      'JWT authentication and role-based access control (RBAC) separating Trainer and Student roles',
      'Interactive dashboard for dynamic QR generation, attendance filtering, and session reports'
    ],
    techTags: ['React.js', 'Node.js', 'Express.js', 'MS SQL Server', 'JWT', 'REST APIs', 'CSS3'],
    architecture: {
      frontend: 'React.js with modular dashboard components, QR generator, and real-time feed',
      backend: 'Node.js & Express REST API with middleware validation',
      database: 'Microsoft SQL Server with foreign-key integrity between Classes, Students, and Logs',
      security: 'Signed JWT tokens, role enforcement, and token expiry verification'
    },
    metricsOrScope: 'Multi-class attendance automation with zero duplicate scan vulnerability',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'qr-attendance'
  },
  {
    id: 'prompt-catalyst',
    title: 'PromptCatalyst',
    tagline: 'Gemini-Powered Chrome Extension for Prompt Optimization',
    category: 'AI Integration · Chrome Extension · Full Stack',
    categoryFilter: ['react', 'ai'],
    status: 'completed',
    statusLabel: 'Completed & Deployed',
    featured: true,
    description: 'A Gemini-powered browser extension and web tool that helps users refine and optimize prompts across diverse AI model archetypes for superior output quality.',
    highlights: [
      'Responsive React-based extension UI designed for rapid in-workflow prompt editing',
      'Node.js and Express REST API backend handling Gemini API orchestration',
      'Model-specific prompt enhancement templates targeting concise vs analytical outputs',
      'API key shielding, input sanity checks, and server-side rate limiting',
      'One-click prompt copying and prompt history preservation',
      'Deployed frontend on Vercel and backend microservice on Render'
    ],
    techTags: ['React.js', 'Gemini API', 'Node.js', 'Express.js', 'REST APIs', 'Vercel', 'Render'],
    architecture: {
      frontend: 'React.js Chrome extension panel with immediate clipboard synchronization',
      backend: 'Express.js microservice proxying Gemini API requests',
      security: 'Backend API key isolation protecting Google Gemini credentials',
      aiOrSpecial: 'Custom prompt engineering frameworks generating structured system prompts'
    },
    metricsOrScope: 'Deployed on Vercel & Render with live Gemini LLM optimization',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'prompt-catalyst'
  },
  {
    id: 'employee-leave',
    title: 'Employee Leave Management System',
    tagline: 'Enterprise Leave Workflow & Approval Architecture',
    category: '.NET · Backend Engineering · Full Stack',
    categoryFilter: ['dotnet', 'react'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    featured: true,
    description: 'A structured leave management application powered by ASP.NET Core Web API, Entity Framework Core, and a normalized Microsoft SQL Server database.',
    highlights: [
      'Comprehensive RESTful API endpoints implementing clean controller-repository patterns',
      'Entity Framework Core with code-first migrations and schema relations',
      'JWT authentication and hierarchical role-based authorization: Admin, Manager, and Employee',
      'LINQ query pipelines featuring dynamic pagination, date range filtering, and approval status queries',
      'React dashboard interface for submitting leave requests, reviewing balances, and tracking manager decisions'
    ],
    techTags: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'MS SQL Server', 'React.js', 'JWT', 'LINQ'],
    architecture: {
      frontend: 'React.js employee and manager portal with status indicators',
      backend: 'ASP.NET Core Web API with dependency injection & middleware filters',
      database: 'Normalized MS SQL Server tables with cascade rules on approval records',
      security: 'Claims-based authorization with Role policies (Admin/Manager/Employee)'
    },
    metricsOrScope: '4 RESTful API endpoints with EF Core migrations and LINQ query optimization',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'leave-management'
  },
  {
    id: 'documind',
    title: 'DocuMind: RAG Document Q&A with MCP Server',
    tagline: 'Document Intelligence with Source-Grounded Citations',
    category: '.NET · AI Engineering · RAG · MCP',
    categoryFilter: ['dotnet', 'ai', 'react'],
    status: 'in-progress',
    statusLabel: 'In Progress · AI Prototype',
    featured: true,
    description: 'A document intelligence platform engineered to retrieve relevant document passages and generate source-grounded answers with verifiable page citations.',
    highlights: [
      'ASP.NET Core Web API backend with React.js document explorer UI',
      'Entity Framework Core and Microsoft SQL Server persistence for metadata & vectors',
      'PDF text extraction, chunking algorithms, and embedding generation for semantic retrieval',
      'Grounded answer synthesis including exact document title and page number citations',
      'C# Model Context Protocol (MCP) server exposing semantic search tools to AI agents',
      'User-scoped access control, query validation, and planned automated evaluation tests'
    ],
    techTags: ['C#', 'ASP.NET Core Web API', 'MCP Protocol', 'RAG', 'Gemini API', 'React.js', 'MS SQL Server'],
    architecture: {
      frontend: 'React.js split-pane document viewer with interactive citation badges',
      backend: 'ASP.NET Core Web API + standalone C# Model Context Protocol (MCP) server',
      database: 'MS SQL Server storing document metadata, chunks, and retrieval logs',
      aiOrSpecial: 'Vector embeddings with semantic top-k reranking & MCP tool endpoints'
    },
    metricsOrScope: 'MCP server implementation with passage extraction and citation grounding',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'documind'
  },
  {
    id: 'replate',
    title: 'RePlate: Surplus Food Rescue Marketplace',
    tagline: 'MERN Marketplace Connecting Food Businesses & Rescuers',
    category: 'MERN Stack · Marketplace Architecture',
    categoryFilter: ['mern', 'react'],
    status: 'in-progress',
    statusLabel: 'In Progress',
    featured: false,
    description: 'A marketplace concept connecting restaurants, bakeries, grocery stores, customers, and charities to streamline surplus food discovery, reservation, and rescue.',
    highlights: [
      'Full MERN stack architecture utilizing React.js, Node.js, Express.js, and MongoDB',
      'Tailwind CSS user interface with distinct donor and claimant workflows',
      'Food inventory management endpoints with real-time stock validation and reservation locks',
      'Role-based access control protecting donor dashboards and charity allocation views',
      'Search and geo-filtering allowing quick discovery of expiring batches near the user',
      'Food rescue impact analytics tracking estimated meals saved and waste diverted'
    ],
    techTags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'JWT'],
    architecture: {
      frontend: 'Tailwind CSS & React.js client with donor inventory management views',
      backend: 'Express.js REST APIs validating pickup windows and quantity constraints',
      database: 'MongoDB with Mongoose schemas for Listings, Orders, and Impact Metrics',
      security: 'JWT authentication with token blacklisting on logout'
    },
    metricsOrScope: 'Surplus food discovery and reservation workflows with stock validation',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'replate'
  },
  {
    id: 'agrismart',
    title: 'AgriSmart: AI-Powered Smart Farming Assistant',
    tagline: 'Android & Machine Learning Crop Advisory System',
    category: 'Android · Machine Learning · Computer Vision',
    categoryFilter: ['ai'],
    status: 'research',
    statusLabel: 'Research Case Study',
    featured: false,
    description: 'An Android smart farming application combining environmental telemetry, camera-based soil image analysis, and offline machine-learning crop recommendations.',
    highlights: [
      'Native Android application developed with Kotlin and Jetpack Compose modern UI',
      'XGBoost inference running locally through ONNX Runtime for offline crop recommendations',
      'OpenCV and CameraX pipeline for real-time soil color and texture preprocessing',
      'Supabase authentication paired with local Room database for offline-first sync',
      'Weather telemetry, market price trends, and satellite NDVI index integrations',
      'Peer-reviewed research publication in IJEDR, Volume 14, Issue 2, May 2026 (ID: IJEDR26A2077)'
    ],
    techTags: ['Kotlin', 'Jetpack Compose', 'ONNX Runtime', 'XGBoost', 'OpenCV', 'Supabase', 'Room DB'],
    architecture: {
      frontend: 'Jetpack Compose reactive declarative UI for Android',
      aiOrSpecial: 'ONNX Runtime executing quantized XGBoost model directly on device',
      database: 'Android Room SQLite local cache with Supabase cloud backup'
    },
    metricsOrScope: 'Offline inference via ONNX Runtime & Published in IJEDR (Publication ID: IJEDR26A2077)',
    githubUrl: 'https://github.com/mohamedAashik05',
    hasVerifiedLink: true,
    mockupType: 'agrismart'
  }
];

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Building responsive, high-performance web user interfaces with modern React ecosystems.',
    skills: [
      { name: 'React.js', category: 'frontend', levelDescription: 'Core UI framework & hooks', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'employee-leave', 'documind', 'replate'] },
      { name: 'JavaScript (ES6+)', category: 'frontend', levelDescription: 'Modern asynchronous JS', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'replate'] },
      { name: 'HTML5 & CSS3', category: 'frontend', levelDescription: 'Semantic structure & responsive layouts', usedInProjects: ['qr-attendance', 'prompt-catalyst'] },
      { name: 'Tailwind CSS', category: 'frontend', levelDescription: 'Utility-first modern styling', usedInProjects: ['replate'] },
      { name: 'Vite', category: 'frontend', levelDescription: 'Lightning-fast frontend build tooling', usedInProjects: ['prompt-catalyst'] },
      { name: 'Responsive UI Design', category: 'frontend', levelDescription: 'Mobile-first fluid layouts', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'replate'] },
      { name: 'Frontend API Integration', category: 'frontend', levelDescription: 'Fetch / Axios with loading & error states', usedInProjects: ['qr-attendance', 'employee-leave', 'documind'] }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Engineering reliable REST APIs, business services, and secure authentication layers.',
    skills: [
      { name: 'C#', category: 'backend', levelDescription: 'Strongly-typed object-oriented development', usedInProjects: ['employee-leave', 'documind'] },
      { name: 'ASP.NET Core Web API', category: 'backend', levelDescription: 'Enterprise RESTful services & middleware', usedInProjects: ['employee-leave', 'documind'] },
      { name: 'Entity Framework Core', category: 'backend', levelDescription: 'Code-first migrations & relational ORM', usedInProjects: ['employee-leave', 'documind'] },
      { name: 'LINQ', category: 'backend', levelDescription: 'Type-safe queries, filtering & pagination', usedInProjects: ['employee-leave'] },
      { name: 'Dependency Injection', category: 'backend', levelDescription: 'Inversion of control & testable services', usedInProjects: ['employee-leave', 'documind'] },
      { name: 'Asynchronous Programming', category: 'backend', levelDescription: 'async/await non-blocking I/O patterns', usedInProjects: ['employee-leave', 'documind', 'qr-attendance'] },
      { name: 'Node.js', category: 'backend', levelDescription: 'Event-driven JavaScript runtime', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'replate'] },
      { name: 'Express.js', category: 'backend', levelDescription: 'Modular routing & API middleware', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'replate'] },
      { name: 'RESTful APIs', category: 'backend', levelDescription: 'Resource modeling, status codes & validation', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'employee-leave', 'replate'] },
      { name: 'JWT Authentication', category: 'backend', levelDescription: 'Stateless token issuance & claim verification', usedInProjects: ['qr-attendance', 'employee-leave', 'replate'] },
      { name: 'Role-Based Authorization (RBAC)', category: 'backend', levelDescription: 'Hierarchical permission enforcement', usedInProjects: ['qr-attendance', 'employee-leave', 'replate'] }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Designing normalized relational schemas and document stores with transactional integrity.',
    skills: [
      { name: 'Microsoft SQL Server', category: 'database', levelDescription: 'Relational design & enterprise queries', usedInProjects: ['qr-attendance', 'employee-leave', 'documind'] },
      { name: 'T-SQL', category: 'database', levelDescription: 'Stored procedures, joins, and indexing', usedInProjects: ['qr-attendance', 'employee-leave'] },
      { name: 'MongoDB', category: 'database', levelDescription: 'Document modeling & schema validation', usedInProjects: ['replate'] },
      { name: 'MongoDB Atlas Vector Search', category: 'database', levelDescription: 'Vector indexing for semantic search', usedInProjects: ['documind'] },
      { name: 'Relational Database Design', category: 'database', levelDescription: 'Foreign keys, normalization & constraints', usedInProjects: ['qr-attendance', 'employee-leave'] },
      { name: 'Indexing & Transactions', category: 'database', levelDescription: 'ACID safety and query execution optimization', usedInProjects: ['employee-leave', 'qr-attendance'] }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Retrieval Integration',
    description: 'Integrating modern Large Language Models, semantic search, and agentic protocols.',
    skills: [
      { name: 'Gemini API', category: 'ai', levelDescription: 'Multimodal & text generation with prompt templates', usedInProjects: ['prompt-catalyst', 'documind'] },
      { name: 'Retrieval-Augmented Generation (RAG)', category: 'ai', levelDescription: 'Chunking, embeddings & grounded generation', usedInProjects: ['documind'] },
      { name: 'Model Context Protocol (MCP)', category: 'ai', levelDescription: 'Building tool servers for agentic execution', usedInProjects: ['documind'] },
      { name: 'Semantic Retrieval', category: 'ai', levelDescription: 'Embedding similarity & document chunk scoring', usedInProjects: ['documind'] }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Platforms',
    description: 'Engineering workflows, debugging environments, and cloud deployment pipelines.',
    skills: [
      { name: 'Git', category: 'tools', levelDescription: 'Version control & branch management', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'employee-leave'] },
      { name: 'GitHub', category: 'tools', levelDescription: 'Code repository collaboration & workflows', usedInProjects: ['qr-attendance', 'prompt-catalyst'] },
      { name: 'Postman', category: 'tools', levelDescription: 'API endpoint testing & automated collections', usedInProjects: ['qr-attendance', 'employee-leave'] },
      { name: 'Visual Studio', category: 'tools', levelDescription: 'C# / .NET development & debugging suite', usedInProjects: ['employee-leave', 'documind'] },
      { name: 'VS Code', category: 'tools', levelDescription: 'Full-stack & web development IDE', usedInProjects: ['qr-attendance', 'prompt-catalyst', 'replate'] },
      { name: 'Vercel', category: 'tools', levelDescription: 'Frontend continuous deployment', usedInProjects: ['prompt-catalyst'] },
      { name: 'Render', category: 'tools', levelDescription: 'Backend web service hosting', usedInProjects: ['prompt-catalyst'] }
    ]
  },
  {
    id: 'fundamentals',
    title: 'Computer Science Fundamentals',
    description: 'Core theoretical and practical engineering principles.',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', category: 'fundamentals', levelDescription: 'Encapsulation, inheritance, polymorphism & SOLID' },
      { name: 'Data Structures & Algorithms', category: 'fundamentals', levelDescription: 'Problem solving & algorithmic efficiency' },
      { name: 'Database Management Systems (DBMS)', category: 'fundamentals', levelDescription: 'Relational algebra, normalization & ACID' },
      { name: 'Software Development Life Cycle (SDLC)', category: 'fundamentals', levelDescription: 'Agile development, design, testing & release' }
    ]
  }
];

export const educationInfo: Education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Business Systems (CSBS)',
  institution: 'Mohamed Sathak Engineering College',
  location: 'Kilakarai, Tamil Nadu, India',
  period: 'August 2022 – May 2026',
  cgpa: '8.08 / 10',
  status: 'Final Year Student (2026 Batch)'
};

export const certificationInfo: Certification = {
  title: 'Cloud Computing (Elite)',
  issuer: 'NPTEL — IIT Kharagpur',
  score: '70%',
  period: 'Jan – Apr 2025',
  gradeBadge: 'Elite Certificate'
};

export const researchInfo: Publication = {
  title: 'Agri Smart: AI-Powered Smart Farming Assistant',
  journal: 'International Journal of Engineering Development and Research (IJEDR)',
  volume: 'Volume 14, Issue 2',
  date: 'May 2026',
  publicationId: 'IJEDR26A2077',
  summary: 'Research paper exploring the synergy of edge computer vision (OpenCV/CameraX), offline machine learning inference (XGBoost via ONNX Runtime), and environmental telemetry for sustainable crop advisory.'
};

export const recruiterHighlights = [
  {
    title: 'Ready to Deploy',
    subtitle: 'Entry-Level Full Stack Software Engineer',
    detail: 'Comfortable operating across frontend components, backend REST APIs, relational databases, and AI tooling.'
  },
  {
    title: 'Verified Technical Breadth',
    subtitle: 'React.js · ASP.NET Core · MERN',
    detail: 'Demonstrated experience in React state and rendering, C# Entity Framework migrations, and Node.js Express services.'
  },
  {
    title: 'Solid Academic Standing',
    subtitle: '8.08 CGPA · CSBS Degree',
    detail: 'Rigorous dual focus on computer science engineering fundamentals and business systems architecture.'
  }
];
