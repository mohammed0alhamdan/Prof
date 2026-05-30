import { useState, useEffect } from "react";
import { ChapterSummary, KeyTerm } from "../types";
import { HelpCircle, RefreshCw, Trophy, CheckCircle, GraduationCap } from "lucide-react";

interface MatchingTermsProps {
  chapters: ChapterSummary[];
  onMatchedCountIncrement: (count: number) => void;
}

interface TermItem {
  id: string;
  term: string;
  definition: string;
  isMatched: boolean;
}

interface DefItem {
  id: string;
  definition: string;
  isMatched: boolean;
}

export default function MatchingTerms({ chapters, onMatchedCountIncrement }: MatchingTermsProps) {
  // Aggregate all key terms across the textbook summaries
  const allTerms: KeyTerm[] = chapters.flatMap(ch => ch.keyTerms);

  const [activeTerms, setActiveTerms] = useState<TermItem[]>([]);
  const [activeDefs, setActiveDefs] = useState<DefItem[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedDefId, setSelectedDefId] = useState<string | null>(null);
  const [successBlink, setSuccessBlink] = useState<boolean>(false);
  const [errorBlinkId, setErrorBlinkId] = useState<string | null>(null);
  const [roundCompleted, setRoundCompleted] = useState<boolean>(false);
  const [matchScore, setMatchScore] = useState<number>(0);

  // Pick 6 random terms to instantiate a round
  const startNewRound = () => {
    if (allTerms.length === 0) return;

    // Shuffle terms list and take 6
    const shuffled = [...allTerms].sort(() => 0.5 - Math.random());
    const selectedTerms = shuffled.slice(0, 6);

    const termsWithIds: TermItem[] = selectedTerms.map((t, idx) => ({
      id: `term-${idx}`,
      term: t.term,
      definition: t.definition,
      isMatched: false
    }));

    const defsWithIds: DefItem[] = selectedTerms.map((t, idx) => ({
      id: `def-${idx}`, // matches the corresponding term index
      definition: t.definition,
      isMatched: false
    })).sort(() => 0.5 - Math.random()); // randomize definitions list position

    setActiveTerms(termsWithIds);
    setActiveDefs(defsWithIds);
    setSelectedTermId(null);
    setSelectedDefId(null);
    setRoundCompleted(false);
  };

  useEffect(() => {
    startNewRound();
  }, [chapters]);

  const handleTermClick = (id: string) => {
    if (successBlink) return;
    const term = activeTerms.find(t => t.id === id);
    if (!term || term.isMatched) return;

    setSelectedTermId(id);
    
    // Check match if definition is already selected
    if (selectedDefId) {
      checkMatch(id, selectedDefId);
    }
  };

  const handleDefClick = (id: string) => {
    if (successBlink) return;
    const d = activeDefs.find(item => item.id === id);
    if (!d || d.isMatched) return;

    setSelectedDefId(id);

    // Check match if term is already selected
    if (selectedTermId) {
      checkMatch(selectedTermId, id);
    }
  };

  const checkMatch = (termId: string, defId: string) => {
    const term = activeTerms.find(t => t.id === termId);
    const def = activeDefs.find(d => d.id === defId);

    if (!term || !def) return;

    // The mapping uses identical index numbers in 'startNewRound' (idx)
    const termIdx = termId.split("-")[1];
    const defIdx = defId.split("-")[1];

    if (termIdx === defIdx) {
      // SUCCESSFUL MATCH
      setSuccessBlink(true);
      setTimeout(() => {
        setActiveTerms(prev => prev.map(t => t.id === termId ? { ...t, isMatched: true } : t));
        setActiveDefs(prev => prev.map(d => d.id === defId ? { ...d, isMatched: true } : d));
        setSelectedTermId(null);
        setSelectedDefId(null);
        setSuccessBlink(false);
        setMatchScore(prev => prev + 1);
        onMatchedCountIncrement(1);

        // Check if all are matched
        const updatedMatchCount = activeTerms.filter(t => t.id === termId ? true : t.isMatched).length;
        if (updatedMatchCount === activeTerms.length) {
          setRoundCompleted(true);
        }
      }, 500);
    } else {
      // WRONG MATCH
      setErrorBlinkId(termId);
      setTimeout(() => {
        setErrorBlinkId(null);
        setSelectedTermId(null);
        setSelectedDefId(null);
      }, 800);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Game metrics bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-teal-50 text-teal-600 p-2.5 rounded-2xl">
            <Trophy size={20} />
          </div>
          <div>
            <h3 className="text-slate-800 font-display font-medium text-sm tracking-tight">Glossary Vocab Matches</h3>
            <p className="text-xs text-slate-400">Match key vocabulary terms directly to textbook definitions</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono bg-slate-50 border border-slate-200/50 px-3 py-1.5 rounded-xl text-slate-600">
            Current Score: <span className="text-teal-600 font-bold">{matchScore} Matched</span>
          </div>
          <button
            onClick={startNewRound}
            className="cursor-pointer p-2 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all text-slate-500 hover:text-slate-800"
            title="Reload New Terms"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {roundCompleted ? (
        /* Round completed modal/onboarding block */
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center space-y-6 animate-scale-up">
          <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 mx-auto">
            <GraduationCap size={32} />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-800">Excellent Matching Round Finished!</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Every key term was paired successfully with its exact Anderson & Bolt definition.
            </p>
          </div>
          <button
            onClick={startNewRound}
            className="cursor-pointer bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 mx-auto shadow-md"
          >
            <RefreshCw size={14} />
            <span>Load 6 New Terms</span>
          </button>
        </div>
      ) : (
        /* Active Matching Panel Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Term List Panel */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest px-1">
              Textbook Key Terms
            </h4>
            <div className="space-y-2">
              {activeTerms.map(t => {
                const isSelected = selectedTermId === t.id;
                const isError = errorBlinkId === t.id;

                let borderStyle = "border-slate-100 hover:bg-slate-50";
                let textStyle = "text-slate-700 bg-white";

                if (t.isMatched) {
                  borderStyle = "border-teal-100 bg-teal-50/20 opacity-40";
                  textStyle = "text-teal-700 line-through font-mono";
                } else if (isSelected) {
                  borderStyle = "border-teal-500 shadow-md shadow-teal-500/5";
                  textStyle = "text-teal-900 bg-teal-50/40 font-semibold";
                } else if (isError) {
                  borderStyle = "border-rose-500 animate-shake";
                  textStyle = "text-rose-900 bg-rose-50";
                }

                return (
                  <button
                    key={t.id}
                    disabled={t.isMatched}
                    onClick={() => handleTermClick(t.id)}
                    className={`cursor-pointer w-full text-left p-3.5 rounded-2xl border transition-all text-xs font-mono ${borderStyle} ${textStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{t.term}</span>
                      {t.isMatched && <CheckCircle size={12} className="text-teal-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Randomized Definitions Panel */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest px-1">
              Polished Definitions
            </h4>
            <div className="space-y-2">
              {activeDefs.map(d => {
                const isSelected = selectedDefId === d.id;

                let borderStyle = "border-slate-100 hover:bg-slate-50";
                let textStyle = "text-slate-600 bg-white";

                if (d.isMatched) {
                  borderStyle = "border-slate-100/50 bg-slate-50/50 opacity-40";
                  textStyle = "text-slate-400 line-through";
                } else if (isSelected) {
                  borderStyle = "border-teal-500 shadow-md shadow-teal-500/5";
                  textStyle = "text-teal-900 bg-teal-50/40 font-medium";
                }

                return (
                  <button
                    key={d.id}
                    disabled={d.isMatched}
                    onClick={() => handleDefClick(d.id)}
                    className={`cursor-pointer w-full text-left p-3.5 rounded-2xl border transition-all text-xs sm:text-xs leading-relaxed ${borderStyle} ${textStyle}`}
                  >
                    <span>{d.definition}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
