import React, { useState, useEffect } from 'react';
import { FileDown, Mail, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const QuickRecruiterBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down past 400px
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[92%] sm:w-auto animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#0b0f19]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-2 sm:px-4 sm:py-2.5 shadow-2xl shadow-cyan-500/10 flex items-center justify-between gap-3 text-xs">
        
        {/* Recruiter Pill Info */}
        <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-slate-800">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 font-semibold font-mono text-[11px]">
            Recruiter Quick Dock
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-center">
          <a
            href={personalInfo.resumeFilePath}
            download={personalInfo.resumeFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all text-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            Resume PDF
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Opportunity%20-%20Mohamed%20Aashik`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Email Candidate
          </a>

          <a
            href="#contact"
            className="hidden xs:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-slate-400 hover:text-slate-200 text-xs transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          aria-label="Dismiss dock"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
