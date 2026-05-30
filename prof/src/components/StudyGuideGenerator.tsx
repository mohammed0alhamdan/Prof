import { useState, useRef } from "react";
import { ChapterSummary } from "../types";
import { Download, Clipboard, FileText, Settings, BadgeAlert, CheckCircle } from "lucide-react";

interface StudyGuideGeneratorProps {
  chapters: ChapterSummary[];
}

export default function StudyGuideGenerator({ chapters }: StudyGuideGeneratorProps) {
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "Module 1: Self-Management",
    "Module 2: Workplace Basics",
    "Module 3: Relationships",
    "Module 4: Career Planning Tools"
  ]);

  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [showKeyOutcomes, setShowKeyOutcomes] = useState<boolean>(true);
  const [showDosDonts, setShowDosDonts] = useState<boolean>(true);
  const [showKeyGlossary, setShowKeyGlossary] = useState<boolean>(true);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const documentRef = useRef<HTMLDivElement>(null);

  const toggleModule = (moduleName: string) => {
    setSelectedModules(prev =>
      prev.includes(moduleName)
        ? prev.filter(m => m !== moduleName)
        : [...prev, moduleName]
    );
  };

  const filteredChapters = chapters.filter(c => selectedModules.includes(c.module));

  const copyToClipboard = () => {
    if (!documentRef.current) return;
    const textToCopy = documentRef.current.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    });
  };

  const printDocument = () => {
    window.print();
  };

  const textSizes = {
    sm: "text-xs space-y-4",
    base: "text-sm space-y-6",
    lg: "text-base space-y-8"
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
      {/* Control Configuration Panel */}
      <div className="xl:col-span-1 space-y-6 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm self-start">
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-slate-800 text-sm tracking-tight flex items-center gap-1.5">
            <Settings size={18} className="text-teal-600" />
            <span>Document Builder</span>
          </h3>
          <p className="text-slate-400 text-xs">Configure parameters for your private exam study guide.</p>
        </div>

        {/* Modules inclusion checks */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100">
          <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
            Include Modules
          </label>
          {Array.from(new Set(chapters.map(c => c.module))).map(moduleName => {
            const isIncluded = selectedModules.includes(moduleName);
            return (
              <button
                key={moduleName}
                onClick={() => toggleModule(moduleName)}
                className={`cursor-pointer w-full text-left p-3 rounded-xl border text-xs font-sans tracking-tight transition-all flex items-center gap-2.5 ${
                  isIncluded
                    ? "border-teal-200 bg-teal-50/20 text-teal-800 font-medium"
                    : "border-slate-100 text-slate-500 hover:bg-slate-50"
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center shrink-0 ${
                  isIncluded ? "bg-teal-500 border-teal-500 text-white" : "border-slate-300"
                }`}>
                  {isIncluded && <span className="text-[9px] font-bold">✓</span>}
                </div>
                <span className="truncate">{moduleName}</span>
              </button>
            );
          })}
        </div>

        {/* Visibility fields checks */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
            Toggle Sections
          </label>
          <div className="space-y-2.5">
            <button
              onClick={() => setShowKeyOutcomes(!showKeyOutcomes)}
              className="cursor-pointer flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900"
            >
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${showKeyOutcomes ? "bg-teal-500 border-teal-500" : "border-slate-300"}`}>
                {showKeyOutcomes && <span className="text-white text-[9px] font-bold">✓</span>}
              </div>
              <span>Learning Outcomes</span>
            </button>

            <button
              onClick={() => setShowDosDonts(!showDosDonts)}
              className="cursor-pointer flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900"
            >
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${showDosDonts ? "bg-teal-500 border-teal-500" : "border-slate-300"}`}>
                {showDosDonts && <span className="text-white text-[9px] font-bold">✓</span>}
              </div>
              <span>Dos and Don'ts Grid</span>
            </button>

            <button
              onClick={() => setShowKeyGlossary(!showKeyGlossary)}
              className="cursor-pointer flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900"
            >
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${showKeyGlossary ? "bg-teal-500 border-teal-500" : "border-slate-300"}`}>
                {showKeyGlossary && <span className="text-white text-[9px] font-bold">✓</span>}
              </div>
              <span>Glossary Vocabulary</span>
            </button>
          </div>
        </div>

        {/* Sizing selections */}
        <div className="space-y-2 pt-4 border-t border-slate-100">
          <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
            Text Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["sm", "base", "lg"] as const).map(size => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`cursor-pointer px-2 py-1.5 rounded-xl border text-xs font-medium font-mono uppercase transition-all ${
                  fontSize === size
                    ? "border-teal-500 bg-teal-50 text-teal-600 font-bold"
                    : "border-slate-100 hover:bg-slate-50 text-slate-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Copy / Print actionable elements */}
        <div className="space-y-2 pt-4 border-t border-slate-100">
          <button
            onClick={copyToClipboard}
            className="cursor-pointer w-full bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs sm:text-sm p-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-teal-600/10 active:scale-95"
          >
            <Clipboard size={14} />
            <span>Copy Text to Clipboard</span>
          </button>
          
          <button
            onClick={printDocument}
            className="cursor-pointer w-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm p-3 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Download size={14} />
            <span>Print / Save as PDF</span>
          </button>

          {copiedNotification && (
            <div className="bg-teal-50 border border-teal-200 text-teal-700 p-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 font-sans font-medium animate-fade-in">
              <CheckCircle size={14} />
              <span>Full text copied successfully!</span>
            </div>
          )}
        </div>
      </div>

      {/* Styled Document Preview */}
      <div className="xl:col-span-3 space-y-6">
        {filteredChapters.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-slate-100 shadow-sm text-center space-y-4 font-sans animate-fade-in">
            <div className="text-slate-400 max-w-xs mx-auto">
              <BadgeAlert size={48} className="mx-auto text-amber-500" />
            </div>
            <h3 className="font-display font-medium text-slate-800">Empty Selection</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto">
              You must choose at least one module in the control box to rebuild the study compilation document.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-12 relative">
            
            {/* Printable Document Sheet */}
            <div 
              ref={documentRef}
              className={`${textSizes[fontSize]} text-slate-800 font-sans break-words outline-none`}
            >
              {/* Document Header block */}
              <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
                <div className="text-xs font-mono font-bold tracking-widest text-teal-600 uppercase">
                  COMPLETE CURATED TEXTBOOK STUDY GUIDE
                </div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-none">
                  Professionalism: Skills for Workplace Success
                </h1>
                <p className="text-xs font-mono text-slate-500">
                  Fourth Edition • Summarized and formatted strictly for Final Exam preparation
                </p>
              </div>

              {/* Loop individual chapters */}
              {filteredChapters.map((chapter) => (
                <div key={chapter.id} className="pt-6 border-b border-slate-100 pb-8 space-y-4 last:border-b-0 last:pb-0">
                  
                  {/* Title indicator */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono font-medium text-teal-600 uppercase tracking-widest">
                      {chapter.module}
                    </div>
                    <h2 className="text-lg sm:text-xl font-display font-semibold text-slate-900 leading-none">
                      Chapter {chapter.number}: {chapter.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-3xl leading-relaxed">
                      {chapter.shortDescription}
                    </p>
                  </div>

                  {/* Learning Outcomes visibility toggle */}
                  {showKeyOutcomes && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Learning Outcomes
                      </div>
                      <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-600 space-y-1">
                        {chapter.learningOutcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Core Topics iteration */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Key Study Topics Summary
                    </div>
                    <div className="space-y-4">
                      {chapter.keyTopics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="space-y-1 pl-3 border-l-2 border-slate-300">
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-950 font-display">
                            {topic.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                            {topic.description}
                          </p>
                          {topic.bullets && topic.bullets.length > 0 && (
                            <ul className="list-disc list-outside pl-4 text-[11px] sm:text-xs text-slate-500 space-y-1 mt-1">
                              {topic.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dos & Don'ts list visibility toggle */}
                  {showDosDonts && (
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Workplace Guidelines Behavior Plan
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* DO portion */}
                        <div className="p-3 bg-teal-50/20 border border-teal-100 rounded-xl space-y-2.5">
                          <div className="text-[10px] font-mono font-bold text-teal-700 uppercase tracking-wider">✓ Pro-Do Actions</div>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            {chapter.dosAndDonts.map((pair, pIdx) => (
                              <div key={pIdx} className="flex gap-1.5 items-start">
                                <span className="text-teal-600 font-bold shrink-0">✓</span>
                                <span>{pair.doText}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* DONT portion */}
                        <div className="p-3 bg-rose-50/20 border border-rose-100 rounded-xl space-y-2.5">
                          <div className="text-[10px] font-mono font-bold text-rose-700 uppercase tracking-wider">✗ Strictly Forbidden</div>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            {chapter.dosAndDonts.map((pair, pIdx) => (
                              <div key={pIdx} className="flex gap-1.5 items-start">
                                <span className="text-rose-500 font-bold shrink-0">✗</span>
                                <span>{pair.dontText}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Glossary Term visibility toggle */}
                  {showKeyGlossary && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Chapter Glossary
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {chapter.keyTerms.map((term, tIdx) => (
                          <div 
                            key={tIdx} 
                            className="bg-slate-50 border border-slate-200/50 rounded-lg px-2.5 py-1.5 text-xs font-mono"
                          >
                            <span className="font-bold text-slate-900 border-r border-slate-300 pr-2 mr-2">{term.term}</span>
                            <span className="text-slate-500 font-sans text-[11px]">{term.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
