import { ChapterSummary } from "../types";

export const chaptersData: ChapterSummary[] = [
  {
    id: 1,
    number: 1,
    title: "Attitude, Goal Setting, and Life Management",
    module: "Module 1: Self-Management",
    shortDescription: "Understand the deep connection between personal self-concept, daily attitudes, and professional success through deliberate goal setting.",
    learningOutcomes: [
      "Discover the influence professionalism and positive human relations have on personal, academic, and career success.",
      "Understand how personality, attitude, and values affect your performance and the workplace.",
      "Recognize how self-efficacy and personal branding affect confidence.",
      "Develop a strategy to deal with past negative experiences and barriers.",
      "Apply the SMART method to create and pursue short-term and long-term goals."
    ],
    keyTopics: [
      {
        title: "Self-Concept, Self-Image, and Self-Efficacy",
        description: "Your self-concept is how you view yourself (your intelligence, beauty, potential). Your self-image is how you believe others view you. Self-confidence stands in contrast to conceit, which is a fragile, inflated ego. Most critically, self-efficacy is your strong belief in your ability to perform a specific task successfully.",
        bullets: [
          "Mirror Words: Words you use to describe yourself when looking in a mirror; the bedrock of self-perception.",
          "Projection: Your internal thoughts and self-concept are constantly projected onto how you treat others.",
          "Personal Brand: Reflects key visible and invisible traits you want others to think of when they think of you."
        ]
      },
      {
        title: "Locus of Control & Dealing with Past Baggage",
        description: "An internal locus of control means you believe you shape your own future. An external locus of control means you believe outside forces control your destiny. Overcoming past baggage is essential for career growth.",
        bullets: [
          "Steps to deal with negative baggage: 1) Confront the past (acknowledge the negative event); 2) Practice forgiveness (reconcile in your heart); 3) Move forward (physically write it down and destroy the paper to visualize release)."
        ]
      },
      {
        title: "Learning Styles",
        description: "Every individual processes and digests information differently. Identifying your primary learning style directly increases academic and professional efficiency.",
        bullets: [
          "Visual Learners: Prefer reading, maps, diagrams, and researching.",
          "Auditory Learners: Prefer lectures, listening, and discussing.",
          "Tactile/Kinesthetic Learners: Prefer touch, hands-on application, and physically writing notes."
        ]
      },
      {
        title: "SMART Goal Setting and Life Plans",
        description: "A life plan is a written roadmap targeting goals in career, social/spiritual, financial, and action/recreation spheres. Goals must be divided into short-term (under a year, often called objectives) and long-term (1-10 years).",
        bullets: [
          "S - Specific: Identify exact deliverables, ideally quantifiable.",
          "M - Measurable: Know precisely when the goal is achieved.",
          "A - Achievable: Challenging but realistic, not out of reach.",
          "R - Relevant: Meaningful to you, owned by you and no one else.",
          "T - Time-Based: Associated with a strict deadline or timeframe."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Realize the impact your personality has on workplace performance", dontText: "Assume that everyone thinks and behaves exactly like you" },
      { doText: "Set both short-term and long-term goals in writing", dontText: "Set unrealistic goals that are too difficult to reach" },
      { doText: "Acknowledge and let go of past negative experiences (baggage)", dontText: "Keep telling everyone about a past painful negative experience" }
    ],
    keyTerms: [
      { term: "Self-concept", definition: "An individual's internal perception of himself or herself.", chapterId: 1 },
      { term: "Self-image", definition: "An individual's perception of how others view him or her.", chapterId: 1 },
      { term: "Self-efficacy", definition: "Your belief in your personal ability to perform a specific task.", chapterId: 1 },
      { term: "Locus of Control", definition: "Identifies who you believe controls your future (internal vs external).", chapterId: 1 },
      { term: "Trade-off", definition: "Giving up one thing to do something else.", chapterId: 1 },
      { term: "Professionalism", definition: "Workplace behaviors that result in positive business relationships.", chapterId: 1 }
    ]
  },
  {
    id: 2,
    number: 2,
    title: "Personal Financial Management",
    module: "Module 1: Self-Management",
    shortDescription: "Master control over personal finances, budgeting, debt, and shields against fraud to ensure workplace focus and performance.",
    learningOutcomes: [
      "Explain the significance of money management and budgeting on career and personal success.",
      "Distinguish wise uses of credit and identify useful debt management resources.",
      "Evaluate options for funding college education responsibly.",
      "Understand the massive long-term impact of credit scores and credit reports.",
      "Implement steps to safeguard personal documents and prevent identity theft."
    ],
    keyTopics: [
      {
        title: "Budgeting and Cash Management",
        description: "Personal finance is the process of controlling personal income (money coming in) and expenses (money going out). A budget is a detailed plan allocating expected income to exact expenditure columns over a specific timeframe.",
        bullets: [
          "Gross Income: Your total earned wages before taxes and deductions are removed.",
          "Net Income: True take-home pay available for actual budgeting.",
          "Fixed Expenses: Non-changing payments like rent, mortgage, or car loans.",
          "Flexible/Variable Expenses: Changing payments like food, entertainment, utilities.",
          "Money Wasters: Small recurring expenditures (e.g. daily specialty coffee) that drain massive funds over time."
        ]
      },
      {
        title: "Net Worth, Debt, and Student Loans",
        description: "Maintaining a positive Net Worth is a primary wealth metric. Debt is money owed, representing a negative drag on assets.",
        bullets: [
          "Formula: Total Assets (what you own) - Total Liabilities (what you owe) = Net Worth.",
          "Avoid Debt Traps: Only purchase what you can immediately afford; prioritize debt repayment.",
          "Federal Student Loans: Funded by government, fixed rates, no credit check, deferment benefits.",
          "Private Student Loans: Provided by private lenders, variable rates, credit check/cosigner required."
        ]
      },
      {
        title: "Credit Reports and FICO Scores",
        description: "Lenders evaluate potential borrow suitability using the 'Four Cs': Character (past payment behavior), Capacity (salary/ability to repay), Collateral (security assets), and Condition (broader economic status).",
        bullets: [
          "Credit Report: A highly detailed, long-term history of your credit card payments, loans, and legal financial marks.",
          "FICO Score: A consolidated rating system ranging from 300 to 850. Higher scores mean lower interest rates.",
          "Annual Bureau Access: Under Federal law, copy access is guaranteed free once every 12 months from Equifax, Experian, and TransUnion."
        ]
      },
      {
        title: "Identity Theft Prevention",
        description: "Identity theft occurs when another individual utilizes your specialized personal data (SSN, birthdate, birth location) to open fraudulent accounts.",
        bullets: [
          "Protection: Protect your SSN, shred junk credit offers, review bank statements monthly, verify secure site lock icons (SSL), and document communication if targeted."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Keep a strict personal budget and adjust it monthly", dontText: "Use credit cards unwisely on frivolous, emotional purchases" },
      { doText: "Start saving and building an emergency fund immediately", dontText: "Ignore errors on credit reports or neglect checking them" },
      { doText: "Guard your Social Security Number and shred personal papers", dontText: "Lend large sums of money or cosign loans without knowing the risks" }
    ],
    keyTerms: [
      { term: "Gross income", definition: "Money earned before taxes and other payments are subtracted.", chapterId: 2 },
      { term: "Net income", definition: "Your actual take-home pay after taxes and deductions are removed.", chapterId: 2 },
      { term: "Liability", definition: "A financial debt or obligation you are legally responsible to pay.", chapterId: 2 },
      { term: "Net worth", definition: "The total value of your personal assets minus your liabilities.", chapterId: 2 },
      { term: "FICO score", definition: "A highly significant credit evaluation score ranging from 300 to 850.", chapterId: 2 },
      { term: "Money wasters", definition: "Small, seemingly minor expenses that drain cash quickly.", chapterId: 2 }
    ]
  },
  {
    id: 3,
    number: 3,
    title: "Time and Stress Management and Organization Skills",
    module: "Module 1: Self-Management",
    shortDescription: "Apply proven organizational strategies, manage stressful workplace pressures, and defeat chronic procrastination.",
    learningOutcomes: [
      "Analyze the direct negative impact stress has on workplace safety and team productivity.",
      "Differentiate between positive stress, negative stress, and severe job burnout.",
      "Identify and utilize practical daily time management tools.",
      "Deconstruct causes of procrastination and formulate techniques to overcome them.",
      "Implement systems to organize a personal workspace, computer files, and email folders."
    ],
    keyTopics: [
      {
        title: "The Mechanics of Stress",
        description: "Stress is your physiological reaction to tense environments. It has severe real-world costs—costing businesses estimated hundreds of billions annually due to absenteeism and illness.",
        bullets: [
          "Positive Stress: Healthy pressure (e.g. adrenaline, deadlines) that drives focus and task achievement.",
          "Negative Stress: Unrelieving pressure that causes emotional outbursts, poor health, ulcers, or heart disease.",
          "Job Burnout: An extreme, chronic state of exhaustion, detachment, and total lack of work motivation."
        ]
      },
      {
        title: "Active Time Management",
        description: "In modern business, time represents substantial money. Wise scheduling frees hours and demonstrates immense value.",
        bullets: [
          "To-Do Lists: Documenting and actively prioritizing tasks daily.",
          "One-Touch Policy: When reviewing a paper, file, or email, either file it, complete it, delegate it, or delete it instantly. Never leave items to build into piles.",
          "Time Wasters: Avoid informal desktop visiting, personal texting, and social media scrolling."
        ]
      },
      {
        title: "Defeating Procrastination",
        description: "Procrastination is the poor habit of putting off tasks until a later date. It is driven by fear of failure, perfectionism, or simple dislike of the task.",
        bullets: [
          "Overcoming steps: 1) Visualize the completed state; 2) Break massive deliverables down into micro-tasks; 3) Build structured milestones and celebrate intermediate victories."
        ]
      },
      {
        title: "Digital & Physical Workplace Organization",
        description: "Clutter-free workspaces induce mental calm and sharpen productivity.",
        bullets: [
          "Desktops: Keep only immediate items and shortcuts. Routinely delete or archival clear.",
          "Filing: Store documents chronologically or alphabetically in clearly marked folders.",
          "Email Routine: Restrict reviewing incoming messages to scheduled intervals rather than leaving notifications to interrupt ongoing deep sessions."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Eat a balanced diet, exercise daily, and ensure sleep", dontText: "Let stress go unchecked until you get physically ill" },
      { doText: "Break larger projects into smaller, prioritized tasks", dontText: "Bring personal problems to work or work problems home" },
      { doText: "Practice a clean desktop and strict one-touch filing", dontText: "Give in to constant texting and social media time wasters" }
    ],
    keyTerms: [
      { term: "Stress", definition: "The physical or mental reaction of the body to tense situations.", chapterId: 3 },
      { term: "Job burnout", definition: "Extreme chronic stress where you lack motivation and desire to work.", chapterId: 3 },
      { term: "Procrastination", definition: "The habit of putting off tasks until a later time.", chapterId: 3 },
      { term: "Time management", definition: "The deliberate process of organizing and planning how to divide time.", chapterId: 3 },
      { term: "One-touch policy", definition: "Immediately actioning or filing a document the first time you touch it.", chapterId: 3 },
      { term: "Time wasters", definition: "Frivolous tasks or distractions that consume productive work hours.", chapterId: 3 }
    ]
  },
  {
    id: 4,
    number: 4,
    title: "Etiquette/Dress",
    module: "Module 1: Self-Management",
    shortDescription: "Project an executive presence through proper dress codes, networking netiquette, and professional dining decorum.",
    learningOutcomes: [
      "Understand the visual elements and metrics that comprise executive presence.",
      "Assess areola rules of professional dress and company dress codes.",
      "Analyze non-verbal cues and hygiene rules for hands, hair, clothing, and body art.",
      "Demonstrate professional handshakes and vertical-tier business introductions.",
      "Navigate formal multi-utensil dining setups and business networking events."
    ],
    keyTopics: [
      {
        title: "Executive Presence & Appearance Frame",
        description: "Executive presence is displaying corporate readiness through your professional dress, strict hygiene, poise, and polite communications. Your appearance is a visual 'frame'—it should highlight, not overshadow, your work skills.",
        bullets: [
          "Rule of Thumb: Dress one position higher than your current role.",
          "Work Wardrobe: Neutral colors, conservative pants/skirts, clean-pressed blazers.",
          "Tattoos & Piercings: Maintain a conservative standard, covering ink and minimizing visible hardware at work."
        ]
      },
      {
        title: "Business Networking & Introductions",
        description: "First impressions are made within fractions of a minute. Introducing others with confidence is crucial to creating team networks.",
        bullets: [
          "Vertical Protocol: Always introduce the higher-ranking individual to the lower-ranking individual first. E.g., 'President Smith, this is our vendor, Mr. Jones.'",
          "Professional Handshake: Extend your right hand, meet at the web, grip firmly (avoid crushing or limp fingers), look them in the eye, and smile."
        ]
      },
      {
        title: "Business Dining Protocol",
        description: "Corporate meals represent a high-stakes professional arena where manners indicator character.",
        bullets: [
          "Napkin Placement: Immediately place on your lap upon seating; if leaving temporarily, place on the table side.",
          "Utensil Usage: Work from the outside utensils inward with each successive course.",
          "No Chaos Ordering: Avoid high-priced items, messy foods, or ordering alcohol unless the host initiates."
        ]
      },
      {
        title: "Everyday Corporate Etiquette",
        description: "Basic courtesy represents highly valuable social currency that builds workplace trust.",
        bullets: [
          "Privacy Cubicles: Cubicles do not have doors, but you must act as if they do. Knock verbally before entering.",
          "Thank-You Notes: Standard emails are great for small favors, but gifts or major sessions demand a handwritten card sent within three days."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Say 'please' and 'thank you' at all times", dontText: "Wear sweats, flip-flops, or Suggestive clothing to work" },
      { doText: "Make direct eye contact and offer a firm handshake", dontText: "Read or type text messages during business meetings" },
      { doText: "Knock and request verbal permission before entering a cubicle", dontText: "Discuss politics, religion, or controversial events during meals" }
    ],
    keyTerms: [
      { term: "Executive presence", definition: "Projecting confidence, maturity, and corporate readiness through behavior and appearance.", chapterId: 4 },
      { term: "Dress code", definition: "A formalized corporate policy defining acceptable and unacceptable attire.", chapterId: 4 },
      { term: "Etiquette", definition: "The socially or professionally accepted standard of behavior.", chapterId: 4 },
      { term: "Networking", definition: "A standard process of meeting and building professional relations for mutual benefit.", chapterId: 4 },
      { term: "RSVP", definition: "Short for modern French term 'répondez s'il vous plaît' (please respond).", chapterId: 4 },
      { term: "Respect", definition: "Holding someone in high regard; putting others' needs before your own.", chapterId: 4 }
    ]
  },
  {
    id: 5,
    number: 5,
    title: "Ethics, Politics, and Diversity",
    module: "Module 2: Workplace Basics",
    shortDescription: "Navigate complex ethical challenges, professional power bases, office political structures, and legal protections.",
    learningOutcomes: [
      "Summarize how ethics influence personal and professional behavior.",
      "Understand and defend boundaries of confidentiality.",
      "Apply the 'Three Levels' of ethical decision-making.",
      "Define and classify individual base types of power.",
      "Navigate workplace politics, reciprocity, and the assets of diversity."
    ],
    keyTopics: [
      {
        title: "Ethics & Ethical Decision-Making",
        description: "Ethics represents a moral standard of right and wrong as defined by wider society. Morals are personal beliefs. Ethical behavior are active choices representing integrity.",
        bullets: [
          "Conflict of Interest: A high-risk situation where an employee can abuse corporate position to benefit personally.",
          "Confidentiality: The professional obligation to secure corporate, client, and coworker data.",
          "Three Levels Checklist: 1) Is the action legal? 2) Is it fair to all parties involved? 3) Does it make me feel good? (Conscience check)."
        ]
      },
      {
        title: "The Seven Power Bases",
        description: "Power represents your ability to influence the choices of others.",
        bullets: [
          "Legitimate Power: Power directly associated with a job title.",
          "Coercive Power: Threatening or punishing power (use with absolute caution).",
          "Reward Power: Ability to distribute valuable promotions or incentives.",
          "Connection Power: Wielding influence by associating with key executives.",
          "Charismatic Power: Personal power derived from interpersonal charm.",
          "Information Power: Power gained by having exclusive access to news.",
          "Expert Power: Influence earned from rare, essential skills or tech knowledge."
        ]
      },
      {
        title: "Workplace Politics & Rec reciprocity",
        description: "Politics is obtaining and using workplace power to achieve outcomes. Reciprocity represents creating debts and obligations for favors.",
        bullets: [
          "Reciprocity trap: Helping a coworker is expected, but guard against 'you owe me' situations that pressure you to bypass ethical rules."
        ]
      },
      {
        title: "Workplace Diversity & Legal Protections",
        description: "Workplace diversity is the compilation of individual differences (age, gender, origin, race, religion, orientation, physical makeup).",
        bullets: [
          "Protected Class: Groups legally secured against bias (Title VII Civil Rights Act).",
          "Prejudice vs. Stereotypes: Stereotyping is making generic assumptions about group traits. Prejudice is forming unfavorable opinions based on those stereotypes.",
          "Glass Ceilings and Walls: Invisible barriers preventing protected classes from ascending to high executive roles (ceilings) or specific departmental silos (walls)."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Use the three levels checklist to evaluate questionable options", dontText: "Accuse or spread gossip about others without documented evidence" },
      { doText: "Respect diverse cultures, religions, and generational points of view", dontText: "Use company computers or time on personal tasks" },
      { doText: "Keep all company, coworker, and client information strictly confidential", dontText: "Support jokes that mock protected classes or physical disabilities" }
    ],
    keyTerms: [
      { term: "Ethics", definition: "Society's moral standards defining acceptable right and wrong behavior.", chapterId: 5 },
      { term: "Conflict of interest", definition: "A high-risk position where personal interests conflict with job duties.", chapterId: 5 },
      { term: "Reciprocity", definition: "Creating structured debts and personal obligations for favors.", chapterId: 5 },
      { term: "Workplace diversity", definition: "The differences in age, gender, race, culture, or religion among coworkers.", chapterId: 5 },
      { term: "Glass ceiling", definition: "An invisible developmental barrier blocking advancement of protected groups.", chapterId: 5 },
      { term: "Expert power", definition: "Interpersonal influence earned purely from technical skills or knowledge.", chapterId: 5 }
    ]
  },
  {
    id: 6,
    number: 6,
    title: "Accountability and Workplace Relationships",
    module: "Module 2: Workplace Basics",
    shortDescription: "Take complete ownership of job deliverables, manage upward relationships, and navigate negative workplace scenarios.",
    learningOutcomes: [
      "Define empowerment, responsibility, and total professional accountability.",
      "Understand horizontal, vertical, and external workplace relationship lanes.",
      "Manage professional boundaries and avoid issues with work dating.",
      "Execute exact progressive steps to repair damaged coworker interactions.",
      "Understand proper etiquette for shared workspaces, cubicles, and break rooms."
    ],
    keyTopics: [
      {
        title: "The Empowerment & Performance Pipeline",
        description: "Empowerment is pushing authority and decision-making closer to frontline employees.",
        bullets: [
          "Responsibility: Willingly accepting power and task ownership.",
          "Accountability: The structured commitment to report back outcomes to stakeholders.",
          "The Trap: Managers must train and role-play boundaries, not just issue vague 'make them happy' commands."
        ]
      },
      {
        title: "Managing Upward and Boss Dynamics",
        description: "Your relationship with your supervisor is a critical career driver. Keep all interactions strictly professional.",
        bullets: [
          "Incompetent Bosses: Remain professional, avoid participating in coworker mutinies, and keep producing quality work.",
          "Abusive Bosses: Document dates, times, and exact quotes neutrally. If persistent, seek confidential HR support with facts rather than emotional venting."
        ]
      },
      {
        title: "When Relationships Turn Negative",
        description: "Coworker friction is inevitable. Direct action must be initiated before productivity slips.",
        bullets: [
          "Steps to resolve: 1) Apologize immediately if you contributed; 2) Change behaviors to manifest regret; 3) If unresolved, agree to disagree and remain polite; 4) Seek management help ONLY if job performance is affected; present structured data, not complaints."
        ]
      },
      {
        title: "Dating and Social boundaries",
        description: "Dating coworkers, supervisors, or vendors presents massive structural risks.",
        bullets: [
          "Never Date Managers: Presents conflicts of interest, favoritism claims, or harassment risks.",
          "Break Room Rules: Label your foods, never take community items, and keep shared areas clean."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Take full accountability for your projects", dontText: "Wait for supervisors to tell you every next step" },
      { doText: "Maintain professional, courteous records about performance issues", dontText: "Participate in water-cooler gossip or bad-mouth supervisors" },
      { doText: "Politely decline invitations to contribute to pricey office gifts if on a budget", dontText: "Neglect common areas, leave messy break rooms, or empty coffee pots" }
    ],
    keyTerms: [
      { term: "Accountability", definition: "The personal commitment to report back outcomes of delegated tasks.", chapterId: 6 },
      { term: "Empowerment", definition: "Directly pushing power and decision-making authority closer to frontline staff.", chapterId: 6 },
      { term: "Responsibility", definition: "Willingly accepting delegated tasks and job roles.", chapterId: 6 },
      { term: "Employee morale", definition: "The collective attitude and outlook of employees toward their employer.", chapterId: 6 },
      { term: "Corporate culture", definition: "The values, beliefs, and behaviors that define a company's atmosphere.", chapterId: 6 },
      { term: "Grievance", definition: "A formalized complaint filed by an employee regarding workplace conditions.", chapterId: 6 }
    ]
  },
  {
    id: 7,
    number: 7,
    title: "Quality Organizations and Service",
    module: "Module 2: Workplace Basics",
    shortDescription: "Align your performance with company mission statements, strategic planning, and modern quality indicators.",
    learningOutcomes: [
      "Understand how corporate organizational hierarchies and structures impact performance.",
      "Synthesize purpose, vision, and core values statements.",
      "Explore management hierarchies and budget classifications.",
      "Distinguish between internal and external customers.",
      "Execute steps to handle and calm difficult customer complaints."
    ],
    keyTopics: [
      {
        title: "Directional Statements & Strategy",
        description: "Successful companies align all actions with unified high-level strategic coordinates.",
        bullets: [
          "Mission Statement: A clear statement of purpose outlining why the organization exists.",
          "Vision Statement: A viable roadmap detailing where the company aims to be in the future.",
          "Values Statement: Important beliefs defining standard priorities and code of behavior."
        ]
      },
      {
        title: "Hierarchies and Chain of Command",
        description: "Organizational charts map company divisions, roles, and lines of authority.",
        bullets: [
          "Chain of Command: Formal pathways directing who reports to whom. Always follow this structure.",
          "Senior Management: Deals with strategic issues spanning 3-5 years.",
          "Middle Management: Focuses on tactical issues spanning 1-3 years.",
          "Operational/Supervisors: Focuses on daily operational issues (under 1 year)."
        ]
      },
      {
        title: "Divisions & Budget Management",
        description: "Companies utilize distinct departmental units to run operations.",
        bullets: [
          "Major Divisions: HR, Finance, Operations, Information Systems, Marketing, Legal.",
          "Capital Budget: Allocations for major long-term investments (machines, buildings).",
          "Operational Budget: Weekly/monthly allocations for recurring costs (payroll, supplies)."
        ]
      },
      {
        title: "Frontline Customer Service",
        description: "Excellent service is the absolute gateway to long-term success.",
        bullets: [
          "Internal Customers: Coworkers and managers who rely on your work outputs.",
          "External Customers: Individuals outside who buy company goods or services.",
          "Resolving Complaints: 1) Remain calm; 2) Do not take insults personally; 3) Listen for facts; 4) Acknowledge frustration; 5) Formulate a fast resolution; 6) Do not tolerate threat or abuse."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Memorize and support your company's mission statement", dontText: "Ignore chain of command by going above your direct supervisor" },
      { doText: "Treat internal coworkers with the same respect as external customers", dontText: "Wast supplies, resources, or budget allocations frivolous" },
      { doText: "Remain calm and objective when dealing with angry customers", dontText: "Argue with, interrupt, or raise your voice at a client" }
    ],
    keyTerms: [
      { term: "Mission statement", definition: "A formalized corporate statement explaining why the company exists.", chapterId: 7 },
      { term: "Vision statement", definition: "A clear, viable projection of where a company aims to grow in the future.", chapterId: 7 },
      { term: "Chain of command", definition: "A company's official lines of authority and reporting pathways.", chapterId: 7 },
      { term: "Internal customer", definition: "Coworkers and department units who rely on your deliverables to do their jobs.", chapterId: 7 },
      { term: "Strategic plan", definition: "A formalized roadmap detailing how a company compiles and secures resources.", chapterId: 7 },
      { term: "Quality", definition: "A predefined standard that defines how a product is to be provided.", chapterId: 7 }
    ]
  },
  {
    id: 8,
    number: 8,
    title: "Human Resources and Policies",
    module: "Module 2: Workplace Basics",
    shortDescription: "Navigate employment rules, benefits options, performance appraisals, and union contracts.",
    learningOutcomes: [
      "Stating the primary administrative roles and services of Human Resource departments.",
      "List major sections of standard Employee Handbooks.",
      "Define At-Will employment and understand Right to Revise declarations.",
      "Navigate performance reviews, self-appraisals, and rating disputes.",
      "Deconstruct cafeteria benefits, retirement options, and union guidelines."
    ],
    keyTopics: [
      {
        title: "HR Roles and Employee Handbooks",
        description: "The Human Resource department regulates the employee landscape (hiring, training, benefits, disputes, legal safety).",
        bullets: [
          "Employee Handbook: A formal contract compiling work guidelines, security codes, and benefits.",
          "At-Will Employment: A legal doctrine allowing either employee or employer to severe the relationship at any time for any legal reason.",
          "Right to Revise: Clauses allowing management to update handbook rules as economic needs shift."
        ]
      },
      {
        title: "Classifications & Gaps",
        description: "Every worker is mapped to standard category definitions.",
        bullets: [
          "Full-Time vs. Part-Time: Determined by active weekly hours (typically 30-40 hours limit).",
          "Introductory Period: A standard 1-3 month probation testing workplace fit."
        ]
      },
      {
        title: "Performance Appraisal Mechanics",
        description: "Routinely implemented evaluations identify productivity and define targets.",
        bullets: [
          "Self-Assessments: Approach this with objective criteria, highlighting documented metrics.",
          "Facing Criticism: Remain quiet, take notes, ask clarifying tasks, and avoid defensive matches.",
          "Review Signatures: Signatures only confirm receiving the review index. If disputing, attach a written, objective list of facts."
        ]
      },
      {
        title: "Benefits, Payroll, and Unions",
        description: "Compensation packages expand far beyond simple pay check amounts.",
        bullets: [
          "Cafeteria Plan: Structured options allowing employees to choose customized benefits.",
          "Retirement Plans: Tax-deferred savings plans crucial for compound growth.",
          "Unions: A third party protecting rights via collective bargaining agreements.",
          "Shop Steward: Frontline coworker representative acting as primary union contact."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Refer to the handbook before asking simple policy questions", dontText: "Ignore probationary boundaries or slack during introductory weeks" },
      { doText: "Bring calm, documented metrics to reviews", dontText: "Refuse to sign evaluations or manifest emotional arguments" },
      { doText: "Routinely review pay stub deductions for errors", dontText: "Abuse sick leave days on leisure or vacation trips" }
    ],
    keyTerms: [
      { term: "Employment-at-will", definition: "A standard legal status allowing either party to dissolve employment at any time.", chapterId: 8 },
      { term: "Introductory period", definition: "A probationary baseline (typically 1-3 months) testing candidate fit.", chapterId: 8 },
      { term: "Job description", definition: "A formalized document outlining who you report to and defining duties.", chapterId: 8 },
      { term: "Performance evaluation", definition: "A formalized structured review measuring employee productivity.", chapterId: 8 },
      { term: "Bargaining agreement", definition: "A binding contract negotiated between employers and active unions.", chapterId: 8 },
      { term: "Shop steward", definition: "An frontline employee who acts as the primary contact for union interests.", chapterId: 8 }
    ]
  },
  {
    id: 9,
    number: 9,
    title: "Communication",
    module: "Module 3: Relationships",
    shortDescription: "Navigate the communication pipeline, vertical and informal communication networks, and professional business output.",
    learningOutcomes: [
      "Understand the components of the Communication Process.",
      "Contrast formal corporate vertical lines with the grapevine.",
      "Integrate active listening levels and eliminate mental noise.",
      "Analyze non-verbal body language and proxemics indicators.",
      "Draft structured, formal business letters and memos."
    ],
    keyTopics: [
      {
        title: "The Communication Loop",
        description: "Communication is the process of a sender transmitting a payload with the purpose of creating mutual, shared understanding.",
        bullets: [
          "The Loop: Sender (identifies concept) -> Encodes (chooses symbols/medium) -> Transmission -> Receiver -> Decodes (interprets) -> Feedback loop.",
          "Noise: Anything (sound, heat, anger, mental bias) that interferes with the correct decoding of messages.",
          "The Word 'I': Overusing 'I' acts as a visual turnoff, indicating arrogance or insecurity. Reposition sentences to place employer needs first."
        ]
      },
      {
        title: "Corporate Channels: Formal vs Grapevine",
        description: "Information flows through formal and informal corporate networks.",
        bullets: [
          "Formal Vertical: Direct organizational reports (downward for rules, upward for requests).",
          "Formal Horizontal: Collaboration between identical tier members.",
          "Grapevine: The informal, multi-layer word-of-mouth network among coworkers. It is rarely 100% accurate.",
          "Gossip: Personal, harmful, and inappropriate rumors. Spreading gossip destroys professional standing."
        ]
      },
      {
        title: "Verbal Listening and Body Language",
        description: "Listening is an active process indicator of respect.",
        bullets: [
          "Active Listening: Receiver gives full focus, nodding, analyzing facts, and summarizing.",
          "Passive Listening: Selective hearing, formulating responses instead of listening.",
          "Proxemics: The study of spacing requirements. Personal space is 1.5 feet; professional social space is 4 feet.",
          "Body language: Crossed arms represent barriers. Turn your body fully toward speakers."
        ]
      },
      {
        title: "Formatting Business Artifacts",
        description: "Written outputs represent your intelligence and attention to details.",
        bullets: [
          "Business Letter: Sent to external audiences. Requires formal top margins, quadruple-returns (QS) after complimentary closings for handwritten signatures.",
          "Memos: Sent to internal audiences. Headers: MEMO TO, FROM, DATE, SUBJECT. Simple blocks, single-spaced, double-return between paragraphs."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Carefully proofread every physical letter and memo before printing", dontText: "Contribute to the office grapevine or share gossip" },
      { doText: "Smile when appropriate and fully face the speaker", dontText: "Interrupt conversations or speak flatly without active listening" },
      { doText: "Structure letters with explicit, objective paragraph boundaries", dontText: "Use non-verbal barriers like crossed arms or pocketed hands" }
    ],
    keyTerms: [
      { term: "Communication", definition: "The process of a sender transmitting a message to a receiver to build shared understanding.", chapterId: 9 },
      { term: "Grapevine", definition: "An informal verbal network where employees discuss workplace topics.", chapterId: 9 },
      { term: "Feedback", definition: "A response sent back from receiver to sender indicating how a message was decoded.", chapterId: 9 },
      { term: "Proxemics", definition: "The study of human spatial dynamics and personal bubble distances.", chapterId: 9 },
      { term: "Business letter", definition: "A formal written document sent to entities outside the company.", chapterId: 9 },
      { term: "Business memo", definition: "An internal corporate memorandum used to communicate within the company.", chapterId: 9 }
    ]
  },
  {
    id: 10,
    number: 10,
    title: "Electronic Communications",
    module: "Module 3: Relationships",
    shortDescription: "Optimize e-mail professionalism, telecom etiquette, social media branding, and virtual meeting habits.",
    learningOutcomes: [
      "Understand the boundaries of corporate Technology Use Policies.",
      "Draft structured, actionable emails using To, Cc, and Bcc lines correctly.",
      "Execute phone etiquette, hold processes, and professional voice mail settings.",
      "Establish a proactive, clean online brand and digital footprint.",
      "Execute rules for virtual and teleconferencing environments."
    ],
    keyTopics: [
      {
        title: "Technology Use Policies & Basics",
        description: "All electronic devices supplied by employers are dedicated corporate assets. They are completely subject to search and review.",
        bullets: [
          "Use Policies: Outline parameters for privacy, audits, and security. There is zero right in personal email or non-work surfing on corporate networks.",
          "Security Hygiene: Routinely scan for malware, avoid unsecured links, and verify incoming origins."
        ]
      },
      {
        title: "E-Mail Architecture Rules",
        description: "Professional messaging demands pristine logic and clear directions.",
        bullets: [
          "To Line: Dedicated to individuals directly responsible for taking action.",
          "Cc Line: Courtesy copies for individuals who need info but have no active tasks.",
          "Bcc Line: Blind copying. Use ONLY for massive lists to hide emails, never as a secret tracking tool, which fosters distrust.",
          "Yelling Text: Never write in ALL CAPS, which indicates shouting at receivers."
        ]
      },
      {
        title: "Phone Etiquette Guidelines",
        description: "Telecommunications create vocal impressions in place of visual connections.",
        bullets: [
          "Hold Rules: Always request permission before placing someone on hold. Check back within 60 seconds or offer call-back slots.",
          "Voice Mail: Keep greetings concise, professional, and clear of jokes, music, or poor audio."
        ]
      },
      {
        title: "Social Media and Online Identity",
        description: "Your digital footprint serves as an active billboard for potential employers.",
        bullets: [
          "Online Identity: The comprehensive picture formed by your posts, photos, and linked profiles.",
          "Clean-up: Routinely search your name and remove bad photos or posts that reflect poor professionalism."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Utilize company technology strictly for company business", dontText: "Forward chain emails, jokes, or non-work notes via company accounts" },
      { doText: "Draft highly clear email subject lines that outline actionable goals", dontText: "Ignore incoming emails or treat typing as casual chats (avoid emoticons)" },
      { doText: "Test video conferencing equipment 20 minutes before start times", dontText: "Use speakerphone in common open-plan office areas" }
    ],
    keyTerms: [
      { term: "Technology use policy", definition: "Formal corporate guidelines detailing acceptable use of company hardware and networks.", chapterId: 10 },
      { term: "Online identity", definition: "The complete visual and behavioral impression representing you across the internet.", chapterId: 10 },
      { term: "Bcc (blind copy)", definition: "An email feature hiding selected recipient addresses from other receivers.", chapterId: 10 },
      { term: "Teleconference", definition: "A structured, audio-only collective telephone meeting.", chapterId: 10 },
      { term: "Video conference", definition: "An interactive, multi-location meeting utilizing visual and audio feeds.", chapterId: 10 },
      { term: "Wiki", definition: "A collaborative corporate tool allowing team members to edit shared data.", chapterId: 10 }
    ]
  },
  {
    id: 11,
    number: 11,
    title: "Motivation, Leadership, and Teams",
    module: "Module 3: Relationships",
    shortDescription: "Master motivational theories, leadership dynamics, team development cycles, and productive meeting styles.",
    learningOutcomes: [
      "Deconstruct Maslow’s pyramid in relation to workplace environments.",
      "Contrast McClelland’s theory and Vroom’s expectancy principles.",
      "Distinguish autocratic, democratic, and laissez-faire leadership.",
      "Chart the 'Five Stages' of standard group and team lifecycle.",
      "Execute structured meeting guidelines under Robert's Rules."
    ],
    keyTopics: [
      {
        title: "Workplace Motivational Frameworks",
        description: "Understanding individual core drives is critical for leadership delegation.",
        bullets: [
          "Maslow’s Hierarchy: Physiological (basic wage) -> Safety (security/benefits) -> Social (office community) -> Self-Esteem (achievement rewards) -> Self-Actualization (skill expansion/coaching).",
          "McClelland’s Drives: Focuses on Needs for Achievement (doing task better), Power (influencing people), or Affiliation (maintaining community relationships).",
          "Vroom's Expectancy: Employees align energy based on the expected outcome of their actions."
        ]
      },
      {
        title: "The Three Leadership Quadrants",
        description: "True leadership represents action and relationship management, not just job titles.",
        bullets: [
          "Autocratic Style: Authoritarian decision-making. Essential in crises, but toxic long-term.",
          "Democratic Style: Collaborative decision-making. Promotes team creativity.",
          "Laissez-Faire Style: Hands-off guidance. Only viable with highly expert, independent operators.",
          "Delegation: Assigning complete ownership of micro-projects to empower and teach others."
        ]
      },
      {
        title: "The Five Stages of Team Development",
        description: "Teams represent complex human ecosystems that must evolve through structural boundaries.",
        bullets: [
          "Stage 1: Forming: Team members map traits, check boundaries, and act polite.",
          "Stage 2: Storming: Frictions arise as roles clash and work begins.",
          "Stage 3: Norming: Team resolves friction and agrees on mutual workflow.",
          "Stage 4: Performing: Synergy is reached; productivity runs at maximum.",
          "Stage 5: Adjourning: Tasks finish; team disbands and reviews analytics."
        ]
      },
      {
        title: "Meetings & Parliamentary Standard",
        description: "Meetings represent expensive corporate events that demand tight oversight.",
        bullets: [
          "Meeting Agenda: A structural outline sent in advance to keep discussions focused.",
          "Robert's Rules of Order: A classic, formal parliamentary code defining standard meeting protocol.",
          "Brainstorming: Problem-solving method allowing members to offer ideas without fear of immediate criticism."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Be an active, dependable contributor to team projects", dontText: "Argue and push individual items over group targets" },
      { doText: "Distribute highly structured agendas prior to meetings", dontText: "Dominate brainstorming sessions or critique ideas early" },
      { doText: "Understand and adapt your leadership style to coworker experience levels", dontText: "Let structural storming phases cripple team progress" }
    ],
    keyTerms: [
      { term: "Maslow's Hierarchy", definition: "A classic five-tiered model tracking human progression from raw survival to self-actualization.", chapterId: 11 },
      { term: "Synergy", definition: "A dynamic state where the total output of a team exceeds the simple sum of individual components.", chapterId: 11 },
      { term: "Brainstorming", definition: "A structural session focused on gathering raw creative concepts without critique.", chapterId: 11 },
      { term: "Meeting agenda", definition: "An outline of topics and tasks scheduled to regulate a meeting.", chapterId: 11 },
      { term: "Delegating", definition: "Willingly assigning decision-making ownership of a project tasks to others.", chapterId: 11 },
      { term: "Virtual team", definition: "A geographically dispersed team coordinating tasks purely via digital platforms.", chapterId: 11 }
    ]
  },
  {
    id: 12,
    number: 12,
    title: "Conflict and Negotiation",
    module: "Module 3: Relationships",
    shortDescription: "Navigate difficult business disputes, select conflict styles, shield against harassment, and solve corporate bullying.",
    learningOutcomes: [
      "Define conflict and analyze structural origins of professional disputes.",
      "Assess five primary conflict management styles.",
      "Implement assertive communication patterns vs passive or aggressive types.",
      "Identify sexual harassment categories (Quid Pro Quo and Hostile Work Environment).",
      "Deconstruct progressive actions to halt office bullying and workplace violence."
    ],
    keyTopics: [
      {
        title: "Disputes & Resolving Friction",
        description: "Conflict is standard in business. Evolving past personal disputes towards factual solutions is essential.",
        bullets: [
          "Conflict: Tension triggered by perceived threat to space, needs, or values.",
          "Factual Resolution: Avoid making issues personal. Focus on shared workflow.",
          "Digital Note: Never compile a digital record of angry emails; seek face-to-face resolution instantly."
        ]
      },
      {
        title: "Five Conflict Management styles",
        description: "The selection of conflict management styles must align with situation risks.",
        bullets: [
          "Forcing Style: Authoritative push. High urgency, disregard for relationship.",
          "Avoiding Style: Passive withdrawal. Best for minor, low-stake matters.",
          "Accommodating Style: Keeping the peace. Priority is relationship focus.",
          "Compromising Style: Equal sacrifice. Both give up assets to reach balance.",
          "Collaborating Style: Infinite value. Win-win solutions where both win without sacrifice."
        ]
      },
      {
        title: "Behaviors: Passive vs Assertive vs Aggressive",
        description: "Professionals maintain assertive boundaries.",
        bullets: [
          "Passive: Allowing others to take advantage; neglecting personal rights.",
          "Assertive: Standing up for personal rights clearly without violating coworker rights.",
          "Aggressive: Forcing ideas through insults or demeaning gestures."
        ]
      },
      {
        title: "Harassment, Bullying, and EAPs",
        description: "Zero tolerance represents the corporate and legal standard.",
        bullets: [
          "Quid Pro Quo: Offering professional advancements in exchange for physical/sexual favors.",
          "Hostile environment: Pervasive offensive jokes, comments, or visual materials.",
          "Workplace Bullying: Intentional rude, belittling, or demeaning actions aimed at a target.",
          "EAPs (Employee Assistance Programs): Free, confidential legal, financial, and therapeutic support."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Resolve conflict at the lowest possible level in person", dontText: "Immediately file a full formal HR grievance over minor issues" },
      { doText: "Maintain documented, objective facts about any harassment", dontText: "Retaliate or attempt to bully an office bully back" },
      { doText: "Contact clean therapeutic support through EAPs when highly stressed", dontText: "Allow emotional arguments to dictate professional discussions" }
    ],
    keyTerms: [
      { term: "Conflict", definition: "A breakdown in alignment or tension triggered by perceived threats.", chapterId: 12 },
      { term: "Collaborating style", definition: "A conflict strategy working together to find win-win solutions without sacrifice.", chapterId: 12 },
      { term: "Assertive behavior", definition: "Clearly defending personal boundaries while completely respecting classmate/coworker rights.", chapterId: 12 },
      { term: "Quid pro quo harassment", definition: "Coercive exchange of professional status for personal sexual favors.", chapterId: 12 },
      { term: "Hostile behavior harassment", definition: "Pervasive, unwelcome statements or visuals that poison work environments.", chapterId: 12 },
      { term: "Employee Assistance Program", definition: "A free, confidential counseling service provided by employers to secure staff well-being.", chapterId: 12 }
    ]
  },
  {
    id: 13,
    number: 13,
    title: "Job Search Skills",
    module: "Module 4: Career Planning Tools",
    shortDescription: "Conduct data-driven target research, compile clean job portfolios, choose professional references, and master network connections.",
    learningOutcomes: [
      "Structure a comprehensive, target-focused job search strategy.",
      "Guard privacy, secure personal credentials, and manage online identities.",
      "Compile hardcopy and digital job search portfolios.",
      "Establish professional references and secure stellar recommendation letters.",
      "Leverage traditional networks and informational interviews."
    ],
    keyTopics: [
      {
        title: "Choosing Career & ONET Profiler",
        description: "Self-discovery is tracking target preferences back to realistic, profitable careers.",
        bullets: [
          "ONET Database: The premier Department of Labor database tracking job task indexes.",
          "Career Summary: An objective headline summary of target career goals, core skills, and accomplishments."
        ]
      },
      {
        title: "The Study Portfolio: Hardcopy vs Digitized",
        description: "A professional portfolio serves as tangible proof of skills.",
        bullets: [
          "Hardcopy Binder: Original certificates, licenses, and resumes structured cleanly in plastic protectors.",
          "E-Portfolio: A carefully compiled directory of PDF assets ready for fast digital dispatch.",
          "Privacy Guards: Never provide your birthdate or SSN in early applications; verify employer legitimacy."
        ]
      },
      {
        title: "Structuring References & Recommendation Letters",
        description: "Third-party recommendations are powerful validation points.",
        bullets: [
          "Reference List: Separate sheet (not on resume). Includes name, title, contact, relationship.",
          "Ethical selection: Use past bosses, instructors, or clients. Never list family or basic social friends.",
          "Letters of recommendation: Request at least three letters, providing writers with two weeks' notice."
        ]
      },
      {
        title: "Traditional Networks & Informational Interviews",
        description: "Estimated over 70% of modern hires occur through informal, unadvertised channels.",
        bullets: [
          "Informational Interview: Meeting a professional purely to gather career intelligence—never ask for a job directly.",
          "Business Cards: Clean, minimal cards featuring direct emails, phone numbers, and portfolio links."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Treat every job fair or contact event as a formal interview", dontText: "Use social email handles like 'prty2nite' for professional applications" },
      { doText: "Inform your reference list of your search targets in advance", dontText: "Ignore privacy risks or send SSN data over unverified sites" },
      { doText: "Send thank-you messages to new network contacts within 24 hours", dontText: "List family members or basic social friends as references" }
    ],
    keyTerms: [
      { term: "Self-discovery", definition: "A structured process of identifying career-aligned skills and goals.", chapterId: 13 },
      { term: "Cost of living", definition: "The average cost of basic necessities (shelter, food, taxes) in a location.", chapterId: 13 },
      { term: "Job search portfolio", definition: "A compiled binder of qualifications, resume copies, and transcripts.", chapterId: 13 },
      { term: "Informational interview", definition: "A targeted discovery session with a professional to learn about industry trends.", chapterId: 13 },
      { term: "Professional network", definition: "An established directory of mutually beneficial professional relationships.", chapterId: 13 },
      { term: "Power words", definition: "Lively action verbs used to demonstrate quantifiable task accomplishments.", chapterId: 13 }
    ]
  },
  {
    id: 14,
    number: 14,
    title: "Résumé Package",
    module: "Module 4: Career Planning Tools",
    shortDescription: "Construct high-impact, tailored résumés and persuasive cover letters structured to survive recruiter vetting.",
    learningOutcomes: [
      "Analyze steps to compile a tailored, professional resume packet.",
      "Contrast Functional layouts vs Advanced Skill-set formats.",
      "Differentiate between job-specific, transferable, and soft skills.",
      "Draft powerful, performance statements with quantified metrics.",
      "Structure persuasive three-paragraph cover letters."
    ],
    keyTopics: [
      {
        title: "Résumé Format Strategy",
        description: "The selection of resume layouts is dependent on the depth of career experience.",
        bullets: [
          "Functional Layout: Perfect for students or career switchers; prioritizes skills and training over dates.",
          "Advanced Skill-Set Layout: Great for deep experience; groups skill-sets under thematic blocks followed by employment history.",
          "Anti-Template Tip: Avoid busy, color-flecked templates; clean, high-contrast black ink on white paper is the global standard."
        ]
      },
      {
        title: "The Taxonomy of Skills",
        description: "Classifying competencies correctly ensures matching matching employer search metrics.",
        bullets: [
          "Job-Specific: Skills directly tied to one niche tool (e.g. CAD software or welding torch).",
          "Transferable: Adaptable across boundaries (e.g. report writing, translations, coding).",
          "Soft Skills: Essential interpersonal qualities (e.g. reliability, positive coordination, diplomacy)."
        ]
      },
      {
        title: "Drafting Power Statements",
        description: "Vague descriptions represent massive wasted space. Turn duties into metrics.",
        bullets: [
          "Formula: Action Verb + Project Context + Quantifiable Outcome.",
          "Weak: 'Responsible for cash register and helping walk-in customers.'",
          "Strong: 'Operated main cashier point, serving over 200 clients daily with 99.8% balance accuracy.'"
        ]
      },
      {
        title: "The Cover Letter Framework",
        description: "An authentic, target cover letter is a highly effective screening tool.",
        bullets: [
          "Paragraph 1: State the target position, source discovered, and brief company motivation.",
          "Paragraph 2: Directly match core skills to the job description requirements.",
          "Paragraph 3: Explicitly request an interview and promise to follow up within one week."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Format your resume to match reverse-chronological order", dontText: "Embellish, lie, or expand durations beyond truthful bounds" },
      { doText: "Utilize action verbs and power statements on every bullet points", dontText: "State 'References Available Upon Request' at the bottom" },
      { doText: "Tailor both cover letter and resume specifically to each application", dontText: "Submit resumes with spelling exceptions, typos, or grammatical bugs" }
    ],
    keyTerms: [
      { term: "Functional résumé", definition: "A resume layout designed to highlight skills when work experience is limited.", chapterId: 14 },
      { term: "Personal profile", definition: "An introductory written statement used on advanced resumes to compile experience.", chapterId: 14 },
      { term: "Transferable skills", definition: "Essential competencies applicable across various workplace structures and roles.", chapterId: 14 },
      { term: "Soft skills", definition: "Interpersonal assets such as work ethic, communication, and emotional diplomacy.", chapterId: 14 },
      { term: "Cover letter", definition: "A formalized letter introducing a candidate and targeting resume highlights.", chapterId: 14 },
      { term: "Job-specific skills", definition: "Specialized technical skills linked to one specific role or engine.", chapterId: 14 }
    ]
  },
  {
    id: 15,
    number: 15,
    title: "Interview Techniques",
    module: "Module 4: Career Planning Tools",
    shortDescription: "Navigate behavioral interview models, analyze illegal questions, negotiate compensation, and master pre-appraisal preparation.",
    learningOutcomes: [
      "Understand steps of pre-interview preparation.",
      "Structure dynamic, personal commercial statements.",
      "Differentiate between structured, unstructured, and behavioral interview styles.",
      "Evaluate illegal questions under Title VII.",
      "Execute follow-up workflows and navigate salary negotiation."
    ],
    keyTopics: [
      {
        title: "The Personal Commercial",
        description: "A personal commercial is a compelling, one-minute summary that answers the core prompt: 'Tell me about yourself.'",
        bullets: [
          "Structure: Past (proven credentials) + Present (training status) + Future (goals showing alignment with the target employer's mission)."
        ]
      },
      {
        title: "Interview Archetypes & Behavioral Questions",
        description: "Lenders choose distinct methodologies to probe your workplace readiness.",
        bullets: [
          "Structured Interview: Every candidate receives identical questions; requires rich elaboration.",
          "Unstructured Interview: Open-ended questions assessing communication composure.",
          "Behavioral Interview: Probes real-world past actions. Requires the STAR method: Situation (Context) -> Task (Goal) -> Action (Your specific actions) -> Result (Quantification of success)."
        ]
      },
      {
        title: "Title VII and Illegal Questions",
        description: "Under Federal law, questions probing family status, age, birth origin, or religion are strictly unacceptable.",
        bullets: [
          "Detection: Questions about marital status, childcare, religious holidays, or arrest history (convictions are acceptable).",
          "Handling: Avoid defensive pushback. Pivot to direct professional readiness. 'What can I tell you about my accounting skillset for this role?'"
        ]
      },
      {
        title: "Negotiation and Post-Interview Steps",
        description: "Winning candidates manage post-interview processes with high diligence.",
        bullets: [
          "The close: Always prepare questions about team workflow, and close by expressing desire for the job.",
          "Thank-You Follow-up: Immediately write a handwritten note or email same-day.",
          "Salary negotiation: Avoid premature discussions. Ground targets in regional market benchmarks."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Arrive at the interview 10 to 15 minutes early (never more, never late)", dontText: "Divulge marital status or personal info during greetings" },
      { doText: "Formulate behavioral answers using the structured STAR method", dontText: "Answer illegal prompts with defensive arguments" },
      { doText: "Deliver a handwritten thank-you same-day", dontText: "Bring up salary expectations during early rounds" }
    ],
    keyTerms: [
      { term: "Behavioral interview", definition: "An interview query demanding real-world past examples of conflict or crisis resolution.", chapterId: 15 },
      { term: "Personal commercial", definition: "A high-impact, one-minute synopsis explaining your skills to hiring teams.", chapterId: 15 },
      { term: "STAR method", definition: "A structural response framework mapping Situation, Task, Action, and Result.", chapterId: 15 },
      { term: "Illegal interview question", definition: "A discriminatory query prohibited under Federal employment framework (e.g. family, age, origin).", chapterId: 15 },
      { term: "Positive self-talk", definition: "A mental self-reinforcement process to reduce stress before meetings.", chapterId: 15 },
      { term: "Pre-employment tests", definition: "Assessments used to test specific logical, physical, or technical skills.", chapterId: 15 }
    ]
  },
  {
    id: 16,
    number: 16,
    title: "Career Changes",
    module: "Module 4: Career Planning Tools",
    shortDescription: "Navigate training pathways, negotiate corporate promotion, handle layoffs gracefully, and understand entrepreneur opportunities.",
    learningOutcomes: [
      "Distinguish between target training pathways and skill development.",
      "Formulate active tactics to position yourself for career promotion.",
      "Handle voluntary terminations without burning professional bridges.",
      "Navigate involuntary terminations, layoffs, and furloughs.",
      "Evaluate opportunities, risks, and properties of entrepreneurial projects."
    ],
    keyTopics: [
      {
        title: "Training vs. Skill Development",
        description: "Continual learning is essential to navigate fast modern market transformations.",
        bullets: [
          "Training: Learning new, immediate skills requested by current operations.",
          "Development: Elevating existing, high-level capacities (leadership, strategy) to prepare for future management.",
          "Continual Learning: Formal (degree modules, coursework) and informal (journals, associations)."
        ]
      },
      {
        title: "Earning Promotion",
        description: "Securing promotion is a systematic process of aligning daily behavior with management needs.",
        bullets: [
          "First steps: Dress and behave at the level of the target role. Volunteer for stretch assignments.",
          "Promotion rules: Thank former supervisors. Avoid gloating or creating rifts among coworkers who missed out."
        ]
      },
      {
        title: "Bridges & Resignation",
        description: "Voluntary departure must be executed with high polish to avoid burning relationships.",
        bullets: [
          "Notice: Provide a formalized minimum of two weeks' notice.",
          "Resignation Letter: Formal dated document containing clear terminal dates, positive reflections on supervisors, and signed signatures.",
          "Exit Interview: An HR session. Maintain a highly professional tone; explain opportunities for progress without personal complaints."
        ]
      },
      {
        title: "Layoffs, Firing, and Entrepreneurship",
        description: "Structural displacement requires composure and legal awareness.",
        bullets: [
          "Layoff vs Firing: Layoffs result from financial restructuring rather than performance faults. Firing results directly from poor performance.",
          "Furlough: Unpaid mandatory work leave used to cut operational costs temporarily.",
          "Entrepreneurship: Assuming total market stakes by owning and operating private business units (passion, capital tracking, deep strategy)."
        ]
      }
    ],
    dosAndDonts: [
      { doText: "Provide a minimum of two weeks' notice in writing", dontText: "Leave workspace keys, company records, or files disorganized upon departure" },
      { doText: "Keep details of outside job hunting entirely confidential in your office", dontText: "Bad-mouth previous companies or managers in exit interviews" },
      { doText: "Update your training, certifications, and resume annually", dontText: "Lax or slack during final notification days on the job" }
    ],
    keyTerms: [
      { term: "Letter of resignation", definition: "A formalized terminal document outlining exit dates and positive employer reflections.", chapterId: 16 },
      { term: "Involuntary termination", definition: "Losing a corporate position through layoffs, restructuring, or firing.", chapterId: 16 },
      { term: "Furlough", definition: "A mandatory, unpaid leave of absence implemented to preserve cash reserves.", chapterId: 16 },
      { term: "Lateral move", definition: "A departmental transition at the same level of pay and authority.", chapterId: 16 },
      { term: "Demotion", definition: "A downward transition yielding reduced pay and structural authority.", chapterId: 16 },
      { term: "Entrepreneur", definition: "An individual who accepts complete financial risk to launch private enterprise.", chapterId: 16 }
    ]
  }
];
