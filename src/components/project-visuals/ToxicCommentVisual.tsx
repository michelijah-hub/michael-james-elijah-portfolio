import React, { useState } from 'react';
import { MessageSquare, AlertTriangle, ShieldCheck, Cpu, Play } from 'lucide-react';

export const ToxicCommentVisual: React.FC = () => {
  const models = [
    'Support Vector Machine (SVM)',
    'Logistic Regression',
    'Naive Bayes',
    'Stochastic Gradient Descent (SGD)',
    'XGBoost Classifier',
  ];

  const sampleInputs = [
    { text: 'You are an idiot and nobody likes you.', isToxic: true, categories: ['toxic', 'insult'] },
    { text: 'This research paper provides thorough comparative analysis.', isToxic: false, categories: ['clean'] },
    { text: 'Stop talking you useless clown.', isToxic: true, categories: ['toxic', 'obscene', 'insult'] },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [inputText, setInputText] = useState(sampleInputs[0].text);
  const [result, setResult] = useState<{
    analyzed: boolean;
    isToxic: boolean;
    model: string;
    categories: string[];
    tokens: string[];
  }>({
    analyzed: true,
    isToxic: true,
    model: models[0],
    categories: ['toxic', 'insult'],
    tokens: ['idiot', 'nobody', 'likes'],
  });

  const handleAnalyze = () => {
    const textLower = inputText.toLowerCase();
    const toxicKeywords = ['idiot', 'stupid', 'hate', 'fool', 'trash', 'clown', 'useless', 'terrible', 'kill', 'dumb'];
    const matchedKeywords = toxicKeywords.filter((w) => textLower.includes(w));
    const isToxic = matchedKeywords.length > 0;

    // Simulate simple TF-IDF non-stopword tokens
    const words = inputText
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3 && !['this', 'that', 'with', 'from', 'your', 'have'].includes(w));

    setResult({
      analyzed: true,
      isToxic,
      model: selectedModel,
      categories: isToxic ? ['toxic', 'obscene', 'insult'] : ['clean / neutral'],
      tokens: words.slice(0, 4),
    });
  };

  return (
    <div className="w-full bg-[#0d1017] rounded-xl border border-slate-800/80 overflow-hidden font-sans shadow-xl">
      {/* Streamlit-inspired Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090b10] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="font-mono text-slate-300 font-semibold tracking-wide">
            STREAMLIT_APP · TOXIC_COMMENT_DETECTOR
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>TF-IDF N-GRAM PIPELINE</span>
        </div>
      </div>

      {/* Main Streamlit Interface Container */}
      <div className="p-5 space-y-4">
        {/* Title Block */}
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span>Toxic Comment Detection</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Detect toxic comments using Machine Learning and Natural Language Processing.
          </p>
        </div>

        {/* Model Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Choose Classification Model</label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-blue-500 cursor-pointer"
          >
            {models.map((m, idx) => (
              <option key={idx} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Text Input Area */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300">Enter Comment</label>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-500">Quick tests:</span>
              <button
                onClick={() => setInputText(sampleInputs[0].text)}
                className="text-[11px] text-rose-400 hover:text-rose-300 underline cursor-pointer"
              >
                Sample 1
              </button>
              <span className="text-slate-600">·</span>
              <button
                onClick={() => setInputText(sampleInputs[1].text)}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                Sample 2
              </button>
            </div>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={2}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg p-3 outline-none focus:border-blue-500 font-mono resize-none"
            placeholder="Type comment to evaluate..."
          />
        </div>

        {/* Analyze Button */}
        <div>
          <button
            onClick={handleAnalyze}
            className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Analyze Comment</span>
          </button>
        </div>

        {/* Inference Results Section */}
        {result.analyzed && (
          <div className="space-y-3 pt-2">
            {/* Model Used Tag */}
            <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs text-blue-300 font-mono">
              Model Used: {result.model}
            </div>

            {/* Verdict Alert Box */}
            <div
              className={`p-3.5 rounded-lg border flex items-center gap-3 ${
                result.isToxic
                  ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
                  : 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
              }`}
            >
              {result.isToxic ? (
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              <div>
                <div className="text-xs font-bold font-mono">
                  {result.isToxic ? '⚠️ Toxic Comment Detected' : '✅ Safe Comment · No Toxicity Detected'}
                </div>
                <div className="text-[11px] opacity-80 mt-0.5">
                  {result.isToxic
                    ? 'Confidence exceeds threshold for abusive content.'
                    : 'Text features comply with community standard guidelines.'}
                </div>
              </div>
            </div>

            {/* Detected Categories & TF-IDF Extraction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[11px] font-mono">DETECTED CATEGORIES</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {result.categories.map((c, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        result.isToxic
                          ? 'bg-rose-900/40 text-rose-300 border border-rose-800'
                          : 'bg-emerald-900/40 text-emerald-300 border border-emerald-800'
                      }`}
                    >
                      • {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
                <span className="text-slate-500 text-[11px] font-mono">TF-IDF SALIENT TOKENS</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {result.tokens.length > 0 ? (
                    result.tokens.map((tok, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">
                        {tok}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 italic">None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
