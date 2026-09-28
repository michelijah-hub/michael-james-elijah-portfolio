/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'projects', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'hero' && window.scrollY < 300) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Education />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
