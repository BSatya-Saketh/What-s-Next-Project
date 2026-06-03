export interface CareerOption {
  id: string;
  title: string;
  description: string;
  duration?: string;
  eligibility?: string;
  scope?: string;
  salary?: SalaryInfo;
  colleges?: CollegeInfo[];
  admissionDetails?: AdmissionDetails;
}

export interface SalaryInfo {
  entryLevel: string;
  midLevel: string;
  seniorLevel: string;
  currency?: string;
}

export interface CollegeInfo {
  name: string;
  ranking?: number;
  location: string;
  type?: string;
}

export interface AdmissionDetails {
  eligibility: string[];
  deadlines: string[];
  requirements: string[];
  entranceExams?: string[];
}

export interface CareerBranch {
  id: string;
  title: string;
  description: string;
  options: CareerOption[];
}

export interface EducationStage {
  id: string;
  title: string;
  description: string;
  branches: CareerBranch[];
}

export interface Exam {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  examDate?: string;
  applicationDeadline?: string;
  website?: string;
  tips: string[];
}

// Data for After 10th Grade
export const after10thData: EducationStage = {
  id: "after-10th",
  title: "Career Options After 10th Grade",
  description: "Explore various paths available after completing your 10th grade",
  branches: [
    {
      id: "intermediate",
      title: "Intermediate / Higher Secondary",
      description: "Two-year program after 10th grade",
      options: [
        {
          id: "science-maths",
          title: "Science with Mathematics",
          description: "Focus on Physics, Chemistry, Mathematics, and optional subjects",
          duration: "2 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "Engineering, Medical, Research, Architecture, Data Science"
        },
        {
          id: "science-bio",
          title: "Science with Biology",
          description: "Focus on Physics, Chemistry, Biology, and optional subjects",
          duration: "2 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "Medical, Biotechnology, Pharmacy, Nursing, Research"
        },
        {
          id: "commerce",
          title: "Commerce",
          description: "Focus on Accountancy, Business Studies, Economics",
          duration: "2 years",
          eligibility: "10th pass with minimum 45% marks",
          scope: "CA, CS, Banking, Finance, Management, Entrepreneurship"
        },
        {
          id: "arts-humanities",
          title: "Arts / Humanities",
          description: "Focus on History, Political Science, Economics, Psychology",
          duration: "2 years",
          eligibility: "10th pass",
          scope: "Civil Services, Law, Journalism, Teaching, Social Work"
        }
      ]
    },
    {
      id: "polytechnic",
      title: "Polytechnic Diploma",
      description: "3-year diploma courses in engineering and technology",
      options: [
        {
          id: "civil-diploma",
          title: "Civil Engineering Diploma",
          description: "Study construction, infrastructure, and surveying",
          duration: "3 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "Construction companies, Government projects, Real estate"
        },
        {
          id: "mechanical-diploma",
          title: "Mechanical Engineering Diploma",
          description: "Study machines, manufacturing, and automation",
          duration: "3 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "Manufacturing, Automobile, Aerospace, Maintenance"
        },
        {
          id: "electrical-diploma",
          title: "Electrical Engineering Diploma",
          description: "Study electrical systems, power generation, and distribution",
          duration: "3 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "Power plants, Electronics, Telecommunications"
        },
        {
          id: "computer-diploma",
          title: "Computer Science Diploma",
          description: "Study programming, software development, and networking",
          duration: "3 years",
          eligibility: "10th pass with minimum 50% marks",
          scope: "IT companies, Software development, System administration"
        }
      ]
    },
    {
      id: "iti",
      title: "ITI (Industrial Training Institute)",
      description: "Vocational training for skilled trades",
      options: [
        {
          id: "electrician-iti",
          title: "Electrician",
          description: "Training in electrical wiring, maintenance, and repair",
          duration: "1-2 years",
          eligibility: "10th pass",
          scope: "Construction, Maintenance, Self-employment"
        },
        {
          id: "fitter-iti",
          title: "Fitter",
          description: "Training in mechanical fitting and assembly",
          duration: "1-2 years",
          eligibility: "10th pass",
          scope: "Manufacturing, Automobile, Maintenance"
        },
        {
          id: "welder-iti",
          title: "Welder",
          description: "Training in welding techniques and metal fabrication",
          duration: "1-2 years",
          eligibility: "10th pass",
          scope: "Construction, Manufacturing, Fabrication"
        },
        {
          id: "diesel-mechanic-iti",
          title: "Diesel Mechanic",
          description: "Training in diesel engine maintenance and repair",
          duration: "1-2 years",
          eligibility: "10th pass",
          scope: "Automobile, Transport, Agriculture"
        }
      ]
    },
    {
      id: "paramedical",
      title: "Paramedical Courses",
      description: "Healthcare support courses",
      options: [
        {
          id: "dmlt",
          title: "DMLT (Diploma in Medical Laboratory Technology)",
          description: "Training in laboratory testing and diagnostics",
          duration: "1-2 years",
          eligibility: "10th pass with Science",
          scope: "Hospitals, Diagnostic centers, Research labs"
        },
        {
          id: "d-pharmacy",
          title: "D.Pharmacy",
          description: "Diploma in pharmacy and medicine dispensing",
          duration: "2 years",
          eligibility: "10th pass with Science",
          scope: "Pharmacies, Hospitals, Pharmaceutical companies"
        },
        {
          id: "x-ray-technician",
          title: "X-Ray Technician",
          description: "Training in radiography and imaging",
          duration: "1-2 years",
          eligibility: "10th pass with Science",
          scope: "Hospitals, Diagnostic centers, Clinics"
        }
      ]
    },
    {
      id: "short-term",
      title: "Short-term Courses",
      description: "Quick skill development programs",
      options: [
        {
          id: "computer-basics",
          title: "Computer Basics",
          description: "Fundamental computer skills and office applications",
          duration: "3-6 months",
          eligibility: "10th pass",
          scope: "Office work, Data entry, Basic IT jobs"
        },
        {
          id: "beauty-wellness",
          title: "Beauty & Wellness",
          description: "Training in cosmetology, beauty treatments, and wellness",
          duration: "6-12 months",
          eligibility: "10th pass",
          scope: "Salons, Spas, Self-employment"
        },
        {
          id: "hospitality",
          title: "Hospitality Management",
          description: "Training in hotel and hospitality services",
          duration: "6-12 months",
          eligibility: "10th pass",
          scope: "Hotels, Restaurants, Tourism industry"
        }
      ]
    }
  ]
};

// Data for After 12th Grade
export const after12thData: EducationStage = {
  id: "after-12th",
  title: "Career Options After 12th Grade",
  description: "Explore various paths available after completing your 12th grade",
  branches: [
    {
      id: "engineering",
      title: "Engineering",
      description: "Professional engineering degrees and specializations",
      options: [
        {
          id: "computer-science",
          title: "Computer Science Engineering",
          description: "Software development, AI, ML, and system design",
          duration: "4 years",
          eligibility: "12th Science with Maths, JEE Main/Advanced",
          scope: "Software Engineer, Data Scientist, AI Engineer, System Architect",
          salary: {
            entryLevel: "₹6-12 LPA",
            midLevel: "₹15-30 LPA",
            seniorLevel: "₹40-80+ LPA"
          },
          colleges: [
            { name: "IIT Bombay", ranking: 1, location: "Mumbai", type: "Government" },
            { name: "IIT Delhi", ranking: 2, location: "Delhi", type: "Government" },
            { name: "IIT Madras", ranking: 3, location: "Chennai", type: "Government" },
            { name: "IIT Kanpur", ranking: 4, location: "Kanpur", type: "Government" },
            { name: "IIT Kharagpur", ranking: 5, location: "Kharagpur", type: "Government" },
            { name: "BITS Pilani", ranking: 6, location: "Pilani", type: "Private" },
            { name: "NIT Trichy", ranking: 7, location: "Trichy", type: "Government" },
            { name: "IIIT Hyderabad", ranking: 8, location: "Hyderabad", type: "Government" }
          ]
        },
        {
          id: "mechanical-engg",
          title: "Mechanical Engineering",
          description: "Machine design, manufacturing, and automation",
          duration: "4 years",
          eligibility: "12th Science with Maths, JEE Main/Advanced",
          scope: "Mechanical Engineer, Design Engineer, Manufacturing Manager",
          salary: {
            entryLevel: "₹4-8 LPA",
            midLevel: "₹10-20 LPA",
            seniorLevel: "₹25-50 LPA"
          }
        },
        {
          id: "civil-engg",
          title: "Civil Engineering",
          description: "Construction, infrastructure, and structural design",
          duration: "4 years",
          eligibility: "12th Science with Maths, JEE Main",
          scope: "Civil Engineer, Structural Engineer, Project Manager",
          salary: {
            entryLevel: "₹4-8 LPA",
            midLevel: "₹10-25 LPA",
            seniorLevel: "₹30-60 LPA"
          }
        },
        {
          id: "electrical-engg",
          title: "Electrical Engineering",
          description: "Power systems, electronics, and electrical design",
          duration: "4 years",
          eligibility: "12th Science with Maths, JEE Main",
          scope: "Electrical Engineer, Power Systems Engineer, Electronics Engineer",
          salary: {
            entryLevel: "₹4-9 LPA",
            midLevel: "₹12-25 LPA",
            seniorLevel: "₹30-55 LPA"
          }
        }
      ]
    },
    {
      id: "medical",
      title: "Medical",
      description: "Healthcare and medical professions",
      options: [
        {
          id: "mbbs",
          title: "MBBS",
          description: "Bachelor of Medicine and Bachelor of Surgery",
          duration: "5.5 years",
          eligibility: "12th Science with Biology, NEET",
          scope: "Doctor, Surgeon, Specialist, Researcher",
          salary: {
            entryLevel: "₹8-15 LPA",
            midLevel: "₹20-40 LPA",
            seniorLevel: "₹50-100+ LPA"
          },
          colleges: [
            { name: "AIIMS New Delhi", ranking: 1, location: "New Delhi", type: "Government" },
            { name: "AIIMS Jodhpur", ranking: 2, location: "Jodhpur", type: "Government" },
            { name: "CMC Vellore", ranking: 3, location: "Vellore", type: "Private" },
            { name: "AFMC Pune", ranking: 4, location: "Pune", type: "Government" },
            { name: "JIPMER Puducherry", ranking: 5, location: "Puducherry", type: "Government" },
            { name: "MAMC Delhi", ranking: 6, location: "Delhi", type: "Government" },
            { name: "KGMU Lucknow", ranking: 7, location: "Lucknow", type: "Government" },
            { name: "Grant Medical College Mumbai", ranking: 8, location: "Mumbai", type: "Government" }
          ]
        },
        {
          id: "bds",
          title: "BDS",
          description: "Bachelor of Dental Surgery",
          duration: "5 years",
          eligibility: "12th Science with Biology, NEET",
          scope: "Dentist, Dental Surgeon, Orthodontist",
          salary: {
            entryLevel: "₹5-10 LPA",
            midLevel: "₹15-30 LPA",
            seniorLevel: "₹40-70 LPA"
          }
        },
        {
          id: "b-pharma",
          title: "B.Pharmacy",
          description: "Bachelor of Pharmacy",
          duration: "4 years",
          eligibility: "12th Science with PCB/PCM",
          scope: "Pharmacist, Research Scientist, Quality Control",
          salary: {
            entryLevel: "₹3-6 LPA",
            midLevel: "₹8-15 LPA",
            seniorLevel: "₹20-40 LPA"
          }
        },
        {
          id: "nursing",
          title: "B.Sc Nursing",
          description: "Bachelor of Science in Nursing",
          duration: "4 years",
          eligibility: "12th Science with PCB",
          scope: "Registered Nurse, Nurse Practitioner, Healthcare Administrator",
          salary: {
            entryLevel: "₹3-6 LPA",
            midLevel: "₹8-18 LPA",
            seniorLevel: "₹25-45 LPA"
          }
        }
      ]
    },
    {
      id: "commerce",
      title: "Commerce",
      description: "Business, finance, and accounting careers",
      options: [
        {
          id: "bcom",
          title: "B.Com / B.Com (Hons)",
          description: "Bachelor of Commerce",
          duration: "3 years",
          eligibility: "12th Commerce",
          scope: "Accountant, Financial Analyst, Tax Consultant",
          salary: {
            entryLevel: "₹3-5 LPA",
            midLevel: "₹8-15 LPA",
            seniorLevel: "₹20-40 LPA"
          },
          colleges: [
            { name: "SRCC Delhi", ranking: 1, location: "Delhi", type: "Government" },
            { name: "LSR Delhi", ranking: 2, location: "Delhi", type: "Government" },
            { name: "Hindu College Delhi", ranking: 3, location: "Delhi", type: "Government" },
            { name: "St. Xavier's Mumbai", ranking: 4, location: "Mumbai", type: "Private" },
            { name: "Loyola College Chennai", ranking: 5, location: "Chennai", type: "Private" },
            { name: "Christ University Bangalore", ranking: 6, location: "Bangalore", type: "Private" },
            { name: "Presidency College Kolkata", ranking: 7, location: "Kolkata", type: "Government" },
            { name: "Fergusson College Pune", ranking: 8, location: "Pune", type: "Government" }
          ]
        },
        {
          id: "bba",
          title: "BBA",
          description: "Bachelor of Business Administration",
          duration: "3 years",
          eligibility: "12th any stream",
          scope: "Business Manager, Marketing Executive, HR Manager",
          salary: {
            entryLevel: "₹3-6 LPA",
            midLevel: "₹8-18 LPA",
            seniorLevel: "₹25-50 LPA"
          },
          colleges: [
            { name: "IIM Indore (IPM)", ranking: 1, location: "Indore", type: "Government" },
            { name: "IIM Rohtak (IPM)", ranking: 2, location: "Rohtak", type: "Government" },
            { name: "NMIMS Mumbai", ranking: 3, location: "Mumbai", type: "Private" },
            { name: "Christ University Bangalore", ranking: 4, location: "Bangalore", type: "Private" },
            { name: "Symbiosis Pune", ranking: 5, location: "Pune", type: "Private" },
            { name: "IPM Delhi", ranking: 6, location: "Delhi", type: "Private" },
            { name: "Amity Noida", ranking: 7, location: "Noida", type: "Private" },
            { name: "Loyola College Chennai", ranking: 8, location: "Chennai", type: "Private" }
          ]
        },
        {
          id: "ca",
          title: "CA (Chartered Accountancy)",
          description: "Professional accounting certification",
          duration: "4-5 years",
          eligibility: "12th Commerce (Foundation) or Graduate (Direct)",
          scope: "Chartered Accountant, Auditor, Tax Consultant",
          salary: {
            entryLevel: "₹6-10 LPA",
            midLevel: "₹15-35 LPA",
            seniorLevel: "₹50-100+ LPA"
          }
        },
        {
          id: "cs",
          title: "CS (Company Secretary)",
          description: "Professional corporate governance certification",
          duration: "3-4 years",
          eligibility: "12th any stream",
          scope: "Company Secretary, Legal Advisor, Compliance Officer",
          salary: {
            entryLevel: "₹5-8 LPA",
            midLevel: "₹12-25 LPA",
            seniorLevel: "₹30-60 LPA"
          }
        }
      ]
    },
    {
      id: "arts",
      title: "Arts & Humanities",
      description: "Social sciences, humanities, and liberal arts",
      options: [
        {
          id: "ba-economics",
          title: "BA Economics",
          description: "Study of economics, markets, and policy",
          duration: "3 years",
          eligibility: "12th any stream with Maths preferred",
          scope: "Economist, Financial Analyst, Policy Advisor",
          salary: {
            entryLevel: "₹4-8 LPA",
            midLevel: "₹12-25 LPA",
            seniorLevel: "₹30-60 LPA"
          }
        },
        {
          id: "ba-psychology",
          title: "BA Psychology",
          description: "Study of human behavior and mental processes",
          duration: "3 years",
          eligibility: "12th any stream",
          scope: "Psychologist, Counselor, HR Specialist",
          salary: {
            entryLevel: "₹3-6 LPA",
            midLevel: "₹8-18 LPA",
            seniorLevel: "₹20-40 LPA"
          }
        },
        {
          id: "ba-english",
          title: "BA English",
          description: "Study of English literature and language",
          duration: "3 years",
          eligibility: "12th any stream",
          scope: "Writer, Editor, Content Creator, Teacher",
          salary: {
            entryLevel: "₹3-6 LPA",
            midLevel: "₹8-15 LPA",
            seniorLevel: "₹20-40 LPA"
          }
        },
        {
          id: "ba-political-science",
          title: "BA Political Science",
          description: "Study of political systems and governance",
          duration: "3 years",
          eligibility: "12th any stream",
          scope: "Civil Services, Policy Analyst, Political Consultant",
          salary: {
            entryLevel: "₹4-8 LPA",
            midLevel: "₹12-30 LPA",
            seniorLevel: "₹40-80+ LPA"
          }
        }
      ]
    }
  ]
};

// Data for Graduation
export const graduationData: EducationStage = {
  id: "graduation",
  title: "Career Options During/After Graduation",
  description: "Explore paths during and after your undergraduate degree",
  branches: [
    {
      id: "higher-education",
      title: "Higher Education",
      description: "Postgraduate and specialized studies",
      options: [
        {
          id: "mtech",
          title: "M.Tech / M.E",
          description: "Master of Technology/Engineering",
          duration: "2 years",
          eligibility: "B.Tech/B.E with GATE",
          scope: "Senior Engineer, Researcher, Professor",
          salary: {
            entryLevel: "₹10-18 LPA",
            midLevel: "₹20-40 LPA",
            seniorLevel: "₹50-100+ LPA"
          }
        },
        {
          id: "mba",
          title: "MBA",
          description: "Master of Business Administration",
          duration: "2 years",
          eligibility: "Graduate with CAT/GMAT/XAT",
          scope: "Business Manager, Consultant, Entrepreneur",
          salary: {
            entryLevel: "₹10-20 LPA",
            midLevel: "₹25-50 LPA",
            seniorLevel: "₹60-150+ LPA"
          },
          colleges: [
            { name: "IIM Ahmedabad", ranking: 1, location: "Ahmedabad", type: "Government" },
            { name: "IIM Bangalore", ranking: 2, location: "Bangalore", type: "Government" },
            { name: "IIM Calcutta", ranking: 3, location: "Kolkata", type: "Government" },
            { name: "IIM Lucknow", ranking: 4, location: "Lucknow", type: "Government" },
            { name: "IIM Kozhikode", ranking: 5, location: "Kozhikode", type: "Government" },
            { name: "XLRI Jamshedpur", ranking: 6, location: "Jamshedpur", type: "Private" },
            { name: "ISB Hyderabad", ranking: 7, location: "Hyderabad", type: "Private" },
            { name: "FMS Delhi", ranking: 8, location: "Delhi", type: "Government" }
          ]
        },
        {
          id: "ma",
          title: "MA / M.Sc / M.Com",
          description: "Master's degree in Arts, Science, or Commerce",
          duration: "2 years",
          eligibility: "Relevant Bachelor's degree",
          scope: "Specialist, Researcher, Academic",
          salary: {
            entryLevel: "₹5-10 LPA",
            midLevel: "₹12-25 LPA",
            seniorLevel: "₹30-60 LPA"
          }
        }
      ]
    },
    {
      id: "professional-certifications",
      title: "Professional Certifications",
      description: "Industry-recognized certifications",
      options: [
        {
          id: "pmp",
          title: "PMP (Project Management Professional)",
          description: "Project management certification",
          duration: "3-6 months preparation",
          eligibility: "Project management experience",
          scope: "Project Manager, Program Manager",
          salary: {
            entryLevel: "₹12-20 LPA",
            midLevel: "₹25-45 LPA",
            seniorLevel: "₹50-80+ LPA"
          }
        },
        {
          id: "cfa",
          title: "CFA (Chartered Financial Analyst)",
          description: "Investment management certification",
          duration: "2-3 years",
          eligibility: "Graduate",
          scope: "Investment Banker, Portfolio Manager, Research Analyst",
          salary: {
            entryLevel: "₹8-15 LPA",
            midLevel: "₹20-50 LPA",
            seniorLevel: "₹60-150+ LPA"
          }
        },
        {
          id: "data-science-cert",
          title: "Data Science / AI Certification",
          description: "Specialized certification in data science and AI",
          duration: "6-12 months",
          eligibility: "Graduate with Maths/Stats background",
          scope: "Data Scientist, AI Engineer, ML Engineer",
          salary: {
            entryLevel: "₹8-15 LPA",
            midLevel: "₹20-45 LPA",
            seniorLevel: "₹50-100+ LPA"
          }
        }
      ]
    },
    {
      id: "government-jobs",
      title: "Government Jobs",
      description: "Public sector opportunities",
      options: [
        {
          id: "upsc",
          title: "UPSC Civil Services",
          description: "IAS, IPS, IFS and other central services",
          duration: "1-2 years preparation",
          eligibility: "Graduate",
          scope: "IAS Officer, IPS Officer, IFS Officer",
          salary: {
            entryLevel: "₹12-15 LPA",
            midLevel: "₹20-30 LPA",
            seniorLevel: "₹40-60+ LPA"
          }
        },
        {
          id: "banking",
          title: "Banking (PO/Clerk)",
          description: "Public and private sector banking jobs",
          duration: "6-12 months preparation",
          eligibility: "Graduate with IBPS/SBI exams",
          scope: "Bank PO, Bank Clerk, Manager",
          salary: {
            entryLevel: "₹5-8 LPA",
            midLevel: "₹10-20 LPA",
            seniorLevel: "₹25-45 LPA"
          }
        },
        {
          id: "ssc",
          title: "SSC (Staff Selection Commission)",
          description: "Central government jobs in various departments",
          duration: "6-12 months preparation",
          eligibility: "Graduate",
          scope: "Central Government Officer, Inspector, Assistant",
          salary: {
            entryLevel: "₹5-9 LPA",
            midLevel: "₹10-22 LPA",
            seniorLevel: "₹25-50 LPA"
          }
        }
      ]
    },
    {
      id: "private-sector",
      title: "Private Sector",
      description: "Corporate and industry jobs",
      options: [
        {
          id: "it-services",
          title: "IT Services",
          description: "Software development and IT consulting",
          duration: "Immediate after graduation",
          eligibility: "Graduate with relevant skills",
          scope: "Software Developer, Consultant, Analyst",
          salary: {
            entryLevel: "₹4-10 LPA",
            midLevel: "₹12-30 LPA",
            seniorLevel: "₹35-70+ LPA"
          }
        },
        {
          id: "finance",
          title: "Finance & Banking",
          description: "Financial services and banking sector",
          duration: "Immediate after graduation",
          eligibility: "Graduate with Commerce/Finance background",
          scope: "Financial Analyst, Investment Banker, Risk Manager",
          salary: {
            entryLevel: "₹5-12 LPA",
            midLevel: "₹15-35 LPA",
            seniorLevel: "₹40-80+ LPA"
          }
        },
        {
          id: "marketing",
          title: "Marketing & Sales",
          description: "Marketing, advertising, and sales roles",
          duration: "Immediate after graduation",
          eligibility: "Graduate with communication skills",
          scope: "Marketing Manager, Sales Executive, Brand Manager",
          salary: {
            entryLevel: "₹4-9 LPA",
            midLevel: "₹10-25 LPA",
            seniorLevel: "₹30-60 LPA"
          }
        }
      ]
    }
  ]
};

// Data for After Graduation
export const afterGraduationData: EducationStage = {
  id: "after-graduation",
  title: "Career Options After Graduation",
  description: "Advanced career paths and specializations",
  branches: [
    {
      id: "phd",
      title: "PhD / Research",
      description: "Doctoral studies and research careers",
      options: [
        {
          id: "phd-science",
          title: "PhD in Science",
          description: "Doctoral research in scientific fields",
          duration: "4-6 years",
          eligibility: "Master's degree with NET/GATE",
          scope: "Research Scientist, Professor, R&D Head",
          salary: {
            entryLevel: "₹8-12 LPA",
            midLevel: "₹15-30 LPA",
            seniorLevel: "₹40-80+ LPA"
          }
        },
        {
          id: "phd-engineering",
          title: "PhD in Engineering",
          description: "Doctoral research in engineering and technology",
          duration: "4-6 years",
          eligibility: "M.Tech with GATE/UGC-NET",
          scope: "Research Engineer, Professor, Technology Consultant",
          salary: {
            entryLevel: "₹12-20 LPA",
            midLevel: "₹25-50 LPA",
            seniorLevel: "₹60-120+ LPA"
          }
        }
      ]
    },
    {
      id: "specialized-masters",
      title: "Specialized Master's",
      description: "Niche postgraduate programs",
      options: [
        {
          id: "ms-data-science",
          title: "MS in Data Science",
          description: "Advanced data science and machine learning",
          duration: "1-2 years",
          eligibility: "Bachelor's in CS/Stats/Maths",
          scope: "Senior Data Scientist, ML Lead, AI Researcher",
          salary: {
            entryLevel: "₹15-25 LPA",
            midLevel: "₹30-60 LPA",
            seniorLevel: "₹70-150+ LPA"
          }
        },
        {
          id: "ms-finance",
          title: "MS in Finance",
          description: "Advanced financial studies and analysis",
          duration: "1-2 years",
          eligibility: "Bachelor's with strong maths",
          scope: "Investment Banker, Quant Analyst, Portfolio Manager",
          salary: {
            entryLevel: "₹15-30 LPA",
            midLevel: "₹40-80 LPA",
            seniorLevel: "₹100-200+ LPA"
          }
        }
      ]
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      description: "Starting your own business or venture",
      options: [
        {
          id: "startup-founder",
          title: "Startup Founder",
          description: "Build and scale your own startup",
          duration: "Ongoing",
          eligibility: "Graduate with business idea",
          scope: "Founder, CEO, Business Owner",
          salary: {
            entryLevel: "Variable",
            midLevel: "Variable",
            seniorLevel: "Unlimited potential"
          }
        },
        {
          id: "consulting",
          title: "Independent Consulting",
          description: "Provide specialized consulting services",
          duration: "Ongoing",
          eligibility: "Industry expertise and network",
          scope: "Consultant, Advisor, Subject Matter Expert",
          salary: {
            entryLevel: "₹10-20 LPA",
            midLevel: "₹25-50 LPA",
            seniorLevel: "₹50-100+ LPA"
          }
        }
      ]
    }
  ]
};

// Data for Exams
export const examsData: Exam[] = [
  {
    id: "jee-main",
    name: "JEE Main",
    description: "Joint Entrance Examination for engineering admissions",
    eligibility: "12th Science with Maths (Physics, Chemistry, Maths)",
    examDate: "January and April sessions",
    applicationDeadline: "November (Jan session), March (April session)",
    website: "https://jeemain.nta.nic.in",
    tips: [
      "Start preparation early, ideally from 11th grade",
      "Focus on conceptual understanding over rote learning",
      "Practice previous year papers regularly",
      "Take mock tests to improve time management",
      "Strengthen weak areas identified through mock tests"
    ]
  },
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    description: "Advanced level JEE for IIT admissions",
    eligibility: "Top 2.5 lakh rankers in JEE Main",
    examDate: "June",
    applicationDeadline: "May",
    website: "https://jeeadv.ac.in",
    tips: [
      "Requires deeper conceptual understanding than JEE Main",
      "Practice advanced level problems",
      "Focus on problem-solving speed and accuracy",
      "Join coaching or study groups for advanced topics",
      "Maintain consistency in preparation"
    ]
  },
  {
    id: "neet",
    name: "NEET",
    description: "National Eligibility cum Entrance Test for medical admissions",
    eligibility: "12th Science with Biology (Physics, Chemistry, Biology)",
    examDate: "May",
    applicationDeadline: "December-January",
    website: "https://neet.nta.nic.in",
    tips: [
      "NCERT books are essential for Biology",
      "Practice diagrams and labeling extensively",
      "Chemistry requires both theory and numerical practice",
      "Physics needs strong conceptual foundation",
      "Take regular mock tests to assess preparation"
    ]
  },
  {
    id: "cat",
    name: "CAT",
    description: "Common Admission Test for MBA admissions",
    eligibility: "Bachelor's degree with minimum 50% marks",
    examDate: "November",
    applicationDeadline: "August-September",
    website: "https://iimcat.ac.in",
    tips: [
      "Focus on time management during the exam",
      "Practice reading comprehension extensively",
      "Strengthen quantitative aptitude basics",
      "Work on logical reasoning and data interpretation",
      "Take sectional and full-length mock tests"
    ]
  },
  {
    id: "gate",
    name: "GATE",
    description: "Graduate Aptitude Test in Engineering for M.Tech and PSU jobs",
    eligibility: "Bachelor's degree in Engineering/Technology",
    examDate: "February",
    applicationDeadline: "September-October",
    website: "https://gate.iitk.ac.in",
    tips: [
      "Choose your subject carefully based on graduation",
      "Focus on core concepts and numerical problems",
      "Practice previous year GATE papers",
      "Revise engineering mathematics thoroughly",
      "Maintain formula sheets for quick reference"
    ]
  },
  {
    id: "upsc-cse",
    name: "UPSC Civil Services Examination",
    description: "Prestigious exam for IAS, IPS, IFS and other central services",
    eligibility: "Bachelor's degree from recognized university",
    examDate: "Prelims: June, Mains: September-October",
    applicationDeadline: "February-March",
    website: "https://upsc.gov.in",
    tips: [
      "Comprehensive study of NCERT books for basics",
      "Read newspapers daily for current affairs",
      "Focus on optional subject selection",
      "Practice answer writing for Mains",
      "Take mock interviews for personality test preparation"
    ]
  },
  {
    id: "clat",
    name: "CLAT",
    description: "Common Law Admission Test for law admissions",
    eligibility: "12th pass (45% for UG) or LLB graduate (50% for PG)",
    examDate: "December",
    applicationDeadline: "August-October",
    website: "https://consortiumofnlus.ac.in",
    tips: [
      "Practice reading comprehension and legal reasoning",
      "Stay updated with current affairs and legal news",
      "Work on logical reasoning and analytical skills",
      "Practice quantitative techniques regularly",
      "Take mock tests to improve speed and accuracy"
    ]
  },
  {
    id: "ibps-po",
    name: "IBPS PO",
    description: "Probationary Officer exam for public sector banks",
    eligibility: "Bachelor's degree in any discipline",
    examDate: "October-November",
    applicationDeadline: "August-September",
    website: "https://ibps.in",
    tips: [
      "Focus on banking awareness and financial terms",
      "Practice quantitative aptitude and reasoning",
      "Work on English language skills",
      "Practice computer knowledge basics",
      "Take mock tests to improve speed"
    ]
  }
];

// Export all data
export const careerPathsData = {
  after10th: after10thData,
  after12th: after12thData,
  graduation: graduationData,
  afterGraduation: afterGraduationData,
  exams: examsData
};
