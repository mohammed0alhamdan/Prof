import { QuizQuestion } from "../types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    chapterId: 1,
    question: "Which term describes an individual's belief in their ability to perform a specific task successfully?",
    options: [
      "Self-concept",
      "Self-efficacy",
      "Self-image",
      "Projection"
    ],
    correctAnswerIndex: 1,
    explanation: "Self-efficacy (Chapter 1) specifically represents your internal belief in your own ability to successfully complete a task (e.g. math skills, presentation delivery)."
  },
  {
    id: 2,
    chapterId: 1,
    question: "If an individual believes that external forces, luck, or other people determine their career outcomes, they have which of the following?",
    options: [
      "Internal locus of control",
      "External locus of control",
      "Strong self-efficacy",
      "Personal brand"
    ],
    correctAnswerIndex: 1,
    explanation: "An external locus of control (Chapter 1) means you believe outside forces control your future, whereas an internal locus means you believe you control your own future."
  },
  {
    id: 3,
    chapterId: 2,
    question: "To calculate your Net Worth, you should use which formula?",
    options: [
      "Gross Income - Taxes = Net Income",
      "Total Assets - Total Liabilities = Net Worth",
      "Fixed Expenses + Flexible Expenses = Net Worth",
      "Cash coming in - Credit bills = Net Worth"
    ],
    correctAnswerIndex: 1,
    explanation: "Net Worth (Chapter 2) is calculated as Total Assets (what you personally own that is worth money) minus Total Liabilities (your personal debts/what you owe)."
  },
  {
    id: 4,
    chapterId: 2,
    question: "What is the standard score range for Fair Isaac Corporation (FICO) credit ratings used by lenders?",
    options: [
      "100–500",
      "500–1000",
      "300–850",
      "1–10"
    ],
    correctAnswerIndex: 2,
    explanation: "FICO credit scores (Chapter 2) range from 300 to 850. Higher scores demonstrate lower risk to credit lenders."
  },
  {
    id: 5,
    chapterId: 3,
    question: "Which of the following stress types represents a healthy, productive force that drives focus and task achievement?",
    options: [
      "Positive stress",
      "Negative stress",
      "Job burnout",
      "Chronic stress"
    ],
    correctAnswerIndex: 0,
    explanation: "Positive stress (Chapter 3) is a healthy, productive stress that gives you the physical or mental strength on a short-term basis to complete a target project."
  },
  {
    id: 6,
    chapterId: 4,
    question: "What is the standard conservative 'rule of thumb' for professional attire when looking to climb the company ladder?",
    options: [
      "Dress exactly like your direct coworkers",
      "Dress at least one position higher than your current role (dress like your boss)",
      "Always wear double-breasted formal suits daily",
      "Comfort is everything, dress as casually as permissible"
    ],
    correctAnswerIndex: 1,
    explanation: "The global rule of thumb for professional dress (Chapter 4) is to dress at least one position higher than your current role, which signals and communicates career readiness."
  },
  {
    id: 7,
    chapterId: 5,
    question: "Which type of power is directly derived from possessing rare, essential technical skills or knowledge?",
    options: [
      "Legitimate power",
      "Reward power",
      "Charismatic power",
      "Expert power"
    ],
    correctAnswerIndex: 3,
    explanation: "Expert power (Chapter 5) is personal influence earned through your unique knowledge, skills, or analytical certifications (like a rare programmer, or senior repair tech)."
  },
  {
    id: 8,
    chapterId: 5,
    question: "What is the second checklist level in evaluating if a choice is ethical?",
    options: [
      "Is the action legal?",
      "Is the action fair to all parties involved?",
      "Does the behavior make you feel good?",
      "Has my boss approved the outcome?"
    ],
    correctAnswerIndex: 1,
    explanation: "The three levels of ethical decisions (Chapter 5) are: 1) Is the action legal? 2) Is it fair to all involved? 3) Does it make you feel good (conscience check)?"
  },
  {
    id: 9,
    chapterId: 6,
    question: "What refers to the reporting back of results to whoever empowered or authorized you to carry out a specific task?",
    options: [
      "Responsibility",
      "Delegation",
      "Accountability",
      "Empowerment"
    ],
    correctAnswerIndex: 2,
    explanation: "Accountability (Chapter 6) specifically represents reporting back to whoever empowered you to carry out a task, closing the responsibility feedback loop."
  },
  {
    id: 10,
    chapterId: 7,
    question: "A company's Mission, Vision, and Values statements are collectively known as its ________?",
    options: [
      "Performance guides",
      "Strategic plans",
      "Directional statements",
      "Operational budgets"
    ],
    correctAnswerIndex: 2,
    explanation: "Directional statements (Chapter 7) is the collective term for a company's Mission, Vision, and Values statements."
  },
  {
    id: 11,
    chapterId: 8,
    question: "What is the legal doctrine that allows an employee to quit or an employer to terminate employment at any time for any legal reason?",
    options: [
      "Introductory Period",
      "Employment-at-will",
      "Right to Revise",
      "Collective Bargaining"
    ],
    correctAnswerIndex: 1,
    explanation: "Employment-at-will (Chapter 8) means that the relationship can be dissolved by either party at any time, without a specified contract term, provided it is not for an illegal discriminatory reason."
  },
  {
    id: 12,
    chapterId: 9,
    question: "In the communication loop, what term represents the process of a sender translating thoughts into symbols, words, or formats?",
    options: [
      "Decoding",
      "Feedback",
      "Encoding",
      "Gossip"
    ],
    correctAnswerIndex: 2,
    explanation: "Encoding (Chapter 9) is the sender's process of turning an abstract idea into physical symbols, spoken words, or written memos."
  },
  {
    id: 13,
    chapterId: 11,
    question: "According to Maslow's Hierarchy of Needs, what level represent basic paycheck wages in the workplace?",
    options: [
      "Physiological needs",
      "Safety needs",
      "Social-Informal groups",
      "Self-Esteem"
    ],
    correctAnswerIndex: 0,
    explanation: "In workplace adaptations of Maslow (Chapter 11), Physiological needs map directly to receiving basic wages to cover fundamental food, shelter, and survival."
  },
  {
    id: 14,
    chapterId: 12,
    question: "Which conflict management style allows the other party to have their way because preserving the relationship is a massive priority?",
    options: [
      "Forcing style",
      "Avoiding style",
      "Accommodating style",
      "Collaborating style"
    ],
    correctAnswerIndex: 2,
    explanation: "The Accommodating style (Chapter 12) is used when you cooperate completely and allow the other party to have their way, prioritizing relationship cohesion over personal goals."
  },
  {
    id: 15,
    question: "Which resume format is highly recommended for fresh graduates with minimal extensive industry-focused chronological employment history?",
    chapterId: 14,
    options: [
      "Reverse chronological layout",
      "Functional resume layout",
      "Advanced skill-set layout",
      "Bento grid template"
    ],
    correctAnswerIndex: 1,
    explanation: "A Functional resume layout (Chapter 14) is specifically recommended for entry-level candidates because it groups and highlights relevant skill sets and education before chronological dates."
  }
];
