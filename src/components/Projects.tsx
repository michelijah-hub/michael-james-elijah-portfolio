import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, Layers, ArrowUpRight, Play, Presentation, FileText } from 'lucide-react';
import { RailroadVisual } from './project-visuals/RailroadVisual';
import { TisResearchVisual } from './project-visuals/TisResearchVisual';
import { HitOrFlopVisual } from './project-visuals/HitOrFlopVisual';
import { ToxicCommentVisual } from './project-visuals/ToxicCommentVisual';
import { SmartQueueVisual } from './project-visuals/SmartQueueVisual';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'Research', 'NLP', 'Software Engineering'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'railroad-cv':
        return <RailroadVisual />;
      case 'tis-tokenization':
        return <TisResearchVisual />;
      case 'hit-or-flop':
        return <HitOrFlopVisual />;
      case 'toxic-comment-detection':
        return <ToxicCommentVisual />;
      case 'smartqueue':
        return <SmartQueueVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              Selected Projects
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Practical applications across computer vision safety monitoring, computational biology research, ensemble audio analytics, NLP classification, and distributed offline-first systems.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Controls) */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stream */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0d1017] border border-slate-800/90 overflow-hidden transition-all duration-200 hover:border-slate-700 shadow-xl"
            >
              {/* Project Top Bar */}
              <div className="p-6 pb-4 border-b border-slate-800/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-blue-400 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Year {project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">Project 0{index + 1} of 05</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-slate-300 font-medium pt-0.5">
                    Role: <span className="text-slate-200">{project.role}</span>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Case Study</span>
                  </button>

                  {project.links.app && (
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Large Visual Showcase Canvas */}
              <div className="p-4 sm:p-6 bg-slate-950/40">
                {renderProjectVisual(project.id)}
              </div>

              {/* Project Card Footer: Description, Technologies & Direct Links */}
              <div className="p-6 pt-4 border-t border-slate-800/80 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {project.shortDescription}
                </p>

                {/* Unboxed Technologies Separators */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 pt-1">
                  <span className="text-slate-500 font-mono text-[11px]">METHODS:</span>
                  {project.technologies.map((t, i) => (
                    <React.Fragment key={i}>
                      <span className="font-mono text-slate-300">{t}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="text-slate-700" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Link Icons */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 border-t border-slate-800/60">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 text-blue-400" />
                      <span>Demo Video</span>
                    </a>
                  )}

                  {project.links.presentation && (
                    <a
                      href={project.links.presentation}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                    >
                      <Presentation className="w-3.5 h-3.5 text-amber-400" />
                      <span>Presentation Slides</span>
                    </a>
                  )}

                  {project.links.videos && (
                    <a
                      href={project.links.videos[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 text-red-400" />
                      <span>Research Video</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="ml-auto text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
