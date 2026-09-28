import React, { useState } from 'react';
import { LEADERSHIP_EXPERIENCES } from '../data/portfolioData';
import { Users, Video, ExternalLink, Calendar, CheckCircle2, HeartHandshake, Compass, Trees, Image as ImageIcon, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  role: string;
  context: string;
  description: string;
  badge: string;
  svgVisual: React.ReactNode;
}

export const Experience: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 'fl-outdoor',
      title: 'First Year Program Cohort Orientation',
      role: 'Freshmen Leader (FL)',
      context: 'BINUS Campus Courtyard · FYP Batch',
      badge: 'Outdoor Orientation',
      description:
        'Guiding and coordinating incoming freshmen in white shirts alongside fellow student Freshmen Leaders wearing sky-blue orientation uniforms, celebrating the start of their university journey.',
      svgVisual: (
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-800">
          <svg viewBox="0 0 400 240" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            {/* Campus backdrop */}
            <rect width="400" height="240" fill="#090d16" />
            <rect y="160" width="400" height="80" fill="#131926" />
            {/* Campus buildings and palm trees */}
            <rect x="280" y="40" width="100" height="120" fill="#1e293b" opacity="0.6" />
            <line x1="300" y1="40" x2="300" y2="160" stroke="#334155" strokeWidth="1" />
            <line x1="330" y1="40" x2="330" y2="160" stroke="#334155" strokeWidth="1" />
            <line x1="360" y1="40" x2="360" y2="160" stroke="#334155" strokeWidth="1" />

            {/* Palm tree silhouettes */}
            <path d="M 60 160 Q 65 100 80 70" stroke="#1e293b" strokeWidth="4" fill="none" />
            <path d="M 80 70 Q 40 60 20 80" stroke="#334155" strokeWidth="3" fill="none" />
            <path d="M 80 70 Q 70 30 50 40" stroke="#334155" strokeWidth="3" fill="none" />
            <path d="M 80 70 Q 110 40 130 60" stroke="#334155" strokeWidth="3" fill="none" />
            <path d="M 80 70 Q 120 80 140 100" stroke="#334155" strokeWidth="3" fill="none" />

            {/* Freshmen cohort in white shirts (back row) */}
            {Array.from({ length: 14 }).map((_, i) => (
              <g key={i}>
                <circle cx={40 + i * 24} cy={125} r="6" fill="#cbd5e1" />
                <rect x={34 + i * 24} y={133} width="12" height="26" rx="3" fill="#f8fafc" />
              </g>
            ))}

            {/* Freshmen Leaders in bright sky-blue orientation shirts (front row) */}
            {Array.from({ length: 9 }).map((_, i) => (
              <g key={i}>
                <circle cx={60 + i * 34} cy={165} r="7" fill="#f1f5f9" />
                <rect x={52 + i * 34} y={174} width="16" height="28" rx="4" fill="#38bdf8" />
                <path d={`M ${52 + i * 34} 190 L ${48 + i * 34} 180`} stroke="#38bdf8" strokeWidth="2.5" />
              </g>
            ))}

            {/* Banner element */}
            <rect x="175" y="180" width="50" height="20" rx="3" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
            <text x="200" y="194" fill="#0369a1" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              AUN 05
            </text>
          </svg>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono bg-black/60 backdrop-blur px-2.5 py-1 rounded text-slate-300">
            <span>FL COHORT GATHERING</span>
            <span className="text-sky-400">OUTDOOR ORIENTATION</span>
          </div>
        </div>
      ),
    },
    {
      id: 'fl-indoor',
      title: 'Classroom Mentoring & Transition Workshop',
      role: 'Freshmen Leader (FL)',
      context: 'BINUS Lecture Hall · First Year Program',
      badge: 'Academic Mentoring',
      description:
        'Conducting structured orientation modules inside university lecture halls, answering curriculum questions, and facilitating peer group icebreakers.',
      svgVisual: (
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-800">
          <svg viewBox="0 0 400 240" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            {/* Classroom background */}
            <rect width="400" height="240" fill="#0b0f19" />
            <rect x="60" y="30" width="280" height="70" rx="4" fill="#1e293b" />
            <rect x="70" y="40" width="260" height="50" fill="#f8fafc" opacity="0.9" />
            <text x="200" y="68" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              FIRST YEAR PROGRAM WORKSHOP
            </text>

            {/* Student rows in white shirts seated at lecture desks */}
            {Array.from({ length: 11 }).map((_, i) => (
              <g key={i}>
                <circle cx={65 + i * 27} cy={110} r="6" fill="#cbd5e1" />
                <rect x={60 + i * 27} y={118} width="10" height="18" rx="2" fill="#ffffff" />
              </g>
            ))}
            <line x1="50" y1="138" x2="350" y2="138" stroke="#334155" strokeWidth="4" />

            {/* Freshmen Leaders in sky-blue shirts seated in front row */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i}>
                <circle cx={80 + i * 34} cy={165} r="7" fill="#f8fafc" />
                <rect x={72 + i * 34} y={174} width="16" height="26" rx="3" fill="#38bdf8" />
              </g>
            ))}
            <line x1="60" y1="202" x2="340" y2="202" stroke="#475569" strokeWidth="3" />
          </svg>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono bg-black/60 backdrop-blur px-2.5 py-1 rounded text-slate-300">
            <span>LECTURE HALL GUIDANCE</span>
            <span className="text-sky-400">ACADEMIC WORKSHOP</span>
          </div>
        </div>
      ),
    },
    {
      id: 'fp-tree',
      title: 'Community Environmental Tree-Planting',
      role: 'Freshmen Partner (FP)',
      context: 'BINUS Community Initiative · Nature Activity',
      badge: 'Community & Mentorship',
      description:
        'Accompanying first-year students during social cohesion and community impact activities, wearing signature BINUS burgundy blazers for an environmental tree-planting initiative.',
      svgVisual: (
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-rose-950/40 via-slate-900 to-emerald-950/40 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-800">
          <svg viewBox="0 0 400 240" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            {/* Nature pavilion background */}
            <rect width="400" height="240" fill="#0a1012" />
            {/* Lush tropical foliage */}
            <path d="M 0 0 C 80 80, 120 20, 200 40 C 280 20, 320 80, 400 0 L 400 140 L 0 140 Z" fill="#064e3b" opacity="0.3" />
            <polygon points="120,70 200,20 280,70" fill="#334155" opacity="0.8" />
            <rect x="140" y="70" width="120" height="60" fill="#1e293b" opacity="0.7" />

            {/* Students wearing signature BINUS burgundy / maroon blazers */}
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i}>
                <circle cx={50 + i * 27} cy={135} r="6.5" fill="#f8fafc" />
                <rect x={44 + i * 27} y={143} width="12" height="26" rx="3" fill="#881337" />
              </g>
            ))}

            {/* Front row mentors crouching */}
            {Array.from({ length: 7 }).map((_, i) => (
              <g key={i}>
                <circle cx={70 + i * 40} cy={175} r="7" fill="#f8fafc" />
                <rect x={62 + i * 40} y={184} width="16" height="24" rx="3" fill="#9f1239" />
              </g>
            ))}

            {/* Seedling & Earth element */}
            <circle cx="200" cy="225" r="10" fill="#78350f" opacity="0.6" />
            <path d="M 200 220 Q 205 210 200 205 Q 206 200 214 205" stroke="#10b981" strokeWidth="2.5" fill="none" />
          </svg>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono bg-black/60 backdrop-blur px-2.5 py-1 rounded text-slate-300">
            <span>BINUS BURGUNDY BLAZERS</span>
            <span className="text-rose-400">TREE PLANTING INITIATIVE</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
            Experience & Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Mentoring, Peer Leadership & Teamwork
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Beyond engineering systems, I actively guide peers and lead student cohorts at Bina Nusantara University, developing empathy, collaborative problem solving, and communication.
          </p>
        </div>

        {/* 2 Roles Grid: Freshmen Leader & Freshmen Partner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {LEADERSHIP_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-slate-800 space-y-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {exp.organization}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    {exp.id === 'freshmen-leader' ? (
                      <Compass className="w-5 h-5 text-blue-400 shrink-0" />
                    ) : (
                      <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {exp.id === 'freshmen-leader'
                      ? 'First Year Program (FYP) Orientation Leadership'
                      : 'Sustained Full-Year Cohort Companionship'}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Responsibilities
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills and Action Link */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-500 font-mono text-[11px]">DEMONSTRATED:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="text-slate-300 font-medium">{skill}</span>
                      {sIdx < exp.skills.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {exp.videoLink && (
                  <div className="pt-2">
                    <a
                      href={exp.videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                    >
                      <Video className="w-4 h-4" />
                      <span>Watch FP Experience (Tree-Planting Video)</span>
                      <ExternalLink className="w-3 h-3 text-emerald-200" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Photo Gallery & Authentic Visual Narrative */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Authentic Cohort Moments
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Leadership in Action at BINUS
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Evidence of campus leadership, orientation facilitation, and peer community events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group p-3 rounded-2xl bg-[#0d1017] border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer space-y-3 flex flex-col justify-between"
              >
                {/* Visual Frame */}
                <div className="overflow-hidden rounded-xl">
                  {item.svgVisual}
                </div>

                {/* Metadata */}
                <div className="space-y-1.5 px-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-blue-400">{item.role}</span>
                    <span className="text-slate-400 text-[11px]">{item.badge}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative max-w-2xl w-full bg-[#0d1017] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-400">{selectedPhoto.role}</div>
                  <h3 className="text-lg font-bold text-white">{selectedPhoto.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>{selectedPhoto.svgVisual}</div>

              <div className="text-xs text-slate-400 font-mono">
                Location: {selectedPhoto.context}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
