import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Award, HelpCircle, Flame, Clock } from "lucide-react";
import { ChapterSummary, StudyProgress } from "../types";

interface DashboardProps {
  chapters: ChapterSummary[];
  progress: StudyProgress;
  onNavigate: (tab: string, arg?: any) => void;
}

const PROFESSIONAL_QUOTES = [
  { text: "Professionalism is defined as workplace behaviors that result in positive business relationships.", author: "L Anderson & S Bolt" },
  { text: "Your attitude is the mirror of your personal goals and your workplace behavior.", author: "L Anderson & S Bolt" },
  { text: "Self-efficacy is your strong belief in your personal ability to perform a task.", author: "L Anderson & S Bolt" },
  { text: "A successful negotiation results in a win-win solution where both parties leave satisfied.", author: "Chapter 12: Conflict" },
  { term: "Locus of Control", text: "Knowing who controls your future keeps you active, positive, and accountable.", author: "Chapter 1: Self-Management" }
];

export default function Dashboard({ chapters, progress, onNavigate }: DashboardProps) {
  const [quote, setQuote] = useState(PROFESSIONAL_QUOTES[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PROFESSIONAL_QUOTES.length);
    setQuote(PROFESSIONAL_QUOTES[randomIndex]);
  }, []);

  const totalChaptersCount = chapters.length;
  const completedChaptersCount = progress.chaptersCompleted.length;
  const completionPercentage = Math.round((completedChaptersCount / totalChaptersCount) * 100);

  // Group chapters by module
  const modulesMap = chapters.reduce((acc, chapter) => {
    if (!acc[chapter.module]) {
      acc[chapter.module] = [];
    }
    acc[chapter.module].push(chapter);
    return acc;
  }, {} as Record<string, ChapterSummary[]>);

  const getModuleProgress = (moduleName: string) => {
    const moduleChapters = modulesMap[moduleName] || [];
    const completed = moduleChapters.filter(c => progress.chaptersCompleted.includes(c.id)).length;
    return {
      completed,
      total: moduleChapters.length,
      percentage: Math.round((completed / (moduleChapters.length || 1)) * 100)
    };
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Welcome Unit */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-teal-950/20">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <GraduationCap size={240} className="transform translate-x-12 translate-y-12" />
        </div>
        
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-800/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-teal-500/30">
            <Clock size={12} />
            <span>Study Hub Active • Final Exam Prep</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
            Professionalism Study Suite
          </h1>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Your comprehensive final exam training tool, strictly compiled from the fourth edition of <span className="font-medium text-white underline decoration-teal-300">Anderson & Bolt's Professionalism: Skills for Workplace Success</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onNavigate("summaries")}
              className="bg-white hover:bg-teal-50 text-teal-800 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md active:scale-95"
            >
              Start Reviewing summaries
            </button>
            <button 
              onClick={() => onNavigate("matching")}
              className="bg-teal-600 hover:bg-teal-500 hover:border-teal-400 border border-teal-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all active:scale-95"
            >
              Test Vocabulary
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-slate-500 text-sm font-medium">Chapter Master Progress</span>
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
              <BookOpen size={20} />
            </div>
          </div>
          <div className="my-6">
            <div className="text-3xl font-display font-semibold text-slate-800">
              {completedChaptersCount} <span className="text-base font-normal text-slate-400">/ {totalChaptersCount} Checked</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-teal-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${completionPercentage}%` }} 
              />
            </div>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {completionPercentage}% of the entire textbook mastered
          </div>
        </div>

        {/* Quiz High Score Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-slate-500 text-sm font-medium">Interactive Practice Exam</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <HelpCircle size={20} />
            </div>
          </div>
          <div className="my-6">
            <div className="text-3xl font-display font-semibold text-slate-800">
              {progress.quizHighScore}% <span className="text-base font-normal text-slate-400">Best Score</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Based on actual multiple-choice and conceptual evaluation parameters. Tested on all modules.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("quiz")}
            className="text-xs text-amber-700 font-mono font-semibold hover:underline flex items-center gap-1 mt-auto"
          >
            Launch Exam Simulator →
          </button>
        </div>

        {/* Vocabulary Match card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-slate-500 text-sm font-medium">Vocabulary Term Matches</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Award size={20} />
            </div>
          </div>
          <div className="my-6">
            <div className="text-3xl font-display font-semibold text-slate-800">
              {progress.termsMatchedCount} <span className="text-base font-normal text-slate-400">Glossary Matches</span>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Verify matching key terms to professional definitions directly derived from book self-quizzes.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("matching")}
            className="text-xs text-blue-700 font-mono font-semibold hover:underline flex items-center gap-1 mt-auto"
          >
            Play Glossary Match →
          </button>
        </div>
      </div>

      {/* Quote of the Day Block */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex items-start gap-4">
        <div className="bg-slate-200/50 p-2.5 rounded-xl text-slate-600">
          <Flame size={18} />
        </div>
        <div className="space-y-1">
          <span className="text-slate-400 text-xs font-mono font-medium block">CORE TEXTBOOK CONCEPT</span>
          <p className="text-slate-700 font-mono text-xs italic leading-relaxed">
            "{quote.text}"
          </p>
          <span className="text-slate-500 text-xs font-medium block">— {quote.author}</span>
        </div>
      </div>

      {/* Module Overview & Fast Travel Map */}
      <div className="space-y-4">
        <h2 className="text-lg font-display font-medium text-slate-800">Fast Study Map by Module</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(modulesMap).map((moduleName) => {
            const modProgress = getModuleProgress(moduleName);
            const modChapters = modulesMap[moduleName];
            return (
              <div 
                key={moduleName}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:border-teal-200/80 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-medium text-slate-800 text-sm tracking-tight">{moduleName}</h3>
                  <p className="text-xs text-slate-400 mt-1 mb-4">{modChapters.length} chapters loaded</p>
                  
                  <div className="space-y-2.5">
                    {modChapters.map(chapter => {
                      const isComplete = progress.chaptersCompleted.includes(chapter.id);
                      return (
                        <div 
                          key={chapter.id}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-xs"
                        >
                          <button 
                            onClick={() => onNavigate("summaries", chapter.id)}
                            className="text-left font-medium text-slate-700 hover:text-teal-600 cursor-pointer max-w-[200px] truncate"
                          >
                            Ch {chapter.number}: {chapter.title}
                          </button>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                            isComplete ? "bg-teal-50 text-teal-600" : "bg-slate-100 text-slate-400"
                          }`}>
                            {isComplete ? "Completed" : "Not studied"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-100/80 pt-4 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Class Progress:</span>
                  <span className="font-semibold text-slate-700">{modProgress.percentage}% Mastered</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
