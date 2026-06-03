# What's Next? — Career Guidance Platform

A modern, responsive web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** to help students in India choose the right academic and career paths after completing their 10th grade, 12th grade, or graduation.

## 🚀 Features

- **Personalized Streams Guide**: Comprehensive roadmaps and streams tailored for:
  - **After 10th**: Intermediate (MPC, BiPC, Commerce, Arts), Polytechnic, ITI, Paramedical, etc.
  - **After 12th**: Engineering, Medical, Arts & Science degrees, Professional courses (CA, CS), Defense (NDA).
  - **Graduation & After**: Postgraduate courses, civil services, corporate research, and entrepreneurship.
- **Interactive Career Map**: Visual representation of steps, options, and duration for each career path.
- **College Rankings & Details**: Filterable, searchable table of top colleges, key parameters, fee structures, and average placements.
- **Stream/Career Comparison Tool**: Side-by-side comparison of different pathways to evaluate difficulty, duration, job prospects, and average salary.
- **Entrance Examinations Tracker**: Exhaustive guide to major Indian entrance exams (JEE, NEET, CLAT, CAT, UPSC, etc.) with dates, eligibility, and links.
- **Student Success Stories**: Real-world profiles and testimonials to inspire and guide.
- **Live Search**: Fast, client-side global search querying across all career opportunities and exams.
- **Dynamic Dark/Light Mode**: Smooth, accessible theme toggle implemented via React Context API.
- **Feedback & Support System**: Dynamic user feedback portal with form validation.

## 🛠️ Technology Stack

- **Frontend Core**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: React Icons (lucide-react or similar inline SVG components)

## 📁 Directory Structure

```text
├── dist/                   # Production build outputs
├── src/
│   ├── components/         # Shared and modular UI components
│   │   ├── CareerMap.tsx        # Career map visualizer
│   │   ├── CollegeRankings.tsx  # Rankings table & filters
│   │   ├── ComparisonTool.tsx   # Course side-by-side comparison
│   │   ├── FeedbackSystem.tsx   # Feedback form component
│   │   ├── Layout.tsx           # Global Shell (Header, Navigation, Footer)
│   │   ├── Search.tsx           # Global search input & results
│   │   ├── SuccessStories.tsx   # Success stories layout
│   │   └── ThemeToggle.tsx      # Light/Dark mode switcher
│   ├── contexts/           # React Context definitions
│   │   └── ThemeContext.tsx     # Theme state management (light/dark)
│   ├── data/               # Static dataset
│   │   └── careerPaths.ts       # Central source of truth for careers & exams data
│   ├── pages/              # Page level routes
│   │   ├── After10th.tsx
│   │   ├── After12th.tsx
│   │   ├── AfterGraduation.tsx
│   │   ├── Compare.tsx
│   │   ├── Exams.tsx
│   │   ├── Feedback.tsx
│   │   ├── Graduation.tsx
│   │   └── Home.tsx
│   ├── App.tsx             # Main routes declaration
│   ├── index.css           # Tailwind base styles and overrides
│   └── main.tsx            # Application entry point
├── index.html              # Main HTML entry point
├── package.json            # NPM scripts and dependencies
├── tailwind.config.js      # Tailwind configurations
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## ⚙️ Getting Started & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Setup Instructions
1. Clone this repository (or navigate to this directory in your terminal).
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Run the development server locally:
   ```bash
   npm run dev
   ```
4. Access the web app in your browser at `http://localhost:5173`.

### Production Build
To create a production-ready build of the application:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, which can be deployed to static hosting providers (Netlify, Vercel, GitHub Pages, etc.).
