import React, { useState } from 'react';
import { 
  FileDown, 
  FileText,
  ArrowRight, 
  Database, 
  Layers, 
  Sparkles, 
  Server
} from 'lucide-react';
import { personalInfo, heroSpecialties } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'stack' | 'api' | 'db'>('stack');

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-500/0 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-semibold tracking-wider">
                SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building thoughtful interfaces.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Engineering reliable systems.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a full-stack developer working across <span className="text-cyan-300 font-medium">React.js</span>, <span className="text-sky-300 font-medium">ASP.NET Core</span>, and the <span className="text-blue-300 font-medium">MERN stack</span>. I build responsive applications, secure APIs, database-driven systems, and AI-powered tools.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View Resume
              </button>

              <a
                href={personalInfo.resumeFilePath}
                download={personalInfo.resumeFileName}
                className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Download PDF directly"
              >
                <FileDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Let's Connect →
              </a>
            </div>

            {/* Three Concise Technical Specialties */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Engineering Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {heroSpecialties.map((spec, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                        {spec.tag}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {spec.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {spec.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Architectural HUD Console (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full bg-[#0a0e17] rounded-2xl border border-cyan-500/30 p-5 shadow-2xl shadow-cyan-500/10 relative overflow-hidden group">
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 blur-2xl pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    aashik-runtime.engine v2.6
                  </span>
                </div>

                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Ready
                </span>
              </div>

              {/* Console Tabs */}
              <div className="flex gap-1 mb-4 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveConsoleTab('stack')}
                  className={`flex-1 py-1.5 rounded-lg font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeConsoleTab === 'stack'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> Stack
                </button>
                <button
                  onClick={() => setActiveConsoleTab('api')}
                  className={`flex-1 py-1.5 rounded-lg font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeConsoleTab === 'api'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" /> .NET API
                </button>
                <button
                  onClick={() => setActiveConsoleTab('db')}
                  className={`flex-1 py-1.5 rounded-lg font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeConsoleTab === 'db'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" /> SQL & DB
                </button>
              </div>

              {/* Console Display Content */}
              {activeConsoleTab === 'stack' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Role Profile:</span>
                      <span className="text-cyan-400">Software Engineer</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Target Verticals:</span>
                      <span className="text-slate-200">React · ASP.NET Core · MERN</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Education:</span>
                      <span className="text-slate-200">B.Tech CSBS (2026) · 8.08 CGPA</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Current Status:</span>
                      <span className="text-emerald-400">Open for Full-Time Roles</span>
                    </div>
                  </div>

                  <div className="p-3 bg-cyan-950/20 rounded-xl border border-cyan-500/20 text-[11px] text-cyan-300">
                    <div className="font-semibold mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Technical Philosophy
                    </div>
                    <p className="text-slate-300 text-[10px] leading-relaxed">
                      "Clean architecture over complexity. Strong typing, predictable state transitions, and verified database constraints."
                    </p>
                  </div>
                </div>
              )}

              {activeConsoleTab === 'api' && (
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-2">
                  <div className="text-slate-500">// ASP.NET Core Web API Controller</div>
                  <div className="text-cyan-400">[ApiController]</div>
                  <div className="text-cyan-400">[Route("api/[controller]")]</div>
                  <div className="text-slate-200">public class AttendanceController : ControllerBase &#123;</div>
                  <div className="text-slate-400 pl-3">private readonly IAttendanceService _service;</div>
                  <div className="text-slate-400 pl-3">// Dependency Injection &amp; JWT Validation</div>
                  <div className="text-cyan-300 pl-3">[HttpPost("validate-qr")]</div>
                  <div className="text-slate-300 pl-3">[Authorize(Roles = "Trainer,Student")]</div>
                  <div className="text-slate-200 pl-3">public async Task&lt;IActionResult&gt; ValidateAsync(...)</div>
                  <div className="text-slate-200">&#125;</div>
                </div>
              )}

              {activeConsoleTab === 'db' && (
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-2">
                  <div className="text-slate-500">-- Microsoft SQL Server Relational Schema</div>
                  <div className="text-cyan-300">CREATE TABLE AttendanceRecords (</div>
                  <div className="text-slate-400 pl-3">RecordId INT IDENTITY PRIMARY KEY,</div>
                  <div className="text-slate-400 pl-3">StudentId NVARCHAR(50) NOT NULL,</div>
                  <div className="text-slate-400 pl-3">SessionId INT NOT NULL FOREIGN KEY,</div>
                  <div className="text-slate-400 pl-3">CheckInTime DATETIME2 DEFAULT SYSUTCDATETIME(),</div>
                  <div className="text-slate-400 pl-3">CONSTRAINT UQ_StudentSession UNIQUE(StudentId, SessionId)</div>
                  <div className="text-cyan-300">);</div>
                  <div className="text-emerald-400 text-[10px] pt-1">-- Zero duplicate check-in guarantee</div>
                </div>
              )}

              {/* Console Telemetry Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Latency: 12ms
                </span>
                <span>Location: Chennai, IN</span>
                <span className="text-cyan-300">Active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
