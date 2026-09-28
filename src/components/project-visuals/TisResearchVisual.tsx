import React, { useState } from 'react';
import { Dna, CheckCircle2, XCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';

export const TisResearchVisual: React.FC = () => {
  const [tokenMode, setTokenMode] = useState<'codon' | 'naive'>('codon');

  // Sample biological mRNA sequence containing Translation Initiation Site (AUG)
  const fullSeq = 'AUGGCCAUCACCAAGUAA';

  // Codon tokens (3 nucleotides per reading frame)
  const codonTokens = [
    { label: 'AUG', role: 'TIS Start Codon (Methionine)', isTIS: true },
    { label: 'GCC', role: 'Alanine', isTIS: false },
    { label: 'AUC', role: 'Isoleucine', isTIS: false },
    { label: 'ACC', role: 'Threonine', isTIS: false },
    { label: 'AAG', role: 'Lysine', isTIS: false },
    { label: 'UAA', role: 'Stop Codon', isTIS: false },
  ];

  // Naive BPE tokens (arbitrary text subwords breaking reading frames)
  const naiveTokens = [
    { label: 'AU', role: 'Fragment (Splits Start Codon)', isTIS: false, error: true },
    { label: 'GG', role: 'Fragment (Phase Shift)', isTIS: false, error: true },
    { label: 'CCA', role: 'Fragment', isTIS: false, error: false },
    { label: 'UCA', role: 'Frame Bleed', isTIS: false, error: true },
    { label: 'CCA', role: 'Fragment', isTIS: false, error: false },
    { label: 'AGU', role: 'Phase Shift', isTIS: false, error: true },
    { label: 'AA', role: 'Truncated end', isTIS: false, error: true },
  ];

  return (
    <div className="w-full bg-[#0d1017] rounded-xl border border-slate-800/80 overflow-hidden font-sans shadow-xl">
      {/* Top Research Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b10] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Dna className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-slate-300 font-semibold tracking-wide">
            SEQUENCE_REPRESENTATION · TIS_PREDICTION
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>TARGET: ATG/AUG START LOCUS</span>
        </div>
      </div>

      {/* Main Comparative Canvas */}
      <div className="p-5 space-y-4">
        {/* Tokenizer Selection Switch */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="text-xs text-slate-400">
            Compare Sequence Tokenization Strategy:
          </div>
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
            <button
              onClick={() => setTokenMode('codon')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                tokenMode === 'codon'
                  ? 'bg-cyan-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-200" />
              <span>Codon Tokenization (3-mer)</span>
            </button>
            <button
              onClick={() => setTokenMode('naive')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                tokenMode === 'naive'
                  ? 'bg-rose-900/80 text-rose-100 font-medium border border-rose-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Naïve Tokenization (BPE)</span>
            </button>
          </div>
        </div>

        {/* Biological Sequence Bar */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
            <span>Raw Genomic Sequence (5' → 3')</span>
            <span>Length: 18 bp</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-center font-mono text-sm tracking-widest text-slate-200 overflow-x-auto">
            {fullSeq.split('').map((char, idx) => (
              <span
                key={idx}
                className={`px-1 py-0.5 rounded text-center transition-colors ${
                  idx < 3
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border-b-2 border-cyan-400'
                    : 'text-slate-300'
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Tokenized Output Representation */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold text-slate-300">
              {tokenMode === 'codon'
                ? 'Codon Tokenization: Biological 3-base triplets'
                : 'Naïve BPE Tokenization: Text-based subwords (treats DNA like human text)'}
            </span>
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                tokenMode === 'codon'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                  : 'bg-rose-950 text-rose-300 border border-rose-800/60'
              }`}
            >
              {tokenMode === 'codon' ? 'Zero Positional Blurring' : 'Positional Deviation Detected'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[64px] items-center p-3 bg-slate-950/80 rounded-lg border border-slate-800/80">
            {tokenMode === 'codon' ? (
              codonTokens.map((t, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center px-3 py-1.5 rounded-md border font-mono text-xs transition-transform hover:-translate-y-0.5 ${
                    t.isTIS
                      ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-sm shadow-cyan-900/40'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  <span className="font-bold text-sm">{t.label}</span>
                  <span className="text-[10px] text-slate-400 font-sans">{t.role}</span>
                </div>
              ))
            ) : (
              naiveTokens.map((t, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center px-3 py-1.5 rounded-md border font-mono text-xs ${
                    t.error
                      ? 'bg-rose-950/50 border-rose-700/60 text-rose-200'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-sm">{t.label}</span>
                  <span className="text-[10px] text-rose-400/90 font-sans">{t.role}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Literature Review Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/70">
            <div className="flex items-center gap-1.5 font-semibold text-slate-200 mb-1">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deep Learning Trend & Flaw</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Models like DNABERT-2 adapt NLP Byte-Pair Encoding (BPE), treating biological sequences as unstructured text. This breaks fundamental triplet codons and blurs exact Translation Initiation Sites.
            </p>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/70">
            <div className="flex items-center gap-1.5 font-semibold text-slate-200 mb-1">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Codon Alternative</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Codon tokenization strictly segments sequences into 3-mer reading frames. This guarantees biological alignment, preserves mRNA translation context, and pinpoints exact TIS initiation codons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
