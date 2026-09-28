import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, Presentation, Video, CheckCircle2, Shield, Calendar, Award } from 'lucide-react';
import { RailroadVisual } from './project-visuals/RailroadVisual';
import { TisResearchVisual } from './project-visuals/TisResearchVisual';
import { HitOrFlopVisual } from './project-visuals/HitOrFlopVisual';
import { ToxicCommentVisual } from './project-visuals/ToxicCommentVisual';
import { SmartQueueVisual } from './project-visuals/SmartQueueVisual';

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

  const renderVisual = () => {
    switch (project.id) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl text-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-5 sm:p-6 bg-[#0d1017]/95 backdrop-blur border-b border-slate-800/80">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Year {project.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Role: {project.role}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Interactive Project Demonstration Console */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">
              Interactive System Demonstration & Architecture
            </div>
            {renderVisual()}
          </div>

          {/* Quick Metrics Bar if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-base font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Motivation */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Problem & Context
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              {project.problem}
            </p>
          </div>

          {/* Technical Approach */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Technical Approach & Architecture
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              {project.approach}
            </p>
          </div>

          {/* Michael's Contribution */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              My Specific Contribution
            </h4>
            <div className="text-sm text-slate-200 leading-relaxed bg-blue-950/20 p-4 rounded-xl border border-blue-900/40 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>{project.myContribution}</span>
            </div>
          </div>

          {/* Technologies & Methods (No pills, clean unboxed list) */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Technologies & Methods
            </h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-mono text-slate-200">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
            {project.links.app && (
              <a
                href={project.links.app}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Application</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Watch Demo Video</span>
              </a>
            )}

            {project.links.presentation && (
              <a
                href={project.links.presentation}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>View Presentation Slides</span>
              </a>
            )}

            {project.links.videos &&
              project.links.videos.map((vidUrl, i) => (
                <a
                  key={i}
                  href={vidUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
                >
                  <Video className="w-3.5 h-3.5 text-red-400" />
                  <span>Research Video {i + 1}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
