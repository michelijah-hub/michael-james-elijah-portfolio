import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Brain, Cpu, Users, Code, BookOpen, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Building intelligent tools and growing through collaboration.
          </h2>
        </div>

        {/* 2-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am an undergraduate Computer Science student minoring in Intelligent Systems at Bina Nusantara University. My academic journey is centered around understanding computational models and turning theoretical concepts into dependable, usable software.
            </p>
            <p>
              Rather than viewing coursework in isolation, I develop practical experience by building end-to-end technical projects across Machine Learning, Computer Vision, Natural Language Processing, and applied research. Whether evaluating biological sequence tokenization for genomics or implementing multi-vote ensemble models for audio analytics, I focus on understanding why algorithms work and how they behave under real conditions.
            </p>
            <p>
              Equally central to my growth is how I work with people. Through student leadership roles as a Freshmen Leader and Freshmen Partner at BINUS, I regularly mentor new students, facilitate academic workshops, and help teams communicate clearly. I am seeking internship opportunities where I can contribute technical curiosity, strong teamwork, and an eagerness to keep learning.
            </p>
          </div>

          {/* Pillars Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-start gap-3.5">
              <Brain className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Intelligent Systems & ML</div>
                <div className="text-xs text-slate-400 mt-1">
                  Classical classifiers (XGBoost, Random Forest, SVM), ensemble voting mechanisms, and computer vision safety pipelines.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-start gap-3.5">
              <BookOpen className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Research & Sequence Analysis</div>
                <div className="text-xs text-slate-400 mt-1">
                  Literature review and comparative analysis in computational biology (Codon vs. Naïve tokenization in TIS prediction).
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-start gap-3.5">
              <Code className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Software Engineering & UI/UX</div>
                <div className="text-xs text-slate-400 mt-1">
                  Distributed queue architectures with bi-directional WebSockets and IndexedDB Offline-First data synchronization.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-start gap-3.5">
              <Users className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Mentorship & Student Leadership</div>
                <div className="text-xs text-slate-400 mt-1">
                  Active Freshmen Leader (FL) and Freshmen Partner (FP) guiding peers through university orientation and academic transition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
