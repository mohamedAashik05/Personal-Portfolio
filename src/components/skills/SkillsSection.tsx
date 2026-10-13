import React, { useState } from 'react';
import { skillCategories, projects } from '../../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
  Wrench, 
  GraduationCap, 
  Layers 
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectProjectById?: (projectId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectProjectById }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4 text-cyan-400" />,
    backend: <Server className="w-4 h-4 text-sky-400" />,
    database: <Database className="w-4 h-4 text-emerald-400" />,
    ai: <Sparkles className="w-4 h-4 text-purple-400" />,
    tools: <Wrench className="w-4 h-4 text-amber-400" />,
    fundamentals: <GraduationCap className="w-4 h-4 text-blue-400" />
  };

  const displayedGroups = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              TECHNICAL TOOLKIT
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills & Engineering Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Organized by engineering discipline. Hover any technology to inspect its practical application in portfolio projects.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-400">
            Zero Arbitrary Percentages · Evidence-Based Competency
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.title}</span>
              <span className="text-[10px] text-slate-400">({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#0a0e17] rounded-3xl border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      {categoryIcons[group.id]}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-2.5 rounded-xl border transition-all ${
                          isHovered 
                            ? 'bg-slate-900 border-cyan-500/40 shadow-sm shadow-cyan-500/10' 
                            : 'bg-slate-950/60 border-slate-800/60 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
                              {skill.usedInProjects.length} project{skill.usedInProjects.length > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                        {skill.levelDescription && (
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {skill.levelDescription}
                          </div>
                        )}

                        {/* Project Connections when hovered */}
                        {isHovered && skill.usedInProjects && skill.usedInProjects.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                            <span className="text-[10px] text-slate-400 mr-1">Applied in:</span>
                            {skill.usedInProjects.map(pId => {
                              const proj = projects.find(p => p.id === pId);
                              return (
                                <button
                                  key={pId}
                                  onClick={() => onSelectProjectById && onSelectProjectById(pId)}
                                  className="text-[10px] font-mono text-cyan-300 hover:underline bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700"
                                >
                                  {proj?.title || pId}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
