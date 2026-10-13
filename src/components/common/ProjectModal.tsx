import React, { useEffect } from 'react';
import type { Project } from '../../types/portfolio';
import { 
  X, 
  Layers, 
  Database, 
  Shield, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import {
  QrAttendancePreview,
  PromptCatalystPreview,
  LeaveManagementPreview,
  DocuMindPreview,
  RePlatePreview,
  AgriSmartPreview
} from '../projects/ProjectPreviews';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderMockup = (type: Project['mockupType']) => {
    switch (type) {
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0e17] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
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
            <span className="text-xs text-slate-400 font-mono">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-cyan-400 font-medium text-sm sm:text-base mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Interactive Simulation Preview Box */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Interactive Architectural Preview & Telemetry
          </div>
          {renderMockup(project.mockupType)}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono">
              Executive Technical Summary
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {project.description}
            </p>
          </div>

          {/* Architecture Grid */}
          {project.architecture && (
            <div>
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3 font-mono">
                System Architecture Layers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architecture.frontend && (
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                      <Layers className="w-4 h-4" /> Frontend Layer
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.frontend}
                    </p>
                  </div>
                )}
                {project.architecture.backend && (
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                      <Cpu className="w-4 h-4" /> Backend & Services
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.backend}
                    </p>
                  </div>
                )}
                {project.architecture.database && (
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                      <Database className="w-4 h-4" /> Database & Persistence
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.database}
                    </p>
                  </div>
                )}
                {project.architecture.security && (
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                      <Shield className="w-4 h-4" /> Authentication & Security
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.architecture.security}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Verified Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono">
              Key Engineering Achievements
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">0{idx + 1}</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Tags */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
            </div>

            <button 
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
