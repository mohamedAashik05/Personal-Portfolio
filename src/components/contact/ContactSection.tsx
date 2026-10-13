import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  FileDown, 
  Copy, 
  Check, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { personalInfo } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Construct mailto link as reliable direct email action
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    
    // Open mail client
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Send className="w-3.5 h-3.5" />
            LET'S CONNECT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have a role or project in mind?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            I'm open to opportunities across <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-sky-300 font-semibold">.NET / ASP.NET Core</span>, and <span className="text-blue-300 font-semibold">MERN stack</span> development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Resume Download Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Resume Download Callout */}
            <div className="bg-gradient-to-br from-cyan-950/40 via-slate-950 to-blue-950/30 p-6 rounded-3xl border border-cyan-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  Verified Resume PDF
                </span>
                <span className="text-xs font-mono text-slate-400">~54 KB</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Mohamed Aashik — Resume
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Complete resume detailing React, ASP.NET Core, MERN stack, SQL Server, and AI integration achievements.
              </p>
              <a
                href={personalInfo.resumeFilePath}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                Download Verified Resume (PDF)
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="bg-[#0a0e17] p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Email Address</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Phone Number</div>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">
                  Direct / WhatsApp
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Current Base</div>
                  <div className="text-xs sm:text-sm text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Verified Technical Profiles
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col items-center justify-center text-center transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white mb-1" />
                    <span className="text-[11px] font-mono text-slate-300">GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col items-center justify-center text-center transition-colors group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 mb-1" />
                    <span className="text-[11px] font-mono text-slate-300">LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col items-center justify-center text-center transition-colors group"
                  >
                    <Code className="w-4 h-4 text-amber-400 group-hover:text-amber-300 mb-1" />
                    <span className="text-[11px] font-mono text-slate-300">LeetCode</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0a0e17] p-6 sm:p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Recruiters and hiring managers: feel free to send role specifications or interview invitations.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-cyan-950/30 border border-cyan-500/40 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Message Prepared in Email Client!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your mail application was triggered with your message. If it didn't open automatically, you can email me directly at{' '}
                  <strong className="text-cyan-300 font-mono">{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-300"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Talent Acquisition Team"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer (React / .NET / MERN) - Full Time"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message / Opportunity Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role details, company tech stack, location, or schedule an introductory chat..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Initiate Conversation
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
