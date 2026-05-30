import { useState, useRef, useEffect } from "react";
import { ChapterSummary } from "../types";
import { ChevronRight, CheckCircle, Circle, ArrowLeft, ArrowRight, ShieldCheck, Frown, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface ChapterDetailsProps {
  chapters: ChapterSummary[];
  initialChapterId?: number;
  completedChapters: number[];
  onToggleComplete: (id: number) => void;
}

export default function ChapterDetails({
  chapters,
  initialChapterId,
  completedChapters,
  onToggleComplete
}: ChapterDetailsProps) {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(initialChapterId || 1);
  const detailTopRef = useRef<HTMLDivElement>(null);

  const selectedChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const isCompleted = completedChapters.includes(selectedChapter.id);

  const handleNext = () => {
    if (selectedChapterId < chapters.length) {
      setSelectedChapterId(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selectedChapterId > 1) {
      setSelectedChapterId(prev => prev - 1);
    }
  };

  // Keep track of scroll to top of chapter content
  useEffect(() => {
    if (detailTopRef.current) {
      detailTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedChapterId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar navigation list */}
      <div className="lg:col-span-1 space-y-4">
        <h3 className="text-sm font-display font-semibold text-slate-400 tracking-wider uppercase px-2">
          Chapters List
        </h3>
        <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs max-h-[640px] overflow-y-auto space-y-1">
          {chapters.map(ch => {
            const isActive = ch.id === selectedChapterId;
            const chCompleted = completedChapters.includes(ch.id);
            return (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs cursor-pointer ${
                  isActive
                    ? "bg-teal-600 text-white font-medium shadow-md shadow-teal-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="max-w-[160px] truncate space-y-0.5">
                  <div className={`font-mono text-[10px] ${isActive ? "text-teal-200" : "text-slate-400"}`}>
                    Chapter {ch.number}
                  </div>
                  <div className="truncate font-sans font-medium">{ch.title}</div>
                </div>
                {chCompleted ? (
                  <CheckCircle size={14} className={isActive ? "text-white" : "text-teal-500"} />
                ) : (
                  <Circle size={14} className={isActive ? "text-teal-300" : "text-slate-300"} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chapter Content Viewer */}
      <div className="lg:col-span-3 space-y-6" ref={detailTopRef}>
        {/* Navigation / Tracking header */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-teal-600 font-mono text-xs font-semibold uppercase tracking-wider block">
              {selectedChapter.module}
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-medium text-slate-800">
              Chapter {selectedChapter.number}: {selectedChapter.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              {selectedChapter.shortDescription}
            </p>
          </div>
          
          <button
            onClick={() => onToggleComplete(selectedChapter.id)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs font-medium font-sans flex items-center gap-2 transition-all self-start sm:self-center shrink-0 ${
              isCompleted 
                ? "bg-teal-50 border border-teal-200 text-teal-700 hover:bg-teal-100" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
          >
            {isCompleted ? <CheckCircle size={14} /> : <Circle size={14} />}
            <span>{isCompleted ? "Marked Complete" : "Mark as Studied"}</span>
          </button>
        </div>

        {/* Detailed Study Notes */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 space-y-8 leading-relaxed">
          
          {/* Learning Outcomes block */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Learning Outcomes</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedChapter.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-2 p-3 bg-slate-50/70 border border-slate-100 rounded-xl text-xs text-slate-600">
                  <span className="text-teal-500 font-mono text-xs font-bold leading-none">{idx + 1}.</span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics summaries section */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Key Study Topics
            </h4>
            <div className="space-y-6">
              {selectedChapter.keyTopics.map((topic, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-teal-500 pl-4 py-1">
                  <h5 className="font-display font-medium text-slate-800 text-sm tracking-tight">
                    {topic.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {topic.description}
                  </p>
                  {topic.bullets && topic.bullets.length > 0 && (
                    <ul className="list-disc list-outside pl-4 text-xs text-slate-500 space-y-1.5 mt-2">
                      {topic.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Workplace Dos and Don'ts grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Workplace Guidelines Code</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Do panel */}
              <div className="bg-teal-50/30 border border-teal-100 rounded-2xl p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider font-mono">
                  <ShieldCheck size={16} />
                  <span>The Pro-Do Behavior Plan</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {selectedChapter.dosAndDonts.map((pair, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-teal-600 text-sm leading-none font-bold">✓</span>
                      <span>{pair.doText}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Don't panel */}
              <div className="bg-rose-50/20 border border-rose-100 rounded-2xl p-5 space-y-3.5">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider font-mono">
                  <Frown size={16} className="text-rose-500" />
                  <span>What is Strictly Forbidden</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {selectedChapter.dosAndDonts.map((pair, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-rose-500 text-sm leading-none font-bold">✗</span>
                      <span>{pair.dontText}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Textbook Terms match-preview */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Core Glossary Terms
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedChapter.keyTerms.map((term, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-100/80 border border-slate-200/50 rounded-xl px-3 py-2 text-xs text-slate-700 font-mono"
                >
                  <span className="font-semibold text-slate-900 border-r border-slate-300 pr-2 mr-2">{term.term}</span>
                  <span className="text-slate-500 text-[11px] font-sans">{term.definition}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={selectedChapterId === 1}
            className="cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs"
          >
            <ArrowLeft size={16} />
            <span>Previous Chapter</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={selectedChapterId === chapters.length}
            className="cursor-pointer bg-white disabled:opacity-40 disabled:cursor-not-allowed border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs ml-auto"
          >
            <span>Next Chapter</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
