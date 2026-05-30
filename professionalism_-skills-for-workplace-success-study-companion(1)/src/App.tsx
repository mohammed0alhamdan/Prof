import { useState, useEffect } from "react";
import { BookOpen, Award, Layers, HelpCircle, FileText, LayoutDashboard, CheckCircle, Download, X } from "lucide-react";
import { chaptersData } from "./data/chaptersData";
import { quizQuestions } from "./data/quizData";
import { StudyProgress } from "./types";
import Dashboard from "./components/Dashboard";
import ChapterDetails from "./components/ChapterDetails";
import QuizSimulator from "./components/QuizSimulator";
import MatchingTerms from "./components/MatchingTerms";
import StudyGuideGenerator from "./components/StudyGuideGenerator";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [selectedSummariesChapter, setSelectedSummariesChapter] = useState<number | undefined>(undefined);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);
  const [showiOSInstructions, setShowiOSInstructions] = useState<boolean>(false);
  
  const [progress, setProgress] = useState<StudyProgress>({
    chaptersCompleted: [],
    quizHighScore: 0,
    termsMatchedCount: 0
  });

  // Load progress on initial render and listen for PWA install state
  useEffect(() => {
    try {
      const storedCompleted = localStorage.getItem("chaptersCompleted");
      const storedQuiz = localStorage.getItem("quizHighScore");
      const storedMatched = localStorage.getItem("termsMatchedCount");

      setProgress({
        chaptersCompleted: storedCompleted ? JSON.parse(storedCompleted) : [],
        quizHighScore: storedQuiz ? parseInt(storedQuiz, 10) : 0,
        termsMatchedCount: storedMatched ? parseInt(storedMatched, 10) : 0
      });
    } catch (e) {
      console.error("Local storage error:", e);
    }

    // Handle standard browser install prompt event
    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    // Detect iOS to display custom manual installation tips
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone;
    if (isIOS && !isStandalone) {
      setShowiOSInstructions(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleToggleComplete = (id: number) => {
    setProgress(prev => {
      const isComplete = prev.chaptersCompleted.includes(id);
      const updated = isComplete
        ? prev.chaptersCompleted.filter(cId => cId !== id)
        : [...prev.chaptersCompleted, id];
      
      try {
        localStorage.setItem("chaptersCompleted", JSON.stringify(updated));
      } catch (e) {
        console.error("Error saving completed chapters:", e);
      }

      return {
        ...prev,
        chaptersCompleted: updated
      };
    });
  };

  const handleMatchedCountIncrement = (count: number) => {
    setProgress(prev => {
      const updated = prev.termsMatchedCount + count;
      try {
        localStorage.setItem("termsMatchedCount", updated.toString());
      } catch (e) {
        console.error("Error saving term matches count:", e);
      }
      return {
        ...prev,
        termsMatchedCount: updated
      };
    });
  };

  const handleQuizFinished = (score: number) => {
    setProgress(prev => {
      const isHighScore = score > prev.quizHighScore;
      if (isHighScore) {
        try {
          localStorage.setItem("quizHighScore", score.toString());
        } catch (e) {
          console.error("Error saving quiz score:", e);
        }
      }
      return {
        ...prev,
        quizHighScore: isHighScore ? score : prev.quizHighScore
      };
    });
  };

  const handleNavigate = (tab: string, arg?: any) => {
    setActiveTab(tab);
    if (tab === "summaries" && typeof arg === "number") {
      setSelectedSummariesChapter(arg);
    } else {
      setSelectedSummariesChapter(undefined);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans tracking-normal">
      {/* Premium Professionalism Header bar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-teal-600 text-white p-2 rounded-xl flex items-center justify-center">
              <Award size={18} />
            </div>
            <div>
              <span className="font-display font-bold text-slate-800 tracking-tight text-sm sm:text-base">
                Workplace Success
              </span>
              <span className="text-[10px] font-mono text-teal-600 font-semibold uppercase tracking-widest block leading-none">
                Study Companion
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Install Web App Button */}
            {showInstallPrompt && (
              <button
                onClick={handleInstallClick}
                className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs py-1.5 px-3 rounded-xl flex items-center gap-2 transition-all shadow-sm shadow-teal-100 shrink-0"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Download App</span>
                <span className="sm:hidden">Install</span>
              </button>
            )}

            <div className="text-[10px] sm:text-xs font-mono text-slate-400 bg-slate-100/60 px-3 py-1.5 rounded-xl border border-slate-200/40 shrink-0">
              Current Session: <span className="text-teal-600 font-bold">{progress.chaptersCompleted.length} mastered</span>
            </div>
          </div>
        </div>
      </header>

      {/* iOS App installation Manual Help Banner */}
      {showiOSInstructions && (
        <div className="bg-teal-50 border-b border-teal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs text-teal-800 font-sans gap-4">
            <div className="flex items-center gap-2">
              <Download size={14} className="text-teal-600 animate-pulse shrink-0" />
              <span>
                To install this companion on your iPhone/iPad: tap the **Share** button below and match **"Add to Home Screen"**.
              </span>
            </div>
            <button 
              onClick={() => setShowiOSInstructions(false)}
              className="text-teal-500 hover:text-teal-700 cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Fallback Install Prompt Banner for Desktop Safari & others */}
      {!showInstallPrompt && !showiOSInstructions && (
        <div className="bg-slate-100/80 border-b border-slate-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-[11px] text-slate-500 font-sans gap-4">
            <span>
              💡 <strong>Downloadable Desktop & Mobile App:</strong> This applet supports full offline mode. Pin or install it via your browser's search/URL bar icon menu!
            </span>
            <span className="font-mono text-teal-600 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200">PWA Ready</span>
          </div>
        </div>
      )}

      {/* Navigation Sub-header / Tabs list */}
      <div className="bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => handleNavigate("dashboard")}
              className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium font-sans shrink-0 transition-all ${
                activeTab === "dashboard"
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <LayoutDashboard size={14} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => handleNavigate("summaries")}
              className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium font-sans shrink-0 transition-all ${
                activeTab === "summaries"
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Layers size={14} />
              <span>Chapter Summaries</span>
            </button>
            <button
              onClick={() => handleNavigate("matching")}
              className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium font-sans shrink-0 transition-all ${
                activeTab === "matching"
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Award size={14} />
              <span>Vocabulary Match</span>
            </button>
            <button
              onClick={() => handleNavigate("quiz")}
              className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium font-sans shrink-0 transition-all ${
                activeTab === "quiz"
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <HelpCircle size={14} />
              <span>Practice Exam</span>
            </button>
            <button
              onClick={() => handleNavigate("generator")}
              className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium font-sans shrink-0 transition-all ${
                activeTab === "generator"
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <FileText size={14} />
              <span>Compile Study Guide</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {activeTab === "dashboard" && (
          <Dashboard 
            chapters={chaptersData} 
            progress={progress} 
            onNavigate={handleNavigate} 
          />
        )}
        
        {activeTab === "summaries" && (
          <ChapterDetails 
            chapters={chaptersData} 
            initialChapterId={selectedSummariesChapter}
            completedChapters={progress.chaptersCompleted}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeTab === "matching" && (
          <MatchingTerms 
            chapters={chaptersData} 
            onMatchedCountIncrement={handleMatchedCountIncrement} 
          />
        )}

        {activeTab === "quiz" && (
          <QuizSimulator 
            questions={quizQuestions} 
            onQuizFinished={handleQuizFinished} 
          />
        )}

        {activeTab === "generator" && (
          <StudyGuideGenerator 
            chapters={chaptersData} 
          />
        )}
      </main>

      {/* Professional Footer Bar */}
      <footer className="bg-white border-t border-slate-200/60 py-6 text-center text-xs text-slate-400 font-mono select-none">
        <span>© 2026 Academic Companion. Grounded in Anderson & Bolt's Workplace Success Framework.</span>
      </footer>
    </div>
  );
}
