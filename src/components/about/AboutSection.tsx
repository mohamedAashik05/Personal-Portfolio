import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationInfo, certificationInfo, researchInfo, personalInfo } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const engineeringPillars = [
    {
      title: 'Designing Maintainable APIs',
      detail: 'Structuring RESTful endpoints with ASP.NET Core & Express, clear request DTOs, dependency injection, and centralized exception handling.'
    },
    {
      title: 'Structuring Relational & Document DBs',
      detail: 'Designing normalized schemas in MS SQL Server with referential integrity, and flexible document models in MongoDB with Mongoose.'
    },
    {
      title: 'Building Responsive React Interfaces',
      detail: 'Developing fluid component architectures with React.js, clean hook lifecycles, Tailwind CSS styling, and zero layout shift.'
    },
    {
      title: 'Authentication & Role-Based Security',
      detail: 'Securing endpoints through signed JSON Web Tokens (JWT), role claims (Admin, Manager, Trainer, Student), and validation middleware.'
    },
    {
      title: 'Exploring AI Retrieval & Tool Protocols',
      detail: 'Engineering RAG pipelines with Gemini embeddings, source-grounded citation extraction, and C# Model Context Protocol (MCP) servers.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            BACKGROUND & CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curious by nature.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Practical in execution.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A software engineer grounded in computer science fundamentals, business systems architecture, and production-ready full-stack execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                Software Engineering Grounded in Systems & Value
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am <strong className="text-white">{personalInfo.name}</strong>, completing my B.Tech in <strong>Computer Science and Business Systems</strong> at Mohamed Sathak Engineering College (2022–2026). My coursework uniquely bridges deep software engineering principles with modern business process automation.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Rather than treating web development, backend engineering, and AI as disparate silos, I view them as complementary layers of modern product engineering. Whether crafting typed React client interfaces, tuning LINQ queries over SQL Server, or integrating Gemini RAG pipelines, my focus is always on predictability, security, and maintainability.
              </p>

              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                Practical Engineering Focus
              </h4>
              <div className="space-y-3">
                {engineeringPillars.map((pillar, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {pillar.title}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed pl-5">
                      {pillar.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education, Certification & Research (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 p-6 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  CGPA: {educationInfo.cgpa}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">
                {educationInfo.period}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {educationInfo.degree}
              </h4>
              <div className="text-sm text-cyan-400 font-medium mb-2">
                {educationInfo.field}
              </div>
              <div className="text-xs text-slate-300">
                {educationInfo.institution} · {educationInfo.location}
              </div>
            </div>

            {/* Certification Card */}
            <div className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 p-6 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {certificationInfo.gradeBadge} · {certificationInfo.score}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">
                {certificationInfo.period}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {certificationInfo.title}
              </h4>
              <div className="text-xs text-slate-300">
                Issued by {certificationInfo.issuer}
              </div>
            </div>

            {/* Research Paper Card */}
            <div className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 p-6 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  ID: {researchInfo.publicationId}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">
                {researchInfo.journal} · {researchInfo.volume} ({researchInfo.date})
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {researchInfo.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {researchInfo.summary}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
