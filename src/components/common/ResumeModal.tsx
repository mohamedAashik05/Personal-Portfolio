import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Sparkles,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className={`bg-[#0a0e17] border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen 
            ? 'w-[98vw] h-[96vh]' 
            : 'w-full max-w-5xl h-[90vh] sm:h-[88vh]'
        }`}
      >
        {/* Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {personalInfo.name} — Resume
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/50">
                  <Sparkles className="w-2.5 h-2.5" />
                  Live Preview
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Software Engineer | .NET & React Full Stack Developer
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Open in New Tab */}
            <a
              href={personalInfo.resumeFilePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Download */}
            <a
              href={personalInfo.resumeFilePath}
              download={personalInfo.resumeFileName}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Toggle Fullscreen (desktop) */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="hidden md:flex p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Close Resume Viewer"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Content Area */}
        <div className="relative flex-1 w-full bg-[#080b12] flex flex-col overflow-hidden">
          <iframe
            src={`${personalInfo.resumeFilePath}#toolbar=0&navpanes=0&view=FitH`}
            title={`${personalInfo.name} Resume`}
            className="w-full h-full border-0 bg-slate-950"
          />

          {/* Bottom Bar: Fallback help */}
          <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>
              Document: <span className="text-cyan-400 font-mono">{personalInfo.resumeFileName}</span>
            </span>
            <div className="flex items-center gap-3">
              <span>Trouble viewing inline on mobile?</span>
              <a
                href={personalInfo.resumeFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-medium"
              >
                Click here to open directly →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
