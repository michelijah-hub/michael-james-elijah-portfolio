import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GraduationCap, School, Calendar, BookOpen, Check } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
            Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            My academic foundation in computing, intelligent systems, and sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {/* Item 1: BINUS University */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#090a0f] shadow-sm shadow-blue-500/50" />

            <div className="p-6 rounded-2xl bg-[#0d1017] border border-slate-800 space-y-3 transition-colors hover:border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>CURRENT UNDERGRADUATE</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>4th Semester</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Bina Nusantara University</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Bina Nusantara University (BINUS)
                </h3>
                <div className="text-sm text-slate-300 font-medium">
                  Computer Science · <span className="text-blue-400">Minor in Intelligent Systems</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Currently pursuing an undergraduate degree in Computer Science with a designated minor in Intelligent Systems. Actively exploring machine learning paradigms, algorithmic problem solving, computer vision safety applications, and biological sequence modeling while serving as a student peer mentor in the First Year Program.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="text-slate-300">• Intelligent Systems Specialization</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">• Machine Learning Foundations</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">• Applied Research in Sequence Tokenization</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">• First Year Program Leadership</span>
              </div>
            </div>
          </div>

          {/* Item 2: SMAK 4 Penabur */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-[#090a0f]" />

            <div className="p-6 rounded-2xl bg-[#0d1017] border border-slate-800 space-y-3 transition-colors hover:border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <School className="w-4 h-4 text-slate-400" />
                  <span>HIGH SCHOOL</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Jakarta, Indonesia</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  SMAK 4 Penabur Sunrise Garden
                </h3>
                <div className="text-sm text-slate-300 font-medium">
                  High School Diploma
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Completed secondary education with focused study in mathematics and natural sciences, establishing the foundational analytical and logical problem-solving skills that catalyzed my entry into Computer Science.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="text-slate-300">• Natural Sciences & Mathematics Track</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">• Analytical Foundations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
