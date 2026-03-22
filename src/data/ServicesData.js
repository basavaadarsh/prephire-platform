import {
  FaVideo,
  FaFileAlt,
  FaUserTie,
  FaBriefcase,
  FaBuilding,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaAward,
  FaShieldAlt,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

// ================= SERVICES DATA =================
export const servicesData = [
  {
    id: "mock-interviews",
    icon: FaVideo,
    badge: "Most Popular",
    title: "Mock Interviews",
    subtitle:
      "Practice in a realistic interview environment with expert-led feedback and performance insights.",
    price: "₹299 / session",
    oldPrice: "₹499",
    theme: "blue",

    stats: [
      { label: "Success Boost", value: "92%" },
      { label: "Avg Session", value: "60 min" },
      { label: "Expert Mentors", value: "25+" },
    ],

    highlights: [
      "Real interview simulation",
      "Technical + HR rounds",
      "Actionable expert feedback",
    ],

    features: [
      {
        title: "One-on-One Sessions",
        desc: "Live interview simulations with experienced mentors.",
        icon: FaUsers,
      },
      {
        title: "Multi-Round Practice",
        desc: "Technical, HR & behavioral rounds like real interviews.",
        icon: FaLayerGroup,
      },
      {
        title: "Detailed Feedback",
        desc: "Structured reports with improvement insights.",
        icon: FaChartLine,
      },
      {
        title: "Session Recording",
        desc: "Review performance anytime.",
        icon: FaShieldAlt,
      },
      {
        title: "Flexible Scheduling",
        desc: "Book slots at your convenience.",
        icon: FaClock,
      },
      {
        title: "Confidence Building",
        desc: "Reduce anxiety with guided practice.",
        icon: FaRocket,
      },
    ],

    details: [
      "Simulate real interview environments to reduce anxiety.",
      "Gain confidence with expert-level feedback.",
      "Improve communication and technical explanations.",
      "Understand real recruiter expectations.",
    ],

    deliverables: [
      "Live interview session",
      "Feedback report",
      "Improvement roadmap",
      "Session recording",
    ],
  },

  {
    id: "resume-review",
    icon: FaFileAlt,
    badge: "ATS Ready",
    title: "Resume Review",
    subtitle:
      "Optimize your resume for recruiters and ATS systems with expert insights.",
    price: "₹499",
    oldPrice: "₹799",
    theme: "indigo",

    stats: [
      { label: "ATS Score Boost", value: "85%" },
      { label: "Delivery Time", value: "48 hrs" },
      { label: "Experts", value: "15+" },
    ],

    highlights: [
      "ATS optimization",
      "Keyword alignment",
      "Professional formatting",
    ],

    features: [
      {
        title: "ATS Optimization",
        desc: "Improve compatibility with recruiter systems.",
        icon: FaShieldAlt,
      },
      {
        title: "Keyword Matching",
        desc: "Align resume with job roles.",
        icon: FaLightbulb,
      },
      {
        title: "Professional Design",
        desc: "Clean and structured resume format.",
        icon: FaAward,
      },
      {
        title: "Expert Feedback",
        desc: "Insights from hiring professionals.",
        icon: FaUsers,
      },
      {
        title: "Impact Statements",
        desc: "Strong measurable achievements.",
        icon: FaChartLine,
      },
      {
        title: "Customization",
        desc: "Role-specific resume tuning.",
        icon: FaRocket,
      },
    ],

    details: [
      "Increase chances of shortlisting.",
      "Improve resume clarity and readability.",
      "Match industry hiring standards.",
      "Create strong first impression.",
    ],

    deliverables: [
      "Reviewed resume",
      "Optimization suggestions",
      "Improved content",
      "Final guidance",
    ],
  },

  {
    id: "interview-guidance",
    icon: FaUserTie,
    badge: "1:1 Mentorship",
    title: "Interview Guidance",
    subtitle: "Personal mentoring sessions to boost interview performance.",
    price: "₹799 / session",
    oldPrice: "₹1199",
    theme: "violet",

    stats: [
      { label: "Mentor Support", value: "1:1" },
      { label: "Session Time", value: "90 min" },
      { label: "Roles Covered", value: "50+" },
    ],

    highlights: [
      "Customized strategy",
      "Confidence building",
      "Company-specific tips",
    ],

    features: [
      {
        title: "Custom Strategy",
        desc: "Personalized preparation plan.",
        icon: FaRocket,
      },
      {
        title: "Question Practice",
        desc: "Practice key interview questions.",
        icon: FaCheckCircle,
      },
      {
        title: "Behavioral Training",
        desc: "Improve HR round answers.",
        icon: FaUsers,
      },
      {
        title: "Technical Prep",
        desc: "Strengthen core knowledge.",
        icon: FaChartLine,
      },
      {
        title: "Confidence Coaching",
        desc: "Improve communication & posture.",
        icon: FaAward,
      },
      {
        title: "Roadmap",
        desc: "Structured preparation plan.",
        icon: FaClock,
      },
    ],

    details: [
      "Get clear preparation roadmap.",
      "Understand interview patterns.",
      "Improve communication skills.",
      "Boost overall confidence.",
    ],

    deliverables: [
      "Guidance session",
      "Preparation roadmap",
      "Question bank",
      "Improvement plan",
    ],
  },

  {
    id: "placement-support",
    icon: FaBriefcase,
    badge: "Career Assist",
    title: "Placement Support",
    subtitle: "End-to-end job assistance and career support.",
    price: "Included",
    theme: "emerald",

    stats: [
      { label: "Support", value: "Ongoing" },
      { label: "Matching", value: "Smart" },
      { label: "Process", value: "Guided" },
    ],

    highlights: ["Job matching", "Application support", "Offer guidance"],

    features: [
      {
        title: "Job Matching",
        desc: "Relevant job opportunities.",
        icon: FaLightbulb,
      },
      {
        title: "Application Help",
        desc: "Improve applications.",
        icon: FaFileAlt,
      },
      {
        title: "Interview Tracking",
        desc: "Manage interview schedules.",
        icon: FaClock,
      },
      {
        title: "Offer Guidance",
        desc: "Negotiation support.",
        icon: FaAward,
      },
      {
        title: "Career Tracking",
        desc: "Track your progress.",
        icon: FaChartLine,
      },
      {
        title: "Mentor Support",
        desc: "Continuous expert help.",
        icon: FaUsers,
      },
    ],

    details: [
      "Structured job search support.",
      "Better application quality.",
      "Faster hiring process.",
      "Guided career growth.",
    ],

    deliverables: [
      "Job guidance",
      "Application help",
      "Interview planning",
      "Offer advice",
    ],
  },

  {
    id: "corporate-training",
    icon: FaBuilding,
    badge: "B2B Program",
    title: "Corporate Training",
    subtitle: "Training programs for institutions and organizations.",
    price: "Custom Pricing",
    theme: "slate",

    stats: [
      { label: "Format", value: "Custom" },
      { label: "Audience", value: "Teams" },
      { label: "Mode", value: "Online/Offline" },
    ],

    highlights: ["Campus programs", "Skill workshops", "Custom curriculum"],

    features: [
      {
        title: "Campus Training",
        desc: "Placement-focused programs.",
        icon: FaUsers,
      },
      {
        title: "Skill Development",
        desc: "Improve communication & aptitude.",
        icon: FaRocket,
      },
      {
        title: "Leadership Training",
        desc: "Managerial skill building.",
        icon: FaAward,
      },
      {
        title: "Mock Sessions",
        desc: "Bulk interview practice.",
        icon: FaVideo,
      },
      {
        title: "Custom Curriculum",
        desc: "Tailored learning paths.",
        icon: FaLightbulb,
      },
      {
        title: "Outcome Tracking",
        desc: "Measure progress.",
        icon: FaChartLine,
      },
    ],

    details: [
      "Improve employability at scale.",
      "Standardize training quality.",
      "Deliver measurable results.",
      "Enhance team performance.",
    ],

    deliverables: [
      "Training plan",
      "Workshops",
      "Progress reports",
      "Recommendations",
    ],
  },
];

// ================= HOW IT WORKS =================
export const howItWorksData = [
  {
    step: 1,
    title: "Choose Service",
    description: "Select a service based on your needs.",
  },
  {
    step: 2,
    title: "Book Session",
    description: "Schedule your session easily.",
  },
  {
    step: 3,
    title: "Get Guidance",
    description: "Receive expert help and feedback.",
  },
  {
    step: 4,
    title: "Improve",
    description: "Track progress and grow.",
  },
];

// ================= CTA =================
export const ctaData = {
  title: "Ready to accelerate your career?",
  subtitle: "Start your preparation with expert guidance today.",
  primaryBtn: "Book a Session",
  secondaryBtn: "Explore Courses",
};
