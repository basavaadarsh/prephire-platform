export const mentorsData = [
  {
    id: "m1",

    // 🔥 BASIC INFO
    name: "Anjali Sharma",
    photo: "https://i.pravatar.cc/150?img=1",
    role: "Senior Software Engineer",
    company: "Google",
    expertise: "Technical",
    experience: "8+ Years",
    location: "Bangalore, India",

    // 🔥 STATS
    rating: 4.8,
    totalSessions: 320,
    studentsMentored: 150,
    responseTime: "1 hour",

    // 🔥 PRICING
    pricing: {
      oneToOne: 499,
      mockInterview: 799,
      resumeReview: 299,
    },

    // 🔥 BIO
    bio: "Senior Software Engineer with expertise in system design and DSA. Passionate about mentoring developers to crack top product companies.",

    // 🔥 SKILLS
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "System Design", level: "Expert" },
      { name: "DSA", level: "Expert" },
    ],

    // 🔥 SERVICES OFFERED
    services: ["Mock Interviews", "System Design Guidance", "Resume Review"],

    // 🔥 REVIEWS
    reviews: [
      {
        user: "Rahul",
        rating: 5,
        comment: "Amazing mentor, helped me crack interviews!",
        date: "2025-01-10",
      },
      {
        user: "Sneha",
        rating: 4.7,
        comment: "Very clear explanation of system design.",
        date: "2025-02-05",
      },
    ],

    // 🔥 AVAILABILITY
    availability: [
      {
        day: "Monday",
        slots: [
          { time: "10:00 AM", booked: false },
          { time: "2:00 PM", booked: true },
        ],
      },
      {
        day: "Wednesday",
        slots: [{ time: "12:00 PM", booked: false }],
      },
    ],

    // 🔥 SOCIAL / LINKS
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },

  {
    id: "m2",

    name: "Vikram Reddy",
    photo: "https://i.pravatar.cc/150?img=2",
    role: "Frontend Engineer",
    company: "Amazon",
    expertise: "Technical",
    experience: "6+ Years",
    location: "Hyderabad, India",

    rating: 4.7,
    totalSessions: 210,
    studentsMentored: 95,
    responseTime: "2 hours",

    pricing: {
      oneToOne: 399,
      mockInterview: 699,
      resumeReview: 249,
    },

    bio: "Frontend expert with deep React knowledge and UI/UX best practices.",

    skills: [
      { name: "React", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "UI Design", level: "Advanced" },
    ],

    services: ["Frontend Interviews", "React Mentorship", "Portfolio Review"],

    reviews: [],

    availability: [
      {
        day: "Tuesday",
        slots: [{ time: "11:00 AM", booked: false }],
      },
    ],

    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];
