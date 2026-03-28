// ============================================================
// Centralized Course Data — Single source for all
// course information across the Courses list & details pages.
// ============================================================

export const coursesData = [
  {
    id: "full-interview-kit",
    category: "Complete Package",
    title: "Full Interview Kit",
    subtitle: "Everything you need to ace every round of your placement interviews",
    description:
      "The ultimate all-in-one preparation bundle covering aptitude, mock interviews, company-specific exams, and career development. Get interview-ready with 35 mock sessions, expert feedback, and lifetime access to our continuously updated content library.",
    price: 1999,
    originalPrice: 3499,
    duration: "1 Year",
    level: "All Levels",
    language: "English",
    studentsEnrolled: 15420,
    rating: 4.8,
    features: ["35 Mock Interviews", "Aptitude Course", "Company Exams", "Job Board Access"],
    instructor: {
      id: "priya-sharma",
      name: "Priya Sharma",
      title: "Senior HR Consultant",
      company: "Infosys",
      photo: null,
      bio: "Priya Sharma is a seasoned HR professional with over 12 years of experience in talent acquisition and campus recruitment across top MNCs. She has personally conducted 5,000+ interviews and has a deep understanding of what recruiters look for in candidates. Her teaching style blends real-world anecdotes with actionable frameworks, making complex interview strategies easy to grasp.",
      stats: {
        experience: "12+ years",
        students: "50,000+",
        courses: 8,
      },
    },
    curriculum: [
      {
        moduleId: 1,
        moduleTitle: "Module 1: Getting Started",
        lessons: [
          { id: 1, title: "Welcome & Course Overview", duration: "8 min" },
          { id: 2, title: "Understanding the Placement Process", duration: "15 min" },
          { id: 3, title: "Setting Up Your Prep Roadmap", duration: "12 min" },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Module 2: Aptitude Essentials",
        lessons: [
          { id: 4, title: "Quantitative Aptitude Crash Course", duration: "30 min" },
          { id: 5, title: "Logical Reasoning Strategies", duration: "25 min" },
          { id: 6, title: "Verbal Ability Tips & Tricks", duration: "20 min" },
          { id: 7, title: "Data Interpretation Masterclass", duration: "28 min" },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Module 3: Technical Interview Prep",
        lessons: [
          { id: 8, title: "Data Structures Fundamentals", duration: "35 min" },
          { id: 9, title: "Algorithm Problem-Solving Patterns", duration: "40 min" },
          { id: 10, title: "System Design Basics", duration: "30 min" },
        ],
      },
      {
        moduleId: 4,
        moduleTitle: "Module 4: HR & Behavioral Round",
        lessons: [
          { id: 11, title: "Common HR Questions Decoded", duration: "20 min" },
          { id: 12, title: "STAR Method for Behavioral Answers", duration: "18 min" },
          { id: 13, title: "Salary Negotiation & Offer Handling", duration: "15 min" },
        ],
      },
      {
        moduleId: 5,
        moduleTitle: "Module 5: Mock Interviews & Review",
        lessons: [
          { id: 14, title: "Mock Interview Session #1", duration: "45 min" },
          { id: 15, title: "Feedback & Improvement Plan", duration: "20 min" },
          { id: 16, title: "Final Simulation & Certification", duration: "50 min" },
        ],
      },
    ],
    includes: [
      "35 live mock interview sessions",
      "200+ aptitude practice questions",
      "Company-specific exam patterns",
      "Job board access for 1 year",
      "Certificate of completion",
      "Lifetime access to recordings",
      "Mobile and desktop access",
    ],
  },
  {
    id: "quick-mock-interviews",
    category: "Mock Interviews",
    title: "Quick Mock Interviews",
    subtitle: "Practice makes perfect — simulate real interviews with instant feedback",
    description:
      "Sharpen your interview skills with 10 structured mock interview sessions covering technical, HR, and behavioral rounds. Each session is followed by detailed feedback and personalized improvement tips from industry experts.",
    price: 499,
    originalPrice: 899,
    duration: "3 Months",
    level: "All Levels",
    language: "English",
    studentsEnrolled: 8210,
    rating: 4.7,
    features: ["10 Mock Interviews", "Instant Feedback", "Flexible Schedule"],
    instructor: {
      id: "rahul-verma",
      name: "Rahul Verma",
      title: "Technical Interview Coach",
      company: "TCS",
      photo: null,
      bio: "Rahul Verma has spent 8 years coaching hundreds of graduates through the interview process at top IT service companies. A former SDE at TCS and Wipro, he brings a rare blend of technical depth and communication skills to his coaching sessions. His mock interviews are designed to replicate real-world pressure while providing a safe space to learn from mistakes.",
      stats: {
        experience: "8+ years",
        students: "25,000+",
        courses: 5,
      },
    },
    curriculum: [
      {
        moduleId: 1,
        moduleTitle: "Module 1: Interview Fundamentals",
        lessons: [
          { id: 1, title: "What Interviewers Really Look For", duration: "12 min" },
          { id: 2, title: "Body Language & First Impressions", duration: "10 min" },
          { id: 3, title: "Structuring Your Answers", duration: "15 min" },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Module 2: Technical Rounds",
        lessons: [
          { id: 4, title: "Coding Round Simulation", duration: "40 min" },
          { id: 5, title: "Explaining Your Thought Process", duration: "15 min" },
          { id: 6, title: "Handling Unknown Questions", duration: "12 min" },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Module 3: HR & Behavioral Rounds",
        lessons: [
          { id: 7, title: "Tell Me About Yourself — Perfected", duration: "18 min" },
          { id: 8, title: "Strengths & Weaknesses Framework", duration: "14 min" },
          { id: 9, title: "Situational Judgment Practice", duration: "20 min" },
        ],
      },
      {
        moduleId: 4,
        moduleTitle: "Module 4: Full Mock Sessions",
        lessons: [
          { id: 10, title: "Mock Interview #1 — Technical", duration: "45 min" },
          { id: 11, title: "Mock Interview #2 — HR", duration: "30 min" },
          { id: 12, title: "Debrief & Action Plan", duration: "15 min" },
        ],
      },
    ],
    includes: [
      "10 one-on-one mock sessions",
      "Personalized feedback reports",
      "Flexible scheduling",
      "Recording of each session",
      "Certificate of completion",
      "Mobile and desktop access",
    ],
  },
  {
    id: "aptitude-reasoning-mastery",
    category: "Aptitude",
    title: "Aptitude & Reasoning Mastery",
    subtitle: "Crack the aptitude round with proven strategies and 200+ practice problems",
    description:
      "A comprehensive aptitude training program covering quantitative aptitude, logical reasoning, verbal ability, and data interpretation. With 200+ curated practice questions, timed mock tests, and video solutions, you'll build the speed and accuracy needed to clear any aptitude round.",
    price: 799,
    originalPrice: 1299,
    duration: "6 Months",
    level: "Beginner to Advanced",
    language: "English",
    studentsEnrolled: 12890,
    rating: 4.6,
    features: ["200+ Practice Questions", "Video Solutions", "Mock Tests"],
    instructor: {
      id: "anita-desai",
      name: "Anita Desai",
      title: "Aptitude & Reasoning Expert",
      company: "PrepHire Academy",
      photo: null,
      bio: "Anita Desai holds an M.Sc in Mathematics and has 10 years of experience preparing students for competitive exams and placement aptitude rounds. Her structured approach breaks down complex quantitative problems into simple, repeatable strategies. She has authored two bestselling aptitude preparation books and has been a guest trainer at 50+ engineering colleges across India.",
      stats: {
        experience: "10+ years",
        students: "40,000+",
        courses: 6,
      },
    },
    curriculum: [
      {
        moduleId: 1,
        moduleTitle: "Module 1: Numbers & Arithmetic",
        lessons: [
          { id: 1, title: "Number System Shortcuts", duration: "20 min" },
          { id: 2, title: "Percentage, Profit & Loss", duration: "25 min" },
          { id: 3, title: "Ratio, Proportion & Averages", duration: "22 min" },
          { id: 4, title: "Time, Speed & Distance", duration: "28 min" },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Module 2: Logical Reasoning",
        lessons: [
          { id: 5, title: "Puzzles & Seating Arrangements", duration: "30 min" },
          { id: 6, title: "Blood Relations & Directions", duration: "18 min" },
          { id: 7, title: "Coding-Decoding & Series", duration: "20 min" },
          { id: 8, title: "Syllogisms & Statements", duration: "22 min" },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Module 3: Verbal Ability",
        lessons: [
          { id: 9, title: "Reading Comprehension Techniques", duration: "25 min" },
          { id: 10, title: "Grammar & Sentence Correction", duration: "20 min" },
          { id: 11, title: "Para Jumbles & Cloze Tests", duration: "18 min" },
        ],
      },
      {
        moduleId: 4,
        moduleTitle: "Module 4: Data Interpretation",
        lessons: [
          { id: 12, title: "Tables & Charts Analysis", duration: "25 min" },
          { id: 13, title: "Graph-based Questions", duration: "20 min" },
          { id: 14, title: "Caselets & Data Sufficiency", duration: "22 min" },
        ],
      },
      {
        moduleId: 5,
        moduleTitle: "Module 5: Mock Tests & Review",
        lessons: [
          { id: 15, title: "Full-Length Mock Test #1", duration: "60 min" },
          { id: 16, title: "Full-Length Mock Test #2", duration: "60 min" },
          { id: 17, title: "Detailed Solutions & Analysis", duration: "30 min" },
        ],
      },
    ],
    includes: [
      "200+ practice questions with solutions",
      "15 timed mock tests",
      "Video explanations for every topic",
      "Downloadable formula sheets",
      "Certificate of completion",
      "Lifetime access",
      "Mobile and desktop access",
    ],
  },
  {
    id: "tcs-nqt-preparation",
    category: "Company Specific",
    title: "TCS NQT Preparation",
    subtitle: "Targeted preparation for the TCS National Qualifier Test",
    description:
      "Focused preparation designed specifically for the TCS NQT exam pattern. Covers all sections including numerical ability, verbal ability, reasoning ability, and programming logic. Includes previous year question analysis and pattern-based practice tests.",
    price: 599,
    originalPrice: 999,
    duration: "3 Months",
    level: "Intermediate",
    language: "English",
    studentsEnrolled: 9120,
    rating: 4.9,
    features: ["Pattern-based Tests", "Previous Papers", "Expert Tips"],
    instructor: {
      id: "vikram-patel",
      name: "Vikram Patel",
      title: "Placement Training Specialist",
      company: "TCS iON",
      photo: null,
      bio: "Vikram Patel is a former TCS recruitment panel member turned career coach. With 9 years of insider experience in TCS hiring processes, he knows exactly what the NQT exam tests and how to prepare for it efficiently. His students consistently achieve 90th percentile scores, and his course content is updated every quarter to reflect the latest exam patterns.",
      stats: {
        experience: "9+ years",
        students: "35,000+",
        courses: 4,
      },
    },
    curriculum: [
      {
        moduleId: 1,
        moduleTitle: "Module 1: TCS NQT Overview",
        lessons: [
          { id: 1, title: "Understanding the NQT Exam Pattern", duration: "15 min" },
          { id: 2, title: "Scoring Strategy & Time Management", duration: "12 min" },
          { id: 3, title: "Registration & Exam Day Tips", duration: "10 min" },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Module 2: Numerical Ability",
        lessons: [
          { id: 4, title: "High-Frequency Topics Analysis", duration: "20 min" },
          { id: 5, title: "Speed Math Techniques", duration: "25 min" },
          { id: 6, title: "Practice Set — Numerical", duration: "30 min" },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Module 3: Verbal & Reasoning",
        lessons: [
          { id: 7, title: "Verbal Ability for TCS NQT", duration: "22 min" },
          { id: 8, title: "Reasoning Patterns & Shortcuts", duration: "25 min" },
          { id: 9, title: "Practice Set — Verbal & Reasoning", duration: "30 min" },
        ],
      },
      {
        moduleId: 4,
        moduleTitle: "Module 4: Programming Logic",
        lessons: [
          { id: 10, title: "Programming Concepts Refresher", duration: "20 min" },
          { id: 11, title: "Pseudocode & Output-Based Questions", duration: "25 min" },
          { id: 12, title: "Coding Practice Problems", duration: "35 min" },
        ],
      },
      {
        moduleId: 5,
        moduleTitle: "Module 5: Full Mock NQTs",
        lessons: [
          { id: 13, title: "Mock NQT Exam #1", duration: "90 min" },
          { id: 14, title: "Mock NQT Exam #2", duration: "90 min" },
          { id: 15, title: "Answer Key & Strategy Review", duration: "25 min" },
        ],
      },
    ],
    includes: [
      "100+ NQT-pattern questions",
      "5 full-length mock NQT exams",
      "Previous year paper analysis",
      "Expert tips & shortcuts",
      "Certificate of completion",
      "Lifetime access",
      "Mobile and desktop access",
    ],
  },
  {
    id: "technical-interview-mastery",
    category: "Technical",
    title: "Technical Interview Mastery",
    subtitle: "From DSA to system design — master every technical round",
    description:
      "An intensive course designed for students targeting product-based companies and premium service companies. Covers data structures, algorithms, system design fundamentals, and 15 mock technical interviews. Build the problem-solving confidence you need to crack any coding round.",
    price: 1299,
    originalPrice: 2199,
    duration: "6 Months",
    level: "Intermediate to Advanced",
    language: "English",
    studentsEnrolled: 6670,
    rating: 4.8,
    features: ["DSA Practice", "System Design", "15 Mock Interviews"],
    instructor: {
      id: "arjun-mehta",
      name: "Arjun Mehta",
      title: "Senior Software Engineer",
      company: "Microsoft",
      photo: null,
      bio: "Arjun Mehta is a Senior Software Engineer at Microsoft with 7 years of experience building scalable distributed systems. He has cracked interviews at Google, Amazon, and Microsoft, and now channels that experience into helping fresh graduates navigate the technical interview landscape. His teaching philosophy centers around pattern recognition — teaching students to identify problem categories rather than memorize solutions.",
      stats: {
        experience: "7+ years",
        students: "20,000+",
        courses: 3,
      },
    },
    curriculum: [
      {
        moduleId: 1,
        moduleTitle: "Module 1: Foundations",
        lessons: [
          { id: 1, title: "Arrays & Strings Deep Dive", duration: "30 min" },
          { id: 2, title: "Linked Lists & Stacks", duration: "28 min" },
          { id: 3, title: "Trees & Graphs Essentials", duration: "35 min" },
          { id: 4, title: "Hash Maps & Sets", duration: "22 min" },
        ],
      },
      {
        moduleId: 2,
        moduleTitle: "Module 2: Algorithm Patterns",
        lessons: [
          { id: 5, title: "Two Pointers & Sliding Window", duration: "30 min" },
          { id: 6, title: "Binary Search Variations", duration: "25 min" },
          { id: 7, title: "Recursion & Backtracking", duration: "35 min" },
          { id: 8, title: "Dynamic Programming Patterns", duration: "40 min" },
        ],
      },
      {
        moduleId: 3,
        moduleTitle: "Module 3: System Design Basics",
        lessons: [
          { id: 9, title: "Scalability & Load Balancing", duration: "25 min" },
          { id: 10, title: "Database Design & SQL vs NoSQL", duration: "28 min" },
          { id: 11, title: "API Design & REST Principles", duration: "22 min" },
          { id: 12, title: "Designing a URL Shortener", duration: "30 min" },
        ],
      },
      {
        moduleId: 4,
        moduleTitle: "Module 4: Mock Technical Interviews",
        lessons: [
          { id: 13, title: "Mock Interview #1 — Arrays/Strings", duration: "45 min" },
          { id: 14, title: "Mock Interview #2 — Trees/Graphs", duration: "45 min" },
          { id: 15, title: "Mock Interview #3 — DP Problems", duration: "50 min" },
          { id: 16, title: "Mock Interview #4 — System Design", duration: "50 min" },
        ],
      },
    ],
    includes: [
      "15 live mock technical interviews",
      "150+ DSA practice problems",
      "System design case studies",
      "Code review & feedback",
      "Certificate of completion",
      "Lifetime access",
      "Mobile and desktop access",
    ],
  },
];

// Derive unique categories from the data itself
export const categories = [
  "All",
  ...Array.from(new Set(coursesData.map((c) => c.category))),
];
