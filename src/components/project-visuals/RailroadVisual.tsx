import React, { useState } from 'react';
import { Camera, ShieldCheck, AlertTriangle, Cpu, RefreshCw, Eye } from 'lucide-react';

export const RailroadVisual: React.FC = () => {
  const [hasObstacle, setHasObstacle] = useState(true);
  const [modelType, setModelType] = useState<'classic' | 'deep'>('deep');
  const [isScanning, setIsScanning] = useState(false);

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 400);
  };

  const confidenceScore = hasObstacle
    ? (modelType === 'deep' ? 94.6 : 89.2)
    : (modelType === 'deep' ? 96.8 : 91.5);

  return (
    <div className="w-full bg-[#0d1017] rounded-xl border border-slate-800/80 overflow-hidden font-sans shadow-xl">
      {/* CCTV Top Status Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b10] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-300 font-mono">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>CAM_04 · LEVEL_CROSSING_KM18</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-mono">FPS: 29.97</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 font-mono text-[11px] font-semibold tracking-wider">LIVE FEED</span>
        </div>
      </div>

      {/* Main CCTV Feed Simulation */}
      <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* SVG Railway Track & Crossing Background */}
        <svg
          viewBox="0 0 640 360"
          className="w-full h-full object-cover select-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e222d" />
              <stop offset="100%" stopColor="#11141c" />
            </linearGradient>
          </defs>

          {/* Background environment */}
          <rect width="640" height="180" fill="url(#skyGrad)" />
          <rect y="180" width="640" height="180" fill="url(#groundGrad)" />

          {/* Road Crossing */}
          <polygon points="120,360 220,180 420,180 520,360" fill="#1a1e28" />
          <line x1="320" y1="180" x2="320" y2="360" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 12" />

          {/* Railway Tracks (diagonal crossing) */}
          {/* Left rail */}
          <line x1="0" y1="270" x2="640" y2="210" stroke="#475569" strokeWidth="5" />
          <line x1="0" y1="290" x2="640" y2="230" stroke="#475569" strokeWidth="5" />
          {/* Railroad ties */}
          {Array.from({ length: 14 }).map((_, i) => {
            const x = i * 48 + 10;
            const y1 = 270 - i * 4.3;
            const y2 = 295 - i * 4.3;
            return <line key={i} x1={x} y1={y1} x2={x + 12} y2={y2} stroke="#334155" strokeWidth="4" />;
          })}

          {/* Safety Barrier Gate */}
          <line x1="80" y1="210" x2="280" y2="210" stroke="#ef4444" strokeWidth="5" strokeDasharray="18 12" />
          <circle cx="80" cy="210" r="7" fill="#64748b" />
          <line x1="80" y1="210" x2="80" y2="260" stroke="#64748b" strokeWidth="6" />

          {/* CCTV timestamp watermark overlay */}
          <text x="24" y="32" fill="#e2e8f0" fontSize="12" fontFamily="monospace" opacity="0.8">
            2026-09-28 14:32:08 UTC · CAM-N2
          </text>
        </svg>

        {/* Dynamic Target Detection Bounding Boxes */}
        {hasObstacle ? (
          <div className="absolute top-[38%] left-[34%] w-[32%] h-[36%] border-2 border-red-500 bg-red-500/10 rounded-sm flex flex-col justify-between p-1.5 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-xs w-max">
              <span>OBSTACLE DETECTED: VEHICLE</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-red-300 bg-black/60 px-1 py-0.5 rounded-xs">
              <span>ZONE: TRACK_OCCUPIED</span>
              <span>CONF: {confidenceScore}%</span>
            </div>
          </div>
        ) : (
          <div className="absolute top-[40%] left-[32%] w-[36%] h-[32%] border border-emerald-500/70 bg-emerald-500/5 rounded-sm flex flex-col justify-between p-1.5 transition-all">
            <div className="flex items-center text-[10px] font-mono font-semibold bg-emerald-700/80 text-white px-1.5 py-0.5 rounded-xs w-max">
              <span>CROSSING CLEAR</span>
            </div>
            <div className="text-[10px] font-mono text-emerald-300 bg-black/60 px-1 py-0.5 rounded-xs w-max">
              <span>STATUS: SAFE · {confidenceScore}%</span>
            </div>
          </div>
        )}

        {/* Scan Line effect */}
        {isScanning && (
          <div className="absolute inset-0 bg-blue-500/10 border-b border-blue-400 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Safety Verdict Banner */}
      <div
        className={`px-4 py-3 border-t flex flex-wrap items-center justify-between gap-3 transition-colors ${
          hasObstacle
            ? 'bg-red-950/40 border-red-900/60 text-red-300'
            : 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg ${
              hasObstacle ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
            }`}
          >
            {hasObstacle ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Safety Verdict (Real-Time)
            </div>
            <div className="text-sm md:text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{hasObstacle ? 'DANGER: OBSTACLE ON CROSSING' : 'SAFE: CROSSING ZONE CLEAR'}</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-slate-300">
                {confidenceScore}% confidence
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setHasObstacle(!hasObstacle);
              handleRescan();
            }}
            className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Simulate {hasObstacle ? 'Clear Track' : 'Hazard on Track'}</span>
          </button>

          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => {
                setModelType('classic');
                handleRescan();
              }}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                modelType === 'classic'
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Classic ML
            </button>
            <button
              onClick={() => {
                setModelType('deep');
                handleRescan();
              }}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                modelType === 'deep'
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Deep Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
