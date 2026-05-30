export interface KeyTerm {
  term: string;
  definition: string;
  chapterId: number;
}

export interface DoDont {
  doText: string;
  dontText: string;
}

export interface ChapterSummary {
  id: number;
  number: number;
  title: string;
  module: string;
  shortDescription: string;
  learningOutcomes: string[];
  keyTopics: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
  dosAndDonts: DoDont[];
  keyTerms: KeyTerm[];
}

export interface QuizQuestion {
  id: number;
  chapterId: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface StudyProgress {
  chaptersCompleted: number[];
  quizHighScore: number;
  termsMatchedCount: number;
}
