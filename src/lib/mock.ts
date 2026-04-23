export type Course = {
  id: string;
  title: string;
  description: string;
  domain: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  modulesCount: number;
  durationHours: number;
  instructor: string;
  rating: number;
  ratingCount: number;
  color: string; // Tailwind bg gradient classes for card thumbnail
  price: string; // Naira
};

export type Enrollment = {
  id: string;
  courseId: string;
  progressPct: number;
  lastAccessed: string;
};

export const MOCK_COURSES: Course[] = [
  {
    id: "c-101",
    title: "AI Fundamentals for Product Managers",
    description: "Learn the core concepts of machine learning, transformers, and how to define AI features without writing code.",
    domain: "Technology",
    difficulty: "Beginner",
    modulesCount: 6,
    durationHours: 12,
    instructor: "Dr. Amaka Obi",
    rating: 4.8,
    ratingCount: 1243,
    color: "from-blue-500 to-indigo-600",
    price: "₦45,000",
  },
  {
    id: "c-102",
    title: "Data Analytics with Python",
    description: "Hands-on introduction to Pandas, NumPy, and basic data visualization for business insights.",
    domain: "Data Analytics",
    difficulty: "Intermediate",
    modulesCount: 8,
    durationHours: 20,
    instructor: "Chukwuemeka Adeyemi",
    rating: 4.6,
    ratingCount: 892,
    color: "from-purple-500 to-violet-600",
    price: "₦65,000",
  },
  {
    id: "c-103",
    title: "Executive Leadership in the AI Era",
    description: "Strategic frameworks for implementing AI in enterprise operations and managing technical teams.",
    domain: "Leadership",
    difficulty: "Advanced",
    modulesCount: 4,
    durationHours: 8,
    instructor: "Ngozi Eze, MBA",
    rating: 4.9,
    ratingCount: 531,
    color: "from-rose-500 to-pink-600",
    price: "₦85,000",
  },
  {
    id: "c-104",
    title: "Financial Modeling & Forecasting",
    description: "Master modern financial forecasting incorporating basic predictive models and Excel advanced features.",
    domain: "Finance",
    difficulty: "Intermediate",
    modulesCount: 10,
    durationHours: 25,
    instructor: "Babajide Okonkwo, CFA",
    rating: 4.7,
    ratingCount: 764,
    color: "from-emerald-500 to-teal-600",
    price: "₦75,000",
  },
];

export const MOCK_USER_PROFILE = {
  name: "John Doe",
  initials: "JD",
  role: "Product Manager",
  organisation: "Access Bank",
  learningPathName: "AI Transition Path",
  completionOverall: 34,
  xpPoints: 1240,
  streakDays: 5,
  enrollments: [
    {
      id: "en-1",
      courseId: "c-101",
      progressPct: 65,
      lastAccessed: new Date().toISOString(),
    },
    {
      id: "en-2",
      courseId: "c-103",
      progressPct: 10,
      lastAccessed: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
};
