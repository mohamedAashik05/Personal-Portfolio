import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { SpecializationSection } from './components/specializations/SpecializationSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/common/ProjectModal';
import { QuickRecruiterBar } from './components/common/QuickRecruiterBar';
import type { Project } from './types/portfolio';
import { projects } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['home', 'specializations', 'projects', 'skills', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const found = projects.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Interactive Specializations: How I Build */}
        <SpecializationSection onSelectProject={handleSelectProjectById} />

        {/* 3. Featured Projects Showcase */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 4. Technical Skills and Toolkit */}
        <SkillsSection onSelectProjectById={handleSelectProjectById} />

        {/* 5. About & Education */}
        <AboutSection />

        {/* 6. Contact & Recruiter Connect */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Dock */}
      <QuickRecruiterBar />

      {/* Interactive Project Deep Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
