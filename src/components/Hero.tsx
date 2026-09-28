import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ExternalLink, Linkedin, Mail, Sparkles, Terminal, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background subtle computational grid & glowing radial ambient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Soft focal glow behind center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Status Kicker (unboxed metadata with dot separator) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">Bina Nusantara University</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Computer Science (4th Semester)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Minor in Intelligent Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-balance leading-[1.08]">
              Michael James Elijah
            </h1>

            {/* Positioning Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Computer Science student focused on <span className="text-white font-medium">Intelligent Systems</span>, building practical projects across machine learning, computer vision, NLP, research, and software engineering—complemented by active student leadership.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-600/20 flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-sm font-semibold border border-slate-700/80 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Experience</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 text-slate-400 hover:text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>{PERSONAL_INFO.linkedInDisplay}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <span className="text-slate-700 hidden sm:inline">|</span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card: Computational Focus Overview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d1017] border border-slate-800 p-5 sm:p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>CORE_TECHNICAL_FOCUS</span>
                </div>
                <span className="text-slate-400">2026 REPERTORY</span>
              </div>

              <div className="py-4 space-y-3.5 text-xs">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div>
                    <div className="font-semibold text-slate-200">Computer Vision & Safety</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      CCTV obstacle detection at railway crossings with confidence scores
                    </div>
                  </div>
                  <span className="font-mono text-slate-300 shrink-0">CV / ML</span>
                </div>

                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div>
                    <div className="font-semibold text-slate-200">Sequence Representation Research</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Comparative codon tokenization vs BPE in TIS biological prediction
                    </div>
                  </div>
                  <span className="font-mono text-slate-300 shrink-0">Research</span>
                </div>

                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div>
                    <div className="font-semibold text-slate-200">Multi-Vote Ensemble Modeling</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Hit or Flop music success classification with 5 classical models
                    </div>
                  </div>
                  <span className="font-mono text-slate-300 shrink-0">ML</span>
                </div>

                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                  <div>
                    <div className="font-semibold text-slate-200">Natural Language Processing</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      TF-IDF feature extraction & Streamlit toxicity classification
                    </div>
                  </div>
                  <span className="font-mono text-slate-300 shrink-0">NLP</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-200">Distributed & Offline Systems</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      SmartQueue with bi-directional WebSocket and IndexedDB
                    </div>
                  </div>
                  <span className="font-mono text-slate-300 shrink-0">Systems</span>
                </div>
              </div>

              {/* Leadership Footnote */}
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Student Leadership:</span>
                <span className="text-slate-200 font-medium">Freshmen Leader & Freshmen Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
