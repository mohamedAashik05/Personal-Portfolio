import React, { useState } from 'react';
import type { 
  Project, 
  ProjectCategory 
} from '../../types/portfolio';
import { projects } from '../../data/portfolioData';
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Maximize2
} from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import {
  QrAttendancePreview,
  PromptCatalystPreview,
  LeaveManagementPreview,
  DocuMindPreview,
  RePlatePreview,
  AgriSmartPreview
} from './ProjectPreviews';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterTabs: { label: string; value: ProjectCategory; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projects.length },
    { label: 'React.js & Frontend', value: 'react', count: projects.filter(p => p.categoryFilter.includes('react')).length },
    { label: '.NET / ASP.NET Core', value: 'dotnet', count: projects.filter(p => p.categoryFilter.includes('dotnet')).length },
    { label: 'MERN Stack', value: 'mern', count: projects.filter(p => p.categoryFilter.includes('mern')).length },
    { label: 'AI & Intelligent Systems', value: 'ai', count: projects.filter(p => p.categoryFilter.includes('ai')).length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryFilter.includes(activeFilter as any));

  const renderCardPreview = (mockupType: Project['mockupType']) => {
    switch (mockupType) {
      case 'qr-attendance': return <QrAttendancePreview />;
      case 'prompt-catalyst': return <PromptCatalystPreview />;
      case 'leave-management': return <LeaveManagementPreview />;
      case 'documind': return <DocuMindPreview />;
      case 'replate': return <RePlatePreview />;
      case 'agrismart': return <AgriSmartPreview />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              VERIFIED PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered software implementations demonstrating practical API design, database schemas, full-stack architectures, and AI retrieval workflows.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Verified Status:</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Completed & In Progress Clearly Marked
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-950/60 text-slate-400 border border-slate-800/80 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-cyan-400/20 text-cyan-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div>
                {/* Card Top: Badges & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
                      project.status === 'completed' 
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
                        : project.status === 'research'
                        ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                        : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    }`}>
                      {project.status === 'completed' && <CheckCircle2 className="w-3 h-3 inline mr-1 -mt-0.5" />}
                      {project.status === 'in-progress' && <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />}
                      {project.status === 'research' && <AlertCircle className="w-3 h-3 inline mr-1 -mt-0.5" />}
                      {project.statusLabel}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-3">
                  {project.category}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Interactive Simulation Preview embedded in Card */}
                <div className="mb-5">
                  {renderCardPreview(project.mockupType)}
                </div>

                {/* Key Technical Bullets */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono text-[11px] mt-0.5">▪</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Tags & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Deep Dive Architecture
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
