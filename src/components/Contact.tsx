import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Copy, Check, ExternalLink, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>OPEN FOR INTERNSHIP OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Let's build something meaningful together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            I am actively looking for internship roles in Computer Science, Intelligent Systems, Machine Learning, and Software Engineering where I can contribute practical technical skills and continue to learn.
          </p>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0d1017] border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 pt-1"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-[#0d1017] border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
                  <Linkedin className="w-5 h-5 text-[#0a66c2]" />
                </div>
                <span className="text-xs font-mono text-slate-500">Connect</span>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">LinkedIn</div>
                <div className="text-sm font-semibold text-white truncate">
                  Michael James Elijah
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 pt-1"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#0d1017] border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">Phone / WhatsApp</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {PERSONAL_INFO.phoneDisplay}
                </a>
              </div>

              <a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 pt-1"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-6 flex justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Me an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
