import React, { useState } from 'react';
import { Disc3, Sparkles, Activity, Check, BarChart2 } from 'lucide-react';

interface PresetTrack {
  title: string;
  artist: string;
  energy: number;
  tempo: number;
  loudness: string;
  verdict: 'HIT' | 'FLOP';
  confidence: number;
  ensembleVotes: { model: string; vote: 'HIT' | 'FLOP' }[];
}

export const HitOrFlopVisual: React.FC = () => {
  const tracks: PresetTrack[] = [
    {
      title: 'Midnight Resonance',
      artist: 'Track Audit 01',
      energy: 0.82,
      tempo: 121,
      loudness: '-5.2 dB',
      verdict: 'HIT',
      confidence: 92.4,
      ensembleVotes: [
        { model: 'Random Forest', vote: 'HIT' },
        { model: 'XGBoost', vote: 'HIT' },
        { model: 'AdaBoost', vote: 'HIT' },
        { model: 'K-Nearest Neighbors', vote: 'HIT' },
        { model: 'Decision Tree', vote: 'FLOP' },
      ],
    },
    {
      title: 'Solitary Echoes',
      artist: 'Track Audit 02',
      energy: 0.31,
      tempo: 78,
      loudness: '-14.8 dB',
      verdict: 'FLOP',
      confidence: 86.1,
      ensembleVotes: [
        { model: 'Random Forest', vote: 'FLOP' },
        { model: 'XGBoost', vote: 'FLOP' },
        { model: 'AdaBoost', vote: 'FLOP' },
        { model: 'K-Nearest Neighbors', vote: 'HIT' },
        { model: 'Decision Tree', vote: 'FLOP' },
      ],
    },
  ];

  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const activeTrack = tracks[selectedTrackIdx];

  return (
    <div className="w-full bg-[#0d1017] rounded-xl border border-slate-800/80 overflow-hidden font-sans shadow-xl">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b10] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Disc3 className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-mono text-slate-300 font-semibold tracking-wide">
            HIT_OR_FLOP · MULTI_VOTE_ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
          <span>84.5% MULTI-VOTE BENCHMARK ACCURACY</span>
        </div>
      </div>

      {/* Main ML Audit Panel */}
      <div className="p-5 space-y-5">
        {/* Track Selector Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/70">
          <div className="text-xs text-slate-400 font-mono">
            SELECT SONG PROFILE AUDIT:
          </div>
          <div className="flex items-center gap-2">
            {tracks.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTrackIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedTrackIdx === idx
                    ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {t.title} ({t.verdict})
              </button>
            ))}
          </div>
        </div>

        {/* Big Scorecard Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-4 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Audit Report For:
            </div>
            <div className="text-xl font-extrabold text-white tracking-tight">
              "{activeTrack.title.toUpperCase()}"
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Evaluated on Spotify audio feature vector space
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <div
                className={`inline-block px-3 py-1 rounded text-xs font-mono font-bold tracking-wider mb-1 ${
                  activeTrack.verdict === 'HIT'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : 'bg-rose-950 text-rose-300 border border-rose-700'
                }`}
              >
                {activeTrack.verdict === 'HIT' ? 'ELITE HIT POTENTIAL' : 'FLOP / NICHE TRACK'}
              </div>
              <div className="text-xs text-slate-400">Ensemble Confidence</div>
            </div>

            <div
              className={`text-4xl md:text-5xl font-extrabold tracking-tight tabular-nums font-mono ${
                activeTrack.verdict === 'HIT' ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {activeTrack.confidence}%
            </div>
          </div>
        </div>

        {/* Feature Vectors Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
            <span className="text-slate-500 font-mono text-[11px]">ENERGY</span>
            <div className="text-base font-bold text-slate-200 mt-0.5">{activeTrack.energy}</div>
            <span className="text-[10px] text-slate-400">
              {activeTrack.energy > 0.6 ? 'High energy characteristic' : 'Mellow dynamic'}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
            <span className="text-slate-500 font-mono text-[11px]">TEMPO</span>
            <div className="text-base font-bold text-slate-200 mt-0.5">{activeTrack.tempo} BPM</div>
            <span className="text-[10px] text-slate-400">
              {activeTrack.tempo > 110 ? 'Strong danceable cadence' : 'Slow ambient tempo'}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
            <span className="text-slate-500 font-mono text-[11px]">LOUDNESS</span>
            <div className="text-base font-bold text-slate-200 mt-0.5">{activeTrack.loudness}</div>
            <span className="text-[10px] text-slate-400">Commercial master level</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
            <span className="text-slate-500 font-mono text-[11px]">MULTI-VOTE RATIO</span>
            <div className="text-base font-bold text-slate-200 mt-0.5">
              {activeTrack.ensembleVotes.filter((v) => v.vote === activeTrack.verdict).length}/5 Models
            </div>
            <span className="text-[10px] text-slate-400">Majority consensus</span>
          </div>
        </div>

        {/* Multi-Vote Ensemble Breakdown */}
        <div className="p-3.5 bg-slate-950/90 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-300 font-semibold mb-2.5">
            <span className="flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Multi-Vote Ensemble Algorithms Breakdown</span>
            </span>
            <span className="text-slate-500 font-mono text-[11px]">Individual Model Decisions</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {activeTrack.ensembleVotes.map((m, idx) => (
              <div
                key={idx}
                className="p-2 rounded bg-slate-900 border border-slate-800 flex flex-col justify-between text-xs"
              >
                <span className="text-[11px] text-slate-400 truncate">{m.model}</span>
                <span
                  className={`mt-1 font-mono font-bold text-xs ${
                    m.vote === 'HIT' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {m.vote}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
