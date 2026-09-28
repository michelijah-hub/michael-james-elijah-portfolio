import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#07080c] py-12 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white tracking-tight">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-slate-400">
            Computer Science Student · Minor in Intelligent Systems · {PERSONAL_INFO.university}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2]" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-600" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <span className="text-slate-700">|</span>

          <span className="text-slate-400 font-mono">
            © {currentYear} Michael James Elijah
          </span>
        </div>
      </div>
    </footer>
  );
};
