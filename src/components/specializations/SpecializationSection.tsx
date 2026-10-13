import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Workflow 
} from 'lucide-react';
import { specializations, projects } from '../../data/portfolioData';
import type { SpecializationCategory } from '../../types/portfolio';

interface SpecializationSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const SpecializationSection: React.FC<SpecializationSectionProps> = ({ onSelectProject }) => {
  const [selectedSpecId, setSelectedSpecId] = useState<SpecializationCategory>('frontend');

  const currentSpec = specializations.find(s => s.id === selectedSpecId) || specializations[0];
  const relatedProjects = projects.filter(p => currentSpec.primaryProjectIds.includes(p.id));

  const specIcons = {
    frontend: <Code2 className="w-5 h-5 text-cyan-400" />,
    backend: <Server className="w-5 h-5 text-sky-400" />,
    'fullstack-ai': <Sparkles className="w-5 h-5 text-indigo-400" />
  };

  return (
    <section id="specializations" className="py-20 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Workflow className="w-3.5 h-3.5" />
              ENGINEERING METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How I Build
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Three complementary capabilities anchored under one coherent Software Engineer discipline.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400">
            Interactive Architecture Inspector
          </div>
        </div>

        {/* 3-Tab Interactive Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {specializations.map((spec) => {
            const isSelected = spec.id === selectedSpecId;
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecId(spec.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {specIcons[spec.id]}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'
                  }`}>
                    0{specializations.indexOf(spec) + 1}
                  </span>
                </div>
                <div className="font-bold text-slate-100 text-base mb-1">
                  {spec.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {spec.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Display */}
        <div className="bg-[#0a0e17] rounded-3xl border border-cyan-500/20 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Core Focus & Capabilities (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {currentSpec.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {currentSpec.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentSpec.description}
                </p>
              </div>

              {/* Technologies in this spec */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technical Focus & Toolset
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentSpec.techFocus.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Core Implementation Competencies
                </h4>
                <div className="space-y-2">
                  {currentSpec.coreCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {currentSpec.architecturalPillars.map((pillar, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-bold text-slate-200 mb-1">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {pillar.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Recommended Projects for this Specialization (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/60 rounded-2xl border border-slate-800/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    Recommended Projects
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    {relatedProjects.length} Verified
                  </span>
                </div>

                <div className="space-y-3">
                  {relatedProjects.map((proj) => (
                    <div 
                      key={proj.id}
                      onClick={() => onSelectProject(proj.id)}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {proj.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mb-2">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.techTags.slice(0, 3).map(t => (
                          <span key={t} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                <a 
                  href="#projects"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  View All Showcase Projects in Depth →
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
