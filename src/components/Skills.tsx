import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Cpu, Terminal, GitBranch, Users2, Database, Brain } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Machine Learning')) return <Brain className="w-5 h-5 text-blue-400" />;
    if (category.includes('Computer Vision')) return <Cpu className="w-5 h-5 text-cyan-400" />;
    if (category.includes('Software')) return <Database className="w-5 h-5 text-emerald-400" />;
    return <Users2 className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
            Technical Skills & Domains
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Competencies & Applied Methods
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Technologies, algorithms, and practices verified across my machine learning projects, biological research, distributed systems, and student leadership roles.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d1017] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Clean Unboxed Tags with Typographic Separator */}
              <div className="pt-2 border-t border-slate-800/70">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-900/80 text-slate-200 border border-slate-800/90 font-mono text-xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
