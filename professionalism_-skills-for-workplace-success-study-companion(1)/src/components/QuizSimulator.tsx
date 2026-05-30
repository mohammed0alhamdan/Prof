import { useState } from "react";
import { QuizQuestion } from "../types";
import { CheckCircle, XCircle, Award, RefreshCw, HelpCircle, ArrowRight, ListChecks, Play } from "lucide-react";

interface QuizSimulatorProps {
  questions: QuizQuestion[];
  onQuizFinished: (score: number) => void;
}

export default function QuizSimulator({ questions, onQuizFinished }: QuizSimulatorProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [incorrectList, setIncorrectList] = useState<{ question: string; chapterId?: number; correctOpt: string }[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const startQuiz = () => {
    setIsStarted(true);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setIncorrectList([]);
    setQuizFinished(false);
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    const question = questions[currentIdx];
    if (optionIdx === question.correctAnswerIndex) {
      setCorrectAnswersCount(prev => prev + 1);
    } else {
      setIncorrectList(prev => [
        ...prev,
        {
          question: question.question,
          chapterId: question.chapterId,
          correctOpt: question.options[question.correctAnswerIndex]
        }
      ]);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Calculate final score
      const finalScorePercentage = Math.round((correctAnswersCount / questions.length) * 100);
      onQuizFinished(finalScorePercentage);
      setQuizFinished(true);
    }
  };

  const activeQuestion = questions[currentIdx];

  // Grade messages
  const getGradeRating = (percentage: number) => {
    if (percentage === 100) return { title: "Outstanding Professional", text: "You have completely mastered all workplace basics!" };
    if (percentage >= 85) return { title: "Exam-Ready Expert", text: "Stellar performance! You are fully prepared for the final exam." };
    if (percentage >= 70) return { title: "Competent Coordinator", text: "Good grasp! Consider reviewing the chapters you missed." };
    return { title: "Development Phase", text: "Keep studying. Focus heavily on 'Workplace Guidelines Code'." };
  };

  // Start Screen
  if (!isStarted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 mx-auto">
          <HelpCircle size={32} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-medium text-slate-800">Workplace Professionalism Practice Exam</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Test your alignment with Anderson & Bolt's fourth edition guidelines. This test compiles 15 highly relevant multiple-choice questions covering all modules.
          </p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-4 text-xs text-slate-500 font-mono flex items-center justify-around">
          <div>• 15 Questions</div>
          <div>• Immediate Explanations</div>
          <div>• Direct Grading</div>
        </div>
        <button
          onClick={startQuiz}
          className="cursor-pointer bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-xl transition-all flex items-center gap-2 mx-auto active:scale-95 shadow-md shadow-teal-600/10"
        >
          <Play size={16} />
          <span>Launch Practice Test</span>
        </button>
      </div>
    );
  }

  // Finished Screen
  if (quizFinished) {
    const scorePct = Math.round((correctAnswersCount / questions.length) * 100);
    const rating = getGradeRating(scorePct);
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center space-y-6">
          <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 mx-auto">
            <Award size={32} />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-mono font-semibold text-teal-600 uppercase tracking-widest">Practice Exam Finished</div>
            <div className="text-5xl font-display font-extrabold text-slate-800">{scorePct}%</div>
            <h3 className="text-lg font-semibold text-slate-700 pt-2">{rating.title}</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              {rating.text} ({correctAnswersCount} out of {questions.length} correct).
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={startQuiz}
              className="cursor-pointer bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2 active:scale-95 shadow-md"
            >
              <RefreshCw size={14} />
              <span>Retry Practice Test</span>
            </button>
          </div>
        </div>

        {/* Incorrect list for feedback */}
        {incorrectList.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
            <h4 className="text-sm font-display font-semibold text-slate-800 flex items-center gap-2">
              <ListChecks size={18} className="text-teal-600" />
              <span>Targeted Topics to Review Before the Exam</span>
            </h4>
            <div className="divide-y divide-slate-100">
              {incorrectList.map((item, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 text-xs space-y-1">
                  <div className="font-medium text-slate-800">{item.question}</div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span>Correct Choice:</span>
                    <span className="font-mono text-teal-600 font-semibold">{item.correctOpt}</span>
                    {item.chapterId && (
                      <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px] font-mono">
                        Chapter {item.chapterId}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Progress metrics and quiz header */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-xs flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest">Exam Progress</div>
          <div className="text-sm font-semibold text-slate-800">
            Question {currentIdx + 1} <span className="text-slate-400">/ {questions.length}</span>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200/50 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-600">
          Accuracy: <span className="text-teal-600 font-bold">{Math.round((correctAnswersCount / (currentIdx || 1)) * 100)}%</span>
        </div>
      </div>

      {/* Main Question Unit */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
        {/* Topic pointer if chapterId exists */}
        {activeQuestion.chapterId && (
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-100 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium">
            Core Target: Chapter {activeQuestion.chapterId}
          </span>
        )}

        <h3 className="text-base sm:text-lg font-sans font-medium text-slate-800 leading-snug">
          {activeQuestion.question}
        </h3>

        {/* Multiple choice grid */}
        <div className="space-y-2.5">
          {activeQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === activeQuestion.correctAnswerIndex;
            const displayCorrect = isAnswered && isCorrect;
            const displayWrong = isAnswered && isSelected && !isCorrect;

            let buttonStyles = "border border-slate-200 hover:bg-slate-50/50 text-slate-700 bg-white";
            if (isSelected) buttonStyles = "border-teal-500 bg-teal-50 text-teal-800";
            if (displayCorrect) buttonStyles = "border-teal-500 bg-teal-500 text-white font-medium";
            if (displayWrong) buttonStyles = "border-rose-500 bg-rose-500 text-white font-medium";

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`cursor-pointer w-full text-left p-4 rounded-xl text-xs sm:text-sm flex items-center justify-between transition-all active:scale-98 ${buttonStyles}`}
              >
                <span>{option}</span>
                {displayCorrect && <CheckCircle size={14} className="text-white shrink-0" />}
                {displayWrong && <XCircle size={14} className="text-white shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Dynamic Explanation Panel */}
        {isAnswered && (
          <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm leading-relaxed animate-fade-in">
            <div className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <span>Textbook Explanatory Guide</span>
            </div>
            <p className="text-slate-600 font-sans">
              {activeQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Action Footer bar */}
      <div className="flex items-center justify-end">
        {isAnswered && (
          <button
            onClick={handleNext}
            className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
          >
            <span>{currentIdx + 1 === questions.length ? "Finish Practice Test" : "Next Question"}</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
