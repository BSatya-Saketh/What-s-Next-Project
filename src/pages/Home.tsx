import CareerMap from '../components/CareerMap'
import SuccessStories from '../components/SuccessStories'

const Home = () => {
  return (
    <div className="space-y-5">
      <CareerMap />

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Welcome to Career Guidance</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Making the right educational and career choices is crucial for your future success. This comprehensive guide helps you navigate the various paths available at different stages of your academic journey.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">Choose a path based on your education level to explore available opportunities:</p>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">After 10th Grade</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          The completion of 10th grade marks your first major educational milestone. The choices you make at this stage can significantly influence your future career path.
        </p>
        <p className="font-bold mb-3">Key Streams Available:</p>
        <ul className="text-left list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Intermediate/Higher Secondary:</strong> Science (MPC/BiPC), Commerce, Arts</li>
          <li><strong>Polytechnic Diploma:</strong> Engineering and technical fields</li>
          <li><strong>ITI (Industrial Training Institute):</strong> Vocational and skill-based training</li>
          <li><strong>Paramedical Courses:</strong> Healthcare support roles</li>
          <li><strong>Short-term Courses:</strong> Computer applications, design, and more</li>
        </ul>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">After 12th Grade</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Completing 12th grade opens up numerous specialized educational pathways based on your chosen stream in 11th and 12th.
        </p>
        <p className="font-bold mb-3">Key Streams Available:</p>
        <ul className="text-left list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Engineering:</strong> Various branches including CSE, IT, ECE, Mechanical, and more</li>
          <li><strong>Medical:</strong> MBBS, BDS, BAMS, B.Pharma, Nursing, and allied health sciences</li>
          <li><strong>Degree Programs:</strong> BA, BSc, BCom, BBA, LLB</li>
          <li><strong>Professional Courses:</strong> CA, CS, ICWA</li>
          <li><strong>Defense:</strong> NDA and other military academies</li>
          <li><strong>Teaching:</strong> D.Ed and other education diplomas</li>
        </ul>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Graduation Streams</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Choosing the right graduation program is a crucial decision that shapes your academic foundation and future career prospects.
        </p>
        <p className="font-bold mb-3">Major Graduation Streams:</p>
        <ul className="text-left list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Arts & Humanities:</strong> Literature, History, Psychology, Sociology, Philosophy</li>
          <li><strong>Commerce & Management:</strong> Accounting, Finance, Business Administration, Economics</li>
          <li><strong>Science:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science</li>
          <li><strong>Engineering:</strong> Various engineering disciplines and technology programs</li>
          <li><strong>Medicine:</strong> Medical, Dental, Pharmacy, and allied health sciences</li>
          <li><strong>Law:</strong> Legal studies and specializations</li>
        </ul>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">After Graduation</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          A bachelor's degree equips you with specialized knowledge and opens doors to advanced studies or professional careers.
        </p>
        <p className="font-bold mb-3">Key Paths Available:</p>
        <ul className="text-left list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Post-Graduate Studies:</strong> Master's degrees (MA, MSc, MCom, MBA, MTech, etc.)</li>
          <li><strong>Professional Practice:</strong> Starting your career in your field of study</li>
          <li><strong>Research:</strong> PhD and research fellowships</li>
          <li><strong>Civil Services:</strong> Administrative and government positions</li>
          <li><strong>Entrepreneurship:</strong> Starting your own business venture</li>
        </ul>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Entrance Examinations</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Many prestigious institutions and programs require qualifying entrance examinations. Preparation for these exams requires dedicated effort and strategic planning.
        </p>
        <p className="font-bold mb-3">Major Entrance Exams:</p>
        <ul className="text-left list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Engineering:</strong> JEE Main, JEE Advanced, BITSAT, state-level engineering exams</li>
          <li><strong>Medical:</strong> NEET, AIIMS, JIPMER</li>
          <li><strong>Law:</strong> CLAT, LSAT</li>
          <li><strong>Management:</strong> CAT, XAT, MAT, GMAT</li>
          <li><strong>Civil Services:</strong> UPSC, state-level civil service exams</li>
        </ul>
      </section>

      <SuccessStories />
    </div>
  )
}

export default Home
